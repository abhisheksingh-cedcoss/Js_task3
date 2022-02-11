function myFunction(){
    var name  = document.getElementById("input1").value;
    var age = document.getElementById("input2").value;
    var weight = document.getElementById("input3").value;

    if (age >= 5 && age <= 7) {
        if (weight < 15) {
          document.getElementById("result").innerHTML =
            "Hello " +
            name +
            "!!! your weight is less than recommended value of 15 kg at the age of " +
            age +
            ".";
        } else if (weight > 20) {
          document.getElementById("result").innerHTML =
            "Hello " +
            name +
            "!!! your weight is greater than recommended value of 20 kg at the age of " +
            age +
            ".";
        } else {
          document.getElementById("result").innerHTML =
            "Hello " + name + "!!! your weight is perfect.";
        }
      }
      if (age >= 8 && age <= 10) {
        if (weight < 21) {
          document.getElementById("result").innerHTML =
            "Hello " +
            name +
            "!!! your weight is less than recommended value of 21 kg at the age of " +
            age +
            ".";
        } else if (weight > 25) {
          document.getElementById("result").innerHTML =
            "Hello " +
            name +
            "!!! your weight is greater than recommended value of 25 kg at the age of " +
            age +
            ".";
        } else {
          document.getElementById("result").innerHTML =
            "Hello " + name + "!!! your weight is perfect.";
        }
      }
      if (age >= 11 && age <= 15) {
        if (weight < 26) {
          document.getElementById("result").innerHTML =
            "Hello " + name + "!!! your weight is less than recommended value of 26 kg at the age of " + age + ".";
        } else if (weight > 30) {
          document.getElementById("result").innerHTML =
            "Hello " + name + "!!! your weight is greater than recommended value of 30 kg at the age of " + age + ".";
        } else {
          document.getElementById("result").innerHTML =
            "Hello " + name + "!!! your weight is perfect.";
        }
      }
      if (age >= 16 && age <= 20) {
        if (weight < 31) {
          document.getElementById("result").innerHTML =
            "Hello " + name + "!!! your weight is less than recommended value of 31 kg at the age of " + age + ".";
        } else if (weight > 40) {
          document.getElementById("result").innerHTML =
            "Hello " + name + "!!! your weight is greater than recommended value of 40 kg at the age of " + age + ".";
        } else {
          document.getElementById("result").innerHTML =
            "Hello " + name + "!!! your weight is perfect.";
        }
      }

      else{
          document.getElementById("result").innerHTML= "Wrong data input";
      }




}



