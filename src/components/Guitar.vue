<template>
  <div class="guitar" :class="{horizontal: !guitarConfig.isVertical}">
    <div class="bridge">
      <tooltip trigger="hover" v-for="i in getNItems(6)" :key="i" class="string" :options="{placement:'top', delayOnMouseOut: 0}"
               :class="getStringClass(getNote(0, i))">
        <div class="popper" ref="popper">
          {{Math.round(getNote(0, i).frequency * 10)/10 }}hz
          <p>{{getNoteInfo(getNote(0, i)) ? getNoteInfo(getNote(0, i)).name : ''}}</p>
        </div>
        <div class="string" slot="reference"
             @click="setSelectedNote(getNote(0, i))"
             @contextmenu.prevent="playTone($event, getNote(0, i))"
             @mouseenter="playTone($event, getNote(0, i), true)"
        >
          {{ getNote(0, i).note.toUpperCase() + getNote(0, i).octave}}
        </div>
      </tooltip>
    </div>
    <component :is="'style'">
      .guitar .fret-board::before {
      border-{{guitarConfig.isVertical ? 'bottom': 'right'}}-width: {{boardSize}}px;
      }
    </component>
    <div class='fret-board' ref="fretBoard">
      <div class="fret-labels">
        <transition name="fret" v-for="i in frets" :key="i" appear>
          <div class="fret-label" :class="{'special': specialFret.includes(i + 1)}"  :style="`flex-basis: ${(guitarConfig.realFretSpacing ? getStringStrength(i) / totalFretStrength: 1 / guitarConfig.fretCount) * 100}%`">{{i + 1}}</div>
        </transition>
      </div>
      <div class="actual-frets frets shadow">
        <transition name="fret" v-for="i in frets" :key="i" appear>
          <div class="fret"
               :class="{'special': specialFret.includes(i + 1)}"
               :style="`flex-basis: ${(guitarConfig.realFretSpacing ? getStringStrength(i) / totalFretStrength: 1 / guitarConfig.fretCount) * 100}%`">
            <div class="string" v-for="j in getNItems(6)" :key="j"
                 :class="getStringClass(getNote(i + 1, j))">
              <p class="string-info">
                {{ getNote(i + 1, j).note.toUpperCase() + getNote(i + 1, j).octave}}
              </p>
            </div>
          </div>
        </transition>
      </div>
      <div class="tooltip-frets frets frequency">
        <transition name="fret" v-for="i in frets" :key="i" appear>
          <div class="fret frequency"
               :style="`flex-basis: ${(guitarConfig.realFretSpacing ? getStringStrength(i) / totalFretStrength: 1 / guitarConfig.fretCount) * 100}%`">
            <tooltip trigger="hover" v-for="j in getNItems(6)" :key="j" class="string frequency" :options="{placement:'top', delayOnMouseOut: 0}">
              <div class="popper" ref="popper">
                {{Math.round(getNote(i + 1, j).frequency * 10)/10 }}hz
                <p>{{getNoteInfo(getNote(i + 1, j)).name}}</p>
                <p>{{getNoteInfo(getNote(i + 1, j)).ratioString}}</p>
              </div>
              <div class="string-frequency-box" slot="reference"  @contextmenu.prevent="playTone($event, getNote(i + 1, j))" @mouseenter="playTone($event, getNote(i + 1, j), true)"
                   @click="setSelectedNote(getNote(i + 1, j))">
              </div>
            </tooltip>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Tooltip from './tooltip.vue';
import * as Tone from 'tone';
import * as MusicDefs from '../utils/MusicalDefinitions';
import store from "../state/store";
import { mapState } from 'vuex';
import Types from '../state/Types';
import * as GuitarUtils from '../utils/GuitarUtils';

export default {
  name: "Guitar.vue",
  components: {
    Tooltip,
  },
  data() {
    return {
      boardSize: 0,
      selectedNote: null,
      mouseDown: false,
      ctrlDown: false,
      noteQueue: [],
      showSideMenu: false,
    };
  },
  computed: {
    ...mapState([Types.store.GUITAR_CONFIG]),
    frets() {
      return [...Array(Number(this.guitarConfig.fretCount)).keys()];
    },
    stringStrengths() {
      let stringStrengths = new Array(Number(this.guitarConfig.fretCount));
      for(let i = 0; i < stringStrengths.length; i++) {
        let previousValue;
        if(i === 0)
          previousValue = 1;
        else
          previousValue = stringStrengths[i - 1];

        stringStrengths[i] = previousValue * Math.pow(2, -1/12);
      }
      return stringStrengths;
    },
    totalFretStrength() {
      return this.stringStrengths.reduce((previousValue, currentValue) => previousValue + currentValue);
    },
    specialFret() {
      return this.frets.filter(x => {
        let value = x % 12;
        if(value <= 5)
          return value % 3 === 0 || value % 5 === 0 || value === 0;
        else
          return value % 7 === 0 || value % 9 === 0;
      });
    },
    /**
     * How many unique notes there are in the fretboard
     */
    noteRange() {
      const startingRange = Math.abs(MusicDefs.STRING_OFFSET_MAP[0]) + MusicDefs.STRING_OFFSET_MAP[5];
      return startingRange + Number(this.guitarConfig.fretCount) + 1;
    },
    /**
     * The raw data for every note on the guitar
     * @returns {Note[]} notes
     */
    notes() {
      return GuitarUtils.generateNotes(this.noteRange);
    },
  },
  methods: {
    getStringStrength(n) {
      if(this.stringStrengths.length - 1 < n)
        return 0;

      return this.stringStrengths[n];
    },
    getNItems(n) {
      return [...Array(Number(n)).keys()];
    },
    getNote(fret, stringNumber = 0) {
      return GuitarUtils.getNote(this.notes, fret, stringNumber);
    },
    setSelectedNote(note) {
      this.selectedNote = note;
    },
    isMatch(ratio, threshold, log) {
      // check 4 times the ratio in the positive direction
      for(let i = 1; i < 4; i++) {
        if(log) console.log(ratio,  (1 / Math.pow(2, i)) + (threshold / Math.pow(2, i)));
        let newRatio = ratio;
        if(ratio < (1 / Math.pow(2, i)) + (threshold / Math.pow(2, i))) {
          newRatio = ratio * Math.pow(2, i);
        }
        // ratio = ratio * i;
        // threshold = threshold / i;
        const remainder = newRatio % 1;
        const difference = remainder > .5 ? 1 - remainder : remainder;
        if(log)
          console.log(i, newRatio, remainder, difference, threshold, difference < threshold);
        if(difference < threshold)
          return { result: true, difference };
      }

      return {result: false, difference: Infinity};
    },
    getStringClass(note) {
      if(!note || !note.note || !this.selectedNote || !this.selectedNote.note)
        return {};

      const relatedNotes = [];
      for(let i = 0; i < MusicDefs.INTERVAL_DEFINITIONS.length; i++) {
        let relatedNote;
        if(MusicDefs.INTERVAL_DEFINITIONS[i].name === 'Root')
          relatedNote = note.note === this.selectedNote.note;
        else
          relatedNote = this.getRelatedNote(MusicDefs.INTERVAL_DEFINITIONS[i].ratio, note.index);

        if(relatedNote) {
          relatedNotes.push({...MusicDefs.INTERVAL_DEFINITIONS[i], difference: relatedNote.difference});
        }
      }

      relatedNotes.sort((a, b) => a.difference - b.difference  === 0 ? a.ratio - b.ratio : a.difference - b.difference);
      if(relatedNotes.length > 0) {
        return {[relatedNotes[0].css]: relatedNotes[0]};
      }

      return {};
    },
    getRelatedNote(noteRatio, matchNoteIndex) {
      if(!this.notes || !this.selectedNote)
        return [];

      let smallestNote = this.notes.find(x => x.note === this.selectedNote.note);
      if(!smallestNote)
        return [];
      let difference;
      const namedNotes = this.notes.filter((x, i) => {
        const currentRatio = smallestNote.frequency / x.frequency; // 735 ~ 740
        const result = (currentRatio / noteRatio);

        let log = false;
        if(x.note === 'c' && x.octave === 5 && matchNoteIndex === 32 && noteRatio === 0.75) {
          console.log('here', x, noteRatio, currentRatio, result);
          console.log(smallestNote, this.selectedNote, this.notes);
          log = true;
        }
        const match = this.isMatch(result, .02, log);
        if(match.result) {
          difference = match.difference;
        }
        return match.result;
      });

      if(typeof matchNoteIndex !== 'undefined') {
        let result = namedNotes.find(x => x.index === matchNoteIndex)
        if(result)
          if(typeof difference !== 'undefined')
            return { ...result, difference };
          else
            return result
        return false;
      }

      return namedNotes;
    },
    getNoteInfo(note) {
      if(!note || !note.note || !this.selectedNote || !this.selectedNote.note)
        return {};

      let relatedNotes = [];
      for(let i = 0; i < MusicDefs.INTERVAL_DEFINITIONS.length; i++) {
        let relatedNote;
        if(MusicDefs.INTERVAL_DEFINITIONS[i].name === 'Root')
          relatedNote = note.note === this.selectedNote.note;
        else
          relatedNote = this.getRelatedNote(MusicDefs.INTERVAL_DEFINITIONS[i].ratio, note.index);

        if(relatedNote) {
          relatedNotes.push({...MusicDefs.INTERVAL_DEFINITIONS[i], difference: relatedNote.difference});
        }
      }
      relatedNotes.sort((a, b) => a.difference - b.difference  === 0 ? a.ratio - b.ratio : a.difference - b.difference);
      if(relatedNotes.length > 0) {
        return relatedNotes[0];
      }
      return {};
    },
    playTone(event, note, fromMouseEnter) {
      if(!this.mouseDown && fromMouseEnter) {
        return;
      }
      if(this.ctrlDown) {
        this.noteQueue.push(note);
        return;
      }
      //create a synth and connect it to the main output (your speakers)
      const synth = new Tone.Synth().toDestination();
      //play a middle 'C' for the duration of an 8th note
      synth.triggerAttackRelease(note.frequency, "8n");
    }
  },
  mounted() {
    this.boardSize = this.isVertical ? this.$refs.fretBoard.offsetHeight : this.$refs.fretBoard.offsetWidth;
    console.log(this.$refs);
    this.$refs.popper.forEach(x => {
      x.onmouseout
    });
    window.addEventListener('mouseup', () => this.mouseDown = false);
    window.addEventListener('mousedown', () => this.mouseDown = true);
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('keydown', (e) => {
      if(e.code === 'ControlLeft') {
        this.ctrlDown = true;

      }
    });
    window.addEventListener('keyup', (e) => {
      if(e.code === 'ControlLeft') {
        this.ctrlDown = false;
        this.noteQueue.forEach(x => this.playTone({}, x, false));
        this.noteQueue = [];
      }
    });
  },
  updated() {
    this.boardSize = this.isVertical ? this.$refs.fretBoard.offsetHeight : this.$refs.fretBoard.offsetWidth;
  },
}
</script>

<style scoped lang="scss">
.guitar {
  display: flex;
  flex-direction: column;
  width: 300px;
  flex-grow: 1;
  margin: auto auto;

  .fret-board::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .fret-board {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    position: relative;

    .fret-labels {
      display: flex;
      flex-direction: column;
      position: absolute;
      flex-grow: 0;
      // flex-shrink: 1;
      height: 100%;
      z-index: 99 !important;

      .fret-label {
        position: relative;
        right: 150%;
        flex-grow: 0;
        flex-shrink: 0;
        min-width: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px transparent;
        overflow:visible;

        &.special::before {
          content: '';
          // float: left;
          display: block;
          background-color: rgb(255, 255, 255);
          width: 15px;
          height: 15px;
          border-radius: 50%;
          position: absolute;
          left:-120%;
          overflow: visible;
          box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.7);
        }
      }
    }

    .frets {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-shrink: 0;
      // flex-basis: 0;

      .fret {
        display: flex;
        overflow: hidden;
        // flex-basis: 0;


      }

      &.frequency {
        position: absolute;
        width: 100%;
        height: 100%;

        .fret {
          overflow: initial;
        }
      }
    }

    .fret, .fret-label, .string {
      transition: all .5s;
    }
  }

  .bridge {
    display: flex;

    .string {
      border-width: 0;
      overflow-wrap: break-word;
    }

    & > .string {
      padding: 0;

      & .string {
        padding: 10px;
      }
    }
  }

  .fret.special:not(.frequency) {
    .string {
      background-color: #00000044;
    }
  }

  .string {
    border: black 1px solid;
    border-right-color: black;
    border-left-color: black;
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    display: flex;
    overflow: hidden;
    .string-info {
      overflow: hidden;
    }


    &.frequency {
      border: none;

      .string-frequency-box {
        width: 100%;
        height: 100%;
        z-index: 100;
      }
    }

    .popper {
      $popper-color: #444444f0;
      background-color: $popper-color;
      padding: .5rem 1rem;
      border-radius: 2px;
      z-index: 100;
      color: white;
      margin-bottom: .6rem;
      font-size: .8rem;
      border: none;
      box-shadow: none;

      &:after {
        top: 100%;
        left: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }

      &:after {
        border-top-color: #444444f0;
        border-width: .4rem;
        margin-left: -.4rem;
      }
    }
  }
}

.guitar.horizontal {
  height: 300px;
  flex-grow: 0;
  width: 100%;
  flex-direction: row;

  .fret-board {
    flex-direction: column;

    .frets {
      flex-direction: row;

      .fret {
        flex-direction: column-reverse;
      }
    }

    .fret-labels {
      flex-direction: row;
      width: 100%;
      height: auto;
      top: 103%;

      .fret-label {
        right: auto;
        &.special::before {
          left: calc(50% - 15px/2);
          bottom:-120%;
        }
      }
    }
  }

  .bridge {
    flex-direction: column-reverse;
  }
}

.fret-enter-active, .fret-leave-active {
  transition: all .5s;
}

.fret-enter, .fret-leave-to {
  flex-basis: 0 !important;
}
</style>