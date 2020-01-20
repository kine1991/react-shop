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
                {Object.keys(item.property).slice(2).map(propertyField => (
                    <div key={propertyField} className="card__property">
                        <strong>{item.property[propertyField].name}</strong>
                        <div>{item.property[propertyField].value}</div>
                    </div>
                ))}
                <button onClick={() => push(`${pathname}/${item.id}`)} className="card__btn">Open</button>
                <FontAwesomeIcon icon={faCartPlus} size="lg" className="cart" />
            </div>
            
        </Card>
    )
}

export default CatalogItem;