import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/values"

export default function Rasva() {
  return (
    <Layout>
      <Title>Rasvakokeet</Title>

      <Grid>
        <Card>
          <Ctitle>fS-KOL | Kolesteroli</Ctitle>
          <Values>
            Aikuisilla tavoite alle 5.0 mmol/l
          </Values>
        </Card>
        <Card>
          <Ctitle>fS-HDL</Ctitle>
          <Values>
            Naiset:  >1.20 mmol/l<br />
            Miehet: >1,0 mmol/l
          </Values>
        </Card>
        <Card>
          <Ctitle>fS-LDL</Ctitle>
          <Values>
            Kaikki: Alle 3.00 mmol/l
          </Values>
        </Card>
        <Card>
          <Ctitle>fS-TRIGLY</Ctitle>
          <Values>
            Kaikki: Alle 1.70 mmol/l
          </Values>
        </Card>
      </Grid>
    </Layout>
  );
}