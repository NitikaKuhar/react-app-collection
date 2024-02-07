import React, {useState} from 'react';
import './players.css';

const Players = ({players}) =>{
    const [filteredPayers , setFilteredPlayers]  = useState(players.sort());
    const [teamA, setTeamA] = useState([]);
    const [teamB, setTeamB] = useState([]);
    const [currTeam, setCurrTeam] = useState('Team A');

    const onPlayerClick = (player, id) =>{
        let filterList = [];
        if(currTeam === 'Team A'){
            setTeamA(teamA => [...teamA, player]);
            filterList = filteredPayers.filter((player, idx) => id !== idx);
          
        }
        else{
            setTeamB(teamB => [...teamB, player]);
            filterList = filteredPayers.filter((player, idx) => id !== idx);
        }

        setFilteredPlayers(filterList)
    }

    const clickHandler = () =>{
        setCurrTeam(curr => curr === 'Team A' ? 'Team B' : 'Team A')
    }

    const reset = () =>{
        setFilteredPlayers(players.sort());
        setTeamA([])
        setTeamB([])
    }


    return(
        <div className="players-container">
            <div className="players-list">
                {
                filteredPayers && filteredPayers.map((player,id) =>{
                    return (
                        <button key={id} onClick={() => onPlayerClick(player, id)}>{player}</button>
                    )
                    
                })
                }
            </div>
            <div className="players-selection">
                <button onClick={clickHandler}>{currTeam}</button>
                <button onClick={reset}>Reset</button>
            </div>

            <div className="team-players">
                <div className='team-a'>
                <h3>Team A</h3>
                <ul className='teamA'>
                    {
                        teamA && teamA.map((player, id) =>{
                            return(
                                <li key={id}>{player}</li>
                            ) 
                        })
                    }
                </ul>
                </div>
                <div className='team-b'>
                <h3>Team B</h3>
                <ul className='teamB'>
                    {
                        teamB && teamB.map((player, id) =>{
                            return(
                                <li key={id}>{player}</li>
                            ) 
                        })
                    }
                </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Players;