<template>
  <div class="is-flex options shadow">
    <div class="button-menu" style="display:flex;flex-direction:column;">
      <button class="button is-danger"
              @click="set({...guitarConfig, realFretSpacing: !guitarConfig.realFretSpacing})">
        {{guitarConfig.realFretSpacing ? 'Real' : 'Equal'}} Fret Spacing
      </button>
      <button class="button is-danger" @click="guitarConfig.isVertical = !guitarConfig.isVertical">{{guitarConfig.isVertical ? 'Vertical': 'Horizontal'}}</button>
      <button class="button is-danger" @click="guitarConfig.showSideMenu = !guitarConfig.showSideMenu">Chord Menu</button>
    </div>
    <input class="slider is-fullwidth is-large is-circle" type="range" step="1" min="16" max="26" v-model="guitarConfig.fretCount"/>
    <div class="info">
      <div>Chord Info: </div>
      <div>Major: <span class="selected">Root</span>, <span class="major-third">Major Third</span>, <span class="major-fifth">Major Fifth</span></div>
      <div>Minor: <span class="selected">Root</span>, <span class="minor-third">Minor Third</span>, <span class="major-fifth">Major Fifth</span></div>
      <div>Major Seventh: <span class="selected">Root</span>, <span class="major-third">Major Third</span>, <span class="major-seventh">Major Seventh</span></div>
      <div>Minor Seventh: <span class="selected">Root</span>, <span class="minor-third">Minor Third</span>, <span class="major-fifth">Major Fifth</span>, <span class="minor-seventh">Minor Seventh</span></div>
    </div>
    <div class="info">
      <div>Scale Info: </div>
      <div>Major (WWHWWWH): <span class="selected">Root</span>, <span class="major-second">Major Second</span> <span class="major-third">Major Third</span>, <span class="major-fourth">Major Fourth</span>, <span class="major-fifth">Major Fifth</span>, <span class="major-sixth">Major Sixth</span>, <span class="major-seventh">Major Seventh</span>, <span class="selected">Root</span></div>
      <div>Minor (WHWWHWW): <span class="selected">Root</span>, <span class="major-second">Major Second</span> <span class="minor-third">Minor Third</span>, <span class="major-fourth">Major Fourth</span>, <span class="major-fifth">Major Fifth</span>, <span class="minor-sixth">Minor Sixth</span>, <span class="minor-seventh">Minor Seventh</span>, <span class="selected">Root</span></div>
      <div>Major Seventh: <span class="selected">Root</span>, <span class="major-third">Major Third</span>, <span class="major-seventh">Major Seventh</span></div>
      <div>Minor Seventh: <span class="selected">Root</span>, <span class="minor-third">Minor Third</span>, <span class="major-fifth">Major Fifth</span>, <span class="minor-seventh">Minor Seventh</span></div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Types from '../state/Types';

export default {
  name: "AppBar",
  computed: {
    ...mapState([Types.store.GUITAR_CONFIG])
  },
  methods: {
    set(value) {
      this.$store.commit(Types.mutations.SET_GUITAR_CONFIG, value);
    }
  }
}
</script>

<style scoped>

</style>