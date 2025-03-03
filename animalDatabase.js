class Animal {
    constructor(id, name, kind, birthDate, deathDate) {
        this.id = id;
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

export default animalDatabase;
export { Animal };