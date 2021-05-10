import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/Values"

export default function Sokeri() {
  return (
    <Layout>
      <Title>Sokerikokeet (GLUK, GLUK-rasitus, GHBA1C)</Title>
      <Grid>
        <Card>
          <Ctitle>GLUK</Ctitle>
          <Values>

          </Values>
        </Card>
        <Card>
          <Ctitle>GLUK-rasitus</Ctitle>
          <Values>

          </Values>
        </Card>
        <Card>
          <Ctitle>GHBA1C</Ctitle>
          <Values>

          </Values>
        </Card>
      </Grid>
    </Layout>
  );
}