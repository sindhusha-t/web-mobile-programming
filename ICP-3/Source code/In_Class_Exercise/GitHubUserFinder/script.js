function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 ) {
            if (this.status == 200) {
                
                var response = JSON.parse(this.responseText);
                $('.usrname').html('Username:' + response['login']);
                $('.usrid').html('ID:' + response['id'])
                $('.avatar').html('<img src=' + response["avatar_url"] + ' alt="img">')
                $('.information').html('<a href=' + response['html_url'] + '>Link to profile</a>');
                
            }
            else {
                $('.usrname').html('Invalid User');
            }
        }
    };

    xhttp.open("GET","https://api.github.com/users/"+user,false);
    xhttp.send();
    
}

function showUser(user) {

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content

}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed

}

$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            
            //get what the user enters
            username = $(this).val();
            
            //reset the text typed in the input
            $(this).val("");
            
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
            
            //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});