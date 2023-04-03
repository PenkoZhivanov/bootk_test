var episode = 1;
var hero = new Hero();
hero.create(10, 16, 25, 30, 10,5,2,1,0,0,0,0,1);
hero.showBars();

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
        alert('Достигнат лимит на инвентар!');
        sum = 0;
        return;
    }

    inventar.push(sets[episode][item]);
    sets[episode][item][visible] = 0;
    go(episode);
    showInventar();
}

function showInventar() {
    let output = tableForItems;
    //inventar.forEach(element=>{sum+=element[teglo];});
    for (let i = 0; i < inventar.length; i++) {
        let usable = "Екипирай";
        if (inventar[i][isUsable]) { usable = "<b class='bgreen'>Използвай</b>"; }
        output = `${output}<tr ><td class="bor" onmouseover="tt(1,'${inventar[i][item_detail]}');"> ${inventar[i][item_name]}</td><td > ${inventar[i][teglo]}</td><td>${inventar[i][broi]}</td><td><button class='get' onclick='equiping(${i})'>${usable}</button><button class='remove' onclick='removeFromInventar(${i})'>Изхвърли</button></td></tr>`;
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
console.log(isInCurrentEpisode);

 if (!isInCurrentEpisode) {
        inventar[item][visible]=1;
        sets[episode].push(inventar[item]);
        console.log(sets[episode]);
     }
 
    inventar.splice(item, 1);
    showInventar();
    go(episode);
}


function showEquip() {
    let output = tableForItems;
    //inventar.forEach(element=>{sum+=element[teglo];});
    for (let i = 0; i < equip.length; i++) {
        output = `${output}<tr ><td class="bor" onmouseover="tt(1,'${equip[i][item_detail]}');"> ${equip[i][item_name]}</td><td > ${equip[i][teglo]}</td><td><button class='remove' onclick='removeEquiped(${i})'>Премести</button></td></tr>`;
    }

    equiped.innerHTML = output + "</table>";
}

function removeEquiped(item) {
    if (equip.length > 0) {
        inventar.push(equip[item]);
        hero.removeParameters(equip[item][item_mana], equip[item][item_life], equip[item][item_dexterity], equip[item][item_power]);
        equip.splice(item, 1);
        showEquip();
        showInventar();
    }
}

function equiping(item) {
    if(inventar[item][isUsable]==-1){ return;}
    if (inventar[item][isUsable]) {
        hero.addParameters(inventar[item][item_mana], inventar[item][item_life], inventar[item][item_dexterity], inventar[item][item_power]);
        hero.showBars();
        inventar.splice(item, 1);
        showInventar();
    } else {
        equip.push(inventar[item]);
        hero.addParameters(inventar[item][item_mana], inventar[item][item_life], inventar[item][item_dexterity], inventar[item][item_power]);
        inventar.splice(item, 1);
        // equip.forEach(element=>{console.log(element); hero.addParameters(element[item_mana],element[item_life],element[item_dexterity],element[item_power]);});
        // hero.addParameters(equip[item][mana],equip[item][life],equip[item][dext],equip[item][stamina],equip[item][power]);
        showInventar();
        showEquip();

    }

}


function go(epi) {
    r_content_th.innerHTML = "Епизод " + epi;
    if (sets[epi]) {
        var output =tableForItems;
        for (var i = 0; i < sets[epi].length; i++) {

            if (sets[epi][i][visible] == 0) continue;
            output = `${output}<tr ><td class="bor" onmouseover="tt(1,'${sets[epi][i][item_detail]}');"> ${sets[epi][i][1]}</td><td > ${sets[epi][i][teglo]}</td><td > ${sets[epi][i][broi]}</td><td><button class='get' onclick='addToInventar(${i})'>Вземи</button></td></tr>`;
        }
        found.innerHTML = output + "</table>";

    }
    episode = epi;
    r_content.innerHTML = episodes[episode];

}