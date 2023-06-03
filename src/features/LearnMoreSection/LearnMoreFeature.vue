<template>
  <MainWidthLayout>
    <div class="icon__container">
      <InfoIcon
        bg-src="/img/learn-more__cafe-img.png"
        text="cafe"
        icon-class="utensils"
        @handle-click="() => (currentInfoObj = 'cafe')"
      />

      <InfoIcon
        bg-src="/img/learn-more__vandrarhem-img.png"
        text="vandrarhem"
        icon-class="house"
        @handle-click="() => (currentInfoObj = 'vandrarhem')"
      />

      <InfoIcon
        bg-src="/img/learn-more__event-img.png"
        text="event"
        icon-class="calendar"
        @handle-click="() => (currentInfoObj = 'event')"
      />

      <InfoIcon
        bg-src="/img/learn-more__gudstjänst-img.png"
        text="gudstjänst"
        icon-class="church"
        @handle-click="() => (currentInfoObj = 'gudstjänster')"
      />
    </div>
    <div class="info-text__line-animation">
      <!-- todo: change line-green.svg to a div line instead -->
      <img src="/img/line-green.svg" alt="animation" />
      <img
        :style="{ left: arrowPlacement + '%' }"
        class="line-green__arrow"
        src="/img/line-green__arrow.svg"
        alt="animation"
      />
    </div>
    <InfoTextLayout>
      <InfoText
        v-for="(item, i) in mockData[currentInfoObj]"
        :key="i"
        :header-txt="item.headerTxt"
        :info-txt="item.infoTxt"
      />
    </InfoTextLayout>
  </MainWidthLayout>
</template>

<script setup>
import MainWidthLayout from '../../layouts/MainWidthLayout.vue'
import InfoIcon from './components/InfoIcon.vue'
import InfoText from './components/InfoText.vue'
import InfoTextLayout from './components/InfoTextLayout.vue'
import infoTextObj from './assets/_infoTextObj.js'
import { ref, watchEffect } from 'vue'

const currentInfoObj = ref('cafe')
const mockData = ref(infoTextObj)
const arrowPlacement = ref(null)

watchEffect(() => {
  if (currentInfoObj.value === 'cafe') {
    arrowPlacement.value = 6
  }
  if (currentInfoObj.value === 'vandrarhem') {
    arrowPlacement.value = 34
  }
  if (currentInfoObj.value === 'event') {
    arrowPlacement.value = 59.8
  }
  if (currentInfoObj.value === 'gudstjänster') {
    arrowPlacement.value = 87.1
  }
})
</script>

<style lang="scss">
  .icon__container {
    display: flex;
    justify-content: space-between;
  }
  .info-text__line-animation {
    margin: 8rem 0;
    position: relative;
    .line-green__arrow {
      position: absolute;
      top: -3.33rem;
      left: 87%;
      height: 5.5rem;
      width: 8rem;
      transition: all 0.5s;
    }
  }

  @media screen and (max-width: 1300px) {
    .icon__container {
      width: 100%;
      padding: 0 4rem;
    }
    .info-text__line-animation {
      margin: 4rem 0 0 0;
      width: 100%;
      padding: 0 4rem;
      img {
        width: 100%;
      }
      .line-green__arrow {
        position: relative;
        width: 4rem;
        transform:translateY(-0.9rem);
        margin-right: 8rem;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .info-text__line-animation {
      img {
        height: 4px;
      }
    }
  }
</style>
