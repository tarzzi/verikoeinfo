import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/Values"

export default function Munuaiset() {
  return (
    <Layout>
      <Title>Munuais- ja nestetasapainokokeet</Title>

      <Grid>
        <Card>
          <Ctitle>P-KREA | Kreatiini</Ctitle>
          <Values></Values>
        </Card>
        <Card>
          <Ctitle>U-K | Kalium</Ctitle>
          <Values></Values>
        </Card>
        <Card>
          <Ctitle>U-NA | Natrium </Ctitle>
          <Values></Values>
        </Card>
      </Grid>
    </Layout>
  );
}