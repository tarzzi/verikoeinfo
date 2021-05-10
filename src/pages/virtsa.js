import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"

export default function Virtsa() {
  return (
    <Layout>
      <Title>Virtsakokeet</Title>
      <Grid>
        <Card>
            <h1>U-Gluk-O</h1>
            <p> alle 3 mmol/l <br />

            </p>
        </Card>
        <Card>
          <h1>U-Leuk-O</h1>
          <p> alle 20 leuk x 106/l <br />

          </p>
        </Card>
        <Card>
          <h1>U-Prot-O</h1>
          <p> alle 0.2 g/l <br />

          </p>
        </Card>
        <Card>
          <h1>U-Hb-O</h1>
          <p>alle 10 eryt x 106/l <br />

          </p>
        </Card>
        <Card>
          <h1>U-solut</h1>
          <p>
            Erytrosyytit	alle 20 x 10^6/l<br />
            Leukosyytit	alle 10 x 10^6/l<br />
            Levyepiteelisolut	alle 10 x 10^6/l<br />
            Pienet epiteelisolut	alle 1 x 10^6/l<br />
            Lieriöt	alle 1 x 10^6/l
          </p>
        </Card>
        <Card>
          <h1>U-Bakt-Vi</h1>
          <p>Bakteeriviljelyä käytetään virtsatulehduksen diagnosointiin. <br />Tulos on joko POS (Positiivinen) tai NEG (Negatiivinen)
          </p>
        </Card>
      </Grid>
    </Layout>
  );
}