function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragenter(ev) {
  ev.preventDefault();
  ev.target.style['background-color'] = '#d7dbe2';
}

function dragleave(ev) {
  ev.target.style['background-color'] = ev.target.parentElement.style['background-color'];
}

function dragover(ev) {
  ev.preventDefault();
}

function alterHeight(div, amount) {
  const currentHeightInPxString = window.getComputedStyle(div).height;
  const currentHeightInPx = parseInt(currentHeightInPxString.slice(0, currentHeightInPxString.length - 2));
  div.style.height = (currentHeightInPx + amount).toString() + 'px';
}

function drop(ev) {
  ev.target.style['background-color'] = ev.target.parentElement.style['background-color'];
  const semesterBox = ev.target.parentElement;
  alterHeight(semesterBox, 60);
  const semesterPlan = semesterBox.childNodes[0];
  alterHeight(semesterPlan, 60);
  const data = ev.dataTransfer.getData("text");
  const coursePlan = document.querySelector(`.course-plan[id="${data}"]`);
  // Set class to only be course-plan
  coursePlan.setAttribute('class', 'course-plan');
  semesterPlan.appendChild(coursePlan);
}
