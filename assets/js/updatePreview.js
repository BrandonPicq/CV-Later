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

  // Potentiellement toucher le html en fonction de l'export pdf

  experiencesData.forEach((exp) => {
    html += `
      <div class="preview-job">
        <p class="job-header">
          <span class="job-title">${exp.jobTitle}</span>
          <span class="company">${exp.companyName}</span>
          <span class="dates">${exp.jobStartDate} - ${exp.jobEndDate || "Present"}</span>
        </p>
        <p class="description">${exp.jobDescription}</p>
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
          <span class="degree-title">${edu.degree}</span>
          <span class="institution">${edu.institution}</span>
          <span class="dates">${edu.institutionStartDate} - ${edu.institutionEndDate || "Present"}</span>
        </p>
        <p class="description">${edu.educationDescription}</p>
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
        <span class="skill-tag">${skill.skillName} - ${skill.skillLevel}</span>
      </div>
    `;
  });

  html += "</div>";
  previewSection.innerHTML = html;
}

function updatePreviewPersonal() {
  const firstName = fnInput.value;
  const lastName = lnInput.value;
  const email = mailInput.value;
  const phone = phoneInput.value;
  const professionalTitle = titleInput.value;
  const experienceSummary = summaryInput.value;

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
