function addEntry(type) {
  if (!validate(type)) {
    return;
  }

  let data, inputs;

  if (type === "experience") {
    data = experiencesData;
    inputs = {
      jobTitle: jobTitleInput.value,
      companyName: companyNameInput.value,
      jobStartDate: jobStartDateInput.value,
      jobEndDate: jobEndDateInput.value,
      jobDescription: jobDescriptionInput.value,
    };
  } else if (type === "education") {
    data = educationsData;
    inputs = {
      degree: degreeInput.value,
      institution: institutionInput.value,
      institutionStartDate: institutionStartDateInput.value,
      institutionEndDate: institutionEndDateInput.value,
      educationDescription: educationDescriptionInput.value,
    };
  } else if (type === "skill") {
    data = skillsData;
    inputs = {
      skillName: skillNameInput.value,
      skillLevel: skillLevelInput.value,
    };
  }

  data.push(inputs);

  displayFormEntries(type);

  updatePreview(type);

  clearForm(type);
}
