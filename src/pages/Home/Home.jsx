import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";

const Home = () => {
  const craftItems = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 w-[90vw] mx-auto mt-8">
        {craftItems.map((craftItem) => (
          <CraftCard key={craftItem._id} craftItem={craftItem}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
