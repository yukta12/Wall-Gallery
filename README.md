# Wall Gallery

Wall Gallery is a layout plugin that helps in placing images in an optimal position based on the columns specified by the user compatible with all the devices from large desktop to small mobile devices wherein the user has to only pass the columns on each of the devices that have to be displayed.
## Installation

```bash
Download the min.js file from the repository
```

## Usage

```
STEP1
Link the script file to your HTML file
<script src="wall-gallery.min.js"></script>
```
```HTML
STEP2
In your HTML file
Create a div element that has class of .gallery-row
<div class="gallery-row">
</div
```
```HTML
STEP3
Specify the images in the columns needed, giving each column as class of 'gallery-column'
For example I need 3 images in first column 3 and so on.
<div class="gallery-row">
   <div class="gallery-column">
        <img src="/path/to/img" >
        <img src="/path/to/img" >
        <img src="/path/to/img" >

    </div>
</div>
```
```HTML
STEP4
Final code would look as of 4 columns as demo specifies and each column has 3 images.
<div class="gallery-row">
   <div class="gallery-column">
        <img src="/path/to/img" >
        <img src="/path/to/img" >
        <img src="/path/to/img" >

    </div>
   <div class="gallery-column">
        <img src="/path/to/img" >
        <img src="/path/to/img" >
        <img src="/path/to/img" >

    </div>
   <div class="gallery-column">
        <img src="/path/to/img" >
        <img src="/path/to/img" >
        <img src="/path/to/img" >

    </div>
    <div class="gallery-column">
        <img src="/path/to/img" >
        <img src="/path/to/img" >
        <img src="/path/to/img" >
    </div>
</div>
```


```Javascript
STEP5
In your custom scripts  initialize the Photogallery as - 
$( '.gallery-column' ).photoGallery({
        //further code
    });
```

```Javascript
STEP6
further specifying the responsive columns to be displayed.
$( '.gallery-column' ).photoGallery({
        responsive :{
//small mobile screens with size between 0-600px;
            0:{
                columns: 1, //columns to be displayed 
                gutter : 5,  //spacing ie. gutters between the images
            },
//mobile screens will display 2 columns
            600:{
                columns: 2,
                gutter: 5
            },
//Small desktops and tabs with a min size of 750px and further needs 3 columns to be displayed
            750 : {
                columns: 3,
                gutter : 0,
            },
//Desktops with size of 992px-1200px needs 3 columns to be displayed
            992:{
                columns: 3,
                gutter : 0,
            },
          //large desktop with size 1200px and further needs 4 columns to be displayed
            1200: {
                columns : 4,
                 gutter : 2,
            }
        }
    });
```


##
Suggestions and addons are welcome.
## Prerequisites 
Make sure to link [JQuery](https://code.jquery.com/) first. 
