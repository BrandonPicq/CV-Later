function highlightEditingForm(type) {
  const forms = document.querySelectorAll(".experience-entry, .education-entry, .skill-entry");
  forms.forEach((form) => form.classList.remove("editing-mode"));

  if (type === "experience") {
    document.querySelector(".experience-entry").classList.add("editing-mode");
  } else if (type === "education") {
    document.querySelector(".education-entry").classList.add("editing-mode");
  } else if (type === "skill") {
    document.querySelector(".skill-entry").classList.add("editing-mode");
  }
}

function removeEditHighlight() {
  const forms = document.querySelectorAll(".experience-entry, .education-entry, .skill-entry");
  forms.forEach((form) => form.classList.remove("editing-mode"));
}
