import React from 'react';
import { Row, Col } from 'react-bootstrap';
import style from './HeroInfoCard.module.css';
import { FiZoomIn } from 'react-icons/fi';
import { text } from '../../../shared/loremIpsum';
import { FullImage } from '../FullImage/FullImage';

const HeroInfoCard = ({ heroInfo, showFullImage, isFullImage }) => {
    const { fullImage, description, image, name } = heroInfo;
    return (
        <Row className={style.border}>
            {isFullImage && <FullImage avatar={fullImage} showFullImage={showFullImage} />}

            <Col lg={3} className={`${style.center} ${style.image}`}>
                <img src={image} alt="heroImage" />
                <FiZoomIn className={style.zoomIn} onClick={() => { showFullImage() }} />
            </Col>
            <Col lg={9} className={style.center} >
                <h2 className={style.paddingTop}>{name}</h2>
                <p>{description
                    ? description
                    : text
                }</p>
            </Col>
        </Row>
    )
}

export { HeroInfoCard };