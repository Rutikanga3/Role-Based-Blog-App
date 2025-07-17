window.onload = function() {
    const postId = Number(localStorage.getItem('editPostId'));
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postToEdit = posts.find(p => p.id === postId);

    if (!postToEdit) {
        alert('Post not found!');
        window.location.href = '../blog/blog.html';
        return;
    }

   
    document.getElementById('title').value = postToEdit.titlevalue;
    document.getElementById('content').value = postToEdit.contentvalue;
    document.getElementById('image').value = postToEdit.imagevalue;

   
    document.getElementById('updateform').addEventListener('submit', function(e) {
        e.preventDefault();
        postToEdit.titlevalue = document.getElementById('title').value;
        postToEdit.contentvalue = document.getElementById('content').value;
        postToEdit.imagevalue = document.getElementById('image').value;

        
        const updatedPosts = posts.map(p => p.id === postId ? postToEdit : p);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        localStorage.removeItem('editPostId');
        window.location.href = '../blog/blog.html';
    });
};