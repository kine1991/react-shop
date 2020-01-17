import React from 'react';
// import { Styles } from './catalog.styles';
import { useParams } from "react-router";
import { connect } from 'react-redux';

import { fetchCollectionAsync } from '../redux/catalog/catalog.action';
import Spinner from '../helper/component/spinner/spinner.component';
// import { cars } from '../cars';
// import { firestore } from '../firebase/firebase.utils'
import styled from 'styled-components';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container'

const Styles = styled.div`
    /* .wrapper {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-gap: 2rem;
    } */
    .filter-content{
        background: #DCDCDC;
        height: 500px;
        display: flex;
        flex-direction: row;

        @media (max-width: 768px) { 
            flex-direction: column;
        }
        @media (max-width: 576px) {  }
        @media (max-width: 992px) {  }
        @media (max-width: 1200px) {  }
        
    }
    .filter{
        background: #C0C0C0;
        height: 400px;
        flex-basis: 200px;
        margin-right: 3rem;
        @media (max-width: 1200px) {  
            margin-right: 2rem;
        }
        @media (max-width: 768px) { 
            margin-right: 0;
        }
    }
    .content{
        background: #A9A9A9;
        height: 400px;
        flex: 1;
    }
`;

const CatalogComponent = ({items, isFetching, fetchCollectionAsync}) => {

    React.useEffect(() => {
        fetchCollectionAsync()
    }, [fetchCollectionAsync])

    const { categoryId } = useParams();

    if (isFetching){
        return (<Spinner model="Spinner4" color="gray"/>)
    }
    return (
        <Styles>
            <div className="filter-content">
                <div className="filter">
                    filter
                </div>
                <div className="content">
                    <div className="wrapper-grid">
                    {
                        items.map(item => (
                            <div key={item.id}>ff</div>
                        ))
                    }
                    </div>
                </div>
            </div>
            {/* <Row>
                <Col style={{background: '#C0C0C0'}} xs={12} md={3} lg={3}>filter</Col>
                <Col style={{background: '#A9A9A9'}} xs={12} md={9} lg={9}>
                    Main
                {
                    items.map(item => (
                        <div key={item.id}>ff</div>
                    ))
                }
                </Col>
            </Row> */}

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