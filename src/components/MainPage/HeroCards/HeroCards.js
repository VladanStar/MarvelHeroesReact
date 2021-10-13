import React from 'react';
import { Row } from 'react-bootstrap';
import { HeroCard } from './HeroCard/HeroCard';

const HeroCards = ({ heroes, addToMyTeam }) => {
    return (
        <Row>
            {heroes.map(hero => <HeroCard
                key={hero.id}
                id={hero.id}
                avatar={hero.avatar}
                name={hero.name}
                addToMyTeam={addToMyTeam}
            />)}
        </Row>
    )
}

export { HeroCards }