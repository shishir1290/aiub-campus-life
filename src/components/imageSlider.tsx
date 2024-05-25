// components/ImageSlider.js

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({
  images,
}: {
  images: { src: string; width: number; height: number }[];
}) => {
  return (
    <Carousel
      autoPlay
      interval={5000}
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={`Slide ${index + 1}`}
          />
          <figcaption className="absolute px-4 text-lg text-white top-6">
            <div className="bg-white bg-opacity-70 p-2 rounded-lg m-10">
              <img
                src="/aiubstorylogo.png"
                alt="AIUB Story Logo"
                className=" h-28"
              />
            </div>
          </figcaption>

          <figcaption className="absolute inset-x-0 flex justify-center top-2 px-4 text-lg text-white">
            <div className="text-4xl font-bold text-sky-700 text-center bg-white bg-opacity-60 w-96 p-4 rounded-lg">
              Welcome to AIUB
            </div>
          </figcaption>

          <figcaption className="absolute px-4 text-lg text-white top-6 right-0">
            <div className="bg-black bg-opacity-30 p-2 rounded-lg mt-10 mr-28">
              <p className="text-7xl text-white">AIUB</p>
            </div>
          </figcaption>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
