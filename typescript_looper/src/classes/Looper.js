"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        (this.playlist = {
            _1: _1,
            _2: _2,
            _3: _3,
            _4: _4,
            _5: _5,
            _6: _6,
            _7: _7,
            _8: _8,
            _9: _9
        }),
            (this.active = [_1]),
            (this.first = true);
    }
    Looper.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, current;
            return __generator(this, function (_b) {
                for (_i = 0, _a = this.active; _i < _a.length; _i++) {
                    current = _a[_i];
                    current.pause();
                    current.currentTime = 0;
                }
                return [2 /*return*/];
            });
        });
    };
    Looper.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, current, isPlaying;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.active;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        current = _a[_i];
                        isPlaying = current.currentTime > 0 &&
                            !current.paused &&
                            !current.ended &&
                            current.readyState > current.HAVE_CURRENT_DATA;
                        if (!!isPlaying) return [3 /*break*/, 3];
                        return [4 /*yield*/, current.play()["catch"](function (error) {
                                console.error(error);
                            })];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
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
    };
    return Looper;
}());
exports["default"] = Looper;
