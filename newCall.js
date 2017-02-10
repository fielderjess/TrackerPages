$(document).ready(function(){
    //$("#phone").parents().addClass("has-error");
    $("#callForm").submit(function (event){
        //alert("test");
        if(!validate()){
            event.preventDefault();
            alert("error");
        }
    });
})

function validate(){
    var form = $("#phone").val();
    var ret = true;
    alert(form + typeof form + isNaN(form));
    if(!isEmpty("phone") && ($("#phone").val().length != 10) || isNaN($("#phone").val())){
        //$("#phone").parents().addClass("has-error");
        ret = false;
    }
    if(!isEmpty("ext") && isNaN($("#ext").val())){
        ret = false;
    } 
    if(!isEmpty("caller") && ($("#caller").val().length != 10) || isNaN($("#phone").val())){
        ret = false;
    }
}

function isEmpty(x){
    return ($("#"+x).val().length == 0);
}