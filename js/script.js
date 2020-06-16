$(document).ready(function () {
    let contenedor = $('#contenedor').html("");
    $.each(entrevistas, function (index, value) {
        contenedor.append(
        '<div class="card">'+
        '   <img src="img/'+value.pic+'" class="card-img-top" alt="pic">'+
        '   <div class="card-body">'+
        '      <h5 class="card-title">'+value.nombre+'</h5>'+
        '      <p class="card-subtitle">'+value.centro+'</p>'+
        '      <p class="card-text">'+value.facultad+'</p>'+
        '   </div>'+
        '   <a href="historia.html?id='+value.id+'" class="btn btn-info w-100 exp">Mi Historia</a>'+
        '</div>'
        );
    });

});
