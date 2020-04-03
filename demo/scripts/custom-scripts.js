$( document ).ready(function() {
    $( '.gallery-column' ).photoGallery({
        columns: 4,
        responsive :{
            0:{
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
					gutter : 2,
            }
        }
    });
});