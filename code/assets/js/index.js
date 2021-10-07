$('#add_service').submit((event) => {
    alert('Serviço criado com sucesso!')
})

$("#update_service").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    var request = {
        "url": `http://localhost:3000/api/services/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Serviço atualizado com sucesso!");
        location.replace('http://localhost:3000')
    })
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:3000/api/services/${id}`,
            "method": "DELETE"
        }

        if(confirm("Você quer realmente deletar esse serviço?")){
            $.ajax(request).done(function(response){
                alert("Serviço deletado com sucesso!");
                location.reload();
            })
        }
    })
}