class Student{
    constructor(name,age,cohort,gender){
        this.name = name;
        this.age = age;
        this.cohort = cohort;
        this.gender = gender;
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age},Cohort: ${this.cohort},Gender: ${this.gender} `
    }

    updateGender(newGender){
        this.gender = newGender;
    }
}

const brendan = new Student("Brendan Gwer",20,"SDF-FT10 Remote","Male");

brendan.updateGender("non-binary");
console.log(brendan.getDetails());
// brendan.getDetails();

