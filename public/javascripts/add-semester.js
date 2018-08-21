const addSemesterButton = document.querySelector('#add.alter-semester-button');
const fullPlan = document.querySelector('.full-plan');
const planningBox = document.querySelector('.planning-box');

function alterWidth(div, amount) {
  const currentWidthInPxString = window.getComputedStyle(div).width;
  const currentWidthInPx = parseInt(currentWidthInPxString.slice(0, currentWidthInPxString.length - 2));
  div.style.width = (currentWidthInPx + amount).toString() + 'px';
}

function addSemester() {
  alterWidth(planningBox, 160);
  alterWidth(fullPlan, 160);

  // Create the semester-plan div
  const newSemester = document.createElement('div');
  newSemester.setAttribute('class', 'semester-plan');

  // Create the add-course-space div
  const addCourseSpace = document.createElement('div');
  addCourseSpace.setAttribute('class', 'add-course-space');

  // Add the add-course-space to the semeseter-plan
  newSemester.appendChild(addCourseSpace);

  // Add the semester-plan div to the full-plan div
  fullPlan.appendChild(newSemester);
}

addSemesterButton.onclick = addSemester;
