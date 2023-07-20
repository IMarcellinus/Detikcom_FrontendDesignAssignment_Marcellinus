import PropTypes from "prop-types";

const ImageItem = ({ imageUrl }) => {
  console.log(imageUrl);

  return (
    <div className="flex-shrink-0 w-62 h-48 p-2">
      <img
        src={imageUrl}
        alt="Image"
        className="object-cover w-full h-full rounded-lg shadow-md"
      />
    </div>
  );
};

ImageItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ImageItem;
