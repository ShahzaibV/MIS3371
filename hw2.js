
function validateFname() {
  var el = document.getElementById("fname");
  var ok = /^[a-zA-Z']{1,30}$/.test(el.value);
  document.getElementById("fname-error").innerHTML = ok ? "" : "First name: letters/apostrophes only (1–30)";
  return ok;
}
function validateMini() {
  var el = document.getElementById("mini");
  var ok = (el.value === "" || /^[a-zA-Z']{1}$/.test(el.value));
  document.getElementById("mini-error").innerHTML = ok ? "" : "Middle initial: one letter or blank";
  return ok;
}
function validateLname() {
  var el = document.getElementById("lname");
  var ok = /^[a-zA-Z']{1,30}$/.test(el.value);
  document.getElementById("lname-error").innerHTML = ok ? "" : "Last name: letters/apostrophes only (1–30)";
  return ok;
}


function validateDob() {
  var dob = document.getElementById("dob");
  if (!dob.value) {
    document.getElementById("dob-error").innerHTML = "Date can't be blank";
    return false;
  }
  var date = new Date(dob.value);
  var maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

  if (date > new Date()) {
    document.getElementById("dob-error").innerHTML = "Date can't be in the future";
    dob.value = "";
    return false;
  } else if (date < new Date(maxDate)) {
    document.getElementById("dob-error").innerHTML = "Date can't be more than 120 years ago";
    dob.value = "";
    return false;
  } else {
    document.getElementById("dob-error").innerHTML = "";
    return true;
  }
}


function validateSsn() {
  var ssn = document.getElementById("ssn").value;
  var ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
  if (!ssnR.test(ssn)) {
    document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN";
    return false;
  } else {
    document.getElementById("ssn-error").innerHTML = "";
    return true;
  }
}


function validateAddress1() {
  var el = document.getElementById("address1");
  var ok = el.value.length >= 2 && el.value.length <= 30;
  document.getElementById("address1-error").innerHTML = ok ? "" : "2 to 30 characters";
  return ok;
}


function validateZcode() {
  var zipInput = document.getElementById("zcode");
  var zip = zipInput.value.replace(/[^\d-]/g, "");

  if (!zip) {
    document.getElementById("zcode-error").innerHTML = "Zip code can't be blank";
    return false;
  }
  if (zip.length > 5) {
    zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
  } else {
    zip = zip.slice(0, 5);
  }
  zipInput.value = zip;
  document.getElementById("zcode-error").innerHTML = "";
  return true;
}


function validateEmail() {
  var val = document.getElementById("email").value.trim();
  var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,20})+$/;
  if (val.length === 0) {
    document.getElementById("email-error").innerHTML = "Email can't be blank";
    return false;
  } else if (!emailR.test(val)) {
    document.getElementById("email-error").innerHTML = "Enter a valid email address";
    return false;
  } else {
    document.getElementById("email-error").innerHTML = "";
    return true;
  }
}

function validatePhone() {
  var el = document.getElementById("phone");
  var digits = el.value.replace(/\D/g, "");
  if (digits.length === 0) {
    document.getElementById("phone-error").innerHTML = "Phone number can't be blank";
    return false;
  }
  if (digits.length === 10) {
    el.value = digits.slice(0,3) + "-" + digits.slice(3,6) + "-" + digits.slice(6);
    document.getElementById("phone-error").innerHTML = "";
    return true;
  } else {
    document.getElementById("phone-error").innerHTML = "Use 10 digits (000-000-0000)";
    return false;
  }
}

function validateUid() {
  uid = document.getElementById("uid").value.toLowerCase();
  document.getElementById("uid").value = uid;

  if (uid.length == 0) {
    document.getElementById("uid-error").innerHTML = "User ID can't be blank";
    return false;
  }
  if (!isNaN(uid.charAt(0))) {
    document.getElementById("uid-error").innerHTML = "User ID can't start with a number";
    return false;
  }
  var regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(uid)) {
    document.getElementById("uid-error").innerHTML = "User ID can only have letters, numbers, underscores, and dashes";
    return false;
  } else if (uid.length < 5) {
    document.getElementById("uid-error").innerHTML = "User ID must be at least 5 characters";
    return false;
  } else if (uid.length > 30) {
    document.getElementById("uid-error").innerHTML = "User ID can't exceed 30 characters";
    return false;
  } else {
    document.getElementById("uid-error").innerHTML = "";
    return true;
  }
}

function validatePword() {
  var uid = document.getElementById("uid").value.toLowerCase();
  var pword = document.getElementById("pword").value;
  var errorMessage = [];

  if (pword.length < 8 || pword.length > 30) errorMessage.push("8–30 characters required");
  if (!pword.match(/[a-z]/)) errorMessage.push("Enter at least one lowercase letter");
  if (!pword.match(/[A-Z]/)) errorMessage.push("Enter at least one uppercase letter");
  if (!pword.match(/[0-9]/)) errorMessage.push("Enter at least one number");
  if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) errorMessage.push("Enter at least one special character");
  if (pword.indexOf('"') > -1) errorMessage.push('Do not use double quotes (")');
  if (uid && pword.toLowerCase().indexOf(uid) > -1) errorMessage.push("Password can't contain user ID");

  document.getElementById("msg1").innerHTML = /[a-z]/.test(pword) ? "✓ has lowercase" : "• needs lowercase";
  document.getElementById("msg2").innerHTML = /[A-Z]/.test(pword) ? "✓ has uppercase" : "• needs uppercase";
  document.getElementById("msg3").innerHTML = /[0-9]/.test(pword) ? "✓ has number" : "• needs number";
  document.getElementById("msg4").innerHTML = /[!\@#\$%&*\-_\\.+\(\)]/.test(pword) ? "✓ has special" : "• needs special";

  document.getElementById("pword1-error").innerHTML = errorMessage.join("; ");
  return errorMessage.length === 0;
}

function confirmPword() {
  pword1 = document.getElementById("pword").value;
  pword2 = document.getElementById("con_pword").value;

  if (pword1 !== pword2) {
    document.getElementById("pword2-error").innerHTML = "Passwords don't match";
    return false;
  } else {
    document.getElementById("pword2-error").innerHTML = "Passwords match";
    return true;
  }
}

function reviewInput() {
  var formcontent = document.getElementById("signup");
  var formoutput = "<table class='output'><th colspan='3'> Review Your Information:</th>";
  for (var i = 0; i < formcontent.length; i++) {
    if (formcontent.elements[i].value !== "") {
      switch (formcontent.elements[i].type) {
        case "checkbox":
          if (formcontent.elements[i].checked) {
            formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>&#x2713;</td></tr>";
          }
          break;
        case "radio":
          if (formcontent.elements[i].checked) {
            formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>" + formcontent.elements[i].value + "</td></tr>";
          }
          break;
        default:
          formoutput += "<tr><td align='right'>" + formcontent.elements[i].name + "</td><td>" + formcontent.elements[i].value + "</td></tr>";
      }
    }
  }
  formoutput += "</table>";
  document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview() {
  document.getElementById("showInput").innerHTML = "";
}
