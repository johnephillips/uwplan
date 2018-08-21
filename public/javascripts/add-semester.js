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

  // Create the semester-box div
  const semesterBox = document.createElement('div');
  semesterBox.setAttribute('class', 'semester-box');

  // Create the semester-plan div
  const semesterPlan = document.createElement('div');
  semesterPlan.setAttribute('class', 'semester-plan');

  // Create the add-course-space div
  const addCourseSpace = document.createElement('div');
  addCourseSpace.setAttribute('class', 'add-course-space');
  addCourseSpace.setAttribute('ondrop', 'drop(event)');
  addCourseSpace.setAttribute('ondragenter', 'dragenter(event)');
  addCourseSpace.setAttribute('ondragleave', 'dragleave(event)');
  addCourseSpace.setAttribute('ondragover', 'dragover(event)');

  // Add the semester-plan and add-course-space to the semester-box
  semesterBox.appendChild(semesterPlan);
  semesterBox.appendChild(addCourseSpace);

  // Add the semester-box to the full-plan
  fullPlan.appendChild(semesterBox);
}

addSemesterButton.onclick = addSemester;
