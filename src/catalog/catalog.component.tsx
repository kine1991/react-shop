import React from 'react';
import { connect } from 'react-redux';

// import { useParams } from "react-router";

import { fetchCollectionAsync, fetchCollectionFilterAsync } from '../redux/catalog/catalog.action';
import Spinner from '../helper/component/spinner/spinner.component';
import { Styles } from './catalog.styles';
import CardCatalog from './card-catalog/card-catalog.component';
import FilterCatalog from './filter-catalog/filter-catalog.component';

const CatalogComponent = ({ items, isFetching, fetchCollectionAsync, fetchCollectionFilterAsync }) => {
  const [filter, setFilter] = React.useState();
  React.useEffect(() => {
    fetchCollectionFilterAsync(filter);
  }, []);

  React.useEffect(() => {
    fetchCollectionFilterAsync(filter);
    // if (filter) {
    //   // console.log('filter');
    //   // console.log(filter);
    // }
  }, [filter]);

  if (isFetching) {
    return <Spinner color="gray" />;
  }
  return (
    <Styles>
      <div className="filter-content">
        <div className="filter">
          <FilterCatalog setFilter={setFilter} />
        </div>
        <div className="content">
          <div className="wrapper-grid">
            {items.map(item => (
              <CardCatalog item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </Styles>
  );
};

const mapStateToProps = state => ({
  items: state.catalog.data,
  isFetching: state.catalog.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionAsync: () => dispatch(fetchCollectionAsync()),
  fetchCollectionFilterAsync: filter => dispatch(fetchCollectionFilterAsync(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogComponent);
