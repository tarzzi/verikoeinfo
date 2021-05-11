import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/values"

export default function Virtsa() {
  return (
    <Layout>
      <Title>Virtsakokeet</Title>
      <Grid>
        <Card>
            <Ctitle>U-Gluk-O</Ctitle>
            <Values> alle 3 mmol/l <br />

            </Values>
        </Card>
        <Card>
          <Ctitle>U-Leuk-O</Ctitle>
          <Values> alle 20 leuk x 106/l <br />

          </Values>
        </Card>
        <Card>
          <Ctitle>U-Prot-O</Ctitle>
          <Values> alle 0.2 g/l <br />

          </Values>
        </Card>
        <Card>
          <Ctitle>U-Hb-O</Ctitle>
          <Values>alle 10 eryt x 106/l <br />

          </Values>
        </Card>
        <Card>
          <Ctitle>U-solut</Ctitle>
          <Values>
            Erytrosyytit	alle 20 x 10^6/l<br />
            Leukosyytit	alle 10 x 10^6/l<br />
            Levyepiteelisolut	alle 10 x 10^6/l<br />
            Pienet epiteelisolut	alle 1 x 10^6/l<br />
            Lieriöt	alle 1 x 10^6/l
          </Values>
        </Card>
        <Card>
          <Ctitle>U-Bakt-Vi</Ctitle>
          <Values>Bakteeriviljelyä käytetään virtsatulehduksen diagnosointiin. <br />Tulos on joko POS (Positiivinen) tai NEG (Negatiivinen)
          </Values>
        </Card>
      </Grid>
    </Layout>
  );
}