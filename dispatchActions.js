$(document).ready(function(){
    loadCallsTable();
    loadOnDutyTable();
})


function loadCallsTable() { 
    var table = document.getElementById("callsTable");
    var callsTable = table.getElementsByTagName('tbody')[0];
    var numColumns = table.rows[0].cells.length;
    var loadCount = table.rows.length -1;
    var callsData = getCallsData();
    var length = callsData.length;
    var call;

    for(call=0; call<length; call++){
        var row = callsTable.insertRow(loadCount);
        var cell = row.insertCell(0)
        cell.innerHTML = res[call].PRIORITY;
        var cell = row.insertCell(0)
        cell.innerHTML = res[call].REQDBY;
         var cell = row.insertCell(0)
        cell.innerHTML = res[call].Stage;
         var cell = row.insertCell(0)
        cell.innerHTML = res[call].Driver;
         var cell = row.insertCell(0)
        cell.innerHTML = res[call].Truck;
         var cell = row.insertCell(0)
        cell.innerHTML = res[call].zone;

        loadCount++;
    }

    if(loadCount<20){
    
        while(loadCount <= 20){
            var row = callsTable.insertRow(loadCount);

            for(call = 0; call < numColumns; call++){
                var cell = row.insertCell(call)
                cell.innerHTML = "";
            }

            loadCount++;

        }
    }
}

function getCallsData() {
     $.ajax({
        url: "",
        type: 'GET',
        dataType: 'json', 
        success: function(result) {
           return result;
      }
     });
     return "";
}


function getTruckData() {
     $.ajax({
        url: "",
        type: 'GET',
        dataType: 'json', 
        success: function(result) {
           return result;
      }
     });
     return "";
}

function loadOnDutyTable() {
    var table = document.getElementById("onDutyTable");
    var onDutyTable = table.getElementsByTagName('tbody')[0];
    var numColumns = table.rows[0].cells.length;
    var loadCount = table.rows.length -1;
    var truckData =  getTruckData();
    var length = truckData.length;
    var truck;

    for(truck=0; truck<length; truck++){
        var row = callsTable.insertRow(loadCount);
        var cell = row.insertCell(0)
        cell.innerHTML = res[truck].TruckId;
        var cell = row.insertCell(1)
        cell.innerHTML = res[truck].TowType;
        var cell = row.insertCell(2)
        cell.innerHTML = res[truck].Driver;
        var cell = row.insertCell(3)
        cell.innerHTML = res[truck].Status;
        loadCount++;
    }

    if(loadCount<20){
    
        while(loadCount <= 20){
            var row = onDutyTable.insertRow(loadCount);
            var i;
            for(i = 0; i < numColumns; i++){
                var cell = row.insertCell(i)
                cell.innerHTML = "";
            }

            loadCount++;

        }
    }
}