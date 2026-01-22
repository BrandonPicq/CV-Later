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

  experiencesData.forEach((exp, index) => {
    if (editingIndex === index && editingType === "experience") {
      html += `
        <div class="preview-job" style="opacity: 0.7;">
          <p class="job-header">
            <span class="job-title">${escapeHtml(jobTitleInput.value)}</span>
            <span class="company">${escapeHtml(companyNameInput.value)}</span>
            <span class="dates">${escapeHtml(jobStartDateInput.value)} ${
        jobEndDateInput.value ? " - " + escapeHtml(jobEndDateInput.value) : ""
      }</span>
          </p>
          ${jobDescriptionInput.value ? `<p class="description">${escapeHtml(jobDescriptionInput.value)}</p>` : ""}
        </div>
      `;
    } else {
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
    }
  });

  if (editingIndex === null && (jobTitleInput.value || companyNameInput.value || jobStartDateInput.value)) {
    html += `
      <div class="preview-job" style="opacity: 0.7;">
        <p class="job-header">
          <span class="job-title">${escapeHtml(jobTitleInput.value)}</span>
          <span class="company">${escapeHtml(companyNameInput.value)}</span>
          <span class="dates">${escapeHtml(jobStartDateInput.value)} ${
      jobEndDateInput.value ? " - " + escapeHtml(jobEndDateInput.value) : ""
    }</span>
        </p>
        ${jobDescriptionInput.value ? `<p class="description">${escapeHtml(jobDescriptionInput.value)}</p>` : ""}
      </div>
    `;
  }

  previewSection.innerHTML = html;
}

function updatePreviewEducation() {
  const previewSection = document.getElementById("preview-education");
  let html = "<h2>Education</h2>";

  educationsData.forEach((edu, index) => {
    if (editingIndex === index && editingType === "education") {
      html += `
      <div class="preview-education-item" style="opacity: 0.7;">
        <p class="education-header">
          <span class="degree-title">${escapeHtml(degreeInput.value)}</span>
          <span class="institution">${escapeHtml(institutionInput.value)}</span>
          <span class="dates">${escapeHtml(institutionStartDateInput.value)} ${
        institutionEndDateInput.value ? " - " + escapeHtml(institutionEndDateInput.value) : ""
      }</span>
        </p>
        ${educationDescriptionInput.value ? `<p class="description">${escapeHtml(educationDescriptionInput.value)}</p>` : ""}
      </div>
    `;
    } else {
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
    }
  });

  if (editingIndex === null && (degreeInput.value || institutionInput.value || institutionStartDateInput.value)) {
    html += `
      <div class="preview-education-item" style="opacity: 0.7;">
        <p class="education-header">
          <span class="degree-title">${escapeHtml(degreeInput.value)}</span>
          <span class="institution">${escapeHtml(institutionInput.value)}</span>
          <span class="dates">${escapeHtml(institutionStartDateInput.value)} ${
      institutionEndDateInput.value ? " - " + escapeHtml(institutionEndDateInput.value) : ""
    }</span>
        </p>
        ${educationDescriptionInput.value ? `<p class="description">${escapeHtml(educationDescriptionInput.value)}</p>` : ""}
      </div>
    `;
  }

  previewSection.innerHTML = html;
}

function updatePreviewSkills() {
  const previewSection = document.getElementById("preview-skills");
  let html = "<h2>Skills</h2><div class='skills-container'>";

  skillsData.forEach((skill, index) => {
    if (editingIndex === index && editingType === "skill") {
      html += `
      <div class="skill-item" style="opacity: 0.7;">
        <span class="skill-tag">${escapeHtml(skillNameInput.value)} - ${escapeHtml(skillLevelInput.value)}</span>
      </div>
    `;
    } else {
      html += `
      <div class="skill-item">
        <span class="skill-tag">${escapeHtml(skill.skillName)} - ${escapeHtml(skill.skillLevel)}</span>
      </div>
    `;
    }
  });

  if (editingIndex === null && skillNameInput.value) {
    html += `
      <div class="skill-item" style="opacity: 0.7;">
        <span class="skill-tag">${escapeHtml(skillNameInput.value)} - ${escapeHtml(skillLevelInput.value)}</span>
      </div>
    `;
  }

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
