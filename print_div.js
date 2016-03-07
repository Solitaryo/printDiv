// Prototype jquery function
jQuery.fn.print = function(){
    // Get First Element
    if (this.size() > 1){
        this.eq( 0 ).print();
        return;
    } else if (!this.size()){
        return;
    }

    // Create a random name for the print frame
    var strFrameName = ("printer-" + (new Date()).getTime());

    // Create an iFrame with the new name
    var jFrame = $( "<iframe name='" + strFrameName + "'>" );

    // Hide iFrame
    jFrame
        .css( "width", "1px" )
        .css( "height", "1px" )
        .css( "position", "absolute" )
        .css( "left", "-9999px" )
        .appendTo( $( "body:first" ) )
    ;

    // Get a FRAMES reference to the new frame.
    var objFrame = window.frames[ strFrameName ];

    // Get a reference to the DOM in the new frame.
    var objDoc = objFrame.document;

    // Grab all the style tags and copy to the new
    // document so that we capture look and feel of
    // the current document.

    // Create a temp document DIV to hold the style tags.
    // This is the only way I could find to get the style
    // You can edit this to add more style tags
    var jStyleDiv = $( "<div>" ).append(
        $( "style" ).clone()
        );

    // Write the HTML for this iframe with stylesheets
    objDoc.open();
    objDoc.write( "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">" );
    objDoc.write( "<html>" );
    objDoc.write( "<body>" );
    objDoc.write( "<head>" );
    // Bootstrap CSS
    objDoc.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">');
    objDoc.write( "</head>" );
    objDoc.write( "<title>" );
    objDoc.write( document.title );
    objDoc.write( "</title>" );
    objDoc.write( jStyleDiv.html() );
    objDoc.write( "</head>" );
    objDoc.write('<div class="wrapper-content">');
    objDoc.write('<div class="row">');
    objDoc.write( this.html() );
    objDoc.write('</div>');
    objDoc.write('</div>');
    objDoc.write( "</body>" );
    objDoc.write( "</html>" );
    objDoc.close();

    // Print the document
    objFrame.focus();
    objFrame.print();

    // Timeout for iFrame
    setTimeout(
        function(){
            jFrame.remove();
        },
        (60 * 1000)
    );
}
