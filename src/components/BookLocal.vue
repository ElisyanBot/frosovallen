<template>
  <MainWidthLayout>
    <section id="book-local">
      <section class="book-local__section">
        <div class="book-local__left">
          <div class="book-local__background-shape">
          <div class="book-local__img-container">
            <img src="/img/bookLocal.png" alt="bild på försvallen" />
          </div>
          </div>
        </div>


        <div class="book-local__right">
          <article class="book-local__info-txt">
            <h2>Hyr Samlingsalen för viktiga stunder</h2>
              <p>
                Frösövallens stora samlingslokal med oslagbara utsikt passar för olika typer av arrangemang. 
                Lokalen rymmer upp till 120 sittande personer och är lätt att möblera om för fest, konferens, bröllop, dop, 
                begravning, konsert mm. Utrustad med ljudanläggning, piano, hörslinga och videoprojektor. Alkoholfritt.
              </p>
              <p>
                <b>Priser: </b>
                <i>2 500 kr/ dygn</i>
                <i>minst 1 500 kr/tillfälle</i>
                <i>Boka genom att maila <a href="mailto:info@frosovallen.se">info@frosovallen.se</a></i>
              </p>
          </article>
        </div>
        <!-- shape -->
      </section>
    </section>
  </MainWidthLayout>
</template>

<script setup>
  import MainWidthLayout from '@/layouts/MainWidthLayout.vue'
</script>

<style scoped lang="scss">
  .book-local__section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    width: 100%;
    height: 70rem;
    padding: 0 2rem;
  }

  .book-local__background-shape {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40rem;
    height: 55rem;
    top: 0;
    left: 0;
    background-color: #1C4E46;
  }

  .book-local__right {
    width: 40%;
    article.book-local__info-txt {
      height: 80%;
      gap: 2rem;
      h2 {
        font-size: 4rem;
        font-weight: 700;
        color: #1C4E46;
        margin-bottom: 2rem;
        text-transform: uppercase;
      }
      
      p {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
      }
    }
  }

  .book-local__img-container {
    height: 40rem;
    width: 40rem;
    position: relative;
    left: -10rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }


  @media screen and (max-width: 1500px) {
  }

  @media screen and (max-width: 1150px) {
    .book-local__section {
      height: 100%;
      flex-direction: column;
      margin: 15rem 0 5rem 0;
    }
    .book-local__left {
      width: 90%;
    }
    .book-local__background-shape {
      width: calc(100vw - 10rem);
      height: 35rem;
      margin-bottom: 8rem;
    }

    .book-local__right {
      width: 90%;
      article.book-local__info-txt {
        height: 80%;
        gap: 2rem;
        h2 {
          font-size: 3rem;
        }
      }
    }

    .book-local__img-container {
      height: 110%;
      width: calc(100% - 10rem);
      max-width: 50rem;
      left: initial;
      top: -10rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }


  @media screen and (max-width: 500px) {
    .book-local__section {
      height: 100%;
      flex-direction: column;
      margin: 15rem 0 5rem 0;
    }

    .book-local__background-shape {
      height: 25rem;
      margin-bottom: 5rem;
    }

    .book-local__right {
      width: 90%;
      article.book-local__info-txt {
        height: 80%;
        gap: 2rem;
        h2 {
          font-size: 2rem;
        }
      }
    }

    .book-local__img-container {
      height: 110%;
      width: calc(100% - 10rem);
      left: initial;
      top: -10rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  } 
</style>
