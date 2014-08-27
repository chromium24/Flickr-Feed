/**
 * Created by Ann Marie on 8/27/2014.
 */
$(document).ready(function() {          //call function getPhotos() once page loads

    getPhotos();                        //load JSON encoded info from Flickr using GET HTTP request

    function getPhotos() {


        var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON(flickerAPI, {
            tags: "national geographic",
            tagmode: "all",
            format: "json"
        })
            .done(function (data) {

                $.each(data.items, function (i, item) {
                    $("<img>").attr("src", item.media.m).appendTo("#photos");

                    if (i === 15) {
                        return false;
                    }
                });
            });

    }//end getPhotos()

});
//end document ready

