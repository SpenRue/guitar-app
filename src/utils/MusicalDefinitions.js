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
    { ratio: 8/9, ratioString: '3:1', name: 'Major Second',  css: 'major-second' }, /* or 10:9 */
    { ratio: 5/6, ratioString: '6:5', name: 'Minor Third',   css: 'minor-third' },
    { ratio: 4/5, ratioString: '5:4', name: 'Major Third',   css: 'major-third' },
    { ratio: 3/4, ratioString: '4:3', name: 'Major Fourth',  css: 'major-fourth' },
    { ratio: 1/3, ratioString: '3:1', name: 'Major Fifth',   css: 'major-fifth' },
    { ratio: 5/8, ratioString: '8:5', name: 'Minor Sixth',   css: 'minor-sixth' },
    { ratio: 3/5, ratioString: '5:3', name: 'Major Sixth',   css: 'major-sixth' },
    { ratio: 8/15, ratioString: '15:8', name: 'Major Seventh',   css: 'major-seventh' },
    { ratio: 9/16, ratioString: '9:5', name: 'Minor Seventh', css: 'minor-seventh' }
];

export {
    SHARP,
    FLAT,
    MAIN_NOTES,
    ALL_NOTES_IN_OCTAVE,
    STRING_OFFSET_MAP,
    NOTE_C3_INDEX,
    INTERVAL_DEFINITIONS,
}