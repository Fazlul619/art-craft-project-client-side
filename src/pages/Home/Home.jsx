import { useLoaderData } from "react-router-dom";
import CraftCard from "./CraftCard";
import Banner from "../Banner/Banner";
import { useEffect, useState } from "react";
import ArtCraftCategoriesSection from "./ArtCraftCategoriesSection";
import CustomerReview from "../Customer review/CustomerReview";
import WebAdd from "../Web Sit Add Page/WebAdd";

const Home = () => {
  const craftItems = useLoaderData();
  const [allArtCraftItems, setAllArtCraftItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/artCraftItems")
      .then((res) => res.json())
      .then((data) => setAllArtCraftItems(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="my-6">
        <h1 className="text-center text-2xl font-bold">Deal Of The Day</h1>
        <p className="text-center">
          Grab todays best bargain before it slips away, a deal too good to
          miss, just for today!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 w-[90vw] mx-auto mt-8">
        {craftItems.map((craftItem) => (
          <CraftCard key={craftItem._id} craftItem={craftItem}></CraftCard>
        ))}
      </div>
      <div className="my-6">
        <h1 className="text-center text-2xl font-bold">Art & Craft</h1>
        <p className="text-center">
          The Art & Craft Categories Section celebrates diverse creative
          expressions, from painting to pottery, offering a platform for
          artistic exploration.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 w-[90vw] mx-auto mt-8">
        {allArtCraftItems.map((artCraft) => (
          <ArtCraftCategoriesSection
            key={artCraft._id}
            artCraft={artCraft}
          ></ArtCraftCategoriesSection>
        ))}
      </div>
      <div className="my-6">
        <h1 className="text-center text-2xl font-bold">
          Product Advertisement
        </h1>
        <p className="text-center">
          Revolutionizing traditional advertising by blending product promotion
          with engaging content and storytelling.
        </p>
      </div>
      <WebAdd></WebAdd>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
