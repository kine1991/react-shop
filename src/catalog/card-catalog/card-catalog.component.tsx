import React from 'react';
import { /*useParams,*/ useHistory } from "react-router";

import { Card } from './card-catalog.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';



export const CatalogItem = ({item}) => {
    const {push, location: {pathname}} = useHistory();
    return (
        <Card>
            <div className="card">
                <img className="card__img" src={item.imageUrl} alt=""/>
                <div className="card__name">
                    <div>{item.brand} {item.model}</div>
                </div>
                <div className="card__property">
                    <strong>Body Style</strong>
                    <div>{item.bodyStyle}</div>
                </div>
                <div className="card__property">
                    <strong>Drive Train</strong>
                    <div>{item.drivetrain}</div>
                </div>
                <div className="card__property">
                    <strong>Color</strong>
                    <div>{item.color}</div>
                </div>
                <div className="card__property">
                    <strong>Transmission</strong>
                    <div>{item.transmission}</div>
                </div>
                <button onClick={() => push(`${pathname}/${item.id}`)} className="card__btn">Open</button>
                <FontAwesomeIcon icon={faCartPlus} size="lg" className="cart" />
            </div>
            
        </Card>
    )
}

export default CatalogItem;