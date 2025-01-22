import banner from "../../assets/images//banner.jpg";
const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat h-[500px] rounded-2xl flex flex-col justify-center items-center gap-8 mt-4 mx-20"
        style={{ backgroundImage: `url(${banner})` }}
      >
       
          <h1 className="text-4xl text-white font-semibold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-xl text-white">
            Learn to prepare meals with fresh, wholesome ingredients, tailored
            to your dietary goals.
          </p>
          <div>
            <button className="btn bg-green-500 mr-4 text-xl rounded-3xl px-4 py-2 font-medium">Explore Now</button>
            <button className="btn text-xl border-2 px-4 py-2 rounded-3xl text-white font-medium">Our Feedback</button>
          </div>
      </div>
    </div>
  );
};

export default Banner;
