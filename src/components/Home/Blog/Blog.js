import React from 'react';
import { Container } from 'react-bootstrap';
import BlogDetails from '../BlogDetails/BlogDetails';

const Blog = () => {
    const blogs = [
        {
            id : 1,
            name : 'Fast Delivery',
            description : 'keep your system since with in a automated web hook based notification each time link is paid and how we dream about our future',
            image : '/image/Image/1.png'
        },
        {
            id :2,
            name : 'A good auto Responder',
            description : 'keep your system since with in a automated web hook based notification each time link is paid and how we dream about our future',         
            image : '/image/Image/2.png'
        },
        {
            id : 3,
            name : 'Home Delivery',
            description : 'keep your system since with in a automated web hook based notification each time link is paid and how we dream about our future',         
            image : '/image/Image/3.png'
        }
    ]
    return (
        <Container style={{marginBottom : '20px', marginTop : '50px'}}>
            <h1 className="text-center">Why you choose Us</h1>
            <p  className="text-center"><small>Barton Waited twenty always repair in which we do. An delighted offending curiosity my is dashwoods at. Boy prosperious increasing surrounded
            </small></p>
            <div className="d-flex justify-content-between">
                {
                    blogs.map(blog =>
                        <BlogDetails key={blog.id} blog={blog}></BlogDetails>
                        )
                }
            </div>
            
        </Container>
    );

    // <BlogDetails key={blog.id} blog={blog}></BlogDetails>
};

export default Blog;