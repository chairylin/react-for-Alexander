import React from "react";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { Layout } from "./components/Layout/Layout";
import { ThemeContextProvider } from "./components/ThemeContextProvider/ThemeContextProvider";
import { store } from "./store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Layout>
          <RestaurantPage />
        </Layout>
      </ThemeContextProvider>
    </Provider>
  );
};
