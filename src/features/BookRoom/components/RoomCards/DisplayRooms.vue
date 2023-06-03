<template>
  <section class="book-room__display-rooms">
    <div class="display-rooms__green-section">
      <div class="green-section__text-container">
        <h3> våra rum </h3>
        <div class="info-text">
          <p> Frösövallens vandrarhem erbjuder två- eller fyrbäddsrum i enkel standard. </p>
          <p>  Totalt finns tjugosex bäddar i åtta rum. </p>
          <p>
            I närliggande servicehus finns toaletter, dusch, tvättmaskin och ett
            välutrustat kök för självhushåll.
          </p>
        </div>
        <div class="price-info">
          <div class="header">
            <h4> pris </h4>
          <div class="divider"></div>
          </div>
          <div class="content">
            <p><b>vuxna</b><span>270 kr</span> </p>
            <p><b>barn 6-15 år</b><span>100 kr</span> </p>
            <p><b>husvagn</b><span>250 kr</span> </p>
            <p><b>tältplats</b><span>195 kr </span> </p>
          </div>
        </div>
      </div>
      <RoomCards :rooms="rooms" />
    </div>
  </section>
</template>

<script setup>
// import RoomCards from './RoomCards.vue'
defineProps({
  rooms: Array,
})
</script>

<style scoped lang="scss">
section.book-room__display-rooms {
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: #f2f2f2;

    .display-rooms__green-section {
    position: relative;
        justify-content: space-between;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        width: 100%;
        // max-width: 145rem;
        height: 75rem;
        background-color: #7D9A89;
        // padding-left: 13rem;
        color: white;
        font-size: 2.4rem;

        .green-section__text-container {
            h3 {
                color: #1C4E46;
                font-size: 5.8rem;
                font-weight: bold;
                text-transform: uppercase;
                margin-bottom: 4rem;

            }
            .info-text {
                p {
                    margin: 2rem 0;
                    max-width: 50rem;
                    font-weight: lighter;
                }
            }

            .price-info {
              .header {
                  display: flex;
                  align-items: center;
                  color: #1C4E46;
                  margin: 6rem 0 2rem 0;
                  h4 {
                      text-transform: capitalize;
                      font-size: 3.6rem;
                      margin-right: 2rem;
                  }
                  .divider {
                      content: ' ';
                      height: 4px;
                      width: 100%;
                      background-color: #1C4E46;
                  }
              }
                .content {
                    width: 100%;
                    max-width: 50rem;
                  p {
                      display: flex;
                      justify-content: space-between;
                      width: inherit;
                      margin: 2rem 0;
                      font-size: 2.4rem;
                      font-weight: lighter;

                      b {
                          text-transform: capitalize;
                      }
                  }
              }
            }
        }
    }
}

@media screen and (max-width: 500px) {
 section.book-room__display-rooms {
    .display-rooms__green-section {
        height: 60rem;
        padding: 2rem;
        .green-section__text-container {
            h3 {
                font-size: 3rem;
            }
            .info-text {
                p {
                  font-size: 1.4rem;
                }
            }

            .price-info {
              .header {
                  h4 {
                    font-size: 2.5rem;
                  }
              }
                .content {
                  p {
                      font-size: 1.8rem;
                  }
              }
            }
        }
    }
  }
}

</style>
