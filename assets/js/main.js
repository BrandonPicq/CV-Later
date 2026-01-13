const form = document.getElementById("cv-form");
const previewPersonal = document.querySelector(".preview-personal");
const previewExperience = document.querySelector(".preview-experience");
const previewEducation = document.querySelector(".preview-education");
const previewSkills = document.querySelector(".preview-skills");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const professionalTitleInput = document.getElementById("professionalTitle");
const experienceSummaryInput = document.getElementById("experienceSummary");

const addExperienceBtn = document.querySelector(".btn-add-experience");
const addEducationBtn = document.querySelector(".btn-add-education");
const addSkillBtn = document.querySelector(".btn-add-skill");

let experiencesData = [];
let educationsData = [];
let skillsData = [];

console.log("Script loaded successfully!");

addExperienceBtn.addEventListener("click", () => addEntry("experience"));
addEducationBtn.addEventListener("click", () => addEntry("education"));
addSkillBtn.addEventListener("click", () => addEntry("skill"));
