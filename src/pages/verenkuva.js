import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"

export default function Verenkuva() {
  return (
    <Layout>
      <h1>Verenkuvan tutkimukset</h1>
      <Grid>
        <Card>
          <h1>B-Hb | hemoglobiini</h1>
          <p>Viitearvot
            Miehet: 134–167 g/l
            Naiset: 117–155 g/l
            Lasten viitearvot vaihtelevat iän mukaan.
            Vastasyntynyt: 170-200 g/l
            2-3kk: 110-120 g/l
            7v: 130-140 g/l</p>
        </Card>
        <Card>
          <h1> B-Hkr | hematokriitti</h1>
          <p>
            Viitearvot:
            Miehet: 39–50 %
            Naiset: 35–46 %
          </p>
        </Card>
        <Card>
          <h1> B-Eryt | erytrosyytit eli punasolut</h1>
          <p>
            Viitearvot:
            Miehet: 4,25–5,70 x E12/l
            Naiset: 3,90–5,20 x E12/l
          </p>
        </Card>
        <Card>
          <h1> B-Leuk | leukosyytit eli valkosolut</h1>
          <p>Viitearvo:
          Aikuisille: 3.4–8.2 E9/l</p>
        </Card>
        <Card>
          <h1>E-MCH | punasolujen hemoglobiinin massa</h1>
          <p>Viitearvo:
            27-33 pg/punasolu</p>
        </Card>
        <Card>
          <h1>E-MCHC | punasolujen massakonsentraatio</h1>
          <p>
            Viitearvo:
            320-355 g/l
          </p>
        </Card>
        <Card>
          <h1>E-MCV | punasolujen keskitilavuus </h1>
          <p>82-98 fl</p>
        </Card>
      </Grid>
    </Layout>
  );
}