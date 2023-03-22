// pages/index.tsx
import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Typography variant="h4">ボードゲームクリエイター</Typography>
      <Link href="/login">
        <Button variant="contained" color="primary">ログイン</Button>
      </Link>
      <Link href="/signup">
        <Button variant="outlined" color="primary">サインアップ</Button>
      </Link>
    </Container>
  );
}
