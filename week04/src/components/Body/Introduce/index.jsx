import logo from "../../../assets/avatar.png";

const Introduce = () => {
  return (
    <div className="mt-15">
      <h1 className="text-3xl font-bold">Emma Gonzalez's Recipe Box</h1>
      <div className="flex mt-15">
        <img className="w-40 mr-10" src={logo} alt="logo" />
        <div className="w-full">
          <p className="text-base font-medium text-gray-800">
            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise
            as a former cooking editor at The Los Angeles Times. She is also an
            accomplished author, contributing to numerous cookbooks and food
            publications. Originally from East Los Angeles, Emma now resides in
            New York City, where she explores a wide range of culinary delights.
          </p>
          <div className="space-x-5 mt-5">
            <button className="px-4 py-3 rounded-xl text-black font-medium hover:bg-pink-400 hover:text-white">6.5K Subscribes</button>
            <button className="bg-pink-400 px-4 py-3 rounded-xl text-white font-medium hover:text-black">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
