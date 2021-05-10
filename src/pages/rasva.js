import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/Values"

export default function Rasva() {
  return (
    <Layout>
      <Title>Rasvakokeet</Title>

      <Grid>
        <Card>
          <Ctitle>fS-LIPIDIT | Veren</Ctitle>
          <Values> <br />

          </Values>
        </Card>
        <Card>
          <Ctitle>fS-KOL | Kolesteroli</Ctitle>
          <Values> <br />

          </Values>
        </Card>
        <Card>
          <Ctitle>fS-HDL</Ctitle>
          <Values> <br />

          </Values>
        </Card>
        <Card>
          <Ctitle>fS-LDL</Ctitle>
          <Values> <br />

          </Values>
        </Card>
        <Card>
          <Ctitle>fS-TRIGLY</Ctitle>
          <Values> <br />

          </Values>
        </Card>
      </Grid>

    </Layout>
  );
}