const API_URL = "https://my-blog-testing-01.herokuapp.com/api/posts";

const submitNewPost = () => {
    let input = document.querySelector('input[type="file"]');
    const title = document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;
    let data = new FormData();
    data.append('post-image', input.files[0]);
    data.append('title', title );
    data.append('content', content);

    fetch(API_URL, {
        method: 'POST',
        body: data
    }).then(()=>{
        setTimeout(()=>{
            window.location.href = "index.html";
        }, 1000)
    })
}