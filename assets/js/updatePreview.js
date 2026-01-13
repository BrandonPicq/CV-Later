function updatePreview(type) {
  if (type === "experience") {
    updatePreviewExperiences();
  } else if (type === "education") {
    updatePreviewEducation();
  } else if (type === "skill") {
    updatePreviewSkills();
  }
}
function updatePreviewExperiences() {
  const previewSection = document.querySelector(".preview-experience");
  let html = "<h2>Professional Experience</h2>";

  experiencesData.forEach((exp, index) => {
    html += `
      <div class="preview-job">
        <p class="job-header">
          <span class="job-title">${exp.jobTitle}</span>
          <span class="company">${exp.companyName}</span>
          <span class="dates">${exp.jobStartDate} - ${exp.jobEndDate || "Present"}</span>
          <button class="btn-remove-entry" onclick="removeEntry('experience', ${index})">×</button>
        </p>
        <p class="description">${exp.jobDescription}</p>
      </div>
    `;
  });

  previewSection.innerHTML = html;
}

function updatePreviewEducation() {
  const previewSection = document.querySelector(".preview-education");
  let html = "<h2>Education</h2>";

  educationsData.forEach((edu, index) => {
    html += `
      <div class="preview-education-item">
        <p class="education-header">
          <span class="degree-title">${edu.degree}</span>
          <span class="institution">${edu.institution}</span>
          <span class="dates">${edu.institutionStartDate} - ${edu.institutionEndDate || "Present"}</span>
          <button class="btn-remove-entry" onclick="removeEntry('education', ${index})">×</button>
        </p>
        <p class="description">${edu.educationDescription}</p>
      </div>
    `;
  });

  previewSection.innerHTML = html;
}

function updatePreviewSkills() {
  const previewSection = document.querySelector(".preview-skills");
  let html = "<h2>Skills</h2><div class='skills-container'>";

  skillsData.forEach((skill, index) => {
    html += `
      <div class="skill-item">
        <span class="skill-tag">${skill.skillName} - ${skill.skillLevel}</span>
        <button class="btn-remove-entry" onclick="removeEntry('skill', ${index})">×</button>
      </div>
    `;
  });

  html += "</div>";
  previewSection.innerHTML = html;
}
