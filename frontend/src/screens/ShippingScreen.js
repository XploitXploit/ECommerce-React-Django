import {useState, useEffect} from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import { Form, Button,} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import {saveShippingAddress} from '../actions/cartActions'

function ShippingScreen() {

    const cart= useSelector(state => state.cart)
    const {shippingAdress} = cart

    const dispatch = useDispatch()

    const history = useHistory();

    const [adress, setAddress] = useState(shippingAdress.adress)
    const [city, setCity] = useState(shippingAdress.city)
    const [postalCode, setPostalCode] = useState(shippingAdress.postalCode)
    const [country, setCountry] = useState(shippingAdress.country)

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({adress,city, postalCode, country}))
        history.push('/payment')
    }

    return (
        <FormContainer>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>

            <Form.Group controlId="address">
                <Form.Label>Adress</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder= 'Enter Adress'
                    value={adress ? adress:''}
                    onChange= {(e)=> setAddress(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder= 'Enter City'
                    value={city ? city:''}
                    onChange= {(e)=> setCity(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder= 'Enter Postal Code'
                    value={postalCode ? postalCode:''}
                    onChange= {(e)=> setPostalCode(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control
                    required
                    type='text'
                    placeholder= 'Enter Country'
                    value={country ? country:''}
                    onChange= {(e)=> setCountry(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
                Continue
            </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
