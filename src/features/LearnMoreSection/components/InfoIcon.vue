<template>
  <div class="info-icon" @click="handleClick">
    <div class="info-icon__background">
      <img :src="bgSrc" alt="info-icon icon background" />
      <div>
        <!-- <i :class="`fas fa-${iconClass}`" /> -->
        <FontAwesomeIcon class="test" :icon="['fas', iconClass]" />
      </div>
    </div>
    <div class="info-icon__text">
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineProps({
  bgSrc: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  iconClass: {
    type: String,
    required: false,
  },
})

const emit = defineEmits(['handleClick'])

const handleClick = () => {
  emit('handleClick')
}
</script>

<style lang="scss">
  .info-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 28rem;

    &:hover {
      cursor: pointer;
    }
  }

  .info-icon__background {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    div {
      position: absolute;
      background-color: #7d9a89;
      border-radius: 5px;
      width: 20rem;
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 9rem;
        width: 9rem;
        height: 9rem;
        color: #1c4e46;
      }
    }
  }

  .info-icon__text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;
    width: 100%;

    p {
      color: #1c4e46;
      font-size: 2.8rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  
  @media screen and (max-width: 1300px) {
    .info-icon {
      width: 20rem;
    }

    .info-icon__background {
      div {
        width: 15rem;
        height: 15rem;
      }
    }

    .info-icon__text {
      p {
        font-size: 2.2rem;
      }
    }
  }

  @media screen and (max-width: 1300px) {
    .info-icon {
      width: 20rem;
    }

    .info-icon__background {
      div {
        width: 15rem;
        height: 15rem;
      }
    }

    .info-icon__text {
      p {
        font-size: 2.2rem;
      }
    }
  }

  @media screen and (max-width: 950px) {
    .info-icon {
      width: 15rem ;
    }

    .info-icon__background {
      div {
        width: 10rem;
        height: 10rem;

        i{ 
          font-size: 6rem;
          width: 6rem;
          height: 6rem;
        }
      }
    }

    .info-icon__text {
      p {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .info-icon {
      width: 10rem ;
    }

    .info-icon__background {
      div {
        width: 7rem;
        height: 7rem;
        border-radius: 1px;
        
        i {
          font-size: 4rem;
          width: 4rem;
          height: 4rem;
        }
      }
    }

    .info-icon__text {
      p {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .info-icon {
      width: 6rem;
    }

    .info-icon__background {
      div {
        width: 4rem;
        height: 4rem;
        i {
          font-size: 3rem;
          width: 3rem;
          height: 3rem;
        }
      }
    }

    .info-icon__text {
      p {
        font-size: 1rem;
      }
    }
  }
</style>
