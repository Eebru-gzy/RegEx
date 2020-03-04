/// Form blur event

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);


function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,15}$/i;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }else {
        name.classList.remove("is-invalid");
    }

    if (name.value === "") {
     name.classList.remove("is-invalid");
    }
    
}

function validateZip() {
    const zip = document.getElementById("zip");
    const re = /^([0-9]){6}$/;

    if (!re.test(zip.value)) {
     zip.classList.add("is-invalid");
    } else {
     zip.classList.remove("is-invalid");
    }

    if(zip.value ==='') {
     zip.classList.remove("is-invalid");
    }
}

function validateEmail() {
    const email = document.getElementById("email");
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
     email.classList.add("is-invalid");
    } else {
     email.classList.remove("is-invalid");
    }

    if (email.value === "") {
     email.classList.remove("is-invalid");
    }
}

function validatePhone() {
    const phone = document.getElementById("phone");
    // const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; //USA
    const re = /^\d{4}[- ]?\d{3}[- ]?\d{4}$/; //Nigeria


    if (!re.test(phone.value)) {
     phone.classList.add("is-invalid");
    } else {
     phone.classList.remove("is-invalid");
    }
 
    if (phone.value === "") {
     phone.classList.remove("is-invalid");
    }

}









function convertToValidPhoneNumber(text) {
 var result = [];
 text = text.replace(/[^\d]/g, "");
 while (text.length >= 6) {
  result.push(text.substring(0, 3));
  text = text.substring(3);
 }
 if (text.length > 0) result.push(text);
 return result.join("-");
}