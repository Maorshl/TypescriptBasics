"use strict";
exports.__esModule = true;
var guitar = require("../sounds/electric guitar coutry slide 120bpm - B.mp3");
var stutter = require("../sounds/120_stutter_breakbeats_16.mp3");
var bass = require("../sounds/Bass Warwick heavy funk groove on E 120 BPM.mp3");
var funk = require("../sounds/120_future_funk_beats_25.mp3");
var fud = require("../sounds/FUD_120_StompySlosh.mp3");
var groove = require("../sounds/GrooveB_120bpm_Tanggu.mp3");
var maze = require("../sounds/MazePolitics_120_Perc.mp3");
var groove1 = require("../sounds/PAS3GROOVE1.03B.mp3");
var synth = require("../sounds/SilentStar_120_Em_OrganSynth.mp3");
// Turning the audio files to audio objects.
var _1 = new Audio(guitar);
var _2 = new Audio(stutter);
var _3 = new Audio(bass);
var _4 = new Audio(funk);
var _5 = new Audio(fud);
var _6 = new Audio(groove);
var _7 = new Audio(maze);
var _8 = new Audio(groove1);
var _9 = new Audio(synth);
var Looper = /** @class */ (function () {
    function Looper() {
        this.playlist = {
            _1: _1,
            _2: _2,
            _3: _3,
            _4: _4,
            _5: _5,
            _6: _6,
            _7: _7,
            _8: _8,
            _9: _9
        };
        this.active = [];
        this.first = true;
    }
    Looper.prototype.stop = function () {
        console.log("Stopped", this.active);
    };
    Looper.prototype.start = function () {
        console.log("Playing: " + this.active);
    };
    // the add loop method to add a sound to next loop or if it is already in the loop remove it.
    Looper.prototype.addLoop = function (song) {
        var _this = this;
        var _a;
        // If its the first sound adding an event listener, when the cycle ends to start over.
        if (!this.active.length) {
            (_a = this.playlist[song]) === null || _a === void 0 ? void 0 : _a.addEventListener("ended", function () {
                _this.stop();
                _this.start();
            });
        }
        // If the sound is not active, push to active.
        if (this.active.indexOf(this.playlist[song]) === -1) {
            this.active.push(this.playlist[song]);
        }
        else if (
        // else if the sound is the first but not the only one
        this.active.indexOf(this.playlist[song]) === 0 &&
            this.active.length > 1) {
            this.removeLoop(song); // remove the sound from active
            this.active[0].addEventListener("ended", function () {
                // adds a new event listener to the new first (for the loop to go on)
                _this.stop();
                _this.start();
            });
        }
        else if (
        // else if its the first and only one
        this.active.indexOf(this.playlist[song]) === 0 &&
            this.active.length === 1) {
            this.removeLoop(song); // remove from active.
            // this.first = true; // sets first to true. to know in the next time to immediately start to play.
        }
        else
            this.removeLoop(song);
        if (this.active.length === 1 && this.first) {
            // if it is the first one added start playing.
            this.start();
            this.first = false; // sets first to false to know next time not to play immediately.
        }
    };
    // Remove loop method to remove a sound from active and stop and rewind it.
    Looper.prototype.removeLoop = function (song) {
        var index = this.active.indexOf(this.playlist[song]); // index in the active to remove
        this.active[index].pause();
        this.active[index].currentTime = 0;
        if (index > -1) {
            this.active.splice(index, 1);
        }
        if (!this.active.length) {
            this.first = true;
        }
        console.log(this.active);
    };
    return Looper;
}());
exports["default"] = Looper;
