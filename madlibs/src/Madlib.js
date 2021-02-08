import React, { useState } from 'react';
import Story from './Story';
import StoryForm from './StoryForm';
import {v4 as uuid} from 'uuid';
// this is going to be our parent component
const MadLib = () => {
    // we want to be able to have multiple stories with the same structure so we keep track with an empty array in our state
    const [stories,setStories] = useState([])
    // we create a method to create a new Story component using our form component so we pass this down so we can get the data back up
    const addStory = (newStory) => {
        // update the stories each time the form is filled
        setStories(story => [...story,{...newStory, id:uuid()}])
    }
    return(
        <div>
            <h3>Fun with madlibs</h3>
            {/* pass in 1 prop which is our addStory method that handles updating the state in this component */}
            <StoryForm addStory={addStory}/>
            {/* cycle through our stories and create a story where we pass down the props of the form and generate a unique id using uuid*/}
            <div>
                {stories.map(story => <Story key={story.id} noun1={story.noun1} adj1={story.adj1} adj2={story.adj2} noun2={story.noun2}/>)}
            </div>
        </div>
        
    )
}

export default MadLib;