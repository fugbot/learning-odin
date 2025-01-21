const form = document.querySelector("form");
const email = document.querySelector("#mail");
const zip = document.querySelector("#zip");
const pswd = document.querySelector("#password");
const pswdConfirm = document.querySelector("#pswd-confirmation");
const emailError = document.querySelector("#mail + span.error");
const zipError = document.querySelector("#country + span.error");
const pswdError = document.querySelector("#password + span.error");
const pswdTooShort = document.querySelector("span.error.short");
const pswdConfirmError = document.querySelector(
  "#pswd-confirmation + span.error"
);

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Email is required.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.tooShort) {
    emailError.text = `Email should be at least ${email.minLength} characters; you have entered ${email.value.length} characters.`;
  }
  emailError.className = "error active";
}

function checkPostalCode() {
  const constraints = {
    ca: [
      "^(CA-)?\\/^[ABCEGHJ-NPRSTVXY]d[ABCEGHJ-NPRSTV-Z][ -]?d[ABCEGHJ-NPRSTV-Z]d$/i",
      "Canadian postal codes must have 6 letters and digits: e.g. CA-A0A 1B1 or A0A1B1",
    ],
    ch: [
      "^(CH-)?\\d{4}$",
      "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
    us: [
      "^(US-)?\\d{5}(?:[-s]d{4})?$",
      "U.S. postal codes have either 5 digits, optionally followed by 4 digits: e.g. US-12345 or 12345-1234",
    ],
  };

  const country = document.querySelector("#country").value;
  const postalCodeField = document.querySelector("#zip");

  //build constraint checker
  const constraint = new RegExp(constraints[country][0], "");

  //check constraints
  if (constraint.test(postalCodeField.value)) {
    zipError.textContent = "";
  } else {
    zipError.textContent = constraints[country][1];
  }
}

window.onload = () => {
  document.getElementById("country").onchange = checkPostalCode;
  document.getElementById("zip").onchange = checkPostalCode;
};

pswd.addEventListener("input", () => {
  checkPasswordReqs();
  checkPasswordLength();
});

function checkPasswordReqs() {
  const constraint = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/gm);
  if (constraint.test(pswd.value)) {
    pswdError.textContent = "";
  } else {
    pswdError.textContent =
      "Your password needs to contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and 1 special character.";
  }
}

function checkPasswordLength() {
  if (pswd.validity.valueMissing) {
    pswdTooShort.textContent = "Password is required.";
  } else if (pswd.validity.tooShort) {
    pswdTooShort.textContent = `Password should be at least ${pswd.minLength} characters; you have entered ${pswd.value.length} characters.`;
  } else {
    pswdTooShort.textContent = "";
  }
}

pswdConfirm.addEventListener("input", () => {
  checkPasswordConfirm();
});

function checkPasswordConfirm() {
  if (pswd.value === pswdConfirm.value) {
    pswdConfirmError.textContent = "";
  } else {
    pswdConfirmError.textContent = "Password does not match.";
  }
}

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    showEmailError();
    e.preventDefault(); //prevent form submission
  }
  if (!zip.validity.valid) {
    zipError.textContent = "Postal code is required.";
    e.preventDefault();
  }
  if (!pswd.validity.valid) {
    checkPasswordLength();
    e.preventDefault();
  }
});
