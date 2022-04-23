import React, { useEffect } from "react";
import Navigation from "./src/components/Navigation";
import "react-native-gesture-handler";

import moment from "moment";
import "moment/locale/pt-br";
import { useUserStore } from "./src/stores/user";
import { getLocalValue } from "./src/utils/asyncStorageManager";
moment.locale("pt-br");

export default function App() {
  const { user, setUser } = useUserStore();

  useEffect(() => {
    if (!user) {
      getLocalValue("user").then(user => setUser(user));
    }
  }, [user]);

  return <Navigation />;
}
