import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react'
import { cleanup } from '@testing-library/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'
import { Card } from '../components/Card'
import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import useMounted from '../hooks/useMounted'

export default function Loginpage() {
  const history = useHistory()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const toast = useToast();

  const { login, signInWithGoogle } = useAuth()

  const mounted = useMounted()

  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Login
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            if( !email || !password ) {
              toast({
                description: "Credentails not valid",
                status: 'error',
                duration: 5000,
                isClosable: true
              })
            }
            setIsSubmitting(true)
            login(email, password)
            .then((response) => {
              console.log(response)
              history.push('/profile')
            })
            .catch((error) => {
              console.log(error.message)
              toast({
              description: error.message,
              status: 'error',
              duration: 5000,
              isClosable: true
            })}).finally(() => {
              mounted.current && setIsSubmitting(false)
            })
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input 
                name='email' 
                type='email' 
                autoComplete='email' 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                name='password'
                type='password'
                autoComplete='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            {/* <PasswordField /> */}
            <Button 
              isLoading={isSubmitting}
              type='submit' 
              colorScheme='primary' 
              size='lg' 
              fontSize='md'
            >
              Sign in
            </Button>
          </Stack>
        </chakra.form>
        <HStack justifyContent='space-between' my={4}>
          <Button variant='link'>
            <Link to='/forgot-password'>Forgot password?</Link>
          </Button>
          <Button variant='link' onClick={() => history.push('/register')}>
            Register
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isFullWidth
          colorScheme='red'
          leftIcon={<FaGoogle />}
          onClick={() => 
            signInWithGoogle()
              .then(user=>console.log(user))
              .catch(error => console.log(error))
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  )
}
