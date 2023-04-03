class Hero {

    create(mana, life, dext, stamina, power, defence, attack,magic_attack,fire_attack,water_attack, earth_attack, air_attack,regen) {
        this.basic_mana = this.current_mana = mana;
        this.basic_life = this.current_life = life;
        this.basic_dext = this.current_dext = dext;
        this.basic_stamina = this.current_stamina = stamina;
        this.basic_power = this.current_power = power;
        this.basic_defence = this.current_defence = defence;
        this.basic_attack = this.current_attack = attack;
        this.basic_magic_attack =this.current_magic_attack = magic_attack;
        this.basic_fire_attack=this.current_fire_attack = fire_attack;
        this.basic_water_attack=this.current_water_attack = water_attack;
        this.basic_earth_attack=this.current_earth_attack = earth_attack;
        this.basic_air_attack=this.current_air_attack = air_attack;
        this.basic_regen=this.current_regen = regen;
    }

    // за по-късни.. евентуално
    getMana() {
        return this.basic_mana;
    }
    setMana(points) {
        this.current_mana += points;
    }

    setLife(points) {
        this.current_life += points;
    }
    //-------------------

    addParameters(mana, life, dext, power) {
        this.current_mana += mana;
        this.current_life += life;
        this.current_dext += dext;
        this.current_power += power;
        this.showBars();
    }

    removeParameters(mana, life, dext, power) {
        this.current_mana -= mana;
        this.current_life -= life;
        this.current_dext -= dext;
        this.current_power -= power;
        this.showBars();

    }

    showBars() {
        mana.innerHTML = bar.repeat(this.current_mana);
        num_mana.innerHTML = this.current_mana;
        life.innerHTML = bar.repeat(this.current_life);
        num_life.innerHTML = this.current_life;
        num_dext.innerHTML = this.current_dext;
        num_power.innerHTML = this.current_power;
        num_attack.innerHTML = parseInt((this.current_attack+this.current_power*0.7+this.current_dext*0.3)*100)/100; 
        /*  За по-късно !
        num_mag_attack.innerHTML= this.current_magic_attack;
        num_fire_attack.innerHTML= this.current_fire_attack;
        num_water_attack.innerHTML= this.current_water_attack;
        num_earth_attack.innerHTML= this.current_earth_attack; */
    }

    // За по-късно !!!
    items(action, thing) {
        this.current_mana += action * thing.mana;
        this.current_life += action * thing.life;
        this.current_dext += action * thing.dext;
        this.current_power += action * thing.power;
        this.current_defence += action * thing.defence;
        this.current_attack += action * thing.attack;
        this.current_magic_attack += action * thing.magic_attack;
        this.current_fire_attack += action * thing.fire_attack;
        this.current_water_attack += action * thing.water_attack;
        this.current_earth_attack += action * thing.earth_attack;
        this.current_air_attack += action * thing.air_attack;
        this.current_regen += action * thing.regen;
        this.current_stamina += action * thing.stamina;
        this.showBars();
    }
}

// За по-късно !!!!
class Thing {
    construct(type = 0, life, mana, dext, power, defense, attack, magic_attack, fire_attack, water_attack, earth_attack, air_attack, regen, stamina, name, description, mass) {
        this.type = type;
        this.life = life;
        this.mana = mana;
        this.dext = dext;
        this.power = power;
        this.defense = defense;
        this.attack = attack;
        this.magic_attack = magic_attack;
        this.fire_attack = fire_attack;
        this.water_attack = water_attack;
        this.earth_attack = earth_attack;
        this.air_attack = air_attack;
        this.regen = regen;
        this.stamina = stamina;
        this.name=name;
        this.description = description;
        this.mass = mass;

    }
}
