function displayFormEntries(type) {
  if (type === "experience") return displayExperienceEntries();
  else if (type === "education") return displayEducationEntries();
  else if (type === "skill") return displaySkillEntries();
}

function displayExperienceEntries() {
  const container = document.getElementById("all-experiences");
  let html = '<div class="accordion" id="experiencesAccordion">';

  experiencesData.forEach((exp, index) => {
    html += `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#exp-${index}" aria-expanded="false" aria-controls="exp-${index}">
            <strong>${exp.jobTitle}</strong> - ${exp.companyName}
          </button>
        </h2>
        <div id="exp-${index}" class="accordion-collapse collapse" data-bs-parent="#experiencesAccordion">
          <div class="accordion-body">
            <p><strong>${exp.companyName}</strong> | ${exp.jobStartDate} - ${exp.jobEndDate || "Present"}</p>
            <p>${exp.jobDescription}</p>
            <div class="row gap-2">
            <div class="col">
              <button type="button" class="btn btn-outline-primary btn-sm w-100" onclick="editEntry('experience', ${index})">Edit</button>
            </div>
            <div class="col">
              <button type="button" class="btn btn-outline-danger btn-sm w-100" onclick="removeEntry('experience', ${index})">Remove</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  html += "</div>";
  container.innerHTML = html;
}

function displayEducationEntries() {
  const container = document.getElementById("all-educations");
  let html = '<div class="accordion" id="educationAccordion">';

  educationsData.forEach((edu, index) => {
    html += `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#edu-${index}" aria-expanded="false" aria-controls="edu-${index}">
            <strong>${edu.degree}</strong> - ${edu.institution}
          </button>
        </h2>
        <div id="edu-${index}" class="accordion-collapse collapse" data-bs-parent="#educationAccordion">
          <div class="accordion-body">
            <p><strong>${edu.institution}</strong> | ${edu.institutionStartDate} - ${edu.institutionEndDate || "Present"}</p>
            <p>${edu.educationDescription}</p>
            <div class="row gap-2">
              <div class="col">
                <button type="button" class="btn btn-outline-primary btn-sm w-100" onclick="editEntry('education', ${index})">Edit</button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-danger btn-sm w-100" onclick="removeEntry('education', ${index})">Remove</button>
              </div>
          </div>
        </div>
      </div>
    `;
  });

  html += "</div>";
  container.innerHTML = html;
}

function displaySkillEntries() {
  const container = document.getElementById("all-skills");
  let html = '<div class="accordion" id="skillsAccordion">';

  skillsData.forEach((skill, index) => {
    html += `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#skill-${index}" aria-expanded="false" aria-controls="skill-${index}">
            <strong>${skill.skillName}</strong> - ${skill.skillLevel}
          </button>
        </h2>
        <div id="skill-${index}" class="accordion-collapse collapse" data-bs-parent="#skillsAccordion">
          <div class="accordion-body">
            <div class="row gap-2">
              <div class="col">
                <button type="button" class="btn btn-outline-primary btn-sm w-100" onclick="editEntry('skill', ${index})">Edit</button>
              </div>
              <div class="col">
                <button type="button" class="btn btn-outline-danger btn-sm w-100" onclick="removeEntry('skill', ${index})">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  html += "</div>";
  container.innerHTML = html;
}
