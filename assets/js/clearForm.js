function clearForm(type) {
  if (type === "experience") {
    jobTitleInput.value = "";
    companyNameInput.value = "";
    jobStartDateInput.value = "";
    jobEndDateInput.value = "";
    jobDescriptionInput.value = "";
  } else if (type === "education") {
    degreeInput.value = "";
    institutionInput.value = "";
    institutionStartDateInput.value = "";
    institutionEndDateInput.value = "";
    educationDescriptionInput.value = "";
  } else if (type === "skill") {
    skillNameInput.value = "";
    skillLevelInput.value = "Beginner";
  }
}
