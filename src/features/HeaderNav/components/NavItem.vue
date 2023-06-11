<template>
  <li class="header-nav-item" @click="handleClick">
    <RouterLink :to="{ path: goTo, hash:toHash}"> {{ text }} </RouterLink>
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
  toHash: {
    type: String,
    required: false,
    default: '',
  },
})
defineEmits(['handleClick'])
</script>
