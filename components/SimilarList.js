import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SimilarList = () => {
  return (
    <Carousel axis="horizontal" width={300}>
      <div className=" w-1/3">
        <img src="https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className="legend">Legend 1</p>
      </div>
      <div className=" w-1/3">
        <img src="https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className="legend">Legend 2</p>
      </div>
      <div className=" w-1/3">
        <img src="https://images.pexels.com/photos/3555615/pexels-photo-3555615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default SimilarList;
