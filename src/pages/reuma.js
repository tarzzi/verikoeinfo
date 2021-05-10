import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/Values"

export default function Reuma() {
  return (
    <Layout>
      <Title>Reumakokeet</Title>
      <Grid>
        <Card>
          <Ctitle>P-RF</Ctitle>
          <Values></Values>
        </Card>
        <Card>
          <Ctitle>CCPAb</Ctitle>
          <Values></Values>

        </Card>
      </Grid>

    </Layout>
  );
}