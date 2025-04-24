let menu = document.querySelector("#menu-btn");
let header = document.querySelector(".header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let themeToggler = document.querySelector("#theme-toggler");

themeToggler.onclick = () => {
  themeToggler.classList.toggle("fa-sun");
  if (themeToggler.classList.contains("fa-sun")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
};
console.log("hello");
// const btn = document.getElementById('signup');

let submit = document.getElementById("submit");
submit.addEventListener("click", showValues);

const form = document.getElementById("contact-form");
const sendButton = document.getElementById("submit");
const statusMessage = document.getElementById("status-message");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual form submission

  const email = form.email.value.trim();
  const title = form.title.value.trim();

  if (email === "" || title === "") {
    statusMessage.textContent = "⚠️ Email and Title fields cannot be empty.";
    statusMessage.className = "error-message show-message";
    return;
  }

  sendButton.disabled = true;
  sendButton.textContent = "Sending...";
  statusMessage.textContent = "";
  console.log("button has disabled");

  emailjs.sendForm("service_s6n9f3q", "template_a2wy96n", this)
    .then(
      function () {
        console.log("sending the alerts");

        // alert("Message sent successfully!");
        statusMessage.textContent = "✅ Message sent successfully!";
        statusMessage.className = "success-message show-message";
        form.reset(); // Clear the form
      },
      function (error) {
        sendButton.disabled = false;
        sendButton.textContent = "send message";
        statusMessage.textContent = "❌ Failed to send message.";
        console.error(error);
      }
    )
    .finally(() => {
      // Re-enable button and reset text
      sendButton.disabled = false;
      sendButton.textContent = "send message";
    });
});

function showValues() {
  // window.stop();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  let regex =
    /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
  if (regex.test(email)) {
    let data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    userAction(data);
  } else {
    alert("kindly provide a valid EmailID");
  }
}

function downloadPDF() {
  // URL of your PDF file (can be local or online)
  const pdfUrl = "document/resume.pdf"; // Example: 'resume.pdf' or 'https://example.com/file.pdf'

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "resume.pdf"; // Name the file as it will be saved
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const userAction = async (data) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  const response = await fetch(
    "https://portfolio-registration.herokuapp.com/register ",
    {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }), // string or object
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(response);
  if (response.status == 200) {
    alert("message send successfully");
    location.reload();
  }
};
