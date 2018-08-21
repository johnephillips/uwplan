const removeSemesterButton = document.querySelector('#remove.alter-semester-button');

function removeSemester() {
  fullPlan.removeChild(fullPlan.childNodes[fullPlan.childNodes.length-1]);

  // Decrease the full-plan div size
  const currentWidthInPxString = window.getComputedStyle(fullPlan).width;
  const currentWidthInPx = parseInt(currentWidthInPxString.slice(0, currentWidthInPxString.length-2));
  fullPlan.style.width = (currentWidthInPx - 160).toString() + 'px';
}

removeSemesterButton.onclick = removeSemester;
