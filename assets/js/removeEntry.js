function removeEntry(type, index) {
  if (type === "experience") {
    experiencesData.splice(index, 1);
    updatePreviewExperiences();
    displayFormEntries("experience");
  } else if (type === "education") {
    educationsData.splice(index, 1);
    updatePreviewEducation();
    displayFormEntries("education");
  } else if (type === "skill") {
    skillsData.splice(index, 1);
    updatePreviewSkills();
    displayFormEntries("skill");
  }

  if (editingType === type) {
    cancelEdit();
  }
}
