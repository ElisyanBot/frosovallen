<template>
  <div :class="{ 'food-item': true, 'food-item--disabled': outOfStock }">
    <picture>
      <div v-if="outOfStock" class="food-item__picture--disabled">
        <p>slutsåld</p>
      </div>
      <img :src="imgSrc" alt="food item picture" />
    </picture>
    <div class="food-item__text-block">
      <h5>
        {{ headerTxt }}
      </h5>
      <p>
        {{ text }}
      </p>
      <div class="footer">
        <p> Pris: <span> {{ price }}</span> </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  imgSrc: {
    type: String,
  },
  headerTxt: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  outOfStock: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<style lang="scss">
  .food-item {
    display: flex;
    align-items: center;
    gap: 2rem;
      background-color: #f2f2f2;
      color: #f2f2f2;
    width: 100%;

      max-width: 55.5rem;
      height: 17.5rem;
      overflow: hidden;

    picture {
      overflow: hidden;
      height: inherit;
      width: 100%;
      max-width: 17.5rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
    }
  }
  .food-item__text-block {
    height: 15rem;
    display: flex;
    flex-direction: column;
      width: 100%;
    gap: 1.2rem;

    h5 {
      color: #5a7d69;
      font-size: 2.2rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    p {
      font-size: 1.8rem;
        color: #040410;
    }
  }
  .food-item--disabled {
    picture {
      position: relative;

      img {
        opacity: 1;
      }
    }
    .food-item__text-block {
      opacity: 0.4;
    }
  }

  .food-item__picture--disabled {
    background-color: rgba(47, 47, 47, 0.83);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    p {
      display: block;
      padding: 1rem;
      color: #c64533;
      font-weight: bold;
      font-size: 1.8rem;
      text-align: center;
      text-transform: uppercase;
      border: 2px solid #c64533;
      border-radius: 0.5rem;
    }
  }


  .footer {
      span, div {
      }
  }

  @media screen and (max-width: 1000px) {
    .food-item {
    display: flex;
    align-items: center;
    gap: 2rem;

    max-width:  calc( 100% - 1rem);
    height: 17.5rem;

    picture {
      width: 100%;
      max-width: 15.5rem;
    }
  }
  .food-item__text-block {
      height: inherit;
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      width: 100%;
      gap: 0rem;

      h5 {
        color: #5a7d69;
        font-size: 2rem;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1rem;
        padding-right: 2rem;
        max-width: 80%;
      }
      p {
        font-size: 1.8rem;
        color: #040410;
        max-width: 80%;
      }

      .footer {
        margin-top: auto;
        p {
          font-size: 1.6rem;
          font-weight: bold;
        }
        span, div {
          color: #5a7d69;
        }
      }
    }
  }

  @media screen and (max-width: 550px) {
    .food-item {
    display: flex;
    align-items: center;
    gap: 1rem;

    max-width:  calc( 100% - 1rem);
    height: 15.5rem;

    picture {
      width: 100%;
      max-width: 14rem;
    }
  }
  .food-item__text-block {
      height: inherit;
      display: flex;
      flex-direction: column;
      padding: 1rem 0;
      width: 100%;
      gap: 0rem;

      h5 {
        color: #5a7d69;
        font-size: 1.6rem;
        font-size: 3.4vw;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 1rem;
        padding-right: 2rem;
        max-width: 100%;
      }
      p {
          font-size: 3.3vw;
          color: #040410;
          max-width: 100%;
      }

      .footer {
        margin-top: auto;
        p {
          font-size: 1.4rem;
          font-weight: bold;
        }
        span, div {
          color: #5a7d69;
        }
      }
    }
  }
</style>
