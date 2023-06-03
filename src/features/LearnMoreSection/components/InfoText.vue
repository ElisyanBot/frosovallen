<template>
  <div class="info-text__container">
    <h4>{{ headerTxt }}</h4>
    <span v-html="infoTxt" />
  </div>
</template>

<script setup>
defineProps({
  headerTxt: {
    type: String,
    required: true,
  },
  infoTxt: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss">
  .info-text__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8rem;
    gap: 5rem;

    h4 {
      font-size: 3.5rem;
      text-transform: uppercase;
      color: #1c4e46;
    }

    span {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 2.6rem;
      text-transform: uppercase;
      color: #5e6963;
      height: inherit;

      a {
        color: #4791a8;
        &::before {
          content: '|';
          margin: 0 1rem;
        }
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .info-text__container {
      padding: 0 4rem;

      h4 {
        font-size: 2.5rem;
      }
      span {
        font-size: 2rem;
        text-align: end;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .info-text__container {
      padding: 0 4rem;

      h4 {
        font-size: 2rem;
      }
      span {
        font-size: 1.6rem;
      }
    }
  }
  
  @media screen and (max-width: 500px) {
    .info-text__container {
      padding: 0 4rem;
      flex-direction: column;
      gap: 0;
      margin-bottom: 16px;

      h4 {
        font-size: 1.6rem;
      }
      span {
        text-align: center;
        font-size: 1rem;
      }
    }
  }
</style>
