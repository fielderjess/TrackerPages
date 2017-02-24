$(document).ready(function(){
    //$("#phone").parent().addClass("has-error");
    //$("#phone").after("<span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>");
    //$("#phone").parent().remove("span");
    //$("#phone").parent().removeClass("has-error");    
    $("#callForm").submit(function (event){
        //alert("test");
        if(!validate()){
            event.preventDefault();
            alert("One or more fields are incorrect");
        }
    });
})

function validate(){
    var ret = true;
    if(!isEmpty("pr") && ($("#pr").val().length != 10 || isNaN($("#pr").val()))){
        $("#pr").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("phone") && ($("#phone").val().length != 10 || isNaN($("#phone").val()))){
        $("#phone").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("ext") && isNaN($("#ext").val())){
        $("#ext").addClass("input-error");
        ret = false;
    } 
    if(!isEmpty("ownerPhone") && ($("#ownerPhone").val().length != 10 || isNaN($("#ownerPhone").val()))){
        $("#ownerPhone").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("ownerExt") && isNaN($("#ownerExt").val())){
        $("#ownerExt").addClass("input-error");
        //$("#ext").after("<span class=\"glyphicon glyphicon-remove form-control-feedback\"></span>");
        ret = false;
    } 
    if(!isEmpty("year") && ($("#year").val().length != 4 || isNaN($("#year").val()))){
        $("#year").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("vin") && ($("#vin").val().length != 17)){
        $("#vin").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("odometer") && isNaN($("#odometer").val())){
        $("#odometer").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("zip") && (isNaN($("#zip").val()) || $("#zip").val().length != 5)){
        $("#zip").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("destZip") && (isNaN($("#destZip").val()) || $("#destZip").val().length != 5)){
        $("#destZip").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("scheduledDate") && !isValidDate($("#scheduledDate").val())){
        $("#scheduledDate").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("scheduledTime") && !isValidTime($("#scheduledTime").val())){
        $("#scheduledTime").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("eta") && !isValidTime($("#eta").val())){
        $("#eta").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("expDate") && !isValidExpDate($("#expDate").val())){
        $("#expDate").addClass("input-error");
        ret = false;
    }
    if(!isEmpty("billZip") && (isNaN($("#billZip").val()) || $("#billZip").val().length != 5)){
        $("#billZip").addClass("input-error");
        ret = false;
    }
    return ret;
};

function isEmpty(x){
    return ($("#"+x).val().length == 0);
};

// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
function isValidDate(dateString)
{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month == 0 || month > 12)
        return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
};

function isValidExpDate(dateString)
{
    // First check for the pattern
    if(!/^\d{1,2}\/\d{4}$/.test(dateString))
        return false;

    // Parse the date parts to integers
    var parts = dateString.split("/");
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[1], 10);

    // Check the ranges of month and year
    if(year < 2016 || year > 3000 || month == 0 || month > 12)
        return false;
    else return true;
};

function isValidTime(timeString){
    var regex = /^([0-2]\d):([0-5]\d)\s?/;
    regex.test(timeString);
};