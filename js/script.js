var Respond = '';
var ResponseMediaDetail = '';

function loading(){
    // console.log("loading starts");
           
    var IG_account_ID = '17841433746483048';
    var token = '{your_access_token}';
    var num_photos = 30;
    // Get ID for each Instagram images
    $.ajax ({
        type: 'GET',
        url: 'https://graph.facebook.com/v9.0/'+IG_account_ID+'/media',
        dataType: 'jsonp',
        data: {access_token: token, count: num_photos},
        success: function(data, status, jqXHR){
            
            Respond=data;
            // console.log("Respond: " +data);
            // console.log("status: " +status);
            
            // Iterate data array via for loop
            for (var i = 0, len = Respond.data.length; i < len; i++){
                
                // console.log("iteracio " +Respond.data[i].id);

                var img_id = Respond.data[i].id;

                // console.log("single image id: "+img_id);

                $.ajax ({
                    type: 'GET',
                    url: 'https://graph.facebook.com/v9.0/'+img_id+'?fields=thumbnail_url,media_url,like_count,permalink,shortcode&',
                    dataType: 'jsonp',
                    data: {access_token: token},
                    success: function(data2, status, jqXHR){
                        
                        ResponseMediaDetail = data2;
                        // console.log("Hi again");
                        console.log("Data2: " +JSON.stringify(data2));
                        console.log("ResponseMediaDetail: " +JSON.stringify(ResponseMediaDetail));
                        console.log("ResponseMediaDetail_length: " +ResponseMediaDetail.length);

                        // var thumbnail_url = ;
                        // var media_url = ;
                        // var like_count = ;
                        // var permalink = ;
                        // var shortcode = ;
                    

                        $('#loading').append('<img src=" '+ ResponseMediaDetail.media_url +' ">');
                    }
                });
            }
        }
    });
    // console.log("loading finished");
} 
$(document).ready(function(){
        loading();
});