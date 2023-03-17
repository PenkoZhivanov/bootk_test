class Hero{
    
    create(mana,life,dext,stamina,power){
        this.basic_mana = this.current_mana=mana;
        this.basic_life=this.current_life=life;
        this.basic_dext=this.current_dext=dext;
        this.basic_stamina = this.current_stamina=stamina;
        this.basic_power=this.current_power=power;
    }

    getMana(){
        return this.mana;
    }
    setMana(points){
        this.mana+=points;
    }
    showBars(){
      mana.innerHTML=bar.repeat(this.basic_mana);
      num_mana.innerHTML=this.current_mana;
      life.innerHTML=bar.repeat(this.basic_life);
      num_life.innerHTML=this.current_life;
      num_dext.innerHTML=this.current_dext;
      num_power.innerHTML=this.current_power;
    }
}

class Thing{
    construct(type,life,mana,dext,power,defense,attack, magic_attack,fire_attack,water_attack,earth_attack,air_attack, regen, stamina){
        this.type = type;
        this.life = life;
        this.mana=mana;
        this.dext = dext;
        this.power=power;
        this.defense = defense;
        this.attack = attack;
        this.magic_attack = magic_attack;
        this.fire_attack = fire_attack;
        this.water_attack=water_attack;
        this.earth_attack = earth_attack;
        this.air_attack = air_attack;
        this.regen = regen;
        this.stamina = stamina;

    }
    
    print(){
         return this.type;
    }
}

const sets ={
    "ep2":[
        {nm:"Въглища и нафта 10 процента алкохол",teglo:"20",tt:"Няма нищо за казване!"},
        {nm:"Боза",teglo:"1",tt:"Няма нищо за казване 3!"},
        {nm:"Греда",teglo:"50"},
        {nm:"Пръстен",teglo:"2",mana:3},
        {nm:"Гривна",teglo:"2",mana:3,life:2}
    ]
}

const episodes={
    '11':'<p>Хвърляш поглед навън. Вече се е стъмнило, но никъде в прозорците не се вижда светлина. Само уличните лампи мъждукат, сякаш в съседния квартал са пуснали криптоферма и не им стига напрежение. </p><p>Малките островчета светлина осветяват достатъчно за да се убедиш, че улицата е пуста.</p><p>Спускаш се по стълбите към входната врата, отваряш я внимателно и се оглеждаш. Няма никакво движение. Вдясно, до посщенските кутии забелязваш малка купчина.</p><p><button onclick="go(2)">Натисни. ако искаш да провериш какво има в купчината</button></p><p><button>А, ако, не искаш да губиш време натисни тук</button></p>',


};

const inb={

}
