import { LoadingStatuses } from "../constants/statuses";

export const selectDishModule = (state) => state.dish;

export const selectDishEntities = (state) => selectDishModule(state).entities;

export const selectDishIds = (state) => selectDishModule(state).ids;

export const selectDishById = (state, { dishId }) =>
  selectDishEntities(state)[dishId];

export const selectDishLoadingStatus = (state) =>
  selectDishModule(state).status;

export const selectIsDishLoading = (state) =>
  selectDishLoadingStatus(state) === LoadingStatuses.inProgress;
