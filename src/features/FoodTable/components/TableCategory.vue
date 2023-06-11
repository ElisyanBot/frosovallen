<template>
  <div
    :class="{ 'food-table__category': true, 'food-table__category--selected': selected }"
    @click="handleClick"
  >
  <i :class="`fas fa-${fontAwesomeClass}` "></i>
    <FontAwesomeIcon :icon="['fas', fontAwesomeClass]" />
    <h4>{{ text }}</h4>
  </div>
</template>

<script setup>

defineProps({
  text: {
    type: String,
    required: true,
  },
  fontAwesomeClass: {
    type: String,
    required: false,
  },
  selected: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['handleClick'])

const handleClick = () => {
  emit('handleClick')
}
</script>

<style lang="scss">
  .food-table__category {
    background-color: #bdbba4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    max-width: 20rem;
    height: 20rem;
    border-radius: 0.5rem;
    color: #f2f2f2;
    filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.25));
    
    &:hover {
      cursor: pointer;
      h4 {
        text-decoration: underline;
      }
    }
    h4 {
      font-size: 2.2rem;
      text-transform: uppercase;
      font-weight: bold;
    }
    svg {
      font-size: 8rem;
    }
  }
  .food-table__category--selected {
    svg {
      color: #f37563;
      color: #7d9a89;
    }
  }


  @media screen and (max-width: 1000px) {
    .food-table__category {
      max-width: 15rem;
      height: 15rem;

      h4 {
        font-size: 2.2rem;
      }
      svg {
        font-size: 4rem;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .food-table__category {
      width: calc(23% - 1rem);
      height: 23vw;
      justify-content: flex-start;
      padding: 1vw;
      h4 {
       font-size: 3vw; 
      }
      svg {
        font-size: 10vw;
      }
    }
  }
</style>
