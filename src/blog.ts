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
        image: 'me.jpg',
        imageAlt: 'Image 1 description',
        slug: 'first-blog-post',
    },
];

const blogContainer = document.getElementById('blog-container');

blogs.forEach((blog) => {
    const blogElement = document.createElement('div');
    const blogTitle = document.createElement('h2');
    const blogImage = document.createElement('img');
    const blogParagraph = document.createElement('p');

    blogImage.src = blog.image;
    blogImage.alt = blog.imageAlt;

    blogElement.appendChild(blogTitle);
    blogElement.appendChild(blogImage);
    blogElement.appendChild(blogParagraph);

    if (blogContainer) {
        blogContainer.appendChild(blogElement);
    }
});

console.log('Blog script loaded');