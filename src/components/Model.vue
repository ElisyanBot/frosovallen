<template>
  <section class="model__focus-background" @click="$emit('closeModel')">
    <div class="model model--small">
      <div class="model__header">
        <h3> {{ title }} </h3>
      </div>
      <div class="model__body">
        <slot />
      </div>
      <div class="model__btns">
        <slot name="btns" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['closeModel'])

defineProps( {
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
    .model__focus-background {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;

        .model {
            background-color: #f2f2f2;
            border-radius: 0.5rem;
            padding: 5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 2rem;

            .model__header {
                h3 {
                    font-size: 2.8rem;
                    color: #1C4E46;
                    text-transform: uppercase;
                }
            }

            .model__body {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                p {
                    font-size: 1.6rem;
                }
            }

            .model__btns {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 2rem;
            }
        }

        .model--small {
            width: 80rem;
            height: 30rem;
        }
    }
</style>
