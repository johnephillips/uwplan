const removeSemesterButton = document.querySelector('#remove.alter-semester-button');

function removeSemester() {
  // fullPlan is defined in add-semester.js

  // Remove the last semester from the full-plan div
  fullPlan.removeChild(fullPlan.childNodes[fullPlan.childNodes.length - 1]);

  alterWidth(fullPlan, -160);
  alterWidth(planningBox, -160);
}

removeSemesterButton.onclick = removeSemester;
