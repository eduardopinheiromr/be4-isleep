import React from "react";
import Navigation from "./src/components/Navigation";
import "react-native-gesture-handler";

import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

export default function App() {
  return <Navigation />;
}
