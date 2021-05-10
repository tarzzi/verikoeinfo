import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"

export default function Kilpirauha() {
  return (
    <Layout>
      <div className='my-8 mx-2 p-5 text-2xl'>
        <h1 className='text-center'>Kilpirauhaskokeet</h1>
      </div>
      <Grid>
        <Card>
          <h1>S-TSH | Tyreotropiini</h1>
          <p>Viitearvot<br />
            Lapset 2 – 11v: 0,6 – 6,3 mIU/l<br />
            Lapset 12 – 17v: 0,5 – 4,9 mIU/l<br />
            Aikuiset: 0,4 – 4,0 mIU/l</p>
          </Card>
        <Card>
            <h1>S-T4V | Tyroksiini, vapaa</h1>
          <p>Viitearvo<br />
            Kaikki: 10 – 21 pmol/l</p>
        </Card>
        <Card>
          <h1>S-T3V | Trijodityroniini, vapaa</h1>
          <p>Viitearvo<br />
          Kaikki: 3,5-6,5 pmol/l</p>
        </Card>
      </Grid>

    </Layout>
  );
}