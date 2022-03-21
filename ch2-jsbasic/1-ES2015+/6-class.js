class Human{
    constructor(type = 'Human'){
        this.type = type;
    }
    static isHuman(human){
        return human instanceof Human;
    }
    breathe(){
        alert('h-a-a-a-m');
    }
}

class wy extends Human{
    constructor(type, firstName, lastName){
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
        
    }
    sayName() {
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newWY = new wy('human', 'wy', 'choi');
Human.isHuman(newWY);