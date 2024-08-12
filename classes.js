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

// const brendan = new Student("Brendan Gwer",20,"SDF-FT10 Remote","Male");

// brendan.updateGender("non-binary");
// console.log(brendan.cohort);
// console.log(brendan.getDetails());
// brendan.getDetails();

// class Transaction {
//     constructor(amount, date, memo) {
//       this._amount = amount;
//       this._date = date;
//       this._memo = memo;
//     }
//   }

// const mpesa = new Transaction(500, "28-05-06",true);
// console.log(mpesa._amount);


class Transaction {
    // declare private fields
    #amount;
    #date;
    #memo;
    constructor(amount, date, memo) {
      // assign values to private fields
      this.#amount = amount;
      this.#date = date;
      this.#memo = memo;
    }
  }

  const transaction = new Transaction(100.24, "03/04/2018", "Grocery Shopping");
  transaction.amount;
//   console.log(transaction.#amount)

//   transaction.#amount;
  