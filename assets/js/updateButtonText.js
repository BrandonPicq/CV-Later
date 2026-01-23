function updateButtonText() {
  const btnCancelExperience = document.getElementById("btn-cancel-experience");
  const btnCancelEducation = document.getElementById("btn-cancel-education");
  const btnCancelSkill = document.getElementById("btn-cancel-skill");

  addxpBtn.textContent = "Add";
  addeducationBtn.textContent = "Add";
  addSkillBtn.textContent = "Add Skill";
  btnCancelExperience.style.display = "none";
  btnCancelEducation.style.display = "none";
  btnCancelSkill.style.display = "none";

  // Si en édition, modifier seulement le bouton approprié
  if (editingIndex !== null) {
    if (editingType === "experience") {
      addxpBtn.textContent = "Update";
      btnCancelExperience.style.display = "inline-block";
    } else if (editingType === "education") {
      addeducationBtn.textContent = "Update";
      btnCancelEducation.style.display = "inline-block";
    } else if (editingType === "skill") {
      addSkillBtn.textContent = "Update";
      btnCancelSkill.style.display = "inline-block";
    }
  }
}
