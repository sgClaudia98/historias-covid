$(document).ready(function () {
    let contenedor = $('#contenedor').html("");
    $.each(entrevistas, function (index, value) {
        let html =  '<div class="card">';
        if (value.pic){
            html += '   <img src="img/'+value.pic+'" class="card-img-top" alt="pic">';
        }
        html += '   <div class="card-body">'+
               '      <h5 class="card-title">'+value.nombre+'</h5>'+
               '      <p class="card-subtitle">'+value.centro+'</p>'+
               '      <p class="card-text">'+value.facultad+'</p>'+
               '   </div>'+
                   (value.respuestas.length > 0 ?
                   '<a href="historia.html?id=' + value.id + '" class="btn btn-info w-100 exp">Mi Historia</a>' : '')+
               '</div>'
        contenedor.append(html);
    });

});
