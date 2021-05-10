import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"

export default function Verenkuva() {
  return (
    <Layout>
      <Title>Verenkuvan tutkimukset</Title>
      <Grid>
        <Card>
          <h1>B-Hb | hemoglobiini</h1>
          <p>
            Miehet: 134–167 g/l <br />
            Naiset: 117–155 g/l<br />
            Lasten viitearvot vaihtelevat iän mukaan.<br />
            Vastasyntynyt: 170-200 g/l<br />
            2-3kk: 110-120 g/l<br />
            7v: 130-140 g/l</p>
        </Card>
        <Card>
          <h1> B-Hkr | hematokriitti</h1>
          <p>
            Miehet: 39–50 %<br />
            Naiset: 35–46 %<br />
          </p>
        </Card>
        <Card>
          <h1> B-Eryt | erytrosyytit eli punasolut</h1>
          <p>
            Miehet: 4,25–5,70 x E12/l<br />
            Naiset: 3,90–5,20 x E12/l<br />
          </p>
        </Card>
        <Card>
          <h1> B-Leuk | leukosyytit eli valkosolut</h1>
          <p>
          Aikuisille: 3.4–8.2 E9/l</p>
        </Card>
        <Card>
          <h1>E-MCH | punasolujen hemoglobiinin massa</h1>
          <p>
            27-33 pg/punasolu</p>
        </Card>
        <Card>
          <h1>E-MCHC | punasolujen massakonsentraatio</h1>
          <p>

            320-355 g/l
          </p>
        </Card>
        <Card>
          <h1>E-MCV | punasolujen keskitilavuus </h1>
          <p>

            82-98 fl
          </p>
        </Card>
      </Grid>
    </Layout>
  );
}