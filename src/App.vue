<!-- eslint-disable -->
<template>
  <div id="app">
    <div class="is-flex options shadow">
      <button class="button is-danger"  @click="realFretSpacing = !realFretSpacing">{{realFretSpacing ? 'Real' : 'Equal'}} Fret Spacing</button>
      <button class="button is-danger" @click="isVertical = !isVertical">{{isVertical ? 'Vertical': 'Horizontal'}}</button>
      <input class="slider is-fullwidth is-large is-circle" type="range" step="1" min="16" max="26" v-model="fretCount"/>
      <div class="info">
        <div>Chord Info: </div>
        <div>Major: <span class="selected">Root</span>, <span class="major-third">Major Third</span>, <span class="major-fifth">Major Fifth</span></div>
        <div>Minor: <span class="selected">Root</span>, <span class="minor-third">Minor Third</span>, <span class="major-fifth">Major Fifth</span></div>
        <div>Major Seventh: <span class="selected">Root</span>, <span class="major-third">Major Third</span>, <span class="major-seventh">Major Seventh</span></div>
        <div>Minor Seventh: <span class="selected">Root</span>, <span class="minor-third">Minor Third</span>, <span class="major-fifth">Major Fifth</span>, <span class="minor-seventh">Minor Seventh</span></div>
        
      </div>
    </div>
    <div class="guitar" :class="{horizontal: !isVertical}">
      <div class="bridge">
          <tooltip trigger="hover" v-for="i in getNItems(6)" :key="i" class="string" :options="{placement:'top', delayOnMouseOut: 0}"
            :class="getStringClass(getNote(0, i))">
            <div class="popper" ref="popper">
              {{Math.round(getNote(0, i).frequency * 10)/10 }}hz
              <p>{{getNoteInfo(getNote(0, i)) ? getNoteInfo(getNote(0, i)).name : ''}}</p>
            </div>
            <div class="string" slot="reference"
              @click="setSelectedNote(getNote(0, i))">
                {{ getNote(0, i).note.toUpperCase() + getNote(0, i).octave}}
            </div>
          </tooltip>
        </div>
      <component :is="'style'">
          .guitar .fret-board::before {
            border-{{isVertical ? 'bottom': 'right'}}-width: {{boardSize}}px;
          }
      </component>
      <div class='fret-board' ref="fretBoard">
        <div class="fret-labels">
            <transition name="fret" v-for="i in frets" :key="i" appear>
              <div class="fret-label" :style="`flex-basis: ${(realFretSpacing ? getStringStrength(i) / totalFretStrength: 1 / fretCount) * 100}%`">{{i + 1}}</div>
            </transition>
        </div>
        <div class="frets shadow">
          <transition name="fret" v-for="i in frets" :key="i" appear>
            <div class="fret" 
                :class="{'special': specialFret.includes(i + 1)}" 
                :style="`flex-basis: ${(realFretSpacing ? getStringStrength(i) / totalFretStrength: 1 / fretCount) * 100}%`">
              
              <div class="string" v-for="j in getNItems(6)" :key="j" 
                  :class="getStringClass(getNote(i + 1, j))">
                <p class="string-info">
                  {{ getNote(i + 1, j).note.toUpperCase() + getNote(i + 1, j).octave}}
                </p>
              </div>
            </div>
          </transition>
        </div>
        <div class="frets frequency">
          <transition name="fret" v-for="i in frets" :key="i" appear>
            <div class="fret frequency"  
                  :style="`flex-basis: ${(realFretSpacing ? getStringStrength(i) / totalFretStrength: 1 / fretCount) * 100}%`">
                <tooltip trigger="hover" v-for="j in getNItems(6)" :key="j" class="string frequency" :options="{placement:'top', delayOnMouseOut: 0}">
                  <div class="popper" ref="popper">
                    {{Math.round(getNote(i + 1, j).frequency * 10)/10 }}hz
                    <p>{{getNoteInfo(getNote(i + 1, j)).name}}</p>
                  </div>
                  <div class="string-frequency-box" slot="reference"
                    @click="setSelectedNote(getNote(i + 1, j))">
                  </div>
                </tooltip>
              </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Tooltip from './components/tooltip.vue';

// let n = (a, b) => `${a}${SHARP}${b}${FLAT}`;
Array.prototype.j = function(c) {
  let result = [];
  this.forEach(function(x, i) {
    if(this.length === 1)
    { 
      result.push(x[i]);
      return;
    }

    if(i === this.length - 1)
      return;
    
    if(i === 0)
      result.push(this[i]);

    let cResult = c(this[i], this[i + 1]);
    if(cResult !== false)
      result.push(cResult);

    result.push(this[i + 1]);
  }.bind(this));
  return result;
} 

// const MAGIC_NUMBER = 17.817;

const SHARP = '♯';
const FLAT = '♭';
const MAIN_NOTES = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g'
];
const ALL_NOTES_IN_OCTAVE = [...MAIN_NOTES.j((a, b) => a === 'b' || a == 'e' ? false : `${a}${SHARP}${b}${FLAT}`), `g${SHARP}a${FLAT}`];
const STRING_OFFSET_MAP = [-5, 0, 5, 10, 14, 19];
const NOTE_C3_INDEX = 8; // Index of the note C3 out of all unique notes available of the guitar, from E2, the lowest note on the board.
const INTERVAL_DEFINITIONS = [ 
  { ratio: 1,   ratioString: '1:1', name: 'Root',          css: 'selected'},
  { ratio: 1/3, ratioString: '3:1', name: 'Major Fifth',   css: 'major-fifth' },
  { ratio: 1/4, ratioString: '4:1', name: 'Major Fourth',  css: 'major-fourth' },
  { ratio: 4/5, ratioString: '5:4', name: 'Major Third',   css: 'major-third' },
  { ratio: 3/5, ratioString: '5:3', name: 'Major Sixth',   css: 'major-sixth' },
  { ratio: 5/6, ratioString: '6:5', name: 'Minor Third',   css: 'minor-third' },
  { ratio: 5/9, ratioString: '9:5', name: 'Minor Seventh', css: 'minor-seventh' },
]

export default {
  components: {
    Tooltip
  },
  data() {
    return {
      fretCount: 22,
      notesInOctave: ALL_NOTES_IN_OCTAVE,
      realFretSpacing: true,
      isVertical: true,
      boardSize: 0,
      selectedNote: null
    };
  },
  computed: {
    frets() {
      return [...Array(Number(this.fretCount)).keys()];
    },
    stringStrengths() {
      let stringStrengths = new Array(Number(this.fretCount));
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
    fretBoardWidth() {
      if(!this.rendered) {
        console.log('not rendered yet');
        return;
      }
      
      //eslint-disable-next-line
      console.log('rendered');
      
      //eslint-disable-next-line
      console.log(this.$refs.fretBoard.offsetWidth);
      if(this.isVertical) return this.$refs.fretBoard.offsetHeight;
      else return this.$refs.fretBoard.offsetWidth;
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
      const startingRange = Math.abs(STRING_OFFSET_MAP[0]) + STRING_OFFSET_MAP[5];
      return startingRange + Number(this.fretCount) + 1;
    },
    notes() {
      return [...Array(this.noteRange)].map((_, index) => {
        const note = this.getNoteFromOctave(index, 0);
        const octave  = Math.floor((index - NOTE_C3_INDEX + 36) / 12);
        const aFrequency = 440 / Math.pow(2, 4 - octave)
        let positionInOctive = (index - NOTE_C3_INDEX) % 12;
        if(positionInOctive < 0)
          positionInOctive = 12 + positionInOctive;

        const frequency = aFrequency * Math.pow(2, (-9 + positionInOctive) / 12);
        // console.log(`Index: ${index} Note: ${note} aFrequency: ${aFrequency} positionInOctave: ${positionInOctive}`);
        // console.log(`Index: ${index} Note: ${note} Octave: ${octave} Frequency: ${Math.floor(frequency)}`);
        const noteData = {
          index,
          note,
          octave,
          frequency
        }
        return noteData;
      });
    },
  },
  methods: {
    getStringStrength(n) {
      if(this.stringStrengths.length - 1 < n)
        return 0;

      return this.stringStrengths[n];
    },
    fretCountChanged(e) {
      let newValue = [...new Array(e.srcElement.valueAsNumber).keys()];
      this.frets = newValue;
    },
    getNItems(n) {
      return [...Array(Number(n)).keys()];
    },
    getNoteFromOctave(n, stringNumber) {
      n += STRING_OFFSET_MAP[stringNumber];

      if(Math.abs(n) >= 12)
        n = n % 12;

      if(n < 0)
        n = 12 + n;

      return this.notesInOctave[n];
    },
    getNote(n, stringNumber = 0) {
      n = STRING_OFFSET_MAP[stringNumber] + n + Math.abs(STRING_OFFSET_MAP[0]); // Distance from lowest note, E1(-5)
      if(!this.notes || n >= this.notes.length)
        return {
          index: 0,
          note: '...',
          octave: 0,
          frequency: 0
        }
      return this.notes[n];
    },
    setSelectedNote(note) {
      this.selectedNote = note;
    },
    isMatch(ratio, threshold) {
      if(ratio < .5 + (threshold / 2))
        ratio = ratio * 2;
      const remainder = ratio % 1;
      const difference = remainder > .5 ? 1 - remainder : remainder;
      const result = difference < threshold;
      // console.log(`isMatch ratio: ${ratio} remainder: ${remainder} difference: ${difference} result: ${result}`);
      return {result, difference};
    },
    getStringClass(note) {
      if(!note || !note.note || !this.selectedNote || !this.selectedNote.note)
        return {};
      
      const relatedNotes = [];
      for(let i = 0; i < INTERVAL_DEFINITIONS.length; i++) {
        let relatedNote;
        if(INTERVAL_DEFINITIONS[i].name === 'Root')
          relatedNote = note.note === this.selectedNote.note;
        else
          relatedNote = this.getRelatedNote(INTERVAL_DEFINITIONS[i].ratio, note.index);

        if(relatedNote) {
          relatedNotes.push({...INTERVAL_DEFINITIONS[i], difference: relatedNote.difference});
        }
      }

      relatedNotes.sort((a, b) => a.difference - b.difference  === 0 ? a.ratio - b.ratio : a.difference - b.difference);
      if(relatedNotes.length > 0) {
        console.log(note.note + note.octave);
        console.log(relatedNotes);
        return {[relatedNotes[0].css]: relatedNotes[0]};
      }

      return {};
    },
    getRelatedNote(noteRatio, matchNoteIndex) {
      if(!this.notes || !this.selectedNote)
        return [];
      
      let difference;
      const namedNotes = this.notes.filter(x => {
        const currentRatio = this.selectedNote.frequency / x.frequency;
        const result = (currentRatio / noteRatio);
        const match = this.isMatch(result, .02);
        // console.log(`this.selectedNoteFrequency: ${this.selectedNote.frequency} x.frequency: ${x.frequency} ratio: ${ratio} result: ${result} match: ${match}`);
        if(match.result) {
          difference = match.difference;
          // console.log(match.difference);
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

      let noteInfo = {name:''};

      let relatedNotes = [];
      for(let i = 0; i < INTERVAL_DEFINITIONS.length; i++) {
        let relatedNote;
        if(INTERVAL_DEFINITIONS[i].name === 'Root')
          relatedNote = note.note === this.selectedNote.note;
        else
          relatedNote = this.getRelatedNote(INTERVAL_DEFINITIONS[i].ratio, note.index);
        
        if(relatedNote) {
          // console.log(`note: ${note.note} definition[${i}]: ${JSON.stringify(INTERVAL_DEFINITIONS[i])} selectedNote: ${this.selectedNote.note} relatedNote: ${JSON.stringify(relatedNote)}`);
          // noteInfo.name += (noteInfo.name.split(' ').length > 1 ? ', ' : '') + INTERVAL_DEFINITIONS[i].name;
          relatedNotes.push({...INTERVAL_DEFINITIONS[i], difference: relatedNote.difference});
        }
      }
      relatedNotes.sort((a, b) => a.difference - b.difference  === 0 ? a.ratio - b.ratio : a.difference - b.difference);
      if(relatedNotes.length > 0) {
        // console.log('noteInfo' + note.note + note.octave);
        // console.log(relatedNotes);
        return relatedNotes[0];
      }
      return {}; //noteInfo
    }
  },
  mounted() {
    this.boardSize = this.isVertical ? this.$refs.fretBoard.offsetHeight : this.$refs.fretBoard.offsetWidth;
    console.log(this.$refs);
    this.$refs.popper.forEach(x => {
      x.onmouseout
    });
  },
  updated() {
    this.boardSize = this.isVertical ? this.$refs.fretBoard.offsetHeight : this.$refs.fretBoard.offsetWidth;
  },
  created() {
    // let index = 0;
    // setInterval((() => {
    //   console.log('hello!');
    //   this.setSelectedNote(this.getNote(index, 0));
    //   if(index > this.fretCount)
    //     index = 0;
    //   else
    //     index++;
    // }).bind(this), 800);
  }
}
</script>

<style lang="scss">
@import 'bulma';

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
        border: 1px solid tra;
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

      // .fret.frequency {
      //   position: relative;
      // }
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

.selected {
  background-color: rgb(255, 149, 172) !important;
}

.major-fifth:not(.selected) {
  background-color: rgb(255, 200, 149) !important;
}

.major-fourth:not(.selected) {
  background-color: rgb(239, 255, 149) !important;
}

.major-third:not(.selected) {
  background-color: rgb(174, 255, 149) !important;
}

.major-sixth:not(.selected) {
  background-color: rgb(149, 255, 197) !important;
}

.minor-third:not(.selected) {
  background-color: rgb(149, 165, 255) !important;
}

.minor-seventh:not(.selected) {
  background-color: rgb(207, 149, 255) !important;
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
  flex-basis: 0.0000 !important;
}

.shadow {
  box-shadow: 0px 0px 30px #00000066;
}

</style>
