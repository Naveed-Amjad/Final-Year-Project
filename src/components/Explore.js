import React from "react";
import scenary from "./images/scene.png";
import "./../components/Explore.css";
// import "./../Components/Explore.css";
const Explore = () => {
  return (
    <section class="bigContainer">
      <div className="w-screen h-screen grid grid-cols-2 MainClass">
        <div className="left ">
          <h1 className="t1">
            Explore Wonderfull
            <br />
            Experience
          </h1>
          <h1 className="t3">
            Skardu - <span className="line-2">Gilgit Baltistan</span>
          </h1>
          <div className="t4 pt-3">
            <p>
              Far in Northern Pakistan, lies the Majestic Skardu Valley
              surrounded by mighty Karakorum, Himalaya, and Hindu Kush mountain
              ranges. Skardu, famous for climbing, mountaineering all around the
              world. Along with this, Skardu host the second Highest mountain of
              World and Pakistan Highest mountain, K2 (8,611 m). Moreover, the
              landscape, culture, traditions, and hospitality of locals are
              catching millions of tourists from all over the year. So In
              conclusion, this time we have some of the best places to visit
              Skardu valley of Pakistan.{" "}
              <span className="span">
                <br />
                Shangrilla (Upper Kachura) Lake, Shigar Valley, Khaplu Valley,
                Basho Valley, Deosai National Park .....{" "}
                <button className="bg-orange-500 text-white rounded-3xl px-4 py-2 text-sm font-medium focus:outline-none hover:bg-orange-600">see more</button>
              </span>
            </p>
          </div>
        </div>
        <div className="right">
          <p className="t2">
            Explore our Blogs and get all the Information you need to go to your
            Dream Places Under one Platform
          </p>
          <br/>
          <div className=" ">
            <img className="scene" src={scenary} alt="Logoimage" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Explore;
