$(document).ready(function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    let entrevista = "";

    $.each(entrevistas, function(index, value) {
        if(value.id == id){
            entrevista = value;
            return false;
        }
    });

    console.log(entrevista.nombre);

    if (entrevista.nombre === undefined){
        $('#super-container').html(
            '<div class="jumbotron">' +
            '  <h1 class="display-4"> Ha ocurrido un error!</h1>' +
            '  <p class="lead">Lo sentimos, intentelo más tarde.</p>' +
            '  <hr class="my-4">' +
            '  <a class="btn btn-info bg-yellow" href="index.html" role="button">Volver a la Página principal</a>' +
            '</div>'
        )
    }

    $('#nombre-bread').html(entrevista.nombre);
    let pic = entrevista.pic;
    $('#pic').attr("src","img/"+pic);
    $('#nombre').html(entrevista.nombre);
    $('#centro').html(entrevista.centro);
    $('#anyo').html(entrevista.anyo);
    $('#facultad').html(entrevista.facultad);

    let respuestas = entrevista.respuestas;
    let contenedorResp = $('#preg-resp').html("");
    $.each(respuestas, function (index, value) {
        contenedorResp.append(
            '<div class="preg-resp col-sm-6 col-12">' +
            '<h5 class="pregunta font-weight-bold"> '+(index+1)+'. '+value.pregunta+'</h5>' +
            '<p class="pl-2 respuesta"> '+value.respuesta+'</p>' +
            '</div>'
        );
    });
});
