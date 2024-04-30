const WebAdd = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-[90vw] mx-auto mt-8">
      <div className="">
        <div className="relative w-[500px] h-[200px]">
          <img
            className="w-full h-full rounded-md"
            src="https://wordpressthemes.live/WCG7/WCM158_artykraft/layout3/wp-content/uploads/2023/12/Cms-Banner-3.jpg"
            alt="Card Image"
          />

          <div className="absolute top-[50%] left-[10%] translate-y-[-50%] translate-x-[-10%]">
            <h2>Trendy Designer</h2>
            <h1>Buy Handmade Piggy Bank</h1>
            <button className="underline underline-offset-2">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="relative w-[500px] h-[200px]">
          <img
            className="w-full h-full rounded-md"
            src="https://wordpressthemes.live/WCG7/WCM158_artykraft/layout3/wp-content/uploads/2023/12/Cms-Banner-4.jpg"
            alt="Card Image"
          />

          <div className="absolute top-[50%] left-[10%] translate-y-[-50%] translate-x-[-10%]">
            <h2>Trendy Designer</h2>
            <h1>For Handycraft Flowers</h1>
            <button className="underline underline-offset-2">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAdd;
