<template>
  <picture id="footer-img">
    <source media="(min-width:650px)" srcset="/img/berg.png" />
    <source media="(min-width:465px)" srcset="/img/berg.png" />
    <img src="/img/berg.png" alt="berg" />
  </picture>
</template>

<style scoped lang="scss">
#footer-img {
    img {
        transform: translateY(5px);
        width: 100%;
        background-color: #f2f2f2;
        object-fit: cover;
        padding-top: 15rem;
    }
}
</style>
