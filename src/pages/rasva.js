import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"

export default function Rasva() {
  return (
    <Layout>
      <Title>Rasvakokeet</Title>

      <Grid>
        <Card>
          <h1>fS-LIPIDIT | Veren</h1>
          <p> <br />

          </p>
        </Card>
        <Card>
          <h1>fS-KOL | Kolesteroli</h1>
          <p> <br />

          </p>
        </Card>
        <Card>
          <h1>fS-HDL</h1>
          <p> <br />

          </p>
        </Card>
        <Card>
          <h1>fS-LDL</h1>
          <p> <br />

          </p>
        </Card>
        <Card>
          <h1>fS-TRIGLY</h1>
          <p> <br />

          </p>
        </Card>
      </Grid>

    </Layout>
  );
}