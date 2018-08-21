const courseSelector = document.querySelector('.course-selector');
const addCourseButton = document.querySelector('.add-course-button');
const courseBank = document.querySelector('.course-bank');
let numCourses = 0;

function addCourse() {
  // Get the course name from the course-selector
  const name = courseSelector.value;

  if (name !== 'Select a course') {
    // Create the course-plan div
    const newCourse = document.createElement('div');
    newCourse.setAttribute('class', 'course-plan course-in-course-bank');
    newCourse.setAttribute('draggable', 'true');
    newCourse.setAttribute('id', numCourses++);
    newCourse.ondragstart = drag;

    // Add the course-name to the course-plan
    const courseName = document.createElement('p');
    courseName.setAttribute('class', 'course-name');
    courseName.innerHTML = name;
    newCourse.appendChild(courseName);

    // Add the course-plan div to the semester-plan div
    courseBank.appendChild(newCourse);
  }
}

addCourseButton.onclick = addCourse;
