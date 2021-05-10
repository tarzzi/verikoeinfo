import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"

export default function Sokeri() {
  return (
    <Layout>
      <h1>Sokerikokeet (GLUK, GLUK-rasitus, GHBA1C)</h1>
      <p>
        Verensokerin (GLUK) määrittämisellä saadaan tietoa sen hetkisestä veren glukoosipitoisuudesta. Useat eri hormonit ylläpitävät veren glukoosipitoisuuden yleensä varsin tasaisena, tärkeimpänä näistä insuliini -hormoni. Kun elimistössä on insuliinin puutos tai insuliini ei tehoa, sokeria kertyy liikaa vereen. Tästä aiheutuvat tyypilliset diabeteksen oireet ovat mm. virtsanerityksen lisääntyminen, jano, tahaton laihtuminen ja väsymys. Korkeita GLUK -arvoja tavataan yleisesti diabeteksessa ja lyhytaikaisesti mm. stressitilan, leikkausten ja tulehdusten yhteydessä.

        Verensokerirasituksessa (GLUK -rasitus) henkilölle annetaan paastonäytteen määrittämisen jälkeen juotavaksi sokerinen juoma. Glukoosimääritys uusitaan kahden tunnin kuluttua juoman nauttimisesta.

        HBA1C -määritystä käytetään sekä tyypin I että tyypin II diabetestä sairastavien henkilöiden verensokeritason pitkäaikaisessa seurannassa ja diabeteksen diagnosoinnissa. Koholla oleva HbA1c-tulos viittaa epätasapainossa olevaan diabetekseen.

      </p>
      <Grid>
        <Card>
          <h1>GLUK</h1>
          <p>
            Viitearvo:
          </p>
        </Card>
        <Card>
          <h1>GLUK-rasitus</h1>
          <p>
            Viitearvo:
          </p>
        </Card>
        <Card>
          <h1>GHBA1C</h1>
          <p>
            Viitearvo:
          </p>
        </Card>
      </Grid>
    </Layout>
  );
}