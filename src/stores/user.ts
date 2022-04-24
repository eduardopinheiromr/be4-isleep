import create from "zustand";
import { setLocalValue } from "../utils/asyncStorageManager";

type UserStore = {
  user?: TUser;
  setUser: (user: TUser) => void;
};

export const useUserStore = create<UserStore>(set => ({
  user: undefined,
  setUser: async (user: TUser) => {
    await setLocalValue("user", user);
    set(state => ({ ...state, user }));
  },
}));
