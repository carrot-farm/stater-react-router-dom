import { create } from "zustand";
import { User } from "../models/userModel";

const initialState = {
  id: undefined,
  username: undefined,
  password: undefined,
};

export const useAuthStore = create<UserStore>((set) => ({
  ...initialState,
  signIn: (data) => set({ ...data }),
  signOut: () => set({ ...initialState }),
}));

/** ===== Types ===== */
export type UserStore = Partial<User> & {
  /** 로그인 */
  signIn: (data: Pick<User, "id" | "username" | "password">) => void;
  /** 로그 아웃 */
  signOut: () => void;
};
