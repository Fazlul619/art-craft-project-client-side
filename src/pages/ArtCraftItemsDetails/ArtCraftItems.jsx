import { Star } from "lucide-react";

import { Link, useLoaderData, useParams } from "react-router-dom";

const ArtCraftItems = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const currentItem = data.filter((item) => item._id === id);
  return (
    <div className="w-[90vw] mx-auto mt-16">
      {currentItem.map((item) => {
        const stars = [];

        for (let i = 0; i < 5; i++) {
          if (i < item.rating) {
            stars.push(<Star key={i} className="h-4 w-4 fill-yellow-300" />);
          } else {
            stars.push(<Star key={i} className="h-4 w-4" />);
          }
        }

        return (
          <div key={item._id} className="flex gap-8">
            <div className="flex-[1]">
              <img
                src={item.image}
                alt={item.item_name}
                className="rounded-md h-[350px] w-full"
              />
            </div>

            <div className="flex flex-col gap-4 flex-[2]">
              <div>
                <h1 className="text-3xl font-medium font-serif capitalize">
                  {item.item_name}
                </h1>
                <h5 className="text-xs font-semibold">
                  {item.subcategory_name}
                </h5>
              </div>

              <span className="flex gap-1">{stars}</span>

              <span>{item.price} $</span>

              <p className="text-sm text-justify">{item.short_description}</p>

              <span className="text-sm font-semibold">
                Added on: {""}
                {item.processing_time}
              </span>

              <div>
                <Link
                  to={`/itemDetails/${item._id}`}
                  className="bg-blue-300 px-4 py-2 rounded-md"
                >
                  View details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArtCraftItems;
