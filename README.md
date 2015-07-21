# olapic

The following is a  carousel populated with the latest photos from an Olapic account.

The first task was to Load jQuery and Bootstrap JavaScript [bootstrap.min.js]in order to use the native carousel features.

There is a few styles applied in order to set the dimensions of the carousel. Addtionally, the opacity of the thumbnail is set here. 

Next, I declared 2 sets of variables in order to manipulate the incoming JSON array from photorankapi-a.akamaihd.net. 1 set is for the thumbnail image generation and the other is for the normal size images urls. An each is used to extract the image URL and get JSON object from site.

Once the ajax request is complete url is parsed into an array and builds htmls from the URLS. I then populated the JPGS in the carousel; there are 20 images in this particular example however it can be customized to fit any number of images. 

Aaddtionally, an extra step in order to initialize an active element is required. Otherwise, the carousel will not be visible.


Scripts are request to control the intervals for the photo rotation which is set at 2000. There are 2 functions that control the thumbnail display and another which updates the main image. 

Finally, using the Bootstrap grid system, the thumbnails are set at a 45x45 px (" width="45" height="45" class="img-circle")enclosed in a circle to smooth the irregularities in the photos and the carousel is set for Medium devices i.e. Desktops less than 992px ("col-md-9").
