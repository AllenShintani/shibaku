import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import * as React from 'react'
import type { FormEvent } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { FirebaseError, getApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getIdToken, getAuth } from 'firebase/auth';
import firebase from '@firebase/app-compat'
import 'firebase/compat/auth'

import {

  sendEmailVerification,
} from '@firebase/auth'

const theme = createTheme()

// eslint-disable-next-line react-hooks/rules-of-hooks
const router = Router
const userMail = {
  key: 'userData',
  default: '',
}
//usestateでindivdata
console.log(-1)
//ボタンが押されたときの処理
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  //----------formのデータを取り出す
  const data = new FormData(e.currentTarget)
  const indivData = {
    mail: data.get('email'),
    password: data.get('password'),
    //name: data.get('name'),
    faculty: data.get('faculty'),
  }

  console.log(0)

  //--------user情報をserverに送信
  async function sendToServer() {
    console.log(1)
    try {
      await axios.post('http://localhost:8080/data', indivData)
      console.log(2)
      console.log('postの成功。')

      router.push('/')
    } catch (err) {
      console.log('psqlへのデータの送信エラー')
    }
    console.log(3)
  }

  async function authenticate(this: any) {
    console.log(6)
    try {
      //ユーザーを登録
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        indivData['mail'] as string,
        indivData['password'] as string
      )
      //トークンを取得
      const user = auth.currentUser
      const idToken = await getIdToken(user!, true)
      console.log('idTokenの取得に成功')
      console.log(idToken)
    } catch (event) {
      if (event instanceof FirebaseError) {
        console.log(event)
      }
    }
  }

  console.log(4)

  await authenticate()
  await sendToServer()

  console.log(5)
}

export default function SignUp() {
  
  
  /*firebaseの認証
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await sendEmailVerification(userCredential.user)
    } catch (event) {
      if (event instanceof FirebaseError) {
        console.log(event)
      }
    }


          ---------------------------------------------------
    */

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
          >
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={12}
                sm={6}
              >

              </Grid>
              <Grid
                item
                xs={12}
                //sm={6}
              >
                <TextField
                  required
                  fullWidth
                  id="faculty"
                  label="学部名"
                  name="faculty"
                  autoComplete="faculty"
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="メールアドレス"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="パスワード"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid
                item
                xs={12}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>

            <Button
  onClick={()=>{handleSubmit}}
  type="submit"
  fullWidth
  variant="contained"
  sx={{ mt: 3, mb: 2 }}
>
  登録
</Button>

            <Grid
              container
              justifyContent="flex-end"
            >
              <Grid item>
                <a href="/Signin">既にアカウントをお持ちの方</a>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
