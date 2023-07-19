const Info = ({ }) => {
  return (
    <div>
     <h3>Diatonic chords</h3>
        <p>A chord which is diatonic is simply a chord built from notes of the key.
           In the key of C again (C, D, E, F, G, A and B), the chord C major (C, E, G) would be 
           diatonic to the key of C because its 3 notes are part of the C major scale.</p>
        <p>major I, minor ii, minor iii, major IV, major V, minor vi, and diminished vii </p>
        <p>minor i, diminished ii, major III, minor iv, minor v, major VI, and major VII</p>
        <h3>Chromatic chords</h3>
        <p>A chromatic chord is a chord that contains at least one note that is not native 
          to the key of your song.</p>
        <h3>Augmented chords</h3>
        <p>An augmented chord is a triad with a sharpened fifth – 
          that is, a fifth note, raised one semitone. So an augmented C would play C – E – G#.</p>
        <h3>Diminished chords</h3>
        <p>Diminished chords have a flat fifth degree compared to a
           minor chord, so the formula for a diminished triad is always 1 – ♭3 – ♭5.</p>
        <h3>7th chords</h3>
        <p> seventh chord is a chord consisting of a triad plus a note 
          forming an interval of a seventh above the chord's root.</p>
        <br></br>
    </div>
  );
};

export default Info;
