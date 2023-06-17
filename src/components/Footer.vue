<template>
  <footer>
    <b> Öppettider: </b>
    <p>Caféet är öppet den 19 juni - 20 augusti.</p>
    <p>Alla dagar kl.12-17. Kvällsöppet torsdag och lördag till kl.19.</p>

    <b>Kontakt:</b>
    <p>Stockevägen 3, 832 96 Frösön</p>
    <a href="mailto:info@frosovallen.se"> info@frosovallen.se</a>
    <p>076-792 38 89</p>
  </footer>
</template>

<style scoped lang="scss">
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
    gap: 1rem;
    background-color: #c64533;
    width: 100%;
    min-height: 20vh;

    p, b, a {
      color: #f5f5f5;
      font-size: 1.6rem;
      text-align: center;
    }

    b {
      font-weight: bold;
      margin: 2rem 0 0.5rem 0;
    }
  }

</style>