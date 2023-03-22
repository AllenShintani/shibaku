// pages/signup.tsx
import {
    Button,
    Container,
    TextField,
    Typography,
  } from "@mui/material";
  import { useForm } from "react-hook-form";
  import axios from "axios";
  
  type SignUpForm = {
    username: string;
    password: string;
  };
  
  export default function SignUp() {
    const { register, handleSubmit } = useForm<SignUpForm>();
  
    const onSubmit = async (data: SignUpForm) => {
      try {
        await axios.post("/api/signup", data);
        alert("サインアップが成功しました!");
      } catch (error) {
        alert("サインアップに失敗しました。");
      }
    };
  
    return (
      <Container>
        <Typography variant="h4">サインアップ</Typography>
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
          サインアップ
        </Button>
      </form>
    </Container>
  );
}