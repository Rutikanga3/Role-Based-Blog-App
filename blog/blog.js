function getloggedInUser (){
    return JSON.parse(localStorage.getItem("loggedInUser"));

}

const form = document.getElementById('pstform')
const post= document.getElementById('posts')

const title = document.getElementById('title')
const content = document.getElementById('cont')
const image = document.getElementById('image')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const titlevalue = title.value;
    const contentvalue = content.value;
    const imagevalue = image.value;
    // const author = getloggedInUser().username;
    const createdAt = new Date().toLocaleString();
    const id = Date.now()

    const newpost = {id,titlevalue,contentvalue,imagevalue,createdAt}
    const posts =JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(newpost);
    localStorage.setItem('posts', JSON.stringify(posts));

    renderposts(newpost);
    form.reset()
    
 
})

function renderposts(newpost){
 const divel = document.createElement('div')
 divel.innerHTML =`
 <h3>${newpost.titlevalue}</h3>
 <p>${newpost.contentvalue}</p>
 <img scr='${newpost.imagevalue}'alt='${newpost.titlevalue}' style= 'max-width:100%'>`
//  <p>${newpost.author}</p>;
 post.prepend(divel)

}
window.onload = renderposts;