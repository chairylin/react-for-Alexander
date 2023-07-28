import { normalizedProducts } from "../../constants/normalized-fixtures";


const initilazeState = {
    entities: normalizedProducts.reduce((acc, dish) => {
        acc[dish.id] = dish;
        return acc;
    }, {}),
    ids: normalizedProducts.map(({ id }) => id),
};

export const dishReducer = (state = initilazeState, action) => {
    switch (action?.type) {
        default:
            return false;
    }
}