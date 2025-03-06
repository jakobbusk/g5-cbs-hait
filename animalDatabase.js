class Animal {
    constructor( name, kind, birthDate, deathDate) {
        this.id = animalDatabase.length + 1;
        this.name = name;
        this.kind = kind;
        this.birthDate = birthDate;
        this.deathDate = deathDate ? deathDate : null,
        this.dateAdded = new Date().toISOString().split('T')[0],
        this.age = this.calcAge();
    }

    calcAge() {
        const birth = new Date(this.birthDate);
        const death = this.deathDate ? new Date(this.deathDate) : new Date();
        const age = death.getFullYear() - birth.getFullYear();
        return age;
    }

}

const animalDatabase = [

];

const searchAnimals = (name) => {
    return animalDatabase.filter(animal => animal.name.toLowerCase().includes(name.toLowerCase()));
}

export default animalDatabase;
export { Animal, searchAnimals };