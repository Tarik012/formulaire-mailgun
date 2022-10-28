// récupérer le infos du formulaires

document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  document
    .getElementById("contact-form")
    .addEventListener("submit", async (event) => {
      //on mets les valeurs dans un objet
      event.preventDefault();
      const data = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      console.log(data);

      //envoyer les données avec axios
      const result = await axios.post("http://localhost:3000/send-data", data);

      console.log(result.data);
    });
});
