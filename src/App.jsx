import React from "react";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { restaurants } from "./constants/fixtures";
import { Layout } from "./components/Layout/Layout";
import { ThemeContextProvider } from "./components/ThemeContextProvider/ThemeContextProvider";
import { Provider } from "./CustomeStore";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Layout>
          <RestaurantPage restaurants={restaurants} />
        </Layout>
      </ThemeContextProvider>
    </Provider>
  );
};
