var today = Date.today().toString("ddMM")

var flagdays = ["2802","0105","0406","0612","0502","1903","2704","0905","1205","0607","1010","2410","0611","0812"]

function getDayOfMonth(d) {
    var da = new Date(d)
    return Math.floor((da.getDate()-1)/7)
}

function isXSunday (day, month) {
    var whichmonth = Date.today().getMonth()

    if (getDayOfMonth(day) == 7 && whichmonth == month) {
        return true
        console.log("pls");
    }
}


if ( flagdays.indexOf(today) > -1 ) {
    var css = document.createElement( "link" )
    css.href = today + ".css"
    css.type = "text/css"
    css.rel = "stylesheet"

    document.getElementsByTagName( "head" )[0].appendChild(css);
}
else if ( today == isXSunday(3, 05) ) {
    var css = document.createElement( "link" )
    css.href = "muisto.css"
    css.type = "text/css"
    css.rel = "stylesheet"

    document.getElementsByTagName( "head" )[0].appendChild(css);
    $('#title').text("Tänään on kaatuneitten muistopäivä")
}
else if ( today == isXSunday(2, 05) ) {
    var css = document.createElement( "link" )
    css.href = "aitien.css"
    css.type = "text/css"
    css.rel = "stylesheet"

    document.getElementsByTagName( "head" )[0].appendChild(css);
    $('#title').text("Tänään on äitienpäivä")
}
else if ( today == isXSunday(2, 11) ) {
    var css = document.createElement( "link" )
    css.href = "isa.css"
    css.type = "text/css"
    css.rel = "stylesheet"

    document.getElementsByTagName( "head" )[0].appendChild(css);
    $('#title').text("Tänään on isänpäivä!")
}
else {
    var css = document.createElement( "link" )
    css.href = "no_flag.css"
    css.type = "text/css"
    css.rel = "stylesheet"

    document.getElementsByTagName( "head" )[0].appendChild(css);
    $('#title').text("Tänään ei ole liputuspäivä")
}
