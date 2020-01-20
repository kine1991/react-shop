import React from 'react';
import { firestore } from '../../firebase/firebase.utils';
import Form from 'react-bootstrap/Form';

export const FilterCatalog = () => {
    const [data, setData] = React.useState();
    React.useEffect(() => {
        firestore.collection('shop_filter').doc('filter').get()
        .then(item => {
            setData(item.data())

        })
    }, [])

    
    const click = () => {
        console.log('data')
        console.log(data)
        console.log(Object.keys(data))
    }
    if(!data){
        return <div>loading...</div>
    }
    return (
        <div>
            FilterCatalog
            <button onClick={click}>click</button>

            {
                Object.keys(data).map(item => {
                    // console.log(item)
                    return (
                        <div key={item}>
                            <strong>{data[item].name}</strong>
                            {
                                data[item].value.map(item => {
                                    return <div key={item}>
                                        {/* {item} */}
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label={item} />
                                        </Form.Group>
                                    </div>
                                })
                                // data.color.map(it => {
                                // return (<div>22</div>)
                                // // return (<div key={it}>{it}</div>)
                                // })
                            }
                        
                        </div>

)
                })
            }

            {/* {Object.keys(data).map(item => (
                <div>rr</div>
            ))} */}
        </div>
    )
}

export default FilterCatalog;