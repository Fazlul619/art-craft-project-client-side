import { useState } from "react";
import { Link } from "react-router-dom";

const ArtCraftCategoriesSection = ({ artCraft }) => {
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    processing_time,
  } = artCraft;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <Link to={`/artCraftItems/${_id}`}>
        <div
          className={` rounded-md cursor-pointer transition-transform ${
            isHovered ? "transform scale-105" : ""
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card w-96 border-2  border-[#13131326]">
            <div className=" w-80  p-6  rounded-xl mx-auto mt-7">
              <img
                className="rounded-xl w-full h-40 mx-auto"
                src={image}
                alt=""
              />
            </div>
            <div className="card-body flex flex-row">
              <h1 className="text-xl font-semibold"></h1>

              <span>
                <p className="text-[#23BE0A] bg-[#23BE0A0D] w-28 rounded-xl font-medium text-center ">
                  $ {price}
                </p>
              </span>
            </div>
            <div className="card-body">
              <h2 className="card-title">{item_name}</h2>
              <p className="text-[#131313CC] font-medium "></p>
              <p className="border-dashed border mt-2  "></p>
            </div>

            <div className="card-body flex justify-between flex-row">
              <p className="text-[#131313CC] font-medium">{subcategory_name}</p>
              <div className="flex gap-2">
                <p className="text-[#131313CC] font-medium">{rating}</p>
                <img
                  className=""
                  src="https://i.ibb.co/hCLXHJP/Frame-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArtCraftCategoriesSection;
