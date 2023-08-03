import { normalize } from "../../utils/normalize";
import { restaurantSlice } from "../index";
import { selectRestaurantIds } from "../selectors";

export const loadRestaurantsIfNotExist = (dispatch, getState) => {
  const restaurantIds = selectRestaurantIds(getState());

  if (restaurantIds?.length) {
    return;
  }

  dispatch(restaurantSlice.actions.startLoading());

  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) => {
      console.log(restaurants);
      if (restaurants?.length) {
        dispatch(restaurantSlice.actions.finishLoading(normalize(restaurants)));
      }
    })
    .catch((error) => {
      dispatch(restaurantSlice.actions.failLoading());
    });
};
