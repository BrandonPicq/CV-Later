function removeEntry(type, index) {
  if (type === "experience") {
    experiencesData.splice(index, 1);
    updatePreviewExperiences();
  } else if (type === "education") {
    educationsData.splice(index, 1);
    updatePreviewEducation();
  } else if (type === "skill") {
    skillsData.splice(index, 1);
    updatePreviewSkills();
  }
}
