$(function () {
  getPedido();
});



let api = "http://localhost:3000/productos";

function getPedido() { 
  $(document).ready(function () { 
  $.ajax({
    type: "GET",
    url:api,
    dataType: "json",
    success: function (data) {
      $.each(data, function (i, fila) {
        
        $("#pedido").append(`<option  value=${fila.nombre} >${fila.nombre}</option>`);
        
      })
    }
    
  });
})
}