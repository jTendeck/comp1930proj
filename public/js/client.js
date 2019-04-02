$(document).ready(function(){
    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#getHTMLList').click(function(e) {
        console.log(e.target);
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET",
            dataType: "html",
            type: "GET",
            data: {format: "html-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#git").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
})