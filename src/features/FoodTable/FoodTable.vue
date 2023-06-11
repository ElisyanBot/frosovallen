<template>
  <section class="food-table">
    <picture id="food-table__img-header">
      <source media="(min-width:650px)" srcset="/img/berg.png" />
      <source media="(min-width:465px)" srcset="/img/berg.png" />
      <img src="/img/berg.png" alt="berg" />
    </picture>
    <MainWidthLayout>
      <div class="food-table__categories">
        <TableCategory
          font-awesome-class="bowl-rice"
          text="varm mat"
          :selected="selectedCategory === 'varm'"
          @handle-click="selectedCategory = 'varm'"
        />
        <TableCategory
          font-awesome-class="bowl-food"
          text="kall mat"
          :selected="selectedCategory === 'kall'"
          @handle-click="selectedCategory = 'kall'"
        />
        <TableCategory
          font-awesome-class="ice-cream"
          text="fika"
          :selected="selectedCategory === 'fika'"
          @handle-click="selectedCategory = 'fika'"
        />
        <TableCategory
          font-awesome-class="mug-hot"
          text="dryck"
          :selected="selectedCategory === 'dryck'"
          @handle-click="selectedCategory = 'dryck'"
        />
      </div>
    </MainWidthLayout>
    <MainWidthLayout>
      <div
        :class="{
          'food-table__items': true,
          'food-table__items--expanded': expandedSection
        }"
      >
        <div class="food-table__divider" :style="{ 'grid-row-end': 'span ' + `${rowsNr}` }">
          <!-- divider -->
        </div>
        <FoodItem
          v-for="(item, index) in foodItems"
          :key="index"
          :img-src="item.src"
          :header-txt="item.title"
          :text="item.desc"
          :price="item.price"
          :out-of-stock="item.status"
        />
      </div>
    </MainWidthLayout>
    <div class="food-table__btn-container">
      <button v-if="foodItems.length >= 4" @click="handleClick">
        {{ btnTxt }}
      </button>
    </div>
  </section>
</template>

<script setup>
import MainWidthLayout from '../../layouts/MainWidthLayout.vue'
import TableCategory from './components/TableCategory.vue'
import FoodItem from './components/FoodItem.vue'
import {computed, ref, watchEffect} from 'vue'

const rowsNr = ref(1)
const expandedSection = ref(false)
const btnTxt = ref('visa mer')
const selectedCategory = ref('varm')
const foodItems = computed(() => props.foodItems.filter(i => i.type === selectedCategory.value ))

const props = defineProps({
  foodItems: Array,
})

watchEffect(() => {
  rowsNr.value = Math.ceil(foodItems.value.length / 2)
})

const handleClick = () => {
  expandedSection.value = !expandedSection.value

  if (expandedSection.value) {
    btnTxt.value = 'visa mindre'
  } else {
    btnTxt.value = 'visa mer'
  }
}

</script>

<style lang="scss">
  #food-table__img-header {
    img {
      width: 100%;
      background-color: #f2f2f2;
      padding-top: 15rem;
    }
  }

  .food-table {
    background-color: #bdbba4;
    padding-bottom: 7rem;
    position: relative;
  }
  .food-table__categories {
    display: flex;
    justify-content: center;
    gap: 8%;
    position: relative;
    top: -10rem;
  }
  .food-table__items {
    display: grid;
    grid-template-columns: [first] 1fr [divider] 10rem [second] 1fr;
    grid-template-rows: auto;
    justify-content: space-between;
    padding: 0 2rem;
    gap: 3rem 0;
    width: 100%;
    max-height: 50rem;
    overflow: hidden;
    animation: shrink-animation 0.5s ease-out;

    .food-table__divider {
      content: ' ';
      overflow: hidden;
      padding-bottom: 1rem;
      border-right: 3px solid #f8f8f8da;

      justify-self: center;
      grid-column-start: span divider;
      grid-column-end: second;
      grid-row: 1 / last-line;
    }
  }

  .food-table__items--expanded {
    max-height: fit-content;
    animation: expand-animation 1s ease-out;
  }

  .food-table__btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 6rem;

    button {
      background-color: #7d9a89;
      border: none;
      color: #ffffff;
      font-weight: bold;
      font-size: 2rem;
      text-transform: uppercase;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      padding: 2rem 0;
      width: 25rem;

      &:hover {
        cursor: pointer;
      }
    }
  }


  @media screen and (max-width: 1000px) {
    #food-table__img-header {
      img {
      }
    }

    .food-table {
    }

    .food-table__items {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      .food-table__divider {
        display: none;
      }
    }

    .food-table__categories {
      justify-content: center;
      top: -5rem;
      gap: 5%;
    }
    .food-table__items--expanded {
    }

    .food-table__btn-container {
      button {
      }
    }
  }

  @media screen and (max-width: 600px) {

    .food-table__categories {
      justify-content: center;
      top: -5rem;
      gap: 3.5%;
    }
  }

  @keyframes expand-animation {
    0% {
      max-height: 50rem;
    }

    100% {
      max-height: 250rem;
    }
  }

  @keyframes shrink-animation {
    0% {
      max-height: 150rem;
    }

    100% {
      max-height: 50rem;
    }
  }
</style>
