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

window.onload = function() {
    const postsArr = JSON.parse(localStorage.getItem('posts')) || [];
    post.innerHTML = '';
    postsArr.forEach(renderposts);
};

function renderposts(newpost){
    const divel = document.createElement('div');
    divel.innerHTML =`
        <h3>${newpost.titlevalue}</h3>
        <p>${newpost.contentvalue}</p>
        <img src='${newpost.imagevalue}' alt='${newpost.titlevalue}' style='max-width:100%'>
        <div style="display:flex; gap:8px; margin-top:8px;">
            <button class="update-btn" data-id="${newpost.id}" style="padding:4px 10px; font-size:0.85em;">Update</button>
            <button class="delete-btn" data-id="${newpost.id}" style="padding:4px 10px; font-size:0.85em;">Delete</button>
        </div>
    `;
    post.prepend(divel);

    divel.querySelector('.update-btn').addEventListener('click', function() {
        localStorage.setItem('editPostId', newpost.id);
        window.location.href = '../Manage/manage.html';
    });

    divel.querySelector('.delete-btn').addEventListener('click', function() {
        deletePost(newpost.id);
    });
}

function deletePost(id) {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    
    if (confirmDelete) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts = posts.filter(post => post.id !== id);
        localStorage.setItem('posts', JSON.stringify(posts));
        
        window.location.reload();
    }

    
}