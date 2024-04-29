const Banner = () => {
  return (
    <div>
      <div className="carousel w-full relative">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/ncgxpN4/b-img-3.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/JKWHtPG/b-img-4.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/B4Sp3f7/b-img-2.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/g4bqDrD/b-img-1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:absolute top-[41%] left-[22%] z-10 w-[1000px] p-4 ">
          <h1 className="text-[#2D3954] font-normal text-6xl text-center ">
            Find Your <span className="font-bold">Perfect House</span>
          </h1>
          <div className="flex gap-2 mt-4 justify-center items-center ">
            <div className="flex gap-3">
              <p className="text-[#2D3954] font-bold text-2xl ">
                <input type="radio" name="radio-1" className="radio" />
                Buy
              </p>
              <p className="text-[#2D3954] font-bold text-2xl ">
                <input type="radio" name="radio-1" className="radio" />
                Rent
              </p>
              <p className="text-[#2D3954] font-bold text-2xl">
                <input type="radio" name="radio-1" className="radio" />
                Sale
              </p>
            </div>
            <label className=" input input-bordered  flex items-center gap-2  ">
              <input type="text" className="grow" placeholder="Search" />

              <span className="btn btn-ghost bg-[#1A2340] text-white ">
                Search
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
