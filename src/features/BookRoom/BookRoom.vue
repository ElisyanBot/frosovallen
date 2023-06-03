<template>
  <section id="book-room">
    <!-- popups -->
    <BookRoomForm
      v-if="showBookForm"
      @close-book-form="showBookForm = false"
      @close-book-form-success="closeBookFormSuccess"
    />
    <Model
      v-if="showModel && !showBookForm"
      title="Tack för att du väljer frösövallen"
      @close-model="closeModel"
    >
      <p>
        Du har nu skapat en reservation på frösövallens vandrarhem,
        vi kommer att ta kontakt med dig så snart vi har kontrollerat
        vi har plats för din önskade bokning.
      </p>
      <template #btns>
        <button class="btn--cta"> stäng </button>
      </template>
    </Model>

    <!-- content -->
    <UpperDivider />
    <BookCta @book-room-action="openBookForm" />
    <DisplayRooms :rooms="rooms" />
    <BottomDivider />
  </section>
</template>

<script setup>
import BookCta from './components/BookCta.vue'
import BottomDivider from './components/BottomDivider.vue'
import UpperDivider from './components/UpperDivider.vue'
import DisplayRooms from './components/RoomCards/DisplayRooms.vue'
import BookRoomForm from './components/BookRoomForm.vue'
import Model from '../../components/Model.vue'
import {ref } from 'vue'

defineProps({
  rooms: Array,
})

const showBookForm = ref(false)
const showModel = ref(false)
const openBookForm = () => {
  showBookForm.value = true
}
const closeBookFormSuccess = () => {
  showBookForm.value = false
  showModel.value = true
}

const openModel = () => {
  showModel.value = true
}
const closeModel = () => {
  showModel.value = false
}

</script>

<style scoped lang="scss">
    section#book-room {
        background-color: #d9d9d9;
        width: 100%;
        min-height: 100vh;
    }

    .btn--cta {
        background-color: #7D9A89;
        color: #fff;
        border: none;
        width: 50%;
        height: 5rem;
        font-size: 1.8rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>
