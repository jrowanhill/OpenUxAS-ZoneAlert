
#include "BoundedZone.h"
#include "Polygon.h"
#include "RoutePlannerVisibilityService.h"

BoundedZone::BoundedZone(const std::shared_ptr<afrl::cmasi::KeepInZone> &keepInZone) : BoundedZone(keepInZone, true) {};


BoundedZone::BoundedZone(const std::shared_ptr<afrl::cmasi::KeepOutZone> & keepOutZone) : BoundedZone(keepOutZone, false) {};


BoundedZone::BoundedZone(const std::shared_ptr<afrl::cmasi::AbstractZone> & abstractZoneInput, bool isKeepIn)
{
    // store the abstract zone and whether it is keep in
    abstractZone = *abstractZoneInput;
    keepIn = isKeepIn;

    // And call function on RoutePlannerVisibility Service to convert zone geometry to flat earch x-y-z coordinates
    bool isSuccess = RoutePlannerVisibilityService::bFindPointsForAbstractGeometry(abstractZone->getBoundary(), boundaryPoints);

    if (isSuccess)
    {
        // store the XY-plane polygonal boundary of the zone
        // CBoundary(const uint32_t& uiLocalID,const bool& bKeepInZone,const V_POSITION_t& vposBoundaryPoints_m,const afrl::cmasi::AbstractZone& cmasiAbstractZone)
        xyBoundaryPtr = new CBoundary(abstractZone->getZoneID(), isKeepIn, boundaryPoints, *abstractZone);

        // Create a Polygon
        xyPolygonPtr = new CPolygon(abstractZone->getZone());

        // And update its values using this convoluted non-object oriented approach of other code
        xyPolygonPtr->plytypGetPolygonType().bGetKeepIn() = keepIn;
        xyPolygonPtr->dGetPolygonExpansionDistance() = abstractZone->getPadding();
        
        // polygons store indeces to their external boundary points
        for (int index = 0; index < xyBoundaryPtr->getBoundaryPoints().size(); index++) {
            xyPolygonPtr->viGetVerticies().push_back(index);
        }

        // attempt to 'finalize' the polygon 
        if (xyPolygonPtr->errFinalizePolygon(xyBoundaryPtr->getBoundaryPoints()) == CPolygon::errNoError) {
            isValid = true;
        }
        else {
            isValid = false;
        }


        // grow or shrink the polygon per the logic allowed by CPolygon
        // TODO assure this replicates the logic of VisibilityRoutePlanner
\
        // TODO: I thought CPolygon would make this trivial but the constructors are wonky

        // shrink/grow the boundary 

        // calculate and store the bounding box on the boundary

        isValid = true;


                CPolygon cPolygon(iUniqueID);
                cPolygon.plytypGetPolygonType().bGetKeepIn() = bKeepInZone;
                cPolygon.dGetPolygonExpansionDistance() = dPolygonExpansionDistance;
                for (; itBegin != itEnd; itBegin++) {
                    vposGetVerticiesBase().push_back(*itBegin);
                    cPolygon.viGetVerticies().push_back(static_cast<int> (vposGetVerticiesBase().size()) - 1);
                }
                if (cPolygon.errFinalizePolygon(vposGetVerticiesBase()) == CPolygon::errNoError) {
                    vplygnGetPolygons().push_back(cPolygon);
                } else {
                    errReturn = errPolygonCreation;
                }


    }
    else 
    {
        std::cout << "\tERROR :: Bounded Zone Could Not Convert Zone Declaration into Polygonal Representation." 
        << std::endl;
        isValid = false;
    }


}

void BoundedZone::pad() {

        enError errReturn(errNoError);
        
        if(!vplygnGetPolygons().empty())
        {
        
        unsigned int k;

        std::vector< VisiLibity::Polygon > expandList;
        std::vector< double > expandValues;
        std::vector< VisiLibity::Polygon > shrinkList;
        std::vector< double > shrinkValues;

        // translate to VisiLibity data structure
        for (V_POLYGON_IT_t itPolygon = vplygnGetPolygons().begin(); itPolygon != vplygnGetPolygons().end(); itPolygon++)
        {
            std::vector< VisiLibity::Point > polygonVertices;
            for (auto itVertex = itPolygon->m_viVerticies.begin(); itVertex != itPolygon->m_viVerticies.end(); itVertex++)
                polygonVertices.push_back(VisiLibity::Point(vposGetVerticiesBase()[*itVertex].m_east_m, vposGetVerticiesBase()[*itVertex].m_north_m));
            VisiLibity::Polygon poly(polygonVertices);

            // remove excess points
            poly.eliminate_redundant_vertices(1.0);

            double epsilon(1e-8);
            // ensure that the polygon is simple
            if (!poly.is_simple(epsilon))
                return (errPolygonCreation);

            // ensure that the polygon is properly oriented
            if (poly.area() < 0)
                poly.reverse();

            if (itPolygon->plytypGetPolygonType().bGetKeepIn())
            {
                shrinkList.push_back(poly);
                double dPolygonExpansionDistance(0.0); //no expansion or shrinking
                shrinkValues.push_back(dPolygonExpansionDistance);
            }
            else
            {
                // keep out boundary
                expandList.push_back(poly);
                double dPolygonExpansionDistance(0.0);
                dPolygonExpansionDistance = (itPolygon->dGetPolygonExpansionDistance() < 0.0) ? (0.0) : (itPolygon->dGetPolygonExpansionDistance()); // don't let it shrink!
                expandValues.push_back(dPolygonExpansionDistance);
            }
        }

        // expand polygons
        std::vector< VisiLibity::Polygon > expandedPolygons;
        if (!VisiLibity::Polygon::offset_polygons(expandList, expandedPolygons, expandValues, 1e-8))
            return (errPolygonMerging);
        for (k = 0; k < expandedPolygons.size(); k++)
            expandedPolygons[k].eliminate_redundant_vertices(1.0);

        // shrink polygons
        std::vector< VisiLibity::Polygon > shrunkenPolygons;
        if (!VisiLibity::Polygon::offset_polygons(shrinkList, shrunkenPolygons, shrinkValues, 1e-8))
            return (errPolygonMerging);
        for (k = 0; k < shrunkenPolygons.size(); k++)
            shrunkenPolygons[k].eliminate_redundant_vertices(1.0);

        // clear out all the polygons that existed before the merge
        vposGetVerticiesBase().clear();
        vplygnGetPolygons().clear();

        // translate back from VisiLibity data structure
        for (k = 0; k < shrunkenPolygons.size(); k++)
        {
            if (fabs(shrunkenPolygons[k].area()) > 1.0)
            {
                CPolygon cPolygon(vplygnGetPolygons().size() + 1);
                cPolygon.plytypGetPolygonType().bGetKeepIn() = true;
                for (unsigned int n = 0; n < shrunkenPolygons[k].n(); n++)
                {
                    cPolygon.viGetVerticies().push_back(vposGetVerticiesBase().size());
                    vposGetVerticiesBase().push_back(CPosition(shrunkenPolygons[k][n].y(), shrunkenPolygons[k][n].x()));
                }
                vplygnGetPolygons().push_back(cPolygon);
            }
        }

        for (k = 0; k < expandedPolygons.size(); k++)
        {
            if (fabs(expandedPolygons[k].area()) > 1.0)
            {
                CPolygon cPolygon(vplygnGetPolygons().size() + 1);
                cPolygon.plytypGetPolygonType().bGetKeepIn() = false;
                for (unsigned int n = 0; n < expandedPolygons[k].n(); n++)
                {
                    cPolygon.viGetVerticies().push_back(vposGetVerticiesBase().size());
                    vposGetVerticiesBase().push_back(CPosition(expandedPolygons[k][n].y(), expandedPolygons[k][n].x()));
                }
                vplygnGetPolygons().push_back(cPolygon);
            }
        }

        }       //if(!vplygnGetPolygons().empty())
        return (errReturn);


}
