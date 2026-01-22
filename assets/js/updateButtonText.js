function updateButtonText() {
  if (editingIndex !== null) {
    addxpBtn.textContent = "Update";
    addeducationBtn.textContent = "Update";
    addSkillBtn.textContent = "Update";
  } else {
    addxpBtn.textContent = "Add";
    addeducationBtn.textContent = "Add";
    addSkillBtn.textContent = "Add Skill";
  }
}
