import React from 'react';
import { MyTeamCard } from './MyTeamCard/MyTeamCard';

const MyTeam = ({ myTeam, removeFromMyTeam }) => {
    return (
        <>
            {myTeam.map(hero => <MyTeamCard hero={hero} key={hero.id} removeFromMyTeam={removeFromMyTeam} />)}
        </>
    )
}

export { MyTeam }