// Prends les éléments du DOM
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

// Regroupe les inputs par catégorie
const personalInputs = [fnInput, lnInput, mailInput, phoneInput, titleInput, summaryInput];
const experienceInputs = [jobTitleInput, companyNameInput, jobStartDateInput, jobEndDateInput, jobDescriptionInput];
const educationInputs = [degreeInput, institutionInput, institutionStartDateInput, institutionEndDateInput, educationDescriptionInput];
const skillInputs = [skillNameInput, skillLevelInput];

// Stocke les données des différentes sections
let experiencesData = [];
let educationsData = [];
let skillsData = [];

// Ajoute les entry lors des click sur les boutons add
addxpBtn.addEventListener("click", () => addEntry("experience"));
addeducationBtn.addEventListener("click", () => addEntry("education"));
addSkillBtn.addEventListener("click", () => addEntry("skill"));

// Cancel le mode edit lors des click sur les boutons cancel
document.getElementById("btn-cancel-experience").addEventListener("click", cancelEdit);
document.getElementById("btn-cancel-education").addEventListener("click", cancelEdit);
document.getElementById("btn-cancel-skill").addEventListener("click", cancelEdit);

// Met à jour l'aperçu en temps réel lors de la saisie
personalInputs.forEach((input) => {
  input.addEventListener("input", () => updatePreview("personal"));
});

experienceInputs.forEach((input) => {
  input.addEventListener("input", () => updatePreview("experience"));
});

educationInputs.forEach((input) => {
  input.addEventListener("input", () => updatePreview("education"));
});

skillInputs.forEach((input) => {
  input.addEventListener("input", () => updatePreview("skill"));
});

// Envoie les données au serveur PHP, et gère la réception du PDF
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
    .then((response) => {
      if (!response.ok) {
        return response.json().then((data) => {
          throw new Error(data.error || "Probleme sur le php");
        });
      }
      return response.blob();
    })
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const lien = document.createElement("a");
      lien.href = url;
      lien.download = `${fnInput.value}_${lnInput.value}_CV.pdf`;
      document.body.appendChild(lien);
      lien.click();
      document.body.removeChild(lien);
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Error:", error.message);
      alert("Error generating PDF: " + error.message);
    });
});
