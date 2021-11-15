function traerInformacionCategory(){
    $.ajax({
        url:"http://129.151.113.36:8080/api/Category/all",
        Headers:{
            'Access-Control-Alow-Origin':'*'
        },
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultadoCategory").empty();
            pintarRespuestaCategory(respuesta);            
        }        
    });
}

function pintarRespuestaCategory(items){
    
    let myTable="<table border=1>";
    for(i=0;i<respuesta.length;i++){ 
        let id_Category=parseInt(items[i].idCategory);
        let name = items[i]["name"];
        let description = items[i]["description"];
        let bike = items[i]["bikes"];
        for (var j = 0; jbike.lenght; j++){
                if (JSON.stringify(bike) != "[]"){
                    delete bike[i]["idbike"];
                    for (var k = 0; k < bike[j]["reservations"].lenght; k++){
                        delete bike[j]["reservations"][k]["client"]["password"];
                        delete bike[j]["reservations"][k]["client"]["age"];
                    }
                    for (var k = 0; k<bike[j]["messages"].lenght; k++){
                        delete machine[j]["messages"][k]["idMessage"];
                    }
                }             
            }       
        bike = JSON.stringify(bike);
        myTable+="<tr>";
        myTable+="<td>"+ name + "</td>";
        myTable+="<td>"+ description + "</td>";
        myTable+="<td>"+ bike + "</td>";
        myTable+="</tr>";
    }
    myTable += "</table>";
    $("#resultadoCategory").append(myTable);

}
function guardarInformacionCategory(){
    let myData={
        "name":$("#Cname").val(),
        "description":$("#Cdescription").val(),         
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://129.151.113.36:8080/api/Category/save",        
        type: "POST",
        contentType: "application/json; charset=utf-8",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            $("#resultadoCategory").empty();
            $("#Cname").val("");
            $("#Cdescription").val(""), 
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
            
        },

        error: function (jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}
function traerInformacionBikes(){
    $.ajax({
        url:"http://129.151.113.36:8080/api/Bike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaBikes(respuesta);            
        }        
    });
}

function pintarRespuestaBikes(respuesta){
    
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){        
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].brand+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);

}
function guardarInformacionBikes(){
    let var3={
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),         
    };

    $.ajax({        
    type: "POST",
    contentType: "application/json; charset=utf-8",
    datatype:"JSON",
    data: JSON.stringify(var3),
    
    url:"http://129.151.113.36:8080/api/Bike/save",

    success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
            
        },

        error: function (jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}
function traerInformacionClientes(){
    $.ajax({
        url:"http://129.151.113.36:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);            
        }        
    });
}

function pintarRespuestaClientes(respuesta){
    
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){        
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").html(myTable);

}
function guardarInformacionClientes(){
    let var4={
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),         
    };

    $.ajax({        
    type: "POST",
    contentType: "application/json; charset=utf-8",
    datatype:"JSON",
    data: JSON.stringify(var4),
    
    url:"http://129.151.113.36:8080/api/Client/save",

    success:function(response){
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
            
        },

        error: function (jqXHR, textStatus, errorThrown){
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}