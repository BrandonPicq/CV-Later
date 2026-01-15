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

  experiencesData.forEach((exp) => {
    html += `
      <div class="preview-job">
        <p class="job-header">
          <span class="job-title">${escapeHtml(exp.jobTitle)}</span>
          <span class="company">${escapeHtml(exp.companyName)}</span>
          <span class="dates">${escapeHtml(exp.jobStartDate)} - ${escapeHtml(exp.jobEndDate) || "Present"}</span>
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
          <span class="degree-title">${escapeHtml(edu.degree)}</span>
          <span class="institution">${escapeHtml(edu.institution)}</span>
          <span class="dates">${escapeHtml(edu.institutionStartDate)} - ${escapeHtml(edu.institutionEndDate) || "Present"}</span>
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
        <span class="skill-tag">${escapeHtml(skill.skillName)} - ${escapeHtml(skill.skillLevel)}</span>
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
