import React from 'react';

// import { useParams } from "react-router";
import { connect } from 'react-redux';

import { fetchCollectionAsync } from '../redux/catalog/catalog.action';
import Spinner from '../helper/component/spinner/spinner.component';
import { Styles } from './catalog.styles';
import CardCatalog from './card-catalog/card-catalog.component';
import FilterCatalog from './filter-catalog/filter-catalog.component'

const CatalogComponent = ({items, isFetching, fetchCollectionAsync}) => {

    React.useEffect(() => {
        fetchCollectionAsync()
    }, [fetchCollectionAsync])
console.log(items);
    // const { categoryId } = useParams();

    if (isFetching){
        return (<Spinner model="Spinner4" color="gray"/>)
    }
    return (
        <Styles>
            <div className="filter-content">
                <div className="filter">
                    <FilterCatalog/>
                </div>
                <div className="content">
                    <div className="wrapper-grid">
                    {
                        items.map(item => (
                            <CardCatalog item={item} key={item.id}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        </Styles>
    )
}

const mapStateToProps = state => ({
    items: state.catalog.data,
    isFetching: state.catalog.isFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionAsync: () => dispatch(fetchCollectionAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogComponent);