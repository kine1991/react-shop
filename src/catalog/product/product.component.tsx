import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router';
// import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ArrowBack } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { Styles } from './product.styles';
import { fetchProductAsync } from '../../redux/product/product.action';
import Spinner from '../../helper/component/spinner/spinner.component';

const ProductComponent = ({ data, fetchProduct }) => {
  const { productId } = useParams();
  const { push } = useHistory();
  // console.log(location)
  React.useEffect(() => {
    fetchProduct(productId);
  }, [fetchProduct, productId]);
  if (!data) {
    return <Spinner color="gray" />;
  }
  return (
    <Styles>
      <Button onClick={() => push('/catalog')} variant="contained" color="default" startIcon={<ArrowBack />}>
        Back
      </Button>
      {/* <Button onClick={() => push('/catalog')} variant="light">
        <FontAwesomeIcon icon={faArrowLeft} size="sm" className="cart" /> Back
      </Button> */}
      <div className="header">
        <h1 className="header__title">
          {data.brand} {data.model}
        </h1>
        <h1 className="header__price">${data.price}</h1>
      </div>

      <div className="content">
        <div className="content__img">
          <img src={data.imageUrl} alt="" />
        </div>
        <div className="content__body">
          <div className="description">
            <strong>{data.description.name}</strong>
            <p>{data.description.value}</p>
          </div>
          {Object.keys(data.property).map(propertyField => (
            <div key={propertyField} className="property">
              <strong>{data.property[propertyField].name}</strong>
              <p>{data.property[propertyField].value}</p>
            </div>
          ))}
        </div>
      </div>
    </Styles>
  );
};

const mapStateToProps = state => ({
  data: state.product.data
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: productId => dispatch(fetchProductAsync(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);
