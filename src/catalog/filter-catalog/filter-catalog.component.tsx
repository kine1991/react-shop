import React from 'react';
import { firestore } from '../../firebase/firebase.utils';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Styles } from './filter-catalog.styles';

export const FilterCatalog = () => {
  const [data, setData] = React.useState();
  const isMounted = React.useRef(true);

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

  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <Styles>
      <div className="small-screen">small-screen</div>
      <div className="filter-container large-screen">
        <h2>FilterCatalog</h2>
        {Object.keys(data).map(item => {
          return (
            <ExpansionPanel key={item}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>{data[item].name}</Typography>
              </ExpansionPanelSummary>
              {data[item].value.map(item => (
                <ExpansionPanelDetails key={item}>
                  <FormControlLabel control={<Checkbox value="checkedB" color="primary" />} label="Primary" />
                </ExpansionPanelDetails>
              ))}
            </ExpansionPanel>
          );
        })}
      </div>
    </Styles>
  );
};

export default FilterCatalog;
