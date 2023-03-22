// pages/login.tsx
import {
    Button,
    Container,
    TextField,
    Typography,
  } from "@mui/material";
  import { useForm } from "react-hook-form";
  import axios from "axios";
  import { useRouter } from "next/router";
  import { useSetRecoilState } from "recoil";
  import { userState } from "../state/userState"
  
  type LoginForm = {
    username: string;
    password: string;
  };
  
  export default function Login() {
    const { register, handleSubmit } = useForm<LoginForm>();
    const router = useRouter();
    const setUser = useSetRecoilState(userState);
  
    const onSubmit = async (data: LoginForm) => {
      try {
        const response = await axios.post("/api/login", data);
        setUser(response.data);
        router.push("/");
      } catch (error) {
        alert("ログインに失敗しました。");
      }
    };
  
    return (
      <Container>
        <Typography variant="h4">ログイン</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="ユーザーネーム"
            {...register("username", { required: true })}
          />
          <TextField
            type="password"
            label="パスワード"
            {...register("password", { required: true })}
          />
          <Button type="submit" variant="contained" color="primary">
            ログイン
          </Button>
        </form>
      </Container>
    );
  }
  