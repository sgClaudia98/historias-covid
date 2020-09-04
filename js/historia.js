$(document).ready(function () {
    const loc = window.location;
    const queryString = loc.search;
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
    if (entrevista.pic){
        $('#pic-cont').append('<img src="img/'+ entrevista.pic +'" class="rounded pic" id="pic" alt="pic">')
    }
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

    //Share Btns
    let loc_encoded = encodeURIComponent(loc);
    let text = "Conoce la historia de "+entrevista.nombre+
        ", estudiante de "+entrevista.facultad+" en la CUJAE, aportando a la lucha contra la covid-19.";
    let text_encoded = encodeURIComponent(text);
    let hashtag = "AlmaCujae,CorazonInformatica,Valiente,AccionesQueEngrandecen,VamosPorMas";

    let whatsapp = encodeURIComponent(text+'\n'+loc);

    let fb_href = 'http://www.facebook.com/sharer.php?u='+loc_encoded;
    let ws_href = 'whatsapp://send?text=' + whatsapp;
    let tw_href = 'http://twitter.com/intent/tweet?url='+loc_encoded+'&text='+text_encoded+'&hashtag='+hashtag;

    $('#share-fb').attr('href',fb_href);
    $('#share-ws').attr('href',ws_href);
    $('#share-tw').attr('href',tw_href);

});
