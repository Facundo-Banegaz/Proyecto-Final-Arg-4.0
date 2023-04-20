$(function () { 
  getProductos();
  getFiltrado();
})


let api = "  http://localhost:53000/recetas";
let recetas;
function getProductos() { 
  $(document).ready(function () { 
  $.ajax({
    type: "GET",
    url:api,
    dataType: "json",
    success: function (data) {
      recetas = data;
      $.each(recetas, function (i, item) {
        let col = `
                  <div class="row g-0 bg-body-secondary position-relative mt-3 mb-3">
                    <div class="col-md-6 mb-md-0 p-md-4 id=${i}">
                      <img src=${item.img} class="w-100" alt=${item.nombre}>
                    </div>
                    <div class="col-md-6 p-4 ps-md-0">
                      <h2 class="mt-0">${item.nombre}</h2> 
                      <h5>Tiempo de elaboracion: ${item.tiempo}:</h5>
                      <h5>Cantidad de porciones: ${item.porcion}</h5>
                      <p class="">Ingredientes:</p>
                        <ul> 
                          <li>${item.ingredientes[0]}</li>
                          <li>${item.ingredientes[1]}</li>
                          <li>${item.ingredientes[2]}</li> 
                          <li>${item.ingredientes[3]}</li> 
                          <li>${item.ingredientes[4]}</li> 
                          <li>${item.ingredientes[5]}</li> 
                          <li>${item.ingredientes[6]}</li>
                          <li>${item.ingredientes[7]}</li> 
                          <li>${item.ingredientes[8]}</li> 
                          <li>${item.ingredientes[9]}</li> 
                          <li>${item.ingredientes[10]}</li> 
                          <li>${item.ingredientes[11]}</li> 
                          <li>${item.ingredientes[12]}</li> 
                          
                        </ul>
                      <p class="">Preparacion:</p>
                        <ol> 
                          <li>${item.preparacion[0]}</li> 
                          <li>${item.preparacion[1]}</li> 
                          <li>${item.preparacion[2]}</li> 
                      </ol>
                      <a href=${item.link} target="_blank" class="btn btn-primary">Ver video</a>
                    </div>
                  </div>
                    `;
        $("#recetas").append(col);
      })
    },
        error: () => { 
      alert("Hubo un error al procesar tu solicitud. Intenta nuevamente.");
    }
  });
})
}


function getFiltrado() { 
  $(document).ready(function () { 
  $.ajax({
    type: "GET",
    url:api,
    dataType: "json",
    success: function (data) {

      $.each(data, function (i, fila) {
        $(".filtro").append(`<option value=${i} >${fila.nombre}</option>`);
      })
    },
        
  });
})
}
