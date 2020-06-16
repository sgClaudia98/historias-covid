/** Al iniciar el documento se rellenan las listas desplegables de los municipios y se crea un
 * consejo Popular
 */
$(document).ready(function () {
    let facultad = $('#facultad').html("");
    $.each(facultades, function (index, value) {
        facultad.append('<option value="'+ value +'">'+ value +'</option>');
    });

    let centro = $('#centro').html("");
    $.each(centros, function (index, value) {
        centro.append('<option value="'+ value +'">'+ value +'</option>');
    });

    let preg_resp = $('#pr-container').html('');

    $.each(preguntas, function (index, value) {
        preg_resp.append(
        '<div class="form-group col-md-6 pr-data">'+
        '     <label for="pr-'+index+'" class="font-weight-bold">'+
        (index+1)+'. <span class="pregunta">'+value+'</span></label>'+
        '     <textarea class="form-control respuesta" type="text" id="pr-'+index+'" rows="1"></textarea>'+
        '</div>'
        )
    });

});

function terminar(){
    let respuesta = new RespuestaVoluntario();
    respuesta.nombre = $('#nombre').val();
    respuesta.anyo = $('#anyo').val();
    respuesta.facultad = $('#facultad').val();
    respuesta.centro = $('#centro').val();

    let prs = document.querySelectorAll('.pr-data');

    for (let i=0 ; i<prs.length ; i++) { //Datos de los Consejos Populares
        let pr = new Respuesta();

        pr.pregunta = prs[i].querySelector(".pregunta").textContent;
        pr.respuesta = prs[i].querySelector(".respuesta").value;

        if(!(pr.respuesta.length === 0 || !pr.respuesta.trim)){
            respuesta.respuestas.push(pr);
        }
    }

    console.log(respuesta);
    console.log(JSON.stringify(respuesta));

    let href = 'whatsapp://send?text=' + encodeURIComponent(JSON.stringify(respuesta));
    window.open(href);
    //let send = $("#send");
    //send.attr('href',href);
    //send.attr('href',href);
}
