const form = document.getElementById("cv-form");
const prevPersonal = document.getElementById("preview-personal");
const prevExperience = document.getElementById("preview-experience");
const prevEducation = document.getElementById("preview-education");
const prevSkills = document.getElementById("preview-skills");
const fnInput = document.getElementById("firstName");
const lnInput = document.getElementById("lastName");
const mailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const titleInput = document.getElementById("professionalTitle");
const summaryInput = document.getElementById("experienceSummary");
const addxpBtn = document.getElementById("btn-add-experience");
const addeducationBtn = document.getElementById("btn-add-education");
const addSkillBtn = document.getElementById("btn-add-skill");
const jobTitleInput = document.getElementById("jobTitle");
const companyNameInput = document.getElementById("companyName");
const jobStartDateInput = document.getElementById("jobStartDate");
const jobEndDateInput = document.getElementById("jobEndDate");
const jobDescriptionInput = document.getElementById("jobDescription");
const degreeInput = document.getElementById("degree");
const institutionInput = document.getElementById("institution");
const institutionStartDateInput = document.getElementById("institutionStartDate");
const institutionEndDateInput = document.getElementById("institutionEndDate");
const educationDescriptionInput = document.getElementById("educationDescription");
const skillNameInput = document.getElementById("skillName");
const skillLevelInput = document.getElementById("skillLevel");

let experiencesData = [];
let educationsData = [];
let skillsData = [];

addxpBtn.addEventListener("click", () => addEntry("experience"));
addeducationBtn.addEventListener("click", () => addEntry("education"));
addSkillBtn.addEventListener("click", () => addEntry("skill"));
fnInput.addEventListener("input", updatePreviewPersonal);
lnInput.addEventListener("input", updatePreviewPersonal);
mailInput.addEventListener("input", updatePreviewPersonal);
phoneInput.addEventListener("input", updatePreviewPersonal);
titleInput.addEventListener("input", updatePreviewPersonal);
summaryInput.addEventListener("input", updatePreviewPersonal);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validate("submit")) {
    return;
  }

  let completeData = objectifyData();

  fetch("/generate-pdf.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: completeData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.error("Server error:", data.error);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
});
