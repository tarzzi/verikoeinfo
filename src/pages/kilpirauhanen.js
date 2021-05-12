import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/values"
import Info from "../components/info"

export default function Kilpirauha() {
  return (
    <Layout>
      <div className='my-8 mx-2 p-5 text-2xl shadow-md'>
        <Title className='text-center'>Kilpirauhaskokeet</Title>
        <Info>Kilpirauhasen tuottama tyroksiinihormoni on ihmiselle välttämätön aineenvaihduntaa säätelevä hormoni.<br />
          Kilpirauhasen toimintahäiriötä epäillessä, tehdään kilpirauhastutkimukset.</Info>
      </div>
      <Grid>
        <Card>
          <Ctitle>S-TSH | Tyreotropiini </Ctitle>
          <Values>
            Lapset 2 – 11v: 0,6 – 6,3 mIU/l<br />
            Lapset 12 – 17v: 0,5 – 4,9 mIU/l<br />
            Aikuiset: 0,4 – 4,0 mIU/l
          </Values>
          </Card>
        <Card>
            <Ctitle>S-T4V | Tyroksiini, vapaa</Ctitle>
          <Values>
            Kaikki: 10 – 21 pmol/l</Values>
        </Card>
        <Card>
          <Ctitle>S-T3V | Trijodityroniini, vapaa</Ctitle>
          <Values>
          Kaikki: 3,5-6,5 pmol/l</Values>
        </Card>
      </Grid>
    </Layout>
  );
}