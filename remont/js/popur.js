
$( ".hamb" ).click(function() {
    $( "#navigation" ).slideToggle( "fast", function() {
        $( ".hamb" ).hide();
        $( ".cross" ).show();
    });
});

$( ".cross" ).click(function() {
    $( "#navigation" ).slideToggle( "fast", function() {
        $( ".cross" ).hide();
        $( ".hamb" ).show();
    });
});

