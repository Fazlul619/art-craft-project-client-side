import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";

const Home = () => {
  const craftItems = useLoaderData();
  return (
    <div>
      <h1>craft:{craftItems.length}</h1>
      <div>
        {craftItems.map((craftItem) => (
          <CraftCard key={craftItem._id} craftItem={craftItem}></CraftCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
