var today = Date.today()

function juhannus() {
    var jun = Date.parse("Jun 01"), start = Date.parse("Jun 20"), stop = Date.parse("Jun 26"), i = 1
    while (i < 5) {
        if (jun.moveToNthOccurrence(6, i).between(start, stop)) {
            return jun.moveToNthOccurrence(6, i)
        }
        i++
    }
}

var flagdays = {
                "Kalevalan päivä": {
                    date: Date.parse("Feb 28"),
                    title: "Tänään on Kalevalan päivä, suomalaisen kulttuurin päivä!",
                    filename: "kalevala" },
                "Vappu": {
                    date: Date.parse("May 01"),
                    title: "Tänän on Vappu, suomalaisen työn päivä!",
                    filename: "vappu" },
                "Puolustusvoimain lippujuhlan päivä": {
                    date: Date.parse("Jun 04"),
                    title: "Tänään on Puolustusvoimain lippujuhlan päivä!",
                    filename: "puolustusvoima" },
                "Itsenäisyyspäivä": {
                    date: Date.parse("Dec 06"),
                    title: "Tänään on Itsenäisyyspäivä!",
                    filename: "itsenaisyys" },
                "J.L. Runebergin päivä": {
                    date: Date.parse("Feb 05"),
                    title: "Tänään on J.L. Runebergin päivä!",
                    filename: "runeberg" },
                "Minna Canthin päivä": {
                    date: Date.parse("Mar 19"),
                    title: "Tänään on Minna Canthin päivä, tasa-arvon päivä!",
                    filename: "canth" },
                "Mikael Agricolan päivä": {
                    date: Date.parse("Apr 09"),
                    title: "Tänään on Mikael Agricolan päivä, suomen kielen päivä!",
                    filename: "agricola" },
                "Kansallinen veteraanipäivä": {
                    date: Date.parse("Apr 27"),
                    title: "Tänään on Kansallinen veteraanipäivä!",
                    filename: "veteraanipaiva" },
                "Eurooppa-päivä": {
                    date: Date.parse("May 09"),
                    title: "Tänään on Eurooppa-päivä!",
                    filename: "eurooppa" },
                "J.V. Snellmanin päivä": {
                    date: Date.parse("May 12"),
                    title: "Tänään on J.V. Snellmanin päivä, suomalaisuuden päivä!",
                    filename: "snellman" },
                "Eino Leinon päivä": {
                    date: Date.parse("Jul 06"),
                    title: "Tänään on Eino Leinon päivä, runon ja suven päivä!",
                    filename: "leino" },
                "Aleksis Kiven päivä": {
                    date: Date.parse("Oct 10"),
                    title: "Tänään on Aleksis Kiven päivä, suomalaisen kirjallisuuden päivä!",
                    filename: "aleksiskivi" },
                "YK:n päivä": {
                    date: Date.parse("Oct 24"),
                    title: "Tänään on YK:n päivä!",
                    filename: "yk" },
                "Ruotsalaisuuden päivä": {
                    date: Date.parse("Nov 06"),
                    title: "Tänään on Ruotsalaisuuden päivä, Kustaa Aadolfin päivä!",
                    filename: "ruotsalaisuus" },
                "Jean Sibeliuksen päivä": {
                    date: Date.parse("Dec 08"),
                    title: "Tänään on Jean Sibeliuksen päivä, suomalaisen musiikin päivä!",
                    filename: "sibelius" },
                "Kaatuneitten muistopäivä": {
                    date: Date.parse("May 01").moveToNthOccurrence(0,3),
                    title: "Tänään on Kaatuneitten muistopäivä",
                    filename: "kaatuneitten_muistopaiva" },
                "Äitienpäivä": {
                    date: Date.parse("May 01").moveToNthOccurrence(0,2),
                    title: "Tänään on Äitienpäivä!",
                    filename: "aitienpaiva" },
                "Isänpäivä": {
                    date: Date.parse("Nov 01").moveToNthOccurrence(0,2),
                    title: "Tänään on Isänpäivä!",
                    filename: "isanpaiva" },
                "Juhannus": {
                    date: juhannus(),
                    title: "Tänään on Juhannus, Suomen lipun päivä!",
                    filename: "juhannus" },
                "no_flag": {
                    date: null,
                    title: "Tänään ei ole liputuspäivä",
                    filename: "no_flag" }
                }

function insertElements(name, title) {
    var css = document.createElement( "link" )
        css.href = name + ".css"
        css.type = "text/css"
        css.rel = "stylesheet"

    document.getElementsByTagName( "head" )[0].appendChild(css);
    $('#title').text(title)
}

Object.keys(flagdays).forEach(function (key) {
    var flagday = flagdays[key], date = flagday.date
    if (+today == +date) {
        insertElements(flagday.filename, flagday.title)
    } else if ( document.getElementById('title').innerHTML.length == 0 ) {
        insertElements(flagdays["no_flag"].filename, flagdays["no_flag"].title)
    }
})
