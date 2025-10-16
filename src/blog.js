var blogs = [
    {
        title: 'First Blog Post',
        date: '2025-10-15',
        description: 'This is the description of the first blog post.',
        image: 'me.jpg',
        imageAlt: 'Image 1 description',
        slug: 'first-blog-post',
    },
];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogElement = document.createElement('div');
    var blogTitle = document.createElement('h2');
    var blogImage = document.createElement('img');
    var blogDescription = document.createElement('p');
    blogTitle.textContent = blog.title;
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    blogDescription.textContent = blog.description;
    blogElement.appendChild(blogTitle);
    blogElement.appendChild(blogImage);
    blogElement.appendChild(blogDescription);
    if (blogContainer) {
        blogContainer.appendChild(blogElement);
    }
});
console.log('Blog script loaded');
