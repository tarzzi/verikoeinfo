import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/values"
import Info from "../components/info"

export default function Maksa() {
  return (
    <Layout>
      <div className='my-8 mx-2 p-5 text-2xl shadow-md'>
        <Title>Maksakokeet</Title>
        <Info>Maksatutkimuksilla mitataan maksan toimintakykyä, etenkin maksasairauksien seurannan vuoksi.</Info>
      </div>
      <Grid>
        <Card>
          <Ctitle>P-ALAT | Alaniiniaminotransferaasi</Ctitle>
          <Values>
            Lapset, 0 - 16 v	alle 40	U/l<br />
            Miehet, alkaen 17 v	alle 50	U/l<br />
            Naiset, alkaen 17 v	alle 35	U/l<br />
          </Values>
        </Card>
        <Card>
          <Ctitle>P-AFOS | Alkalinen fosfataasi</Ctitle>
          <Values>
            Yli 18v: 35 - 105 U/l
          </Values>
        </Card>
        <Card className="my-8 mx-2">
          <Ctitle>P-ASAT | Aspartaattiaminotransferaasi</Ctitle>
          <Values>
            Lapset, alle 1 kk	alle 80	U/l<br />
            Lapset, 1 kk - 16 v	alle 50	U/l<br />
            17 v	15 - 35	U/l<br /><br />
            Miehet, alkaen 18 v	15 - 45	U/l<br />
            Naiset, alkaen 18 v	15 - 35	U/l<br />
          </Values>
        </Card>
        <Card className="my-8 mx-2">
          <Ctitle>S-GT | Glutamyylitransferaasi</Ctitle>
          <Values>
            Lapset, alle 1 kk	alle 300	U/l<br />
            1 kk - 16 v	alle 50	U/l<br /><br />
            Miehet, alkaen 17 v	alle 60	U/l<br />
            Naiset, alkaen 17 v	alle 40	U/l<br />

          </Values>
        </Card>
        <Card className="my-8 mx-2">
          <Ctitle>BIL | Bilirubiini</Ctitle>
          <Values>
            0 - 1 vrk	alle 100	µmol/l<br />
            2 - 6 vrk	alle 200	µmol/l<br />
            7 - 20 vrk	alle 100	µmol/l<br />
            21 - 30 vrk	alle 50	µmol/l<br /><br />
            1 kk ->	alle 20	µmol/l
          </Values>
        </Card>
      </Grid>
    </Layout>
  );
}