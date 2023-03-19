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
    vis == 1 ? document.getElementById("tooltip").innerHTML = episode: document.getElementById("tooltip").innerHTML = "";
}

function addToInventar(item) {
    let sum=0;
    inventar.forEach(element=>{sum+=element[teglo];})
    if(sum+sets[episode][item][teglo]*sets[episode][item][broi]>inventar_mass){
        alert('Прекалено тежко!');
        sum=0;
        return;
    }
   
    inventar.push([sets[episode][item][item_name],sets[episode][item][teglo],sets[episode][item][broi]]);
    sets[episode][item][visible]=0;
    go(episode);
    showInventar();    
}


function go(episode) {
    if (sets[episode]) {
     
        var output = "<table id='table_found' onmouseleave='tt(2);'><tr><th>Име</th><th>Тегло</th><th>Брой</th><th></th></tr>";
        for (var i = 0; i < sets[episode].length; i++) {
            if(sets[episode][i][visible]==0) continue;
            output = `${output}<tr ><td class="bor" onmouseover="tt(1,'${sets[episode][i][3]}');"> ${sets[episode][i][0]}</td><td > ${sets[episode][i][teglo]}</td><td > ${sets[episode][i][broi]}</td><td><button class='get' onclick='addToInventar(${i})'>Вземи</button></td></tr>`;
        }
        found.innerHTML = output + "</table>";
    }
}

function showInventar(){
   let output =  "<table id='table_inventar' onmouseleave='tt(2);'>";
    //inventar.forEach(element=>{sum+=element[teglo];});
    for (let i = 0; i < inventar.length; i++) {
        output = `${output}<tr ><td class="bor" onmouseover="tt(1,'${inventar[i][3]}');"> ${inventar[i][0]}</td><td > ${inventar[i][teglo]}</td><td><button class='get' onclick='removeFromInventar(${i})'>Изхвърли</button></td></tr>`;
    }
    
    inventar_table.innerHTML=output+"</table>";
}