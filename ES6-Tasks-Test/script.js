const students = [
  {
    name: "Ali",
    class: "10",
    roll: "101",
    marks: { English: 78, Math: 88, Physics: 92, Urdu: 85, Computer: 90 }
  },
  {
    name: "Ibrahim",
    class: "10",
    roll: "102",
    marks: { English: 68, Math: 72, Physics: 80, Urdu: 75, Computer: 70 }
  },
  {
    name: "Asad",
    class: "9",
    roll: "103",
    marks: { English: 90, Math: 95, Physics: 89, Urdu: 88, Computer: 92 }
  }
];

document.getElementById("searchBtn").addEventListener("click", searchStudent);

function searchStudent() {
  const name = document.getElementById("name").value.trim();
  const studentClass = document.getElementById("class").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const result = document.getElementById("result");

  const student = students.find(
   (stud) => (stud.name.toLowerCase() === name.toLowerCase() &&
         stud.class === studentClass &&
         stud.roll === roll)
  );

  if (student) {
    const marks = student.marks;
    let total = 0;
    let subjects = "";
    for (let subject in marks) {
      subjects += `<p>${subject}: ${marks[subject]}</p>`;
      total += marks[subject];
    }

    const percentage = (total / 500 * 100).toFixed(2);

    let grade = "";
    if (percentage >= 80) grade = "A+";
    else if (percentage >= 70) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 50) grade = "C";
    else grade = "Fail";

result.innerHTML = `
      <p><b>Student Found:</b></p>
      <p>Name: ${student.name}</p>
      <p>Class: ${student.class}</p>
      <p>Roll No: ${student.roll}</p>
      <hr>
      <p><b>Subjects Marks:</b></p>
      ${subjects}
      <p><b>Total Marks:</b> ${total}/500</p>
      <p><b>Percentage:</b> ${percentage}%</p>
      <p><b>Grade:</b> ${grade}</p>
    `;
  } else {
    result.innerHTML = `<b style="color:red;">Student not found!</b>`;
  }
}