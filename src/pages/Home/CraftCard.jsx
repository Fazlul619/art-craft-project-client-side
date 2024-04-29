import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const CraftCard = ({ craftItem }) => {
  const {
    _id,
    imageUrl,
    itemName,
    subcategoryName,
    shortDescription,
    price,
    rating,
    customization,
    processingTime,
    Stock,
    email,
    name,
  } = craftItem;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-300" />);
    } else {
      stars.push(<Star key={i} className="h-4 w-4" />);
    }
  }

  return (
    <div className="w-full">
      {/* Card One */}
      <div className="h-[200px] w-[500px] flex gap-3">
        <div>
          <img className="h-52 w-52 rounded-md" src={imageUrl} alt={itemName} />
        </div>

        <div className="flex flex-col justify-center pl-2 gap-2">
          <h2 className="text-2xl font-medium">{itemName}</h2>
          <span className="flex items-center gap-1">{stars}</span>
          <p>{price} $</p>
          <Link
            to={`/itemDetails/${_id}`}
            className="bg-blue-200 rounded-md border-none outline-none px-2 py-1"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
