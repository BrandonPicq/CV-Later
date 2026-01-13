function clearForm(type) {
  if (type === "experience") {
    document.getElementById("jobTitle").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("jobStartDate").value = "";
    document.getElementById("jobEndDate").value = "";
    document.getElementById("jobDescription").value = "";
  } else if (type === "education") {
    document.getElementById("degree").value = "";
    document.getElementById("institution").value = "";
    document.getElementById("institutionStartDate").value = "";
    document.getElementById("institutionEndDate").value = "";
    document.getElementById("educationDescription").value = "";
  } else if (type === "skill") {
    document.getElementById("skillName").value = "";
    document.getElementById("skillLevel").value = "Beginner";
  }
}
