var bad = [
"AmericanNews.com",
"BigAmericanNews.com",
"CapNews",
"ChristWire.org",
"CivicTribune.com",
"ClickHole.com",
"CreamBMP.com",
"DCGazette.com",
"DailyCurrant.com",
"DCClothesLine.com",
"DerfMagazine.com",
"DrudgeReport.com.co",
"DuhProgressive.com",
"EmpireNews.com",
"EnduringVision.com",
"IndecisionForever",
"MSNBC.website",
"MediaMass.net",
"NationalReport.net",
"NewsBiscuit.com",
"News-Hound.com",
"NewsMutiny.com",
"PoliticalEars.com",
"Private-eye.co.uk",
"RealNewsRightNow.com",
"RileNews.com",
"Sprotspickle.com",
"TheNewsNerd.com",
"TheUsPatriot.com",
"WitScience.org"];

var warning = [
"direttanews.it",
"newnotizie.it",              
"21stCenturyWire.com",
"ActivistPost.com",
"BeforeItsNews.com",
"BigPZone.com",
"Chronicle.su",
"CoastToCoastAM.com",
"ConsciousLifeNews.com",
"ConservativeOutfitters.com",
"ConspiracyWire",
"CountdownToZeroTime.com",
"CounterPsyOps.com",
"DailyBuzzLive.com",
"Disclose.tv",
"FPRNradio.com",
"GeoEngineeringWatch.org",
"GlobalResearch.ca",
"GovtSlaves.info",
"GulagBound.com",
"JonesReport.com",
"HangTheBankers.com",
"HumansAreFree.com",
"Infowars.com",
"IntelliHub.com",
"LewRockwell.com",
"LibertyTalk.fm",
"LibertyVideos.org",
"MegynKelly.us",
"NaturalNews.com",
"NewsWire-24.com",
"NoDisInfo.com",
"NowTheEndBegins.com",
"PakAlertPress.com",
"PoliticalBlindSpot.com",
"PrisonPlanet.com",
"PrisonPlanet.tv",
"RealFarmacy.com",
"RedFlagNews.com",
"TruthFrequencyRadio.com",
"TheDailySheeple.com",
"TheRunDownLive.com",
"UnconfirmedSources.com",
"VeteransToday.com",
"WakingUpWisconsin.com",
"WorldTruth.tv"];


var trovato=0; 
var x = document.getElementsByTagName("a");
var i;
var j;
var k;
for (i = 0; i < x.length; i++)
{
    trovato=0;
    for (j = 0; j < bad.length; j++)
    {
        if(x[i].href.includes(bad[j].toLowerCase()))
        {    	
            if(x[i].innerHTML.includes("FAKE")==false)
                {
                    x[i].innerHTML='<font style="color: #ffffff;background: #ff0000a6; font-size: 12px;font-weight: 700;padding: 2px 6px 2px 6px;border-radius: 3px;text-decoration: none;">FAKE</font>' +x[i].innerHTML;
                }
            trovato=1;
            break;
        }
    }
    if(trovato==0)
    {
        for (k = 0; k < warning.length; k++)
        {	
            if(x[i].href.includes(warning[k].toLowerCase()))
            { 	
                if(x[i].innerHTML.includes("BEAWARE")==false)
                {
                    x[i].innerHTML='<font style="color: #ffffff;background: #ffa500a6; font-size: 12px;font-weight: 700;padding: 2px 6px 2px 6px;border-radius: 3px;text-decoration: none;">BEAWARE</font>' +x[i].innerHTML;
                }
                trovato=1;
                break;
            }
        }
    }
}