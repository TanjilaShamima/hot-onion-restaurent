import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './SearchField.css'

const SearchField = () => {
    return (
        <div className="search-field d-flex justify-content-center align-content-center flex-wrap">
            <h1>Best Food waiting for your Belly</h1>              
            <Form style={{width : '80%'}} inline className="d-flex justify-content-center">
                <FormControl style={{width : '30%'}} type="text" placeholder="Search" className="mr-sm-3" />
                <Button variant="danger">Search</Button>
            </Form>               
        </div>
    );
};

export default SearchField;