//jan 14. découverte de fonctions soeurs!

function validate(type) {
  if (type === "experience") return validateExperiences();
  if (type === "education") return validateEducation();
  if (type === "skill") return validateSkills();
  if (type === "submit") return validatePersonalData();
}

function validateExperiences() {
  clearErrors();
  let validationPassed = true;

  if (jobTitleInput.value.trim() === "") {
    displayError("jobTitleError", "Please fill in a job title");
    validationPassed = false;
  }

  if (companyNameInput.value.trim() === "") {
    displayError("companyNameError", "Please fill in a company name");
    validationPassed = false;
  }

  if (jobStartDateInput.value.trim() === "") {
    displayError("jobStartDateError", "There must be a start date");
    validationPassed = false;
  }

  if (jobStartDateInput.value && jobEndDateInput.value) {
    if (new Date(jobEndDateInput.value) < new Date(jobStartDateInput.value)) {
      displayError("jobStartDateError", "End date must be after start date");
      validationPassed = false;
    }
  }

  return validationPassed;
}

function validateEducation() {
  clearErrors();
  let validationPassed = true;

  if (degreeInput.value.trim() === "") {
    displayError("degreeError", "Please fill in a degree");
    validationPassed = false;
  }

  if (institutionInput.value.trim() === "") {
    displayError("institutionError", "Please fill in an institution");
    validationPassed = false;
  }

  if (institutionStartDateInput.value.trim() === "") {
    displayError("institutionStartDateError", "There must be a start date");
    validationPassed = false;
  }

  if (institutionStartDateInput.value && institutionEndDateInput.value) {
    if (new Date(institutionEndDateInput.value) < new Date(institutionStartDateInput.value)) {
      displayError("institutionStartDateError", "End date must be after start date");
      validationPassed = false;
    }
  }

  return validationPassed;
}

function validateSkills() {
  clearErrors();
  let validationPassed = true;

  if (skillNameInput.value.trim() === "") {
    displayError("skillNameError", "You must indicate a skill name");
    validationPassed = false;
  }

  if (skillLevelInput.value === "") {
    displayError("skillLevelError", "Please select a skill level");
    validationPassed = false;
  }

  return validationPassed;
}

function validatePersonalData() {
  clearErrors();
  let errorCount = 0;
  let validationPassed = false;

  if (fnInput.value.trim() === "") {
    displayError("firstNameError", "First name is required");
    errorCount++;
  }

  if (lnInput.value.trim() === "") {
    displayError("lastNameError", "Last name is required");
    errorCount++;
  }

  if (mailInput.value.trim() === "") {
    displayError("emailError", "Email is required");
    errorCount++;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mailInput.value.trim())) {
      displayError("emailError", "Please enter a valid email address");
      errorCount++;
    }
  }

  if (phoneInput.value.trim() === "") {
    displayError("phoneError", "Phone number is required");
    errorCount++;
  }

  if (experiencesData.length === 0) {
    alert("Please add at least one work experience");
    errorCount++;
  }

  if (educationsData.length === 0) {
    alert("Please add at least one education entry");
    errorCount++;
  }

  if (skillsData.length === 0) {
    alert("Please add at least one skill");
    errorCount++;
  }

  if (errorCount === 0) {
    validationPassed = true;
  }
  return validationPassed;
}
