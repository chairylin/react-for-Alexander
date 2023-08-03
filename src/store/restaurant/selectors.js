import { LoadingStatuses } from "../constants/statuses";

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantEntities = (state) =>
  selectRestaurantModule(state).entities;

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurantById = (state, { restaurantId }) =>
  selectRestaurantEntities(state)[restaurantId];

export const selectRestaurantDishIdsById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.menu;

export const selectRestaurantReviewIdsById = (state, { restaurantId }) =>
  selectRestaurantById(state, { restaurantId })?.reviews;

export const selectRestaurantLoadingStatuses = (state) =>
  selectRestaurantModule(state).status;
export const selectIsRestaurantLoading = (state) =>
  selectRestaurantLoadingStatuses(state) === LoadingStatuses.inProgress;
