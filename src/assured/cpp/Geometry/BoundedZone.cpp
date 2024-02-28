
#include "BoundedZone.h"

BoundedZone::BoundedZone(const std::shared_ptr<afrl::cmasi::KeepInZone> &keepInZone) : BoundedZone(keepInZone, true) {};


BoundedZone::BoundedZone(const std::shared_ptr<afrl::cmasi::KeepOutZone> & keepOutZone) : BoundedZone(keepOutZone, false) {};


BoundedZone::BoundedZone(const std::shared_ptr<afrl::cmasi::AbstractZone> & abstractZone, bool isKeepIn)
    : xyBoundary(abstractZone->getZone())
{

    // record id and zone type
    id = abstractZone->getZoneID();
    keepIn = isKeepIn;

    // store minimum and maximum altitude forming bottom and top of the polyhedron
    minAltitude = abstractZone->getMinAltitude();
    maxAltitude = abstractZone->getMaxAltitude();

    // store the XY-plane polygonal boundary of the zone
    // TODO: Use of getter reference here is ... unconventional but appears intended by CPolygon
    xyBoundary.dGetPolygonExpansionDistance() = abstractZone.getPadding();

    


    // TODO: I thought CPolygon would make this trivial but the constructors are wonky

    // shrink/grow the boundary 

    // calculate and store the bounding box on the boundary



}
