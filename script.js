const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailContainer = document.getElementById("emailContainer");
const passContainer = document.getElementById("passContainer");
const forms = document.getElementById("forms");
let emailFlag = false;
let passFlag = false;

// email input checking
emailInput.addEventListener("change", (e) => {
  const obj = e.currentTarget;
  const textVal = obj.value;

  const regex = /^.{4,}@.*\..*$/;

  if (regex.test(textVal)) {
    emailFlag = true;
    const para = document.getElementById("emailPara");
    if (para) {
      para.remove();
    }
  } else {
    emailFlag = false;
    const err = "Make sure email is more than 3 characters and has @ and a .";
    const para = document.createElement("p");
    para.innerText = err;
    para.style.color = "red";
    para.id = "emailPara";
    const paraExist = document.getElementById("emailPara");
    if (!paraExist) {
      emailContainer.appendChild(para);
    }
  }
});

// password input checking
passwordInput.addEventListener("change", (e) => {
  const obj = e.currentTarget;
  const textVal = obj.value;
  const regex = /^.{9,}$/;

  if (regex.test(textVal)) {
    passFlag = true;
    const para = document.getElementById("passPara");
    if (para) {
      para.remove();
    }
  } else {
    passFlag = false;
    const err = "Make sure password is more than 8 characters.";
    const para = document.createElement("p");
    para.innerText = err;
    para.style.color = "red";
    para.id = "passPara";
    const paraExist = document.getElementById("passPara");
    if (!paraExist) {
      passContainer.appendChild(para);
    }
  }
});

forms.addEventListener("change", (e) => {
  e.preventDefault();
  if (emailFlag && passFlag) {
    const err = "All good to go!";
    const para = document.createElement("p");
    para.innerText = err;
    para.style.color = "green";
    para.id = "formPara";
    const paraExist = document.getElementById("formPara");
    if (!paraExist) {
      passContainer.appendChild(para);
    }
  } else {
    const para = document.getElementById("formPara");
    if (para) {
      para.remove();
    }
  }
});

// Form submission
forms.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = e.currentTarget;
  if (emailFlag && passFlag) {
    const confirmStatus = confirm("Are you sure you want to proceed?");
    emailFlag = false;
    passFlag = false;

    if (confirmStatus) {
      alert("Successful signup!");
    } else {
      window.location.href = "#";
    }
    const para = document.getElementById("formPara");
    if (para) {
      para.remove();
    }
    obj.reset();
  }
});
