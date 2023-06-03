<template>
  <div class="info-text__layout">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .info-text__layout {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
