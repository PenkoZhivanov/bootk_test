const bar = "¤";
var hero = new Hero();
hero.create(10,16,25,30,10);
hero.showBars();
 console.log(sets["ep12"][0].nm);
document.getElementById("found").innerHTML=sets["ep12"][0].nm;
var output = "<table id='table_found' onmouseleave='tt(2);'>";
for(var i=0;i<sets["ep12"].length;i++) {
    output = `${output}<tr ><td class="bor" onmouseover="tt(1,'${sets["ep12"][i].tt}');"> ${sets["ep12"][i].nm}</td><td > ${sets["ep12"][i].teglo}</td><td><button class='get' onclick='addToInventar(${i})'>Вземи</button></td></tr>`;
}
found.innerHTML=output+"</table>";
console.log(output);
 
var subject = new Thing();
subject.construct(1,2,3,4,5,6,7,8,9,10,11,12);

// for test only !
var episode = '11';
r_content.innerHTML= episodes[episode];
r_content_th.innerHTML="Епизод "+episode;
function addToInventar(){

} 
function tt(vis,episode){
    console.log(episode);
   vis==1?document.getElementById("tooltip").innerHTML= episode:document.getElementById("tooltip").innerHTML="";  
}
function addToInventar(item){
    
}
function go(episode){
    
}