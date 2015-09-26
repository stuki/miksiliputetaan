var test = ["02/28/2015",
            "05/01/2015",
            "05/10/2015",
            "06/04/2015",
            "06/20/2015",
            "12/06/2015",
            "02/05/2015",
            "03/19/2015",
            "04/09/2015",
            "04/27/2015",
            "05/09/2015",
            "05/12/2015",
            "05/17/2015",
            "07/06/2015",
            "10/10/2015",
            "10/24/2015",
            "11/06/2015",
            "11/08/2015",
            "12/08/2015",
            "02/28/2016",
            "05/01/2016",
            "05/08/2016",
            "06/04/2016",
            "06/25/2016",
            "12/06/2016",
            "02/05/2016",
            "03/19/2016",
            "04/09/2016",
            "04/27/2016",
            "05/09/2016",
            "05/12/2016",
            "05/15/2016",
            "07/06/2016",
            "10/10/2016",
            "10/24/2016",
            "11/06/2016",
            "11/13/2016",
            "12/08/2016",
            "02/28/2017",
            "05/01/2017",
            "05/14/2017",
            "06/04/2017",
            "06/24/2017",
            "12/06/2017",
            "02/05/2017",
            "03/19/2017",
            "04/09/2017",
            "04/27/2017",
            "05/09/2017",
            "05/12/2017",
            "05/21/2017",
            "07/06/2017",
            "10/10/2017",
            "10/24/2017",
            "11/06/2017",
            "11/12/2017",
            "12/08/2017"]

var today = Date.today()
var todayShort = today.toString("ddMM")

var flagdays = ["2802","Tänään on Kalevalan päivä, suomalaisen kulttuurin päivä!",
                "0105","Tänään on Vappu, suomalaisen työn päivä!",
                "0406","Tänään on Puolustusvoimain lippujuhlan päivä!",
                "0612","Tänään on Itsenäisyyspäivä!",
                "0502","Tänään on J.L. Runebergin päivä!",
                "1903","Tänään on Minna Canthin päivä, tasa-arvon päivä!",
                "0904","Tänään on Mikael Agricolan päivä, suomen kielen päivä!",
                "2704","Tänään on Kansallinen veteraanipäivä!",
                "0905","Tänään on Eurooppa-päivä!",
                "1205","Tänään on J.V. Snellmanin päivä, suomalaisuuden päivä!",
                "0607","Tänään on Eino Leinon päivä, runon ja suven päivä!",
                "1010","Tänään on Aleksis Kiven päivä, suomalaisen kirjallisuuden päivä!",
                "2410","Tänään on YK:n päivä!",
                "0611","Tänään on Ruotsalaisuuden päivä, Kustaa Aadolfin päivä!",
                "0812","Tänään on Jean Sibeliuksen päivä, suomalaisen musiikin päivä!"]

var midsummer = ["2006","2106","2206","2306","2406","2506","2606"]

function isXSunday (number, month) {
    if ( number == 2 ) {
        var sunday = Date.today().second().sunday()
        if ( +today == +sunday && today.getMonth() == month ) {
            return true
        } else { return false }
    } else if ( number == 3 ) {
        var sunday = Date.today().third().sunday()
        if ( +today == +sunday && today.getMonth() == month ) {
            return true
        } else { return false }
    }
}

function insertElements(name,title) {
    var css = document.createElement( "link" )
    css.href = name + ".css"
    css.type = "text/css"
    css.rel = "stylesheet"

    document.getElementsByTagName( "head" )[0].appendChild(css);
    $('#title').text(title)
}

if ( flagdays.indexOf(todayShort) > -1 ) {
    var css = document.createElement( "link" )
    css.href = todayShort + ".css"
    css.type = "text/css"
    css.rel = "stylesheet"

    document.getElementsByTagName( "head" )[0].appendChild(css);
    $('#title').text( flagdays[flagdays.indexOf(todayShort) + 1] )
}
else if ( midsummer.indexOf(todayShort) > -1 ) {
    if ( today.getDay() == 6 ) {
        insertElements("jussi", "Tänään on Juhannus, Suomen lipun päivä!")
    }
    else {
        insertElements("no_flag", "Tänään ei ole liputuspäivä")
    }
}
else if ( isXSunday(3,4) ) {
    insertElements("muisto", "Tänään on Kaatuneitten muistopäivä")
}
else if ( isXSunday(2,4) ) {
    insertElements("aiti", "Tänään on Äitienpäivä!")
}
else if ( isXSunday(2,10) ) {
    insertElements("isa", "Tänään on Isänpäivä!")
}
else {
    insertElements("no_flag", "Tänään ei ole liputuspäivä")
}
