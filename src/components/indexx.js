import showPost from './components/post'

function showMyPost(){
    console.log('Show My Posts');
    document.getElementById('app').innerHTML = '<h1>My Posts List</h1>';
}

function showProfile(){
    console.log('Show Profile');
    document.getElementById('app').innerHTML = '<h1>My Profile</h1>';
}

window.onload = function(){
    console.log("Working.....");

    document.getElementById("post_view")
    .addEventListener('click', showPost);
    
    document.getElementById("mypost_view")
    .addEventListener('click', showMyPost);

    document.getElementById("profile_view")
    .addEventListener('click', showProfile);

}
