## Printdiv
Printdiv is a jQuery based function to print (in an actual printer, you know, hardware) something you have inside a div.
Based on Bootstrap CSS file to keep the styles working, everything you need to print must be inside a div tag
with a printable class, like this:
## <div class="printable"></div>

You can call the function to print:
## $('.printable').print();

Or maybe attach it to a link or button:
## $('#print_link').attr( "href", "javascript:void( 0 )" ).click(function(e){
##  $('.printable').print();
##});

And it works.

Tested and working on:
Ruby+Ruby On Rails+jQuery.
PHP+Laravel+jQuery.
