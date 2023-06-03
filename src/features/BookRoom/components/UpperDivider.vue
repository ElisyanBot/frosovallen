<template>
  <div class="book-room__upper-divider">
    <div class="divider__green-corner" />
  </div>
</template>

<style scoped lang="scss">
    .book-room__upper-divider {
        display: flex;
        align-items: flex-end;
        background-color: #d9d9d9;
        width: 100%;
        height: 30rem;

        .divider__green-corner {
            width: 100%;
            // max-width: 145rem;
            height: 7rem;
            background-color: #7D9A89;
        }
    }

    
  @media screen and (max-width: 800px) {
   .book-room__upper-divider {
    height: 15rem;
   } 
  }
</style>
