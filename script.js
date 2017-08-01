$(document).ready(function() {
    
    $("#searchYouTube").submit(function(event) {
        event.preventDefault();
        var query = $('#query').val();
        var url = "https://www.googleapis.com/youtube/v3/search";
        var data = {key: youtubeAPIKey, part: "snippet", q: query};
        $.ajax({
            url: url,
            data: data,
            type: "GET",
            success: function(response) {
                //console.log(response);
                var items=response.items;
                
                $.each(items, function(index, item) {//callback functionS
                    //var item = items[index]
                    
                }) 
                
            }
        })
    })
})