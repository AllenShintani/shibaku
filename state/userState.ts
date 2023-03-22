// state/userState.ts
import { atom } from "recoil";

export type User = {
  id: number;
  username: string;
  password: string;
};

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
