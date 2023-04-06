/* employee object  constructor   */

//hitest
let webEmployee = [];

function Employee(id, name, department, level, image, salary) {
  this.id = id;
  this.name = name;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = 0;
  // this.netSalary=this.salary;
  webEmployee.push(this);
}

let Ghazi = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "./assest/m1.png"
);

let Lana = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "./assest/w1.png"
);

let Tamara = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "./assest/w2.jpg"
);

let Safi = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./assest/m2.png"
);

let Omar = new Employee(
  1004,
  "Omar Zaid	",
  "Development",
  "Senior",
  "./assest/m3.png"
);

let Rana = new Employee(
  1005,
  "Rana Saleh",
  "Developmen",
  "Junior",
  "./assest/w3.png"
);

let Hadi = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "./assest/m4.png"
);

Employee.prototype.netSalary = function () {
  if (this.level == "Senior") {
    let net = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    this.salary = net * (1 - 0.075);
  } else if (this.level == "Mid-Senior") {
    let net = Math.floor(Math.random() * (1500 - 1000)) + 1000;
    this.salary = net * (1 - 0.075);
  } else if (this.level == "Junior") {
    let net = Math.floor(Math.random() * (1000 - 500)) + 500;
    this.salary = net * (1 - 0.075);
  }

  return this.salary;
};

function employeeId() {
  for (let i = 0; i < webEmployee.length; i++) {
    let randomId = Math.floor(Math.random() * 9000 + 1000);
    this.id = randomId;
    return this.id;
  }
}
// let employeeId1=employeeId();
///////////////////////////////////////////////////////



let container = document.createElement("div");
document.body.appendChild(container);

let h1El = document.createElement("h1");
h1El.textContent = "Employee Cards";
container.appendChild(h1El);
h1El.style.paddingTop = "20px";
h1El.style.color = "rgba(24, 32, 65, 0.5)";

container.style.backgroundImage = "url(./assest/bbck.jpg)";
container.style.width = "800px";
container.style.marginLeft = "70px";
container.style.marginTop = "-300px";
container.style.marginBottom = "100PX";
container.style.textAlign = "center";
container.style.display = "inline-block";
container.style.borderRadius = "20px";

//Card function

Employee.prototype.render = function () {
  let card = document.createElement("div");

  card.style.backgroundColor = "rgba(65, 11, 46, 0.19)";
  card.style.display = "inline-block";
  card.style.width = "200px";

  card.style.borderColor = "black";
  card.style.margin = "30px";
  card.style.padding = "10px";
  card.style.display = "inline-block";
  card.style.borderRadius = "5px";
  card.style.fontFamily = "";

  let cardimg = document.createElement("img");
  let cardname = document.createElement("p");
  let cardid = document.createElement("p");
  let cardepartment = document.createElement("p");
  let cardlevel = document.createElement("p");
  let cardsalary = document.createElement("p");

  cardimg.src = this.image;
cardimg.style.width="160px";
cardimg.style.height="160px";


  cardname.textContent = "Name: " + this.name;
  cardid.textContent = "Id:" + employeeId();
  cardepartment.textContent = "Department: " + this.department;
  cardlevel.textContent = "Level: " + this.level;
  cardsalary.textContent = "Salary: " + this.netSalary();

  card.appendChild(cardimg);

  card.appendChild(cardname);
  card.appendChild(cardid);
  card.appendChild(cardepartment);

  card.appendChild(cardlevel);

  card.appendChild(cardsalary);

  container.appendChild(card);
};




let form = document.getElementById("Einformatiom");
// let submit = document.getElementById("submit");


form.addEventListener("submit", clickGet);

function clickGet(event) {
  event.preventDefault();
  let nameFull = (event.target.Ename.value);

  let departmentS = (event.target.Edepartment.value);

  let levelS = (event.target.Elevel.value);

 let imageE = (event.target.Eimage.value);

 let formData = new Employee( employeeId(),nameFull ,departmentS, levelS ,imageE   );


formData.render();

saveData(webEmployee);
 
}

// console.log(webEmployee);

Ghazi.render();
Safi.render();
Omar.render();
Rana.render();
Hadi.render();
Lana.render();
Tamara.render();


//lab9 : localStorage
// localStorage.clear();

function renderAll(){

  for (i=0; i< webEmployee.length; i++){

    webEmployee[i].render();
  }
}
// renderAll();


//save array data 
function saveData(data){
let stringData=JSON.stringify(data);
  localStorage.setItem('Employee',stringData)
}
// saveData(webEmployee);

// console.log(webEmployee);


function getData (){

  
 let allArr= localStorage.getItem('Employee');

 let parData= JSON.parse(allArr);

 if (parData != null){   
  webEmployee=[];
 for (let i=0; i< parData.length; i++){

   new Employee( parData[i].id, parData[i].name, parData[i].department, parData[i].level, parData[i].image, parData[i].salary );
  }
  }
  
  renderAll()
}

getData();
