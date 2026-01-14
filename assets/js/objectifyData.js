function objectifyData() {
  const payload = {
    identite: {
      firstName: fnInput.value,
      lastName: lnInput.value,
      email: mailInput.value,
      phone: phoneInput.value,
      headline: titleInput.value,
      summary: summaryInput.value,
    },
    pastWork: experiencesData,
    education: educationsData,
    skills: skillsData,
  };

  return JSON.stringify(payload);
}
