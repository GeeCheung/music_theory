var musictheory = {

    "Root" : {
        "C" : "C E G",
        "Db" : "C# F G#",
        "D" : "D F# A",
        "Eb" : "D# G A#",
        "E" : "E G# B",
        "F" : "F A C",
        "Gb" : "F# A# C#",
        "G" : "G B D",
        "Ab" : "G# C D#",
        "A" : "A C# E",
        "Bb" : "A# D F",
        "B" : "B D# F#",
    },
    "Relative_Minor" : {
        "C" : "Am",
        "Db" : "Bbm",
        "D" : "Bm",
        "Eb" : "Cm",
        "E" : "C#m",
        "F" : "Dm",
        "Gb" : "Ebm",
        "G" : "Em",
        "Ab" : "Fm",
        "A" : "F#m",
        "Bb" : "Gm",
        "B" : "G#m",
    }
}



function chordidentify(letter, chord) {

    
    if (letter && chord) {

        var Inversion = musictheory["Root"][letter];
        var myArray = Inversion.split(" ");

        if (chord == "Root"){
            return(`${chord} for ${letter} is ${myArray}`);
        }
        
        if (chord  != "Root") {

            if (chord == "first"){
              let firstValue = myArray.shift(0);
              myArray.push(firstValue);
              return(`${chord} inversion for ${letter} is ${myArray}`);
            } 
    
            if (chord == "second"){
              let secondValue = myArray.shift();
              myArray.push(secondValue);
              secondValue = myArray.shift();
              myArray.push(secondValue);
              return(`${chord} inversion for ${letter} is ${myArray}`);
              } 
        } 
    }

    if (letter && !chord){
        let Inversion = musictheory["Root"][letter];
        let myArray = Inversion.split(" ");
        return(`Root for ${letter} is ${myArray}`);
        }

}

chord = chordidentify("C","first")
console.log(chord)