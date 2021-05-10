import React from "react"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Card from "../components/card"
import Title from "../components/title"

export default function Reuma() {
  return (
    <Layout>
      <Title>Reumakokeet</Title>
      <p>

        Reumafaktoritutkimuksessa (RF) määritetään ryhmä elimistön autovasta-aineita ja sitä käytetään autoimmuunisairauksien (reumataudit), niveltulehdusten ja sidekudossairauksien diagnostiikassa. Reumafaktoritutkimus ei erottele hyvin nivelreumaa muista sidekudostaudeista, joissa arvo saattaa olla myös suurentunut. Kohonneita arvoja tavataan jonkin verran myös terveillä ihmisillä. Arvo voi myös olla normaali nivelreuman alkuvaiheessa ja toisaalta koholla muissakin tautitiloissa.

        Sitrulliinivasta-ainemääritys (CCPAb) on herkempi ja tarkempi tutkimus nivelreuman toteamiseksi. Tämäkin testi mittaa elimistössä syntyneitä vasta-aineita omia kudoksia kohtaan. Arvo on selvästi koholla useimmilla nivelreumapotilailla (noin 60–70 prosentilla), mutta ei siis kaikilla. Muissa sidekudostaudeissa sitrulliinivasta-aineita ei yleensä synny, joten koe on reuman toteamisessa tarkempi kuin reumafaktori.

      </p>
      <Grid>
        <Card>
          <h1>P-RF</h1>
          <p></p>
        </Card>
        <Card>
          <h1>CCPAb</h1>
          <p></p>

        </Card>
      </Grid>

    </Layout>
  );
}