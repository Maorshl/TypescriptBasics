const guitar = require("../sounds/electric guitar coutry slide 120bpm - B.mp3");
const stutter = require("../sounds/120_stutter_breakbeats_16.mp3");
const bass = require("../sounds/Bass Warwick heavy funk groove on E 120 BPM.mp3");
const funk = require("../sounds/120_future_funk_beats_25.mp3");
const fud = require("../sounds/FUD_120_StompySlosh.mp3");
const groove = require("../sounds/GrooveB_120bpm_Tanggu.mp3");
const maze = require("../sounds/MazePolitics_120_Perc.mp3");
const groove1 = require("../sounds/PAS3GROOVE1.03B.mp3");
const synth = require("../sounds/SilentStar_120_Em_OrganSynth.mp3");

// Turning the audio files to audio objects.
const _1 = new Audio(guitar);
const _2 = new Audio(stutter);
const _3 = new Audio(bass);
const _4 = new Audio(funk);
const _5 = new Audio(fud);
const _6 = new Audio(groove);
const _7 = new Audio(maze);
const _8 = new Audio(groove1);
const _9 = new Audio(synth);

type Playlist = {
  _1: HTMLAudioElement;
  _2: HTMLAudioElement;
  _3: HTMLAudioElement;
  _4: HTMLAudioElement;
  _5: HTMLAudioElement;
  _6: HTMLAudioElement;
  _7: HTMLAudioElement;
  _8: HTMLAudioElement;
  _9: HTMLAudioElement;
};

type SongName = "_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7" | "_8" | "_9";

export default class Looper {
  active: HTMLAudioElement[];
  playlist: Playlist;
  first: boolean;
  constructor() {
    (this.playlist = {
      _1,
      _2,
      _3,
      _4,
      _5,
      _6,
      _7,
      _8,
      _9,
    }),
      (this.active = [_1]),
      (this.first = true);
  }

  async stop() {
    for (let current of this.active) {
      current.pause();
      current.currentTime = 0;
    }
  }

  async start() {
    for (let current of this.active) {
      const isPlaying =
        current.currentTime > 0 &&
        !current.paused &&
        !current.ended &&
        current.readyState > current.HAVE_CURRENT_DATA;
      // because there is sometimes an error that the pause() was interrupted by the play() I tried to make sure the sound is paused.
      // It is sometimes still show that error and I know its because the pause() and play() are asynchronous but I didn't manage to completely solve it.
      if (!isPlaying) {
        await current.play().catch((error) => {
          console.error(error);
        });
      }
    }
  }
  // the add loop method to add a sound to next loop or if it is already in the loop remove it.
  addLoop(song: SongName) {
    // If its the first sound adding an event listener, when the cycle ends to start over.
    if (!this.active.length) {
      this.playlist[song]?.addEventListener("ended", () => {
        this.stop();
        this.start();
      });
    }
    // If the sound is not active, push to active.
    if (this.active.indexOf(this.playlist[song]) === -1) {
      this.active.push(this.playlist[song]);
    } else if (
      // else if the sound is the first but not the only one
      this.active.indexOf(this.playlist[song]) === 0 &&
      this.active.length > 1
    ) {
      this.removeLoop(song); // remove the sound from active
      this.active[0].addEventListener("ended", () => {
        // adds a new event listener to the new first (for the loop to go on)
        this.stop();
        this.start();
      });
    } else if (
      // else if its the first and only one
      this.active.indexOf(this.playlist[song]) === 0 &&
      this.active.length === 1
    ) {
      this.removeLoop(song); // remove from active.
      // this.first = true; // sets first to true. to know in the next time to immediately start to play.
    } else this.removeLoop(song);
    if (this.active.length === 1 && this.first) {
      // if it is the first one added start playing.
      this.start();
      this.first = false; // sets first to false to know next time not to play immediately.
    }
  }

  // Remove loop method to remove a sound from active and stop and rewind it.
  removeLoop(song: SongName) {
    const index = this.active.indexOf(this.playlist[song]); // index in the active to remove
    this.active[index].pause();
    this.active[index].currentTime = 0;
    if (index > -1) {
      this.active.splice(index, 1);
    }
    if (!this.active.length) {
      this.first = true;
    }
  }
}
