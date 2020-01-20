import React from 'react';
import { firestore } from '../../firebase/firebase.utils';
import Form from 'react-bootstrap/Form';

export const FilterCatalog = () => {
    const [data, setData] = React.useState();
    const isMounted = React.useRef(true);
    
    React.useEffect(() => {
        firestore.collection('shop_filter').doc('filter').get()
        .then(item => {
            if(isMounted.current){
                setData(item.data())
            }
        })
        return () => {
            isMounted.current = false
        };
    }, [setData])

    if(!data){
        return <div>loading...</div>
    }
    return (
        <div>
            <h2>FilterCatalog</h2>
            {Object.keys(data).map(item => {
                return (
                    <div key={item}>
                        <strong>{data[item].name}</strong>
                        {
                            data[item].value.map(item => {
                                return <div key={item}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label={item} />
                                    </Form.Group>
                                </div>
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default FilterCatalog;