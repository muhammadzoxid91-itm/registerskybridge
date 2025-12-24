document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const course = document.getElementById("course").value;
    const time = document.getElementById("time").value;

   
    if (!name || !surname || !phone || !course || !time) {
        alert("Iltimos, barcha maydonlarni to‘ldiring!");
        return;
    }

    const phoneRegex = /^\+998\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Telefon raqam +998 bilan boshlanishi kerak!");
        return;
    }

    alert(
        "Rahmat, " + name +
        "!\nSiz ro‘yxatdan o‘tdingiz.\nTez orada siz bilan bog‘lanamiz."
    );

    document.getElementById("registerForm").reset();

});
