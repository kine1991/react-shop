import React from 'react';
// import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import { firestore } from '../../firebase/firebase.utils';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { Styles } from './filter-catalog.styles';
// import { fetchCollectionFilterAsync } from '../../redux/catalog/catalog.action';

export const FilterCatalog = ({ setFilter }) => {
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
  }, [history.location.search]);

  React.useEffect(() => {
    setParams();
    setFilter(query);
  }, [query, setFilter]);

  const setParams = () => {
    const searchString = queryString.stringify(query, { arrayFormat: 'comma' });
    // console.log(searchString);
    // if (searchString) {
    history.push({
      search: searchString
    });
    // }
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
      <div className="small-screen">small-screen</div>
      <div className="filter-container large-screen">
        <h2>FilterCatalog</h2>
        {Object.keys(data).map(group => {
          // console.log(group)
          return (
            <ExpansionPanel key={group}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>{data[group].name}</Typography>
              </ExpansionPanelSummary>
              {data[group].value.map(item => {
                // console.log('---', query[group]);
                // console.log('+++', item);
                return (
                  <ExpansionPanelDetails key={item}>
                    <FormControlLabel control={<Checkbox checked={query[group].includes(item)} value={item} onClick={e => handleChange(e, group)} color="primary" />} label={item} />
                  </ExpansionPanelDetails>
                );
              })}
            </ExpansionPanel>
          );
        })}
        {/* <Button className="mt-3" fullWidth onClick={() => setParams()} variant="contained" color="primary">
          Apply
        </Button> */}
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
