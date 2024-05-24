// part 1: Basic Arrays - Product Inventory

// 1.
type Properties = {
    name: string;
    price: number;
    inventory: {
        stock: number;
        colorOptions: string[];
    };
    selectedColor?: string;
};

// 2.
let products: Properties[] = [
    {
        name: "Shoes",
        price: 2200,
        inventory: { stock: 801, colorOptions: ["blue", "red", "black", "yellow"] },
    selectedColor: "blue",
},
  {
    name: "shirt",
    price: 480,
    inventory: { stock: 250, colorOptions: ["blue", "red", "black", "yellow"] },
    selectedColor: "red",
  },
  {
    name: "iPhone",
    price: 149999,
    inventory: {
      stock: 205,
      colorOptions: ["blue", "titanium grey", "black", "green"],
    },
    selectedColor: "titanium grey",
  },
];

// 3.
function changeColor(products: Properties, newColor: string) {
    if (products.inventory.colorOptions.includes(newColor)) {
        products.selectedColor = newColor;
        if (newColor == "blue") {
            products.price = products.price - (products.price * 5) / 100;
      console.log(
        `The selected color is avaliable, It's new price is ${products.price}.`
      );
    } else if (newColor == "red") {
      products.price = products.price + (products.price * 10) / 100;
      console.log(
        `The selected color is avaliable, It's new price is ${products.price}.`
      );
    } else {
      console.log(`The selected color is avaliable`);
    }
  } else {
    console.log(`The Selected ${newColor} color isn't available.`);
  }
}

console.log("\nwhen color is red:");
changeColor(products[0], "red")
// console.log("\nwhen color is blue:");
// changeColor(products[0], "blue")

// 4.
function displayEach(Products: Properties[]){  //we could type manually for each product but, it's time comsuming
    products.forEach(products => {
        console.log("Name:", products.name);
        console.log("Price:", products.price);
        console.log("Selected color:", products.selectedColor);
        console.log("Stock:", products.inventory.stock);
        console.log("\n")
        }
    )
}


console.log("\n")
displayEach(products)

// part 2: Multidimentional Arrays & Tuples
// 1.
type Student = {
  name: string,
  grades: number[],
}

// 2.
let students: Student[] = [
  {
    name:"Usama",
    grades: [74, 89, 58, 47],
  },
  {
    name:"Uzair",
    grades: [52, 66, 91, 72],
  },
  {
    name:"Sumayya",
    grades: [59, 73, 66, 41],
  }
]

// 3.
function calculateAverageGrade(grades: number[]) {
  const avgGrade = grades.reduce((sum, grade) => sum + grade, 0);
  return avgGrade / grades.length;
}

//4.
students.forEach(student => {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`The average grade of ${student.name} is ${averageGrade.toFixed(1)}`);
})

// Part 3: Array with Types and Indexing - Employee Salaries
// 1.
type Employee = {
  name: string,
  hoursWorked: number,
  hourlyRate: number,
  salary?: number,
}

// 2.
const employees: Employee[] = [
  {
      name: "Faizan",
      hoursWorked: 8,
      hourlyRate: 4, // in dollars
      salary: 0, // per month
  },
  {
      name: "Majid",
      hoursWorked: 26,
      hourlyRate: 4,
      salary: 0,
  },
  {
      name: "Aslam",
      hoursWorked: 12,
      hourlyRate: 4,
      salary: 0,
  },
]

// 3.
function calculateSalary(hoursWorked: number, hourlyRate: number){
  let totSalary = hourlyRate * hoursWorked;
  return totSalary;
}

// 4.
console.log("\n");
employees.forEach(employee => {
  if(employee.hoursWorked >= 20){
  let totalSalary = calculateSalary(employee.hoursWorked, employee.hourlyRate);
  totalSalary = totalSalary + ((totalSalary * 10) / 100) 
  console.log(`The Salary of Mr.${employee.name} is ${totalSalary} with extra 10% bonus for working more than 20 hrs.`);
  }
  else{
      const totalSalary = calculateSalary(employee.hoursWorked, employee.hourlyRate)
  console.log(`The Salary of Mr.${employee.name} is ${totalSalary}.`);
  }
})