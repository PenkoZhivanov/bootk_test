var episode = 1;
var hero = new Hero();
hero.create(10, 16, 25, 30, 10);
hero.showBars();
var subject = new Thing();
subject.construct(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12);

go(1);


// for test only !

r_content.innerHTML = episodes[episode];
r_content_th.innerHTML = "Епизод " + episode;

showInventar();

function tt(vis, episode) {
    vis == 1 ? document.getElementById("tooltip").innerHTML = episode : document.getElementById("tooltip").innerHTML = "";
}

function addToInventar(item) {
    let sum = 0;
    inventar.forEach(element => { sum += element[teglo]; })
    if (sum + sets[episode][item][teglo] * sets[episode][item][broi] > inventar_mass) {
        alert('Прекалено тежко!');
        sum = 0;
        return;
    }

    inventar.push(sets[episode][item]);
    sets[episode][item][visible] = 0;
    go(episode);
    showInventar();
}


function go(epi) {
    r_content_th.innerHTML = "Епизод " + epi;
    console.log(sets[epi]);
    if (sets[epi]) {
        var output = "<table id='table_found' onmouseleave='tt(2);'><tr><th>Име</th><th>Тегло</th><th>Брой</th><th></th></tr>";
        for (var i = 0; i < sets[epi].length; i++) {
           
            if (sets[epi][i][visible] == 0) continue;
            output = `${output}<tr ><td class="bor" onmouseover="tt(1,'${sets[epi][i][item_detail]}');"> ${sets[epi][i][1]}</td><td > ${sets[epi][i][teglo]}</td><td > ${sets[epi][i][broi]}</td><td><button class='get' onclick='addToInventar(${i})'>Вземи</button></td></tr>`;
        }
        found.innerHTML = output + "</table>";

    }
    episode = epi;
    r_content.innerHTML = episodes[episode];
}

function showInventar() {
    let output = "<table id='table_inventar' onmouseleave='tt(2);'><tr><th>Име</th><th>Тегло</th><th></th></tr>";
    //inventar.forEach(element=>{sum+=element[teglo];});
    for (let i = 0; i < inventar.length; i++) {
        let usable = "Екипирай";
        if (inventar[i][isUsable]) { usable = "<b class='bgreen'>Използвай</b>";}
        output = `${output}<tr ><td class="bor" onmouseover="tt(1,'${inventar[i][item_detail]}');"> ${inventar[i][item_name]}</td><td > ${inventar[i][teglo]}</td><td><button class='get' onclick='equip(${i})'>${usable}</button><button class='remove' onclick='removeFromInventar(${i})'>Изхвърли</button></td></tr>`;
    }

    inventar_table.innerHTML = output + "</table>";
}

function removeFromInventar(item) {
    var isInCurrentEpisode = false;
    if (sets[episode]) {
        sets[episode].forEach(
            function (element) {
                if (inventar[item][id] == element[id]) {
                    element[visible] = 1;
                    isInCurrentEpisode = true;
                }
            });

    }

    if (!isInCurrentEpisode) {
        sets[episode].push(inventar[item]);
        sets[episode][item][visible]=1;
    }

    inventar.splice(item, 1);
    showInventar();
    go(episode);
}

function equip(item){
    
    if(inventar[item][isUsable]) {
         hero.setMana(inventar[item][item_life]);
         hero.showBars();
    } else {
        console.log("no");
    }

}