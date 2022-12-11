import { Box, Button, Container, Flex, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { Texts } from '../../Common/constants';
import { signupInit } from "../../Redux/Authreducer/action";

const Registration = () => {
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const currentUser = useSelector((store) => store.AuthReducer.currentUser)
    const dispatch = useDispatch();
    const navigate = useNavigate()

   

    const { displayName, email, password, confirmPassword } = state;
   

    const handleChange = (e) => {
        
        let { name, value } = e.target;
        setState({ ...state, [name]: value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password.length < 6){
            alert("Enter more than 6 digit password")
        }
        if (password !== confirmPassword) {
            return
        }
        dispatch(signupInit(email, password, displayName))
       // setState({ email: "", password: "", displayName: "", confirmPassword: "" })
    };
    useEffect(() => {
        if (currentUser) {
            navigate('/login')
        }
    }, [currentUser, navigate])
    return (
        <Box>
            <Container maxWidth={'400px'}>
                <Heading textAlign={'center'} color={'black'} fontWeight={'600'}>{Texts.CREATE_ACCOUNT}</Heading><br /><br />
                <form onSubmit={handleSubmit}>
                <Flex flexDirection={'column'} gap={8} >
                    <Box>
                        <Heading size={'lg'} color={'black'} fontWeight={'500'}>{Texts.PERSONAL_INFORMATION}</Heading>
                    </Box>
                   
                        <Box>
                            <Flex justifyContent={'space-between'} fontSize={'15px'}><label>{Texts.FIRST_NAME}<sup>*</sup></label><label><sup>*</sup>{Texts.REQUIRED_FIELDS}</label></Flex>
                            <Input
                                type='text'
                                size={'md'}
                                placeholder='Enter Name'
                                name="displayName"
                                value={displayName}
                                onChange={handleChange}
                            />
                        </Box>
                        <Box>
                            <Text fontSize={'15px'}>{Texts.EMAIL} <sup>*</sup></Text>
                            <Input
                                type='email'
                                size={'md'}
                                name="email"
                                value={email}
                                placeholder='Enter Email'
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <Box>
                            <Text fontSize={'15px'}>{Texts.PASSWORD} <sup>*</sup></Text>
                            <Input
                                type='password'
                                size={'md'}
                                placeholder='Enter Password'
                                name="password"
                                value={password}
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <Box>
                            <Text fontSize={'15px'}>{Texts.CONFIRM_PASSWORD} <sup>*</sup></Text>
                            <Input
                                type='password'
                                size={'md'}
                                name="confirmPassword"
                                value={confirmPassword}
                                placeholder="repeat Password"
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <Box>
                            <Button colorScheme={'green'} width={'100%'} type='submit' >{Texts.CREATE}</Button>
                        </Box>
                        <Box>
                            <Text fontSize={'15px'} color={'black'}>{Texts.OR_RETURN}</Text>
                        </Box>
                </Flex>
                </form>
            </Container>
        </Box>
    )
}

export default Registration