let editingIndex = null;
let editingType = null;

function editEntry(type, index) {
  if (type === "experience") {
    const exp = experiencesData[index];

    jobTitleInput.value = exp.jobTitle;
    companyNameInput.value = exp.companyName;
    jobStartDateInput.value = exp.jobStartDate;
    jobEndDateInput.value = exp.jobEndDate;
    jobDescriptionInput.value = exp.jobDescription;

    editingIndex = index;
    editingType = type;
  } else if (type === "education") {
    const edu = educationsData[index];

    degreeInput.value = edu.degree;
    institutionInput.value = edu.institution;
    institutionStartDateInput.value = edu.institutionStartDate;
    institutionEndDateInput.value = edu.institutionEndDate;
    educationDescriptionInput.value = edu.educationDescription;
    editingIndex = index;
    editingType = type;
  } else if (type === "skill") {
    const skill = skillsData[index];

    skillNameInput.value = skill.skillName;
    skillLevelInput.value = skill.skillLevel;
    editingIndex = index;
    editingType = type;
  }

  updateButtonText();
  highlightEditingForm(type);
}
