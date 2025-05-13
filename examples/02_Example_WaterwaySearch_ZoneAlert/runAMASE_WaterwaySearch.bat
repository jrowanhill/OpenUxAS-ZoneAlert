pushd ..\..\..\OpenAMASE\OpenAMASE
java -Xmx2048m -splash:data\amase_splash.png -cp dist\*;lib\*  avtas.app.Application --config config\ZoneAlert --scenario "..\..\OpenUxAS\examples\02_Example_WaterwaySearch\Scenario_WaterwaySearch.xml"
popd

