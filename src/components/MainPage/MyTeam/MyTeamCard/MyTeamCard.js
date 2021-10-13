import React from 'react';
import style from './MyTeamCard.module.css';
import { Row, Col } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';

const MyTeamCard = ({ hero, removeFromMyTeam }) => {
    return (
        <Row>
            <Col className={style.teamFlex}>
                <img src={hero.teamImage} alt='myTeam' />
                <p className={style.teamName}>{hero.name}</p>
                <MdDeleteForever className={style.remove} onClick={() => { removeFromMyTeam(hero.id) }} />
            </Col>
        </Row>
    )
}

export { MyTeamCard };