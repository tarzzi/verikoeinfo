import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"

export default function Rasva() {
  return (
    <Layout>
      <h1>Rasvakokeet</h1>

      <Grid>
        <Card>
          <h1>fS-LIPIDIT | Veren</h1>
          <p> <br />

          </p>
        </Card>
        <Card className="">
          <h1>fS-KOL | Kolesteroli</h1>
          <p> <br />

          </p>
        </Card>
        <Card className="">
          <h1>fS-HDL</h1>
          <p> <br />

          </p>
        </Card>
        <Card className="">
          <h1>fS-LDL</h1>
          <p> <br />

          </p>
        </Card>
        <Card className="">
          <h1>fS-TRIGLY</h1>
          <p> <br />

          </p>
        </Card>
      </Grid>

    </Layout>
  );
}