let weight = document.getElementById("weight-el");
let height = document.getElementById("height-el");
let result = document.getElementById("result");

function BMIcal(){
    let weightss = weight.value
    let heightss = height.value /100 //to convert from cm to m
    let BMI = Math.round(weightss / Math.pow(heightss,2));

    if (BMI < 18.5) {
        result.textContent = "Your BMI is " + BMI + ", so you are underweight";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        result.textContent = "Your BMI is " + BMI + ", so you are normal weight";
    } else if (BMI >= 25 && BMI < 29.9) {
        result.textContent = "Your BMI is " + BMI + ", so you are overweight";
    } else {
        result.textContent = "Your BMI is " + BMI + ", so you are obese";
    }
}