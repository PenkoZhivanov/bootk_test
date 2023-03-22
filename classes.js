class Hero {

    create(mana, life, dext, stamina, power) {
        this.basic_mana = this.current_mana = mana;
        this.basic_life = this.current_life = life;
        this.basic_dext = this.current_dext = dext;
        this.basic_stamina = this.current_stamina = stamina;
        this.basic_power = this.current_power = power;
    }

    getMana() {
        return this.basic_mana;
    }
    setMana(points) {
        this.current_mana += points;
    }
  
    setLife(points) {
        this.current_life += points;
    }

    
    addParameters(mana, life, dext, power){
        this.current_mana += mana;
        this.current_life += life;
        this.current_dext += dext;
       // this.current_stamina += stamina;
        this.current_power += power;
        this.showBars();
    }

    removeParameters(mana, life, dext, power){
        this.current_mana -= mana;
        this.current_life -= life;
        this.current_dext -= dext;
      //  this.current_stamina -= stamina;
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
    }
}

class Thing {
    construct(type, life, mana, dext, power, defense, attack, magic_attack, fire_attack, water_attack, earth_attack, air_attack, regen, stamina) {
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

    }
}
