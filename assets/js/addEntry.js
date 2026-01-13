function addEntry(type) {
  let data, inputs, isValid;

  if (type === "experience") {
    data = experiencesData;
    inputs = {
      jobTitle: document.getElementById("jobTitle").value,
      companyName: document.getElementById("companyName").value,
      jobStartDate: document.getElementById("jobStartDate").value,
      jobEndDate: document.getElementById("jobEndDate").value,
      jobDescription: document.getElementById("jobDescription").value,
    };
    isValid = inputs.jobTitle && inputs.companyName && inputs.jobStartDate;
  } else if (type === "education") {
    data = educationsData;
    inputs = {
      degree: document.getElementById("degree").value,
      institution: document.getElementById("institution").value,
      institutionStartDate: document.getElementById("institutionStartDate").value,
      institutionEndDate: document.getElementById("institutionEndDate").value,
      educationDescription: document.getElementById("educationDescription").value,
    };
    isValid = inputs.degree && inputs.institution && inputs.institutionStartDate;
  } else if (type === "skill") {
    data = skillsData;
    inputs = {
      skillName: document.getElementById("skillName").value,
      skillLevel: document.getElementById("skillLevel").value,
    };
    isValid = inputs.skillName && inputs.skillLevel;
  }

  if (!isValid) {
    alert("Please fill in all required fields");
    return;
  }

  data.push(inputs);

  updatePreview(type);

  clearForm(type);
}
