
window.addEventListener('DOMContentLoaded', function () {
    var dob = document.getElementById('dob');
    if (dob) {
        var today = new Date();
        var max = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var min = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
        function f(d) {
            var m = (d.getMonth() + 1).toString().padStart(2, '0');
            var day = d.getDate().toString().padStart(2, '0');
            return d.getFullYear() + '-' + m + '-' + day;
        }
        dob.setAttribute('max', f(max));
        dob.setAttribute('min', f(min));
    }
});


function setErr(id, msg) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = msg || "";
}


function validateFname() {
    var el = document.getElementById("fname");
    var ok = /^[a-zA-Z']{1,30}$/.test(el.value);
    setErr("fname-error", ok ? "" : "First name must be letters/apostrophes only (1–30).");
    return ok;
}


function validateMini() {
    var el = document.getElementById("mini");
    var ok = el.value === "" || /^[a-zA-Z']{1}$/.test(el.value);
    setErr("mini-error", ok ? "" : "Middle initial must be one letter or blank.");
    return ok;
}


function validateLname() {
    var el = document.getElementById("lname");
    var ok = /^[a-zA-Z']{1,30}$/.test(el.value);
    setErr("lname-error", ok ? "" : "Last name must be letters/apostrophes only (1–30).");
    return ok;
}


function validateDob() {
    var dob = document.getElementById("dob");
    if (!dob.value) {
        setErr("dob-error", "Date can't be blank");
        return false;
    }
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        setErr("dob-error", "Date can't be in the future");
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        setErr("dob-error", "Date can't be more than 120 years ago");
        dob.value = "";
        return false;
    } else {
        setErr("dob-error", "");
        return true;
    }
}


function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
    if (ssn && !ssnR.test(ssn)) {
        setErr("ssn-error", "Please enter a valid SSN");
        return false;
    } else {
        setErr("ssn-error", "");
        return true;
    }
}


function validateAddress1() {
    var el = document.getElementById("address1");
    var ok = el.value && el.value.length >= 2 && el.value.length <= 30;
    setErr("address1-error", ok ? "" : "2 to 30 characters.");
    return ok;
}

function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        setErr("zcode-error", "Zip code can't be blank");
        return false;
    }

    zip = zip.replace(/-/g, "");
    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    setErr("zcode-error", "");
    return true;
}

function validateEmail() {
    var el = document.getElementById("email");
    var val = (el.value || "").trim();
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,20})+$/;
    if (val.length === 0) {
        setErr("email-error", "Email can't be blank");
        return false;
    } else if (!emailR.test(val)) {
        setErr("email-error", "Enter a valid email address");
        return false;
    } else {
        setErr("email-error", "");
        return true;
    }
}

function validatePhone() {
    var el = document.getElementById("phone");
    var digits = el.value.replace(/\D/g, "");
    if (digits.length === 0) {
        setErr("phone-error", "Phone number can't be blank");
        return false;
    }
    if (digits.length === 10) {
        el.value = digits.slice(0,3) + "-" + digits.slice(3,6) + "-" + digits.slice(6);
        setErr("phone-error", "");
        return true;
    } else {
        setErr("phone-error", "Use 10 digits (000-000-0000)");
        return false;
    }
}

function validateUid() {
    var el = document.getElementById("uid");
    var uid = (el.value || "").toLowerCase();
    el.value = uid;

    if (uid.length === 0) {
        setErr("uid-error", "User ID can't be blank");
        return false;
    }
    if (!isNaN(uid.charAt(0))) {
        setErr("uid-error", "User ID can't start with a number");
        return false;
    }
    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uid)) {
        setErr("uid-error", "Only letters, numbers, underscores, and dashes");
        return false;
    } else if (uid.length < 5) {
        setErr("uid-error", "User ID must be at least 5 characters");
        return false;
    } else if (uid.length > 30) {
        setErr("uid-error", "User ID can't exceed 30 characters");
        return false;
    } else {
        setErr("uid-error", "");
        return true;
    }
}

function validatePword() {
    var uid = (document.getElementById("uid").value || "").toLowerCase();
    var pword = document.getElementById("pword").value || "";
    var msgs = [];

    if (pword.length < 8 || pword.length > 30) msgs.push("8–30 characters required");
    if (!pword.match(/[a-z]/)) msgs.push("Enter at least one lowercase letter");
    if (!pword.match(/[A-Z]/)) msgs.push("Enter at least one uppercase letter");
    if (!pword.match(/[0-9]/)) msgs.push("Enter at least one number");
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) msgs.push("Enter at least one special character");
    if (pword.includes('"')) msgs.push('Do not use double quotes (")');
    if (uid && pword.toLowerCase().includes(uid)) msgs.push("Password can't contain user ID");

    document.getElementById("msg1").innerHTML = pword.match(/[a-z]/) ? "✓ has lowercase" : "• needs lowercase";
    document.getElementById("msg2").innerHTML = pword.match(/[A-Z]/) ? "✓ has uppercase" : "• needs uppercase";
    document.getElementById("msg3").innerHTML = pwor
