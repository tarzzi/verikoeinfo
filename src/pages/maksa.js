import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"

export default function Maksa() {
  return (
    <Layout>
      <Title>Maksakokeet</Title>
      <Grid>
        <Card>
          <h1>P-ALAT | Alaniiniaminotransferaasi</h1>
          <p>
            Lapset, 0 - 16 v	alle 40	U/l<br />
            Miehet, alkaen 17 v	alle 50	U/l<br />
            Naiset, alkaen 17 v	alle 35	U/l<br />
          </p>
        </Card>
        <Card className="my-8 mx-2">
          <h1>P-ASAT | Aspartaattiaminotransferaasi</h1>
          <p>
            Lapset, alle 1 kk	alle 80	U/l<br />
            Lapset, 1 kk - 16 v	alle 50	U/l<br />
            17 v	15 - 35	U/l<br /><br />
            Miehet, alkaen 18 v	15 - 45	U/l<br />
            Naiset, alkaen 18 v	15 - 35	U/l<br />
          </p>
        </Card>
        <Card className="my-8 mx-2">
          <h1>S-GT | Glutamyylitransferaasi</h1>
          <p>
            Lapset, alle 1 kk	alle 300	U/l<br />
            1 kk - 16 v	alle 50	U/l<br /><br />
            Miehet, alkaen 17 v	alle 60	U/l<br />
            Naiset, alkaen 17 v	alle 40	U/l<br />

          </p>
        </Card>
        <Card className="my-8 mx-2">
          <h1>BIL | Bilirubiini</h1>
          <p>
            0 - 1 vrk	alle 100	µmol/l<br />
            2 - 6 vrk	alle 200	µmol/l<br />
            7 - 20 vrk	alle 100	µmol/l<br />
            21 - 30 vrk	alle 50	µmol/l<br /><br />
            1 kk ->	alle 20	µmol/l
          </p>
        </Card>
      </Grid>
    </Layout>
  );
}