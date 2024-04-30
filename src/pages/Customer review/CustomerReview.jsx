import { useEffect, useState } from "react";
import Settings from "../../settings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerReview = () => {
  const [reviewCard, setReviewCard] = useState([]);
  useEffect(() => {
    fetch("customersReview.json")
      .then((res) => res.json())
      .then((data) => setReviewCard(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-6">
        <h1 className="font-bold text-3xl text-[#2D3954]">
          Good Reviews By Customers
        </h1>
        <p className="font-normal">
          Customers reviews are like windows into the soul of a business,
          revealing its strengths, weaknesses, and the lasting impact it leaves
          on those it serves.
        </p>
      </div>

      <div className="slider-container">
        <Slider {...Settings}>
          {reviewCard.map((review) => (
            <div
              key={review.id}
              className="mx-5 rounded-xl  bg-[#fff] shadow-xl "
            >
              <div className="flex flex-1 mt-2 ">
                <div className="ml-2">
                  <img
                    className="w-28 h-28 rounded-lg"
                    src={review.image_url}
                    alt="customer"
                  />
                </div>
                <div className=" ml-6 w-80">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <div className="card-body">
                    <p className=" ">{review.opinion}</p>
                    <p className="font-bold text-[#2D3954] text-xl">
                      {review.name}
                    </p>
                    <p className="font-medium">{review.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReview;
