<template>
  <li class="header-nav-item" @click="handleClick">
    <RouterLink :to="{ path: goTo}"> {{ text }} </RouterLink>
  </li>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  goTo: {
    type: String,
  },
})
defineEmits(['handleClick'])
</script>
