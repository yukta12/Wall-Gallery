//JQUERY READY FUNCTION
$( document ).ready(function() {
    //Initializing the gallery
    $( '.gallery-column' ).photoGallery({
        //providing required parameters
        responsive :{
            0:{
                //requires only 1 column on small devices
                columns : 1,
            },
            600:{
                columns : 3,
            },
            750 : {
                columns : 3,
            },
            992:{
                columns : 3,
            },
            1200 : {
                columns : 3,
                //spacing between the gallery images
                gutter : 2,
            }
        }
    });
});