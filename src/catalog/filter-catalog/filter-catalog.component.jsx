import React from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { firestore } from '../../firebase/firebase.utils';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { Styles } from './filter-catalog.styles';

export const FilterCatalog = ({ setFilter }) => {
  const [showFilter, setShowFilter] = React.useState(false);
  const [data, setData] = React.useState();
  const [query, setQuery] = React.useState({ color: [], bodyStyle: [], driveTrain: [], fuelType: [], transmission: [] });
  const isMounted = React.useRef(true);
  let history = useHistory();

  // React.useEffect(() => {
  //   console.log('data');
  //   console.log(data);
  //   // fetchCollectionFilterAsync(query);
  // }, [data]);

  React.useEffect(() => {
    firestore
      .collection('shop_filter')
      .doc('filter')
      .get()
      .then(item => {
        if (isMounted.current) {
          setData(item.data());
        }
      });
    return () => {
      isMounted.current = false;
    };
  }, [setData]);

  // Subscribe on react-router
  React.useEffect(() => {
    const parsed = queryString.parse(history.location.search);
    const queryObject = {};
    Object.keys(parsed).forEach(field => {
      queryObject[field] = parsed[field].split(',');
    });
    setQuery({ ...query, ...queryObject });
    // console.log('query', query);
    // setParams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.search]);

  React.useEffect(() => {
    setParams();
    setFilter(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, setFilter]);

  const setParams = () => {
    const searchString = queryString.stringify(query, { arrayFormat: 'comma' });
    history.push({
      search: searchString
    });
  };

  const clearParams = () => {
    setQuery({ color: [], bodyStyle: [], driveTrain: [], fuelType: [], transmission: [] });
  };

  const handleChange = (e, group) => {
    if (e.target.checked) {
      setQuery({
        ...query,
        [group]: [...query[group], e.target.value]
      });
    } else {
      setQuery({
        ...query,
        [group]: query[group].filter(item => {
          return item !== e.target.value;
        })
      });
    }
  };

  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <Styles>
      <div className="small-screen">
        <Button onClick={() => setShowFilter(!showFilter)} variant="contained" color="primary" startIcon={showFilter ? <KeyboardArrowUp /> : <KeyboardArrowDown />}>
          {showFilter ? 'Hide' : 'Show'} Filter
        </Button>
        {showFilter && (
          <div>
            <h2>Filter By</h2>
            {Object.keys(data).map(group => {
              return (
                <div key={data[group].name}>
                  <strong>{data[group].name}</strong>
                  <br />
                  {data[group].value.map(item => {
                    return (
                      <FormControlLabel
                        key={item}
                        className="checkbox"
                        control={<Checkbox checked={query[group].includes(item)} value={item} onClick={e => handleChange(e, group)} color="primary" />}
                        label={item}
                      />
                    );
                  })}
                  <hr />
                </div>
              );
            })}
            <Button className="mt-3" onClick={() => clearParams()} fullWidth variant="contained">
              Clear
            </Button>
          </div>
        )}
      </div>

      <div className="filter-container large-screen">
        <h2>Filter By</h2>
        {Object.keys(data).map(group => {
          return (
            <div key={data[group].name}>
              <strong>{data[group].name}</strong>
              <br />
              {data[group].value.map(item => {
                return (
                  <FormControlLabel
                    key={item}
                    className="checkbox"
                    style={{ marginTop: '-10px' }}
                    control={<Checkbox checked={query[group].includes(item)} value={item} onClick={e => handleChange(e, group)} color="primary" />}
                    label={item}
                  />
                );
              })}
              <hr />
            </div>
          );
        })}
        <Button className="mt-3" onClick={() => clearParams()} fullWidth variant="contained">
          Clear
        </Button>
      </div>
    </Styles>
  );
};

// const mapDispatchToProps = dispatch => ({
//   fetchCollectionFilterAsync: filter => dispatch(fetchCollectionFilterAsync(filter))
// });

export default FilterCatalog;
