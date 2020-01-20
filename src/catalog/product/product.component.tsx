import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from "react-router";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Styles } from './product.styles'
import { fetchProductAsync } from '../../redux/product/product.action';
import Spinner from '../../helper/component/spinner/spinner.component';

const ProductComponent = ({data, isFetching, fetchProduct}) => {
    const { productId } = useParams();
    const {goBack} = useHistory();
    // console.log(location)
    React.useEffect(() => {
        fetchProduct(productId)
    }, [fetchProduct, productId]);
    // console.log('data, isFetching')
    // console.log(data, isFetching)
    if(!data){
        return <Spinner/>
    }
    return (
        <Styles>
            <Button onClick={goBack} variant="light"><FontAwesomeIcon icon={faArrowLeft} size="sm" className="cart" />  Back</Button>
            <div className="header">
                <h1 className="header__title">{data.brand} {data.model}</h1>
                <h1 className="header__price">${data.price}</h1>
            </div>
            
            <div className="content">
                <div className="content__img" >
                    <img src={data.imageUrl} alt=""/>
                </div>
                <div className="content__body">
                    <div className="description">
                        <strong>description</strong>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sapiente reiciendis rem nemo earum est quo vero nam laboriosam, quis eius, cum quasi inventore amet veritatis delectus vitae facere suscipit.</p>
                    </div>
                    <div className="property">
                        <strong>bodyStyle</strong>
                        <p>{data.bodyStyle}</p>
                    </div>
                    <div className="property">
                        <strong>color</strong>
                        <p>{data.color}</p>
                    </div>
                    <div className="property">
                        <strong>drivetrain</strong>
                        <p>{data.drivetrain}</p>
                    </div>
                    <div className="property">
                        <strong>fuelType</strong>
                        <p>{data.fuelType}</p>
                    </div>
                    <div className="property">
                        <strong>transmission</strong>
                        <p>{data.transmission}</p>
                    </div>
                    <div className="property">
                        <strong>year</strong>
                        <p>{data.year}</p>
                    </div>
                </div>
            </div>
        </Styles>
    )
}

const mapStateToProps = state => ({
    data: state.product.data,
    isFetching: state.product.isFetching,
});

const mapDispatchToProps = dispatch => ({
    fetchProduct: (productId) => dispatch(fetchProductAsync(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent);