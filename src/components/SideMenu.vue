<template>
  <div v-show="show" class="main" transition="slide">
    Hello
  </div>
</template>

<script>
export default {
  props: ['show'],
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import 'bulma';



.main {
  position: fixed;
  width: 30vw;
  right: 0;
  height: 100%;
  // background-color: $primary;
  background-color: blue;
  z-index: 100;
  box-shadow: 0 0 21px #00000066
}

.slide-transition {
  transition: all 5s;
  
  // display: inline-block;
}

// .slide-enter-active, .slide-leave-active {
//   transition: all .5s;
// }

.fret-enter, .fret-leave-to {
  background-color: green;
  // right: 200px !important;
}
</style>