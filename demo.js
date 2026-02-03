const expenses = [
  { id: 1, title: "Tea", amount: 10, category: "food" },
  { id: 2, title: "Bus", amount: 30, category: "travel" },
  { id: 3, title: "Lunch", amount: 80, category: "food" },
  { id: 4, title: "Mobile Recharge", amount: 199, category: "utility" }
];

const foodExpenses = expenses.filter(e => e.category === "food");
const travelExpenses = expenses.filter(e => e.category === "travel");

// console.log(foodExpenses);
// console.log(travelExpenses);

localStorage.setItem("username", "Kusha");

console.log(localStorage.getItem("username"));

tasks = ["A", "B", "C", "D"];
console.log(tasks)

tasks.forEach(function (task, index) {
  // tasks.splice(index, 1);
   console.log(`task ${index}: ${task}`)
  //  tasks.splice(index, 1);
  //  console.log(task)
});
tasks.splice(index, 1);
console.log(tasks)


