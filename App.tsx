import React, { useEffect } from "react";
import Navigation from "./src/components/Navigation";
import "react-native-gesture-handler";

import moment from "moment";
import "moment/locale/pt-br";
import { loadStorageToState } from "./src/utils/loadStorageToState";

moment.locale("pt-br");

export default function App() {
  useEffect(() => {
    loadStorageToState();
  }, []);

  return <Navigation />;
}
