fetch("viernes,json")
.then(function(reponse){
    return Response.json;

})
.then(function(viernes){
    let placeholder=document.querySelector("#data-output");
    let out="";
    for(let dia of viernes){
        out+=`
        <tr>
        <td>${dia.id}</td>
        <td>${dia.nombre}</td>
        <td>${dia.eada}</td>
        <td>${dia.identidadsecreta}</td>
        <td>${dia.poderes}</td>
        </tr>
        `
    }
    placeholder.innerHTML=out;

})