import "./styles.css";

export const Review = ({ review }) => {
  return (
    <div className="root">
      <span>{review.text}</span>
      {/* Rating */}
    </div>
  );
};
