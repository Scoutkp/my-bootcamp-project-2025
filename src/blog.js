var blogs = [
    {
        title: 'First Blog Post',
        date: '2025-10-15',
        description: 'This is the description of the first blog post.',
        image: 'beach.jpg',
        imageAlt: 'Image 1 description',
        slug: 'post 1',
    },
    {
        title: 'Second Blog Post',
        date: '2025-10-16',
        description: 'This is the description of the second blog post.',
        image: 'beach.jpg',
        imageAlt: 'Image 1 description',
        slug: 'post-2',
    },
];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogElement = document.createElement('div');
    blogElement.classList.add('blog');
    var blogTitle = document.createElement('h2');
    blogTitle.textContent = blog.title;
    var blogImage = document.createElement('img');
    blogImage.classList.add('blog-image');
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;
    var blogDescription = document.createElement('p');
    blogDescription.textContent = blog.description;
    blogElement.appendChild(blogTitle);
    blogElement.appendChild(blogImage);
    blogElement.appendChild(blogDescription);
    if (blogContainer) {
        blogContainer.appendChild(blogElement);
    }
});
console.log('Blog script loaded');
