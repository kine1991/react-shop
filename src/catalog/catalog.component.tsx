import React from 'react';
import { Styles } from './catalog.styles';
import { useParams } from "react-router";

export const CatalogComponent = () => {
    const { categoryId } = useParams();
    // console.log(categoryId);
    return (
        <Styles>
            <div>
                CatalogComponent: {categoryId}
            </div>
        </Styles>
    )
}
