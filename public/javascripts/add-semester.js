const addSemesterButton = document.querySelector('#add.alter-semester-button');
const fullPlan = document.querySelector('.full-plan');

function addSemester() {
  // Increase the full-plan div size
  const currentWidthInPxString = window.getComputedStyle(fullPlan).width;
  const currentWidthInPx = parseInt(currentWidthInPxString.slice(0, currentWidthInPxString.length-2));
  fullPlan.style.width = (currentWidthInPx + 160).toString() + 'px';

  // Create the semester-plan div
  const newSemester = document.createElement('div');
  newSemester.setAttribute('class', 'semester-plan');

  // Add the semester-plan div to the full-plan div
  fullPlan.appendChild(newSemester);

  // Create the course-plan div
  const newCourse = document.createElement('div');
  newCourse.setAttribute('class', 'course-plan');

  // Add the course-plan div to the semester-plan div
  newSemester.appendChild(newCourse);
}

addSemesterButton.onclick = addSemester;
