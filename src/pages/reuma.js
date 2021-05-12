import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/values"
import Info from "../components/info"

export default function Reuma() {
  return (
    <Layout>
      <div className='my-8 mx-2 p-5 text-2xl shadow-md'>
        <Title>Reumakokeet</Title>
        <Info>
        Reumakokeilla tutkitaan reumasairauksien aiheuttamien vasta-aineiden määrää.
        </Info>
      </div>
      <Grid>
        <Card>
          <Ctitle>P-RF | Reumafaktori</Ctitle>
          <Values>
            Kaikki: 0 - 14	IU/ml<br />
            Lievästi kohonnut: yli 30 IU/ml<br />
            Selvästi kohonnut: yli 60 IU/ml
          </Values>
        </Card>
        <Card>
          <Ctitle>CCPAb | Sitrulliinivasta-aineet</Ctitle>
          <Values>
            Kaikki: alle 7 U/ml<br />
            Raja-arvo: 7–10 U/ml<br />
            Lievästi kohonnut:  11–30 U/ml<br />
            Selvästi kohonnut: yli 30 U/l
          </Values>
        </Card>
      </Grid>
    </Layout>
  );
}