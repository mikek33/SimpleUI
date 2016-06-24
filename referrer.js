$(document).ready(function() {
    $("#domainBtn").click(
        function(event) {
            var dValue = {
                uri: $('#domainValue').val()
            }
            jQuery.ajax({
                url: 'http://localhost:8001/referrer/service/v1/track/referrer',
                headers: {
                    'Content-Type': 'application/json'
                },
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify(dValue)
            });
        }
    );
});

$(document).ready(function() {
    $("#loadBtn").click(
        function(event) {
            $.ajax({
                url: "http://localhost:8001/referrer/service/v1/topreferrers/3"
            }).then(function(data) {
                addToTable(data);
            });
        }
    );
});

function addToTable(data) {
    $('#dataTbl tr').not(function(){ return !!$(this).has('th').length; }).remove();
    for (var i = 0; i < data.length; i++) {
        addRow(data[i]);
    }
}

function addRow(rowData) {
    var row = $("<tr />")
    $("#dataTbl").append(row);
    row.append($("<td>" + rowData.host + "</td>"));
    row.append($("<td>" + rowData.totalTracked + "</td>"));
}



