function cancelEdit() {
  editingIndex = null;
  editingType = null;

  clearForm("experience");
  clearForm("education");
  clearForm("skill");

  removeEditHighlight();

  updateButtonText();

  updatePreview("experience");
  updatePreview("education");
  updatePreview("skill");
}
