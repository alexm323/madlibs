import React from 'react';
// basic story
const Story = ({adj1='red',noun1='violet',noun2='sugar',adj2='sweet'}) => {
    return(
        <>
        <p>Roses are {adj1}</p>
        <p>{noun1} are blue</p>
        <p>{noun2} is {adj2}</p>
        <p>and so are you</p>
        </>
    )
}
export default Story;