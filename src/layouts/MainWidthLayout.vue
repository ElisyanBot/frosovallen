<template>
  <section class="layout__main-width">
    <slot />
  </section>
</template>

<style lang="scss">
  .layout__main-width {
    margin: auto;
    display: flex;
    flex-direction: column;
    // overflow: hidden;
    width: 100%;
    max-width: 130rem;
  }
</style>
