import React from "react"
import Layout from "../components/layout"

export default function Rasva() {
  return (
    <Layout>
      <h1>Rasvakokeet (LIPIDIT, KOL, HDL, LDL, TRIGLY)</h1>
      <p>


        Näiden kokeiden lyhenteet ovat fS-KOL, fS-HDL, fS-LDL ja fS-TRIGLY.
        Rasvakokeita eli nk. lipiditutkimuksia ovat KOL, HDL, LDL ja triglyseridit. Lipidinäytteet suositellaan otettaviksi 10-12 t:n paaston jälkeen. Ateria vaikuttaa kokonaiskolesteroliin vain vähän, mutta triglyseridiarvoihin huomattavasti.

        Suurina määrinä kolesteroli on riskitekijä sydän- ja verisuonisairauksiin liittyen. Kolesterolia on lähes kaikissa soluissa ja kehon nesteissä. Kolesterolia tarvitaan solukalvojen ja sappiyhdisteiden valmistukseen ja lisäksi se on mm. steroidihormonien ja D-vitamiinin esiaste. Osa kehon kolesterolista saadaan ruoasta, mutta suurin osa syntesoidaan maksassa ja muissa kudoksissa.

        Kokonaiskolesterolin määritys KOL, mittaa kaiken seerumista/plasmasta löytyvän kolesterolin, mutta se ei mitenkään erittele hyvää ja pahaa kolesterolia. Usein samalla tutkimuskerralla määritetäänkin myös LDL-, HDL- ja triglyseridiarvot.

        ”Huono kolesteroli” eli LDL kuljettaa kolesterolia kudoksiin, myös valtimoiden seinämään. Mitä suurempi LDL -kolesterolin määrä on, sitä enemmän kolesterolia kudoksiin kertyy. LDL -kolesteroli kuvastaakin yleensä paremmin valtimokovettumataudin vaaraa kuin kokonaiskolesteroli.

        ”Hyvä kolesteroli” eli HDL kuljettaa kolesterolia pois kudoksista, myös valtimoiden seinämästä. Tämä on luonnollisesti hyödyllistä ja korkea HDL -kolesterolin pitoisuus on valtimosairauksien ehkäisyn kannalta hyväksi. Jos pitoisuus on pieni, valtimosairauksien vaara suurenee.

        Triglyseridit ovat merkittävä energian varalähde elimistössä. Jos verenkierrossa on liikaa triglyseridejä, osa niistä tallennetaan rasvakudokseen. Kohonnut triglyseridien ja LDL -kolesterolipitoisuus viittaa kohonneeseen sydän- ja verisuonitautien riskiin.
      </p>

      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 justify-center my-5'>
        <div className="">
          <h1>fS-LIPIDIT | Veren</h1>
          <p> <br />

          </p>
        </div>
        <div className="">
          <h1>fS-KOL | Kolesteroli</h1>
          <p> <br />

          </p>
        </div>
        <div className="">
          <h1>fS-HDL</h1>
          <p> <br />

          </p>
        </div>
        <div className="">
          <h1>fS-LDL</h1>
          <p> <br />

          </p>
        </div>
        <div className="">
          <h1>fS-TRIGLY</h1>
          <p> <br />

          </p>
        </div>
      </div>

    </Layout>
  );
}