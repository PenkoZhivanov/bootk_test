const bar = "█";
var inventar_mass = 20;
// индекс в масива
const id = 0;
const item_name = 1;
const item_detail = 2;
const teglo = 3;
const broi = 4;
const visible = 5;
const item_mana=6,item_life=7,item_dexterity=8,item_power=9;
const item_defence = 10, item_attack=11,item_magic_attack=12, item_fire_attack =13, 
    item_water_attack=14,item_earth_attack=15, item_air_attack=16, item_regen=17, item_stamina=18;
const isUsable =19;
const tableForItems ="<table  onmouseleave='tt(2);'><tr><th>Име</th><th>Тегло</th><th></th></tr>";
const item={add:1,remove:-1}

/*
    мана, живот, ловкост, сила, защита, атака(физическа), магическа атака, огнена атака, водна атака, земна атака, въздушна атака, регенерация, издържливост.
   
*/