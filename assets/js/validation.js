function validate(type) {
  if (type === "experience") {
    return validateExperience();
  } else if (type === "education") {
    return validateEducation();
  } else if (type === "skill") {
    return validateSkill();
  }
}

function validateExperience() {
  clearAllErrors();
  let isValid = true;

  const jobTitle = document.getElementById("jobTitle").value.trim();
  const companyName = document.getElementById("companyName").value.trim();
  const jobStartDate = document.getElementById("jobStartDate").value;
  const jobEndDate = document.getElementById("jobEndDate").value;

  if (!jobTitle) {
    showError("jobTitleError", "Job title is required");
    isValid = false;
  }

  if (!companyName) {
    showError("companyNameError", "Company name is required");
    isValid = false;
  }

  if (!jobStartDate) {
    showError("jobStartDateError", "Start date is required");
    isValid = false;
  }

  if (jobStartDate && jobEndDate && jobStartDate > jobEndDate) {
    showError("jobEndDateError", "End date must be after start date");
    isValid = false;
  }

  return isValid;
}

function validateEducation() {
  clearAllErrors();
  let isValid = true;

  const degree = document.getElementById("degree").value.trim();
  const institution = document.getElementById("institution").value.trim();
  const institutionStartDate = document.getElementById("institutionStartDate").value;
  const institutionEndDate = document.getElementById("institutionEndDate").value;

  if (!degree) {
    showError("degreeError", "Degree is required");
    isValid = false;
  }

  if (!institution) {
    showError("institutionError", "Institution is required");
    isValid = false;
  }

  if (!institutionStartDate) {
    showError("institutionStartDateError", "Start date is required");
    isValid = false;
  }

  if (institutionStartDate && institutionEndDate && institutionStartDate > institutionEndDate) {
    showError("institutionEndDateError", "End date must be after start date");
    isValid = false;
  }

  return isValid;
}

function validateSkill() {
  clearAllErrors();
  let isValid = true;

  const skillName = document.getElementById("skillName").value.trim();
  const skillLevel = document.getElementById("skillLevel").value;

  if (!skillName) {
    showError("skillNameError", "Skill name is required");
    isValid = false;
  }

  if (!skillLevel) {
    showError("skillLevelError", "Skill level is required");
    isValid = false;
  }

  return isValid;
}
