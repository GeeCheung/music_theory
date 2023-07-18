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

function getfith(note) {
    
    var Inversion = musictheory["Root"][note];
    var myArray = Inversion.split(" ");

        return(`${note} chord 5th note is ${myArray[2]}`);
    

}

getfithvalue = getfith("C")
console.log(getfithvalue)