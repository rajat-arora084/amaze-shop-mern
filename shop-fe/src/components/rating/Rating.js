import PropTypes from "prop-types";

const Rating = ({ prodRating, totalReviews, color }) => {
  return (
    <div className="mb-2">
      {[1, 2, 3, 4, 5].map((rating) => {
        let className = "fas fa-star";
        if (rating <= prodRating) className = "fas fa-star";
        else if (rating > prodRating && rating - 0.5 === prodRating)
          className = "fas fa-star-half-alt";
        else className = "far fa-star";

        return <i key={rating} className={className} style={{ color }}></i>;
      })}
      <span>{totalReviews} reviews</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  prodRating: PropTypes.number.isRequired,
  totalReviews: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Rating;
