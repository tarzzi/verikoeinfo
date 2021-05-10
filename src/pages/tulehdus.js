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
      <Title>Tulehduskokeet (CRP ja LA)</Title>
      <Grid>
        <Card>
          <Ctitle>CRP</Ctitle>
          <Values>

          </Values>
        </Card>
        <Card>
          <Ctitle>LA</Ctitle>
          <Values>

          </Values>
        </Card>

      </Grid>
    </Layout>
  );
}