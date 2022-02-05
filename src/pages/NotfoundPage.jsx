import { Heading, List, ListItem, OrderedList, Link, Badge } from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'

export default function NotfoundPage() {
  return (
    <Layout>
      <Heading>
        Firebase Authentication
      </Heading>
      <OrderedList fontSize='3xl' my={4}>
        <ListItem>이메일 암호 인증(등록/로그인)</ListItem>
        <ListItem>Google 로그인 기능</ListItem>
        <ListItem>비밀번호 찾기 기능</ListItem>
        <ListItem>사용자 정의 암호 재설정 페이지</ListItem>
        <ListItem>
          <Badge
            fontSize='inherit'
            colorScheme='teal'
            mx={2}
            textTransform='capitalize'
            borderRadius='md'
          >
            Chakra UI
          </Badge>
          를 활용한 다크 모드 템플릿
        </ListItem>
      </OrderedList>
      <Heading size='md' mt={20}>
        Some other links (only for reference):
      </Heading>
      <List>
        <ListItem>
          <Link to='/reset-password'>
            <Badge
            fontWeight='black'
            fontSize='4xl'
            mx={2}
            px={2}
            colorScheme='green'
            mt={4}
            borderRadius='md'
            >
              reset page
            </Badge>
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/forgot-password'>
            
            <Badge
              fontWeight='black'
              fontSize='4xl'
              mx={2}
              px={2}
              colorScheme='purple'
              mt={4}
              mb={20}
              borderRadius='md'
            >
              forgot page
            </Badge>  
          </Link>
        </ListItem>
      </List>
    </Layout>
  )
}
