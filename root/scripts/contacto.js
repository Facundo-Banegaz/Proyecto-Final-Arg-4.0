$(() => {

    $("#info-form").submit(function (event) {

        event.preventDefault();

        $(".form-control").removeClass("is-invalid");
        $(".invalid-feedback").hide();

        let formValid = true;

        $(".form-control").each(function () {
            if ($(this).val() === "") {
                $(this).addClass("is-invalid");
                $(this).next(".invalid-feedback").show();
                formValid = false;
            }
        });

        if (formValid) {
            alert("Formulario enviado correctamente");
        }

        $(".form-control").keyup(function () {
            if ($(this).val() === ! "") {
                $(this).addClass("is-invalid");
                $(this).next(".invalid-feedback").hide();
            }
        })

    })
});




