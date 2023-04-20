$(function () { 
  getProductos();
  getFiltrado();
})


let api = "http://localhost:3000/productos";

let productos;

function getProductos() { 
  $(document).ready(function () { 
  $.ajax({
    type: "GET",
    url:api,
    dataType: "json",
    success: function (data) {
      productos = data;
      $.each(productos, function (i, item) {
        console.log(productos)
        let col = `
                  <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 py-3">
                    <div class="card" style="width: 18rem;" id=${i}>
                      <img src=${item.img} class="card-img-top img" alt=${item.nombre}>
                      <div class="card-body">
                        <h5 class="card-title">${item.nombre}</h5>
                        <p class="card-text">$${item.precio}</p>
                      </div>
                    </div>
                  </div>
                    `;
        $("#producto").append(col);
      })
    },
    error: () => { 
      alert("Hubo un error al procesar tu solicitud. Intenta nuevamente.");
    }
  });
})
}

// cargar filtro 
function getFiltrado() { 
  $(document).ready(function () { 
  $.ajax({
    type: "GET",
    url:api,
    dataType: "json",
    success: function (data) {
      $.each(data, function (i, fila) {
        
        $(".filtro").append(`<option  value=${i} >${fila.nombre}</option>`);
        
      })
    }
    
  });
})
}




// // cargar filtro 
// function getFiltrado(filtro) { 
//   $(document).ready(function () { 
//   $.ajax({
//     type: "GET",
//     url:api,
//     dataType: "json",
//     success: function (data) {
//       $.each(data, function (i, fila) {
//         if (fila.nombre === filtro) { 
//                   $(".filtro").append(`<option  value=${i} >${fila.nombre}</option>`);
//         }
//       })
//     }
    
//   });
// })
// }






