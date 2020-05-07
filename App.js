import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Drawer from "./src/AnimatedDrawer/AnimatedDrawer";

export default () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};
