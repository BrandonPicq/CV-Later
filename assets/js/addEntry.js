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
    if (editingIndex !== null && editingType === "experience") {
      data[editingIndex] = inputs;
      editingIndex = null;
      editingType = null;
      updateButtonText();
    } else {
      data.push(inputs);
    }
  } else if (type === "education") {
    data = educationsData;
    inputs = {
      degree: degreeInput.value,
      institution: institutionInput.value,
      institutionStartDate: institutionStartDateInput.value,
      institutionEndDate: institutionEndDateInput.value,
      educationDescription: educationDescriptionInput.value,
    };
    if (editingIndex !== null && editingType === "education") {
      data[editingIndex] = inputs;
      editingIndex = null;
      editingType = null;
      updateButtonText();
    } else {
      data.push(inputs);
    }
  } else if (type === "skill") {
    data = skillsData;
    inputs = {
      skillName: skillNameInput.value,
      skillLevel: skillLevelInput.value,
    };
    if (editingIndex !== null && editingType === "skill") {
      data[editingIndex] = inputs;
      editingIndex = null;
      editingType = null;
      updateButtonText();
    } else {
      data.push(inputs);
    }
  }

  displayFormEntries(type);

  clearForm(type);

  updatePreview(type);
}
