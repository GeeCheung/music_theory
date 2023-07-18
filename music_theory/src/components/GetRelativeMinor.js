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


function RelativeMinor(note) {
    
    var relative = musictheory["Relative_Minor"][note];

    if (note) {
        return(`${note} relative minor is ${relative}`);
    }

}


RelativeMinor = RelativeMinor("C")
console.log(RelativeMinor)


