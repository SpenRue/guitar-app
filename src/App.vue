<!-- eslint-disable -->
<template>
  <div id="app">
    <app-bar/>
    <guitar/>
    <side-menu :show="guitarConfig.showSideMenu"/>
  </div>
</template>

<script>
/* eslint-disable */
import SideMenu from './components/SideMenu.vue';
import AppBar from './components/AppBar.vue';
import Guitar from './components/Guitar.vue';
import Types from "@/state/Types";
import {mapState} from "vuex";

// let n = (a, b) => `${a}${SHARP}${b}${FLAT}`;


export default {
  components: {
    SideMenu,
    AppBar,
    Guitar
  },
  computed: {
    ...mapState([Types.store.GUITAR_CONFIG])
  }
}
</script>

<style lang="scss">
@import 'bulma';
@import './assets/global';

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  // overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
}

* {
  box-sizing: border-box;
}

.options {
  background-color: $primary;
  padding: 5px;
  z-index: 10;

  > * {
    margin: 5px;
  }
}

.shadow {
  box-shadow: 0px 0px 30px #00000066;
}

</style>
