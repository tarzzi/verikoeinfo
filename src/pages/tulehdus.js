import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/Values"

export default function Tulehdus() {
  return (
    <Layout>
      <Title>Tulehduskokeet</Title>
      <Grid>
        <Card>
          <Ctitle>P-CRP | Tulehdusarvo</Ctitle>
          <Values>
            Normaali: Alle 4mg/l<br />
            Pikatesti: Alle 10<br />
            Vakava infektio: yli 100
          </Values>
        </Card>
        <Card>
          <Ctitle>B-LA | Lasko </Ctitle>
          <Values>
            0–16v 1–15 mm/h<br />
            <br />
            Naiset:<br />
            17–29v 20 mm/h<br />
            30–39v 25 mm/h<br />
            40–49v 25 mm/h<br />
            50–59v 30 mm/h<br />
            60–69v 35 mm/h<br />
            70–79v 40 mm/h<br />
            +80v 45 mm/h<br />
            <br />
            Miehet:<br />
            17–29v  10 mm/h<br />
            30–39v  15 mm/h<br />
            40–49v  20 mm/h<br />
            50–59v  25 mm/h<br />
            60–69v  25 mm/h<br />
            70–79v  30 mm/h<br />
            +80v    35 mm/h
          </Values>
        </Card>
      </Grid>
    </Layout>
  );
}