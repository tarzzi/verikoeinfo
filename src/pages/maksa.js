import React from "react"
import Layout from "../components/layout"

export default function Maksa() {
  return (
    <Layout>
      <h1>Maksa</h1>
      <p>
        Maksakokeilla voidaan tutkia monipuolisesti maksan sairauksia ja häiriötiloja. Yleisimmin pyydettyjä maksakokeita ovat: ALAT, ASAT, GT ja BIL.
        S-ALAT (alaniiniaminotransferaasi), jolla mitataan seerumin maksaentsyymejä. Niiden kohoaminen voi viitata maksan vaurioitumiseen, joka puolestaan voi johtua esimerkiksi lääkkeiden aiheuttamista reaktioista.
        Myös hepatiitit ja monet pahanlaatuiset kudosmuutokset näkyvät maksakokeissa. Toinen samantyyppinen koe on S-ASAT.
        S-GT on laskimoverinäyte, joka ilmaisee herkästi maksan kudosvaurioista. Se kertoo maksa-aineenvaihdunnan kautta hajoavien lääkkeiden mahdollisista sivuvaikutuksista. Runsas alkoholinkäyttö näkyy tämän arvon kohoamisena.
        ALAT -pitoisuuden määritys veriplasmasta on ensisijainen maksasoluvaurion tai -tulehduksen seulontatutkimus. ALAT -entsyymiä esiintyy erityisesti maksasoluissa, mutta pienempinä pitoisuuksina myös useissa muissa kudoksissa (lihakset, munuaiset, keuhkot, sydän).

        Aiemmin ALAT -tutkimuksen rinnalla yleisesti käytetyn ASAT -tutkimuksen käyttö on vähentynyt ja on poistumassa laboratorioiden tutkimusvalikoimasta, koska se ei kerro maksan tilanteesta tarpeeksi tarkasti. ASAT -entsyymiä esiintyy eniten sydänlihaksessa, maksassa ja luurankolihaksissa, mutta kohtalaisesti useissa muissakin kudoksissa kuten keuhkoissa, haimassa munuaisissa ja punasoluissa.

        AFOS on maksasoluissa toimiva entsyymi. Se reagoi pääasiassa sapen erityksen häiriöihin. Arvo voi nousta myös maksatulehduksissa, mutta vähäisemmässä määrin kuin ALAT. AFOS luetaan yhdeksi maksakokeeksi, mutta sillä on myös toinen maksasta täysin erillinen päämerkitys: AFOS –entsyymiä tarvitaan luun rakentamiseen.

        GT on lyhenne sanasta glutamyylitransferaasi. Se on entsyymi, jota on runsaasti maksan sappitiehyiden seinämäsoluissa. Arvo suurenee samoissa tiloissa kuin AFOS, eli maksan kasvaimien yhteydessä ja silloin, kun sapen kulku on estynyt. GT-arvo suurenee myös jonkin verran maksatulehduksissa. GT-arvon nousun yleinen syy on pitkäaikainen liiallinen alkoholinkäyttö.

        Bilirubiinia syntyy elimistössä, kun vanhentuneet punasolut hajoavat. Bilirubiiniarvo voi suurentua useilla eri mekanismeilla. Jos sapen kulku estyy, esimerkiksi sappikiven tukkiessa yhteisen sappitiehyen, bilirubiini ei pääsekään poistumaan elimistöstä. Sitä kertyy maksasoluihin, joista se joutuu palaamaan takaisin vereen, kun kulku eteenpäin on tukossa. Lisää bilirubiinia tulee joka päivä punasoluhajottamosta ja bilirubiiniarvo suurenee. Bilirubiiniarvon suurenemisen syy voi johtua myös maksasolujen vauriosta, esimerkiksi maksatulehduksen seurauksena.

      </p>
      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-center '>
        <div className="my-8 mx-2">
          <h1>P-ALAT | Alaniiniaminotransferaasi</h1>
          <p>Viitearvot:<br />

            Lapset, 0 - 16 v	alle 40	U/l<br />
            Miehet, alkaen 17 v	alle 50	U/l<br />
            Naiset, alkaen 17 v	alle 35	U/l<br />
          </p>
        </div>
        <div className="my-8 mx-2">
          <h1>P-ASAT | Aspartaattiaminotransferaasi</h1>
          <p>
            Viitearvot<br />
            Lapset, alle 1 kk	alle 80	U/l<br />
            Lapset, 1 kk - 16 v	alle 50	U/l<br />
            17 v	15 - 35	U/l<br /><br />
            Miehet, alkaen 18 v	15 - 45	U/l<br />
            Naiset, alkaen 18 v	15 - 35	U/l<br />
          </p>
        </div>
        <div className="my-8 mx-2">
          <h1>S-GT | Glutamyylitransferaasi</h1>
          <p>
            Viitearvot<br />
            Lapset, alle 1 kk	alle 300	U/l<br />
            1 kk - 16 v	alle 50	U/l<br /><br />
            Miehet, alkaen 17 v	alle 60	U/l<br />
            Naiset, alkaen 17 v	alle 40	U/l<br />

          </p>
        </div>
        <div className="my-8 mx-2">
          <h1>BIL | Bilirubiini</h1>
          <p>
            Viitearvot<br />
            0 - 1 vrk	alle 100	µmol/l<br />
            2 - 6 vrk	alle 200	µmol/l<br />
            7 - 20 vrk	alle 100	µmol/l<br />
            21 - 30 vrk	alle 50	µmol/l<br /><br />
            1 kk ->	alle 20	µmol/l
          </p>
        </div>
      </div>
    </Layout>
  );
}