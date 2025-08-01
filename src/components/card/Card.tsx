import Image from "next/image";
import { Poppins } from "next/font/google";

type Props = {
  color: string;
  imageUrl: string;
  text: string;
};

const poppinsFont = Poppins({
  weight: ["400"],
});

const Card = (props: Props) => {
  return (
    <div
      className={`card w-full max-w-[30rem] h-[50rem] rounded-3xl p-8 mx-8 my-6 cursor-pointer hover:-translate-y-2 transition-all duration-300`}
      style={{ background: props.color }}
    >
      <div className="topPart flex flex-row justify-end items-center">
        <div className="circleDiv bg-[#f6f7ee] rounded-full w-14 h-14 flex items-center justify-center">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/6941/6941884.png"
            height={40}
            width={40}
            alt="up arrow"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-16 mb-8">
        <img
          src={props.imageUrl}
          alt="middle image"
          className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[15rem] lg:h-[15rem] object-contain"
        />
      </div>

      <h3
        className={`${poppinsFont.className} text-center text-4xl md:text-5xl lg:text-3xl font-semibold text-black`}
      >
        {props.text}
      </h3>
    </div>
  );
};

export default Card;
