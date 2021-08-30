
const fs = require('fs');

function tellCroatia(){
    

    let countrytowns = ['Osijek', 'Zagreb', 'Vukovar', 'Vinkovci', 'Aljmas']
    let seasidetowns = ["Split", "Dubrovnik", "Makarska", "Zadar", "Rovinj"]
    let nature = ["Plitvice Lakes", "Velebit National Park", "Mljet National Park", "Krka National Park"]
    
    
    const randomCountryTowns = countrytowns[Math.floor(Math.random() * countrytowns.length)];
    
    const randomSeasideTowns = seasidetowns[Math.floor(Math.random() * seasidetowns.length)];
     
    const randomNature = nature[Math.floor(Math.random() * nature.length)];
     
    //above creates random choice from the arrays and returns them  as random*
    
    //interpolate them all together 
    
    console.log(`If you love countryside, you should visit ${randomCountryTowns}.`)
    console.log(`Or if you\'re planning to visit seaside then ${randomSeasideTowns} is must see.`)
    console.log(`And last stop before going home is ${randomNature}, place of peace and natural beauty.`)

 }

function saveResult (tellCroatia) {
    fs.writeFile(process.cwd() + '/tellCroatia.txt', sentence  + '\r\n', {flag: 'a'}, err => {
        if (err) {
            console.error(err);
        }
    })
}


saveResult(tellCroatia());
 tellCroatia()
