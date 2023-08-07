import { LoadingStatuses } from "../constants/statuses";


export const selectReviewModule = (state) => state.review;

export const selectReviewEntities = (state) =>
  selectReviewModule(state).entities;

export const selectReviewIds = (state) => selectReviewModule(state).ids;

export const selectReviewById = (state, { reviewId }) =>
  selectReviewEntities(state)[reviewId];

export const selectReviewLoadingStatuses = (state) =>
  selectReviewModule(state).status;
export const selectIsReviewLoading = (state) =>
  selectReviewLoadingStatuses(state) === LoadingStatuses.inProgress;