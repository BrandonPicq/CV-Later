function validate(type) {
  if (type === "experience") {
    return validateExperiences();
  } else if (type === "education") {
    return validateEducation();
  } else if (type === "skill") {
    return validateSkills();
  }
}

function validateExperiences() {
  clearErrors();
  let validationPassed = true;

  const jobTitle = document.getElementById("jobTitle").value.trim();
  const companyName = document.getElementById("companyName").value.trim();
  const jobStartDate = document.getElementById("jobStartDate").value.trim();

  if (jobTitle === "") {
    displayError("jobTitleError", "Job Title must be filled out");
    validationPassed = false;
  }

  if (companyName === "") {
    displayError("companyNameError", "Company Name must be filled out");
    validationPassed = false;
  }

  if (jobStartDate === "") {
    displayError("jobStartDateError", "There must be a Start Date");
    validationPassed = false;
  }

  return validationPassed;
}

function validateEducation() {
  clearErrors();
  let validationPassed = true;

  const degree = document.getElementById("degree").value.trim();
  const institution = document.getElementById("institution").value.trim();
  const institutionStartDate = document.getElementById("institutionStartDate").value.trim();

  if (degree === "") {
    displayError("degreeError", "Degree must be filled out");
    validationPassed = false;
  }

  if (institution === "") {
    displayError("institutionError", "Institution must be filled out");
    validationPassed = false;
  }

  if (institutionStartDate === "") {
    displayError("institutionStartDateError", "There must be a Start Date");
    validationPassed = false;
  }

  return validationPassed;
}

function validateSkills() {
  clearErrors();
  let validationPassed = true;

  const skillName = document.getElementById("skillName").value.trim();
  const skillLevel = document.getElementById("skillLevel").value;

  if (skillName === "") {
    displayError("skillNameError", "Skill Name must be filled out");
    validationPassed = false;
  }

  if (skillLevel === "") {
    displayError("skillLevelError", "Please select a Skill Level");
    validationPassed = false;
  }

  return validationPassed;
}
