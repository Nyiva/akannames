function akan() {
  var daysoftheweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var akanmale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var akanfemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  //let century=parseInt(document.getElementsByName(century));
  var male = document.getElementById("male").value;
  var female = document.getElementById("female").value;

  var gdate = new Date(year + "/" + month + "/"+ day);
  var b = gdate.getDay();
  console.log(b)

  if (male === "male") {
    alert("your akan name is " + akanmale[b]);

  }
  else if (female === "female") {
    alert("your akan name is " + akanfemale[b]);

  }
}