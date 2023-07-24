import React from "react";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage";
import { restaurants } from "./constants/fixtures";
import { Layout } from "./components/Layout/Layout";

export const App = () => {
  return (
    <Layout>
      <RestaurantPage restaurants={restaurants} />
    </Layout>
  );
};
