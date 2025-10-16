type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: 'First Blog Post',
        date: '2025-10-15',
        description: 'This is the description of the first blog post.',
        image: 'beach.jpg',
        imageAlt: 'Image 1 description',
        slug: 'post-1',
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

const blogContainer = document.getElementById('blog-container');

blogs.forEach((blog) => {
    const blogElement = document.createElement('div');
    blogElement.classList.add('blog');

    const blogTitle = document.createElement('h2');
    blogTitle.classList.add('blog-name')
    blogTitle.textContent = blog.title;

    const blogInfo = document.createElement('div');
    blogInfo.classList.add('blog-info');

    const blogImage = document.createElement('img');
    blogImage.classList.add('blog-image');
    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;

    const blogDescription = document.createElement('p');
    blogDescription.classList.add('blog-description');
    blogDescription.textContent = blog.description;

    blogInfo.appendChild(blogImage);
    blogInfo.appendChild(blogDescription);
    blogElement.appendChild(blogTitle);
    blogElement.appendChild(blogInfo);

    if (blogContainer) {
        blogContainer.appendChild(blogElement);
    }
});

console.log('Blog script loaded');