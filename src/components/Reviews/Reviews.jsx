
import { Review } from "../Review/Review";
import React from "react";


export const Reviews = ({ reviews }) => {
    return (
        <div>
            <h3>Reviews</h3>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id}>
                            <Review review={review} />
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Empty</div>
            )}

        </div>
    );
};

import React from "react";
import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <Review review={review} />
            </li>
          ))}
        </ul>
      ) : (
        <div>Empty</div>
      )}
    </div>
  );
};
