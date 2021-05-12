import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/values"
import Info from "../components/info"

export default function Verenkuva() {
  return (
    <Layout>
      <div className='my-8 mx-2 p-5 text-2xl shadow-md'>
      <Title>Verenkuvan tutkimukset</Title>
      <Info>
      Perusverenkuvan tutkimuksella (B-PVK) voidaan havaita eri sairauksia tai kehon häiriöitä.
      </Info>
      </div>
      <Grid>
        <Card>
          <Ctitle>B-Hb | Hemoglobiini</Ctitle>
          <Values>
            Miehet: 134–167 g/l <br />
            Naiset: 117–155 g/l<br />
            Lasten viitearvot vaihtelevat iän mukaan.<br />
            Vastasyntynyt: 170-200 g/l<br />
            2-3kk: 110-120 g/l<br />
            7v: 130-140 g/l</Values>
        </Card>
        <Card>
          <Ctitle> B-Hkr | Hematokriitti</Ctitle>
          <Values>
            Miehet: 39–50 %<br />
            Naiset: 35–46 %<br />
          </Values>
        </Card>
        <Card>
          <Ctitle> B-Eryt | Erytrosyytit eli punasolut</Ctitle>
          <Values>
            Miehet: 4,25–5,70 x E12/l<br />
            Naiset: 3,90–5,20 x E12/l<br />
          </Values>
        </Card>
        <Card>
          <Ctitle> B-Leuk | Leukosyytit eli valkosolut</Ctitle>
          <Values>
          Aikuisille: 3.4–8.2 E9/l</Values>
        </Card>
        <Card>
          <Ctitle>E-MCH | Punasolujen hemoglobiinin massa</Ctitle>
          <Values>
            27-33 pg/punasolu</Values>
        </Card>
        <Card>
          <Ctitle>E-MCHC | Punasolujen massakonsentraatio</Ctitle>
          <Values>
           320-355 g/l
          </Values>
        </Card>
        <Card>
          <Ctitle>E-MCV | Punasolujen keskitilavuus </Ctitle>
          <Values>
            82-98 fl
          </Values>
        </Card>
      </Grid>
    </Layout>
  );
}