console.log('You.ve done it! Kudos!');


let predict = {
    quote1: [' win',' lose',' find',' waste',' give'],
    quote2: [' 0', ' 100', ' 1000', ' 100000',' 50' ],
    quote3: ['$ today!','$ tomorrow!','$ the day after tomorrow!', '$ one day!', '$ after 15 minutes!']
}


let rndQuote = (obj) => {
    let phrase = '';
    for(let prop in obj){
        let rnd = Math.floor(Math.random() * 5);
        phrase += obj[prop][rnd];
    }
    console.log(`You will${phrase}`); 
}

rndQuote(predict);
