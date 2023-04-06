"use strict";

//GET ELE
let tableEl = document.getElementById("table");
let adminN = document.getElementById("adminN");
let marketN = document.getElementById("marketN");
let devN = document.getElementById("developmentN");
let financeN = document.getElementById("financeN");

let adminA = document.getElementById("adminA");
let marketA = document.getElementById("marketA");
let devA = document.getElementById("developmentA");
let financeA = document.getElementById("financeA");

let totalSalary = document.getElementById("total1");

let arrayE = [];

let adminNum = 0;
let marketNum = 0;
let developmentNum = 0;
let financeNum = 0;
let adminSalary = 0;
let marketSalary = 0;
let developmenSalary = 0;
let financeSalary = 0;

getData();
departmeintNumber();

//GET DATA FROM LOCAL STORAGE
function getData() {
  let employeeArr = localStorage.getItem("Employee");
  let employeeDataArray = JSON.parse(employeeArr);

  for (let i = 0; i < employeeDataArray.length; i++) {
    arrayE.push(employeeDataArray[i]);
  }
}

//Number and Salary of employees in each department.
//123

function departmeintNumber() {
  for (let i = 0; i < arrayE.length; i++) {
    if (arrayE[i].department == "Administration") {
      adminNum++;
      adminSalary += arrayE[i].salary;
    } else if (arrayE[i].department == "Marketing") {
      marketNum++;
      marketSalary += arrayE[i].salary;
    } else if (arrayE[i].department == "Development") {
      developmentNum++;
      developmenSalary += arrayE[i].salary;
    } else if (arrayE[i].department == "Finance") {
      financeNum++;
      financeSalary += arrayE[i].salary;
    }
  }
}

//Total salary

let tSalary = adminSalary + marketSalary + developmenSalary + financeSalary;

//append numbers
// const a1= document.createElement("div");
 let adnumber = document.createElement("p");
adnumber.textContent = adminNum;
adminN.appendChild(adnumber);




let marketNumber = document.createElement("p");
 marketNumber.textContent = marketNum;
marketN.appendChild(marketNumber);

let devNumber1= document.createElement("p");
devNumber1.textContent = developmentNum;
devN.appendChild(devNumber1);



let finNumber = document.createElement("p");
finNumber.textContent = financeNum;
financeN.appendChild(finNumber);




//a

let adminAvg = document.createElement("p");
adminAvg.textContent = adminSalary;
adminA.appendChild(adminAvg);




let marketAvg = document.createElement("p");
marketAvg.textContent = marketSalary;
marketA.appendChild(marketAvg);


let devAvg = document.createElement("p");
devAvg.textContent =developmenSalary;
devA.appendChild(devAvg);


let financeAvg = document.createElement("p");
financeAvg.textContent =financeSalary;
financeA.appendChild(financeAvg);

//append salary
let totalSalary1 = document.createElement("p");
totalSalary1.textContent = tSalary;
totalSalary.appendChild(totalSalary1);

//Average salary of the department
