function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function updatePreview(type) {
  if (type === "experience") {
    updatePreviewExperiences();
  } else if (type === "education") {
    updatePreviewEducation();
  } else if (type === "skill") {
    updatePreviewSkills();
  } else if (type === "personal") {
    updatePreviewPersonal();
  }
}
function updatePreviewExperiences() {
  const previewSection = document.getElementById("preview-experience");
  let html = "<h2>Professional Experience</h2>";

<<<<<<< HEAD
=======
  // Potentiellement toucher le html en fonction de l'export pdf

>>>>>>> 677eacf4ca06d0a020f7927a1794087c35ffc525
  experiencesData.forEach((exp) => {
    html += `
      <div class="preview-job">
        <p class="job-header">
<<<<<<< HEAD
          <span class="job-title">${escapeHtml(exp.jobTitle)}</span>
          <span class="company">${escapeHtml(exp.companyName)}</span>
          <span class="dates">${escapeHtml(exp.jobStartDate)} - ${escapeHtml(exp.jobEndDate) || "Present"}</span>
=======
          <span class="job-title">${exp.jobTitle}</span>
          <span class="company">${exp.companyName}</span>
          <span class="dates">${exp.jobStartDate} - ${exp.jobEndDate || "Present"}</span>
>>>>>>> 677eacf4ca06d0a020f7927a1794087c35ffc525
        </p>
        <p class="description">${escapeHtml(exp.jobDescription)}</p>
      </div>
    `;
  });

  previewSection.innerHTML = html;
}

function updatePreviewEducation() {
  const previewSection = document.getElementById("preview-education");
  let html = "<h2>Education</h2>";

  educationsData.forEach((edu) => {
    html += `
      <div class="preview-education-item">
        <p class="education-header">
<<<<<<< HEAD
          <span class="degree-title">${escapeHtml(edu.degree)}</span>
          <span class="institution">${escapeHtml(edu.institution)}</span>
          <span class="dates">${escapeHtml(edu.institutionStartDate)} - ${escapeHtml(edu.institutionEndDate) || "Present"}</span>
=======
          <span class="degree-title">${edu.degree}</span>
          <span class="institution">${edu.institution}</span>
          <span class="dates">${edu.institutionStartDate} - ${edu.institutionEndDate || "Present"}</span>
>>>>>>> 677eacf4ca06d0a020f7927a1794087c35ffc525
        </p>
        <p class="description">${escapeHtml(edu.educationDescription)}</p>
      </div>
    `;
  });

  previewSection.innerHTML = html;
}

function updatePreviewSkills() {
  const previewSection = document.getElementById("preview-skills");
  let html = "<h2>Skills</h2><div class='skills-container'>";

  skillsData.forEach((skill) => {
    html += `
      <div class="skill-item">
<<<<<<< HEAD
        <span class="skill-tag">${escapeHtml(skill.skillName)} - ${escapeHtml(skill.skillLevel)}</span>
=======
        <span class="skill-tag">${skill.skillName} - ${skill.skillLevel}</span>
>>>>>>> 677eacf4ca06d0a020f7927a1794087c35ffc525
      </div>
    `;
  });

  html += "</div>";
  previewSection.innerHTML = html;
}

function updatePreviewPersonal() {
  const firstName = escapeHtml(fnInput.value);
  const lastName = escapeHtml(lnInput.value);
  const email = escapeHtml(mailInput.value);
  const phone = escapeHtml(phoneInput.value);
  const professionalTitle = escapeHtml(titleInput.value);
  const experienceSummary = escapeHtml(summaryInput.value);

  const fullName = (firstName + " " + lastName).trim();

  let contactInfo = "";

  if (email) {
    contactInfo = "Email: " + email;
  }
  if (phone) {
    if (email) {
      contactInfo += " | ";
    }
    contactInfo += "Phone: " + phone;
  }

  let html = `
    <h1>${fullName}</h1>
    <p class="professional-title">${professionalTitle}</p>
  `;

  if (contactInfo) {
    html += `<p class="contact-info">${contactInfo}</p>`;
  }

  if (experienceSummary) {
    html += `<p class="experience-summary">${experienceSummary}</p>`;
  }

  prevPersonal.innerHTML = html;
}
