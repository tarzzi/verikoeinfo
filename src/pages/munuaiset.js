import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"

export default function Munuaiset() {
  return (
    <Layout>
      <h1>Munuais- ja nestetasapainokokeet (KREA, K, NA)</h1>

      <Grid>
        <Card>
          <h1>P-KREA | Kreatiini</h1>
          <p></p>
        </Card>
        <Card className="my-8 mx-2">
          <h1>U-K | Kalium</h1>
          <p></p>
        </Card>
        <Card className="my-8 mx-2">
          <h1>U-NA | Natrium </h1>
          <p></p>
        </Card>
      </Grid>
    </Layout>
  );
}