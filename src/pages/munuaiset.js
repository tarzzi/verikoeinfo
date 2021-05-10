import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"

export default function Munuaiset() {
  return (
    <Layout>
      <Title>Munuais- ja nestetasapainokokeet</Title>

      <Grid>
        <Card>
          <h1>P-KREA | Kreatiini</h1>
          <p></p>
        </Card>
        <Card>
          <h1>U-K | Kalium</h1>
          <p></p>
        </Card>
        <Card>
          <h1>U-NA | Natrium </h1>
          <p></p>
        </Card>
      </Grid>
    </Layout>
  );
}