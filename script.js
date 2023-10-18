document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        from_name: document.getElementById("fromName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      emailjs.send("service_ac02ort", "template_bahd034", formData).then(
        function (response) {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
        },
        function (error) {
          console.error("Error sending email:", error);
        }
      );

      document.getElementById("emailForm").reset();
      alert("Message Sent!");
    });
});
