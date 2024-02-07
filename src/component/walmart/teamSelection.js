import React from 'react';
import Players from './players';

const TeamSelection = () =>{
    const  players = [
       'Karan', 'Alice','Rahul', 'Bob', 'Charlie', 'David','Keith','Karan'
    ];

    return(
        <div>
            <Players players={players}></Players>
        </div>
    )
}

export default TeamSelection;