import { Star } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";

const AllArtCraftItems = () => {
  const data = useLoaderData();
  return (
    <div className="mt-12 mb-10 w-[90vw] mx-auto space-y-6">
      {data.map((item) => {
        const stars = [];

        for (let i = 0; i < 5; i++) {
          if (i < item.rating) {
            stars.push(<Star key={i} className="h-4 w-4 fill-yellow-300" />);
          } else {
            stars.push(<Star key={i} className="h-4 w-4" />);
          }
        }
        return (
          <div
            key={item._id}
            className="flex w-full items-center justify-between border-2 pr-1 rounded-md border-blue-500"
          >
            <div className="flex items-center gap-5">
              <img
                src={item.imageUrl}
                alt={item.itemName}
                className="h-36 w-56 rounded-md"
              />
              <div>
                <h1 className="text-xl">{item.itemName}</h1>
                <span className="text-sm">{item.price} $</span>
                <span className="flex gap-1">{stars}</span>
              </div>
            </div>

            <div>
              <Link
                to={`/itemDetails/${item._id}`}
                className="bg-blue-300 px-4 py-2 rounded-md"
              >
                View details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllArtCraftItems;
