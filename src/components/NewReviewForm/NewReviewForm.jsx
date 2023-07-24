import styles from "./styles.module.css";
import classnames from "classnames";
import { useReducer } from "react";
import { Button } from "../Button/Button";
import { Size } from "../../constants/ui";
import { Rating } from "../Rating/Rating";

const initialState = {
  name: "",
  text: "",
  rating: 5,
};

const Actions = {
  setName: "setName",
  setText: "setText",
  setRating: "setRating",
  clear: "clear",
};

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.setName: {
      return {
        ...initialState,
        name: action.payload,
      };
    }
    case Actions.setText: {
      return {
        ...state,
        text: action.payload,
      };
    }
    case Actions.setRating: {
      const rating = Number(action.payload);
      if (!action.payload || (rating >= 1 && rating <= 5)) {
        return {
          ...state,
          rating: rating || "",
        };
      }
      return state;
    }
    case Actions.clear: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export const NewReviewForm = ({ className }) => {
  const [formValue, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.formControl}>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: Actions.setName, payload: event.target.value })
          }
        />
      </div>
      <div className={styles.formControl}>
        <label className={styles.label}>Text</label>
        <input
          type="text"
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: Actions.setText, payload: event.target.value })
          }
        />
      </div>
      <div className={styles.formControl}>
        <label className={styles.label}>Rating</label>
        <Rating
          size={Size.m}
          value={formValue.rating}
          onChange={(value) =>
            dispatch({
              type: Actions.setRating,
              payload: value,
            })
          }
        />
      </div>
      <Button onClick={() => dispatch({ type: Actions.clear })}>Clear</Button>
    </div>
  );
};
