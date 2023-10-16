import emailjs from "@emailjs/browser";
fName = document.getElementById("fName");
email = document.getElementById("email");
message = document.getElementById("message");

emailjs.init("KRXzwPpKPGq8Y13bW");

function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send(
      "afs405@gmail.com",
      "emailjs.send(serviceID, templateID, templateParams, publicKey);",
      params
    )
    .then(
      function (response) {
        console.log("SUCCESS!", response.status);
      },
      function (error) {
        console.log("ERROR!", error);
      }
    );
}
