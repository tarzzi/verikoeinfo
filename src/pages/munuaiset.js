import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/values"

export default function Munuaiset() {
  return (
    <Layout>
      <Title>Munuais- ja nestetasapainokokeet</Title>

      <Grid>
        <Card>
          <Ctitle>P-KREA | Kreatiini</Ctitle>
          <Values>
            Miehet: 60–100 µmol/l<br />
            Naiset: 50–90 µmol/l</Values>
        </Card>
        <Card>
          <Ctitle>P-K | Kalium verestä</Ctitle>
          <Values>
            3,3–4,9 mmol/l
          </Values>
        </Card>
        <Card>
          <Ctitle>dU-K | Kalium virtsasta </Ctitle>
          <Values>
            Naiset<br />
            6 - 10v	8-37 mmol/d<br />
            10-15v	18-58 mmol/d<br />
            ≥15v	25-125 mmol/d<br />
            Miehet<br />
            6-10v 17-54 mmol/d<br />
            10-15v	22-57 mmol/d<br />
            ≥15v	25-125 mmol/d<br />
          </Values>
        </Card>
        <Card>
          <Ctitle>P-NA | Natrium verestä</Ctitle>
          <Values>
            Lapset, 0 - 16v	30 - 140 mmol/l<br />
            Aikuiset, yli 16v	80 - 240 mmol/l
          </Values>
        </Card>
        <Card>
          <Ctitle>U-NA | Natrium virtsasta</Ctitle>
          <Values>
            Kaikki:	137 - 145	mmol/l
          </Values>
        </Card>
      </Grid>
    </Layout>
  );
}