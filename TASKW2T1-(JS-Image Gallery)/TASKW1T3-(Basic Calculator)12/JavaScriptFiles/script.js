let employees = [];
let currentIndex = 0;
const empNameEl = document.getElementById("emp-name");
const empDesignationEl = document.getElementById("emp-designation");
const empExperienceEl = document.getElementById("emp-experience");
const imageDiv = document.querySelector('.article-image-class');
const prevArrow = document.getElementById("previous-arrow-id");
const nextArrow = document.getElementById("next-arrow-id");
async function loadEmployeesDataFromJSONFile() {
  try {
    const response = await fetch("../Data/employees.json");

    if (!response.ok) {
      throw new Error("Failed to load employee data");
    }

    employees = await response.json(); 
    renderEmployeeDataAtCurrentIndex(currentIndex);

  } catch (error) {
    console.error(error);
  }
}
function  renderEmployeeDataAtCurrentIndex(index){
    let data=employees[index];
     console.log(data);
     empNameEl.innerHTML=data.name;
     empDesignationEl.innerText=data.designation;
     empExperienceEl.innerText=data.experience;
     console.log(data.image);
     imageDiv.style.backgroundImage = `url("../data/${data.image}")`;
  
}
prevArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + employees.length) % employees.length;
  renderEmployeeDataAtCurrentIndex(currentIndex);
});

nextArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % employees.length;
  renderEmployeeDataAtCurrentIndex(currentIndex);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % employees.length;
    renderEmployeeDataAtCurrentIndex(currentIndex);
  }
  if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + employees.length) % employees.length;
    renderEmployeeDataAtCurrentIndex(currentIndex);
  }
});

loadEmployeesDataFromJSONFile();