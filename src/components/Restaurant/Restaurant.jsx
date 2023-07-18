import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";
import { Rating } from "../Rating/Rating";

export const Restaurant = ({ restaurant }) => {
  const rating = Math.floor(
    restaurant.reviews.reduce((sum, review) => sum + review.rating, 0) /
    restaurant.reviews.length
  );
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Rating value={rating} />

      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
