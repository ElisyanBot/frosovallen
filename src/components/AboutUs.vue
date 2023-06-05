<template>
  <MainWidthLayout>
    <section id="about-us">
      <div class="about-us__outer-div">
        <h2>Frösövallen</h2>
        <div class="about-us__inner-div">
          <article class="about-us__info-txt">
            <h3>om oss</h3>
              <p>
                Frösövallen är mötesplatsen för goda möten och upplevelser i en unik miljö. Caféet är hjärtat i verksamheten och serverar smakupplevelser med lokal prägel. 
                Tar du dig upp i vårt utsiktstorn väntar den jämtländska fjällvärldens bedårande panorama. Men Frösövallen är också mycket mer. 
              </p>
              <p>
                EFS-kyrkan i Östersund som driver Frösövallen kallar det för sin sommarkyrka och erbjuder en mosaik av aktiva samlingar under hela sommaren:
                Konsertkvällar med en blandad musikalisk palett, konst- o hantverkskvällar, Quizpromenader, sportkvällar, samtalsgrupper och sommargudstjänster.
              </p>
          </article>
          <div class="about-us__img-container">
            <img src="/img/frosovallenHouse.png" alt="bild på försvallen" />
          </div>
        </div>
        <!-- shape -->
        <div class="about-us__background-shape" />
      </div>
    </section>
  </MainWidthLayout>
</template>

<script setup>
  import MainWidthLayout from '@/layouts/MainWidthLayout.vue'
</script>

<style  lang="scss">

  #about-us {
    margin: 11rem 0;
  }

  .about-us__outer-div {
    // display: flex;
    position: relative;
    width: 100%;
    height: 68rem;

    h2 {
      color: #c64533;
      font-size: 6.4rem;
      text-transform: uppercase;
    }
  }

  .about-us__background-shape {
    height: 68rem;
    width: 50rem;
    background-color: #7d9a89;
    position: absolute;
    top: 0;
    right: 0;
  }

  .about-us__inner-div {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 15rem);
    z-index: 1;

    .about-us__info-txt {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        color: #505050;
        font-size: 4.8rem;
        text-transform: uppercase;
        margin-bottom: 5rem;
      }

      p {
        width: 44rem;
        font-size: 2.2rem;
        color: #464646;
        margin-bottom: 2rem;
        letter-spacing: 0.22rem;
      }
    }
  }

  .about-us__info-txt {
    // width: 100rem;
  }

  .about-us__img-container > img {
    width: 50rem;
    height: 53rem;
    object-fit: contain;
  }

  //------- media -----------------------------------

  @media screen and (max-width: 1500px) {
    #about-us {
    margin: 11rem 0;
  }

  .about-us__outer-div {
    // display: flex;
    height: 60rem;
    padding: 0 2rem;

    h2 {
      color: #c64533;
      font-size: 5rem;
      text-transform: uppercase;
    }
  }

  .about-us__background-shape {
    height: 60rem;
    width: 45rem;
    margin-right: 2rem;
  }

  .about-us__inner-div {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: calc(100% - 15rem);
    z-index: 1;

    .about-us__info-txt {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h3 {
        color: #505050;
        font-size: 3rem;
        text-transform: uppercase;
        margin-bottom: 5rem;
      }

      p {
        width: 44rem;
        font-size: 2rem;
        color: #464646;
        margin-bottom: 2rem;
        letter-spacing: 0.22rem;
      }
    }
  }

  .about-us__info-txt {
    // width: 100rem;
  }

  .about-us__img-container > img {
    width: 45rem;
    height: 47rem;
    object-fit: contain;
  }
  }

  @media screen and (max-width: 1100px) {
      #about-us {
        margin: 11rem 0;
      }

    .about-us__outer-div {
      display:flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      height: 100%;
      padding: 0 4rem;

      h2 {
          align-self: flex-start;
          color: #c64533;
          font-size: 6.4rem;
          text-transform: uppercase;
      }
    }

    .about-us__background-shape {
      height: 25rem;
      width: 100%;
      position: relative;
      top: 0;
      left: 0;
      margin-right: 0;
    }

    .about-us__inner-div {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 95rem;
      z-index: 1;

      .about-us__info-txt {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h3 {
          color: #505050;
          font-size: 4.8rem;
          text-transform: uppercase;
          margin-bottom: 5rem;
        }

        p {
          width: 100%;
          font-size: 2.2rem;
          color: #464646;
          margin-bottom: 2rem;
          letter-spacing: 0.22rem;
        }
      }
    }

    .about-us__info-txt {
      // width: 100rem;
    }

    .about-us__img-container {
        display: flex;
        justify-content: center;
        position: relative;
        bottom: -5rem;
    }

    .about-us__img-container > img {
      width: calc(100% - 8rem);
      height:  50rem;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 500px) {
      #about-us {
      }

    .about-us__outer-div {
      h2 {
        font-size: 3rem;
      }
    }

    .about-us__background-shape {
      height: 15rem;
    }

    .about-us__inner-div {
      height: 55rem;
      .about-us__info-txt {

        h3 {
          font-size: 2rem;
          margin-bottom: 3rem;
        }

        p {
          font-size: 1.4rem;
        }
      }
    }

    .about-us__info-txt {
    }

    .about-us__img-container {
      top: 4rem;
    }

    .about-us__img-container > img {
      height: 20rem;
      width: 25rem;
      object-fit: cover;
    }
  } 
</style>
