import React, { useState } from 'react';
// we set the initial state of the form to be empty so we can clear it after submission
const StoryForm = ({addStory}) => {
    const initialState = {
        noun1:"",
        noun2:"",
        adj1:"",
        adj2:""
    }
    // we want to track our form data using state and we can pass in our initial state value into useState
    const [formData, setFormData] = useState(initialState);
    // when a form field is touched then we want to track those values
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }));
    }
    // we pass this data from the form back up to the parent component by using the method we took here as a prop
    const handleSubmit = (e) => {
        e.preventDefault();
        const { noun1, noun2, adj1, adj2 } = formData;
        addStory({noun1,noun2,adj1,adj2})
        // make the fields blank
        setFormData(initialState)
    }
    return(
        <form>
            <label htmlFor="noun1">Noun </label>
            <input
                id="noun1"
                type='text'
                name="noun1"
                placeholder="Noun"
                value={formData.noun1}
                onChange={handleChange}
            />
            
            <label htmlFor="noun2">Plural Noun </label>
            <input
                type="noun2"
                name="noun2"
                placeholder="Noun"
                id="noun2"
                value={formData.noun2}
                onChange={handleChange}
            />

            <label htmlFor="adj1"> Adjective </label>
            <input
                type="adj1"
                name="adj1"
                placeholder="Adjective"
                id="adj1"
                value={formData.adj1}
                onChange={handleChange}
            />
            <label htmlFor="adj2"> Adjective </label>
            <input
                type="adj2"
                name="adj2"
                placeholder="Adjective"
                id="adj2"
                value={formData.adj2}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add me to the List!</button>
        </form>
    )
};

export default StoryForm;

