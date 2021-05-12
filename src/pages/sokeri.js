import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"
import Ctitle from "../components/cTitle"
import Values from "../components/values"
import Info from "../components/info"

export default function Sokeri() {
  return (
    <Layout>
      <div className='my-8 mx-2 p-5 text-2xl shadow-md'>
        <Title>Sokerikokeet</Title>
        <Info>
        Sokerikokeilla mitataan verensokerin vaihtelua vuorokauden tai rasituksen mukaan, etenkin diabeteksen seurannassa.
        </Info>
      </div>
      <Grid>
        <Card>
          <Ctitle>fP-GLUK | Paastoverensokeri</Ctitle>
          <Values>
            4.0-6.0 mmol/l
          </Values>
        </Card>
        <Card>
          <Ctitle>Pt-Gluk-R | Sokerirasituskoe</Ctitle>
          <Values>
            Normaali: Paastoarvo alle 6.1 mmol/l & 2h arvo alle 7.8 mmol/l<br />
            Suurentunut: Paastoarvo 6.1–6.9 mmol/l<br />
            Heikentynyt glukoosinsieto: 2h arvo 7.8–11.0 mmol/l<br />
            Diabetes: 2h arvo yli 11.1 mmol/l
          </Values>
        </Card>
        <Card>
          <Ctitle>B-HbA1c | Hemoglobiini</Ctitle>
          <Values>
            Kaikilla: 20–42 mmol/mol<br />
            Tablettilääkehoidon aikana alle 53 mmol/mol<br />
            Insuliinihoidossa alle 53–58 mmol/mol (yksilökohtainen)<br />
            Ruokavaliohoidossa alle 42 mmol/mol
          </Values>
        </Card>
        <Card>
          <Ctitle>GHb-A1C</Ctitle>
          <Values>
            Kaikilla: 4.8-6.0 % <br />
            Diabeetikoilla:<br />
            alle 7.5 % = hyvä<br />
            7.5-8.5 % = tyydyttävä<br />
            yli 8.5% = huono<br />
          </Values>
        </Card>
      </Grid>
    </Layout>
  );
}