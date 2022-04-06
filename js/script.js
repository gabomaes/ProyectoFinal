function validateForm() {
    var nombre = document.getElementById("name_contact").value;
    var correo = document.getElementById("email_contact").value;
    var tel = document.getElementById("tel_contact").value;
    var option = document.getElementById("option_contact").value;
    var mensaje = document.getElementById("comment_contact").value;
    var estudiante = document.getElementById("name_student").value;
    var edad = document.getElementById("student_age").value;

    if (nombre != '') {
        document.getElementById("name_contact").classList.remove("errorForm");
        document.getElementById("name_contact").classList.add("successForm");
    } else {
        document.getElementById("name_contact").classList.remove("successForm");
        document.getElementById("name_contact").classList.add("errorForm");
    }

    if (correo != '') {

        if (/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(correo)) {

            document.getElementById("email_contact").classList.remove("errorForm");
            document.getElementById("email_contact").classList.add("successForm");

        } else {
            document.getElementById("email_contact").classList.remove("successForm");
            document.getElementById("email_contact").classList.add("errorForm");
            document.getElementById("error-email").innerHTML = "El correo no tiene la estructura correcta";
        }

    } else {
        document.getElementById("email_contact").classList.remove("successForm");
        document.getElementById("email_contact").classList.add("errorForm");
    }

    if (tel != '') {

        if (tel.length < 5) {
            document.getElementById("error-tel").innerHTML = "Requiere un minimo de 9 caracteres";
            document.getElementById("tel_contact").classList.remove("errorForm");
            document.getElementById("tel_contact").classList.add("successForm");
        }


        document.getElementById("tel_contact").classList.remove("successForm");
        document.getElementById("tel_contact").classList.add("errorForm");
    } else {
        document.getElementById("tel_contact").classList.remove("successForm");
        document.getElementById("tel_contact").classList.add("errorForm");
    }

    if (mensaje != '') {

        if (mensaje.length < 20) {

            document.getElementById("comment_contact").classList.remove("errorForm");
            document.getElementById("comment_contact").classList.add("successForm");
        }
        document.getElementById("comment_contact").classList.remove("successForm");
        document.getElementById("comment_contact").classList.add("errorForm");
        document.getElementById("error-comment").innerHTML = "Escriba un minimo de 20 Caracteres";

    } else {
        document.getElementById("comment_contact").classList.remove("successForm");
        document.getElementById("comment_contact").classList.add("errorForm");
    }

    if (estudiante != '') {
        document.getElementById("name_student").classList.remove("errorForm");
        document.getElementById("name_student").classList.add("successForm");
    } else {
        document.getElementById("name_student").classList.remove("successForm");
        document.getElementById("name_student").classList.add("errorForm");
    }


    if (edad != '') {
        document.getElementById("student_age").classList.remove("errorForm");
        document.getElementById("student_age").classList.add("successForm");

    } else {
        document.getElementById("student_age").classList.remove("successForm");
        document.getElementById("student_age").classList.add("errorForm");
    }


}