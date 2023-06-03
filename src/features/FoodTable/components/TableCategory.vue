<template>
  <div
    :class="{ 'food-table__category': true, 'food-table__category--selected': selected }"
    @click="handleClick"
  >
  <i :class="`fas fa-${fontAwesomeClass}` "></i>
    <!-- <FontAwesomeIcon :icon="['fas', fontAwesomeClass]" /> -->
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
    max-width: 24.2rem;
    height: 21.5rem;
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
    i {
      font-size: 5rem;
    }
  }
  .food-table__category--selected {
    i {
      color: #f37563;
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
        width: 15rem;
        height: 8.5rem;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .food-table__category {
      width: 10rem;
      height: 10rem;
      h4 {
       font-size: 1.3rem; 
      }
    }
  }
</style>
