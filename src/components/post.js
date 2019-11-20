var postTemplate = `
<div>
    <h3>{{TITLE}}</h3>
    <h5>by {{NAME}} - <a href="#" data-userid="{{USERID}}" class="btn_email">{{EMAIL}}</a></h5>
    <p>{{BODY}}</p>
</div>
`;

function showUserProfile(event){
    var ueObject = event.target;
    console.log('show profile :' + ueObject.textContent);

    var userId = ueObject.getAttribute('data-userid');
    console.log('User id = '+userId);
}
export default function showPost(){

    fetch('http://itla.hectorvent.com/api/post',{
        headers: {
            'Authorization': `Bearer 548d6de2-e0f0-4720-8b3d-5b129506aa46`
        }
    })
    .then(res => res.json())
    .then(res => {
       // console.log(res);
        var postview = '';
       res.forEach(p => {
        //    console.log(p);
            postview = postview +
            postTemplate.replace('{{BODY}}', p.body)
                            .replace('{{NAME}}', p.userName)
                            .replace('{{EMAIL}}', p.userEmail)
                            .replace('{{USERID}}',p.userId)
                            .replace('{{TITLE}}', p.title);
       });

       document.getElementById('app').innerHTML = postview;
       var bes = document.getElementsByClassName('btn_email');

       for (i = 0; i < bes.length; i++){
           bes[i].addEventListener('click', showUserProfile);
       }

       // AQUI
    })
    .catch( err=>{

        console.log(err);

    });
}