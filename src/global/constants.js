const VALID_BLACK_KEYS = ["s", "d", "g", "h", "j"];
const VALID_WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
const NOTES = ["c", "df", "d", "ef", "e", "f", "gf", "g", "af", "a", "bf", "b"];

const NOTES2 = [
  "C",
  "C#",
  "D",
  "Eb",
  "E",
  "F",
  "F#",
  "G",
  "Ab",
  "A",
  "Bb",
  "B",
];

const NOTE_TO_KEY = {
  c: "z",
  df: "s",
  d: "x",
  ef: "d",
  e: "c",
  f: "v",
  gf: "g",
  g: "b",
  af: "h",
  a: "n",
  bf: "j",
  b: "m",
};

const KEY_TO_NOTE = {
  z: "c",
  s: "df",
  x: "d",
  d: "ef",
  c: "e",
  v: "f",
  g: "gf",
  b: "g",
  h: "af",
  n: "a",
  j: "bf",
  m: "b",
};

export { KEY_TO_NOTE, NOTES, NOTES2, NOTE_TO_KEY, VALID_KEYS };
