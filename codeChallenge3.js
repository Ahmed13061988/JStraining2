const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        let BMI = this.mass / (this.height * this.height);
        return BMI.toFixed(1)
    }
}

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        let BMI = this.mass / (this.height * this.height);
        return BMI.toFixed(1)
    }
}

Mark.calcBMI() < John.calcBMI() ? console.log(`John's BMI ${John.calcBMI()} is higher than Mark's ${Mark.calcBMI()}!`) : console.log(`Marks's BMI ${Mark.calcBMI()} is higher than Johns's ${John.calcBMI()}!`);