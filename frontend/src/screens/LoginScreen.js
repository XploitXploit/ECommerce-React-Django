import React, {useState, useEffect} from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader'
import MessageAlert from '../components/MessageAlert'
import { login } from '../actions/userActions';
import FormContainer from '../components/FormContainer'


function LoginScreen() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    
    const location = useLocation()
    const history = useHistory()

    const redirect= location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo}= userLogin

    useEffect(()=>{
        if (userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <MessageAlert variant='danger'>{error}</MessageAlert>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder= 'Enter Email'
                        value={email}
                        onChange= {(e)=> setEmail(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder= 'Enter Password'
                        value={password}
                        onChange= {(e)=> setPassword(e.target.value)}
                    >

                </Form.Control>

                    <Button type='submit' variant='primary'>
                        Sign In
                    </Button>
                </Form.Group>
            </Form>

            <Row className="py-3">
                <Col>
                    NewCustomer? <Link 
                    to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
