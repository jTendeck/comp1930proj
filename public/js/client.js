$(document).ready(function(){
    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#recipeButton1').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: {format: "html-list"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#servCalAuthContainer").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#recipeButton2').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: {format: "html-list2"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#servCalAuthContainer").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#recipeButton3').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: {format: "html-list3"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#servCalAuthContainer").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#recipeButton4').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: {format: "html-list4"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#servCalAuthContainer").html(data);
                
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#recipeButton5').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: {format: "html-list5"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#servCalAuthContainer").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    //GETS NUTRITION INFO FOR RECIPE (currently not working)
    $('#nutriButton1').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: {format: "table1"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#table").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    //GETS NUTRITION INFO FOR RECIPE (currently not working)
    $('#nutriButton2').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: {format: "table2"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#table").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    //GETS NUTRITION INFO FOR RECIPE (currently not working)
    $('#nutriButton3').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: {format: "table3"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#table").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    //GETS NUTRITION INFO FOR RECIPE (currently not working)
    $('#nutriButton4').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: {format: "table4"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#table").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });

    //GETS NUTRITION INFO FOR RECIPE (currently not working)
    $('#nutriButton5').click(function(e) {
        
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: {format: "table5"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                $("#table").html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    });
})