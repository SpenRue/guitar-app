import * as MusicDefs from "@/utils/MusicalDefinitions";
/* eslint-disable */


/**
 * @typedef {Object} Note
 * @property {number} index
 * @property {string} note
 * @property {number} octave
 * @property {number} frequency
 */

/**
 * Returns the name of a note given the fret and string
 * @param fret - The fret number
 * @param stringNumber - The string number
 * @returns {string} - The name of the note
 */
export function getNoteName(fret, stringNumber) {
    let noteIndex = fret + MusicDefs.STRING_OFFSET_MAP[stringNumber];
    if(Math.abs(noteIndex) >= 12)
        noteIndex = noteIndex % 12;

    if(noteIndex < 0)
        noteIndex = 12 + noteIndex;

    return MusicDefs.ALL_NOTES_IN_OCTAVE[noteIndex];
}

/**
 * The raw data for every note on the guitar
 * @returns {Note[]} notes
 */
export function generateNotes(count) {
    return [...Array(count)].map((_, index) => {
        const note = getNoteName(index, 0);
        const octave = Math.floor((index - MusicDefs.NOTE_C3_INDEX + 36) / 12);
        const aFrequency = 440 / Math.pow(2, 4 - octave)
        let positionInOctive = (index - MusicDefs.NOTE_C3_INDEX) % 12;
        if (positionInOctive < 0)
            positionInOctive = 12 + positionInOctive;

        const frequency = aFrequency * Math.pow(2, (-9 + positionInOctive) / 12);
        const noteData = {
            index,
            note,
            octave,
            frequency
        }
        return noteData;
    });
}

/**
 * Returns the Note object for a given fret and string given all the notes on the guitar.
 * @param notes - All the notes on the guitar
 * @param fret - The selected fret
 * @param stringNumber - The selected string;
 * @returns {{note: string, octave: number, index: number, frequency: number}|*}
 */
export function getNote(notes, fret, stringNumber = 0) {
    const note = MusicDefs.STRING_OFFSET_MAP[stringNumber] + fret + Math.abs(MusicDefs.STRING_OFFSET_MAP[0]); // Distance from lowest note, E1(-5)
    if(!notes || note >= notes.length)
        return {
            index: 0,
            note: '...',
            octave: 0,
            frequency: 0
        }
    return notes[note];
}