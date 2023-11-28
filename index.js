function sual(hobbi) {

    switch (hobbi) {
        case "maşın":
            return function (ad) {
                console.log(ad + " sənin maşının var?");
            }
            break

        case "kitab":
            return function (ad) {
                console.log(ad + " sən hansı janrda olan kitabları oxuyursan?");
            }
            break

        case "programist":
            return function (ad, dil) {
                console.log(ad + " sən " + dil + " programlama dilin sevirsən?");
            }
            break

        default:
            return function (ad) {
                console.log(ad + " yaxşı sənin heç nəyə marağın yoxdur?");
            }
    }
}
// 1)
let masinSual = sual("maşın")
masinSual("Elvin")

// 2)
let kitabSual = sual("kitab")
kitabSual("Nəzrin")
kitabSual("İsmayıl")

// 3)
let programistSual = sual("programist")
programistSual("Fuad", "Javascript")
programistSual("Zamiq", "Node.js")

// 4)

let defaultSual = sual("heçnə")
defaultSual("Orxan")