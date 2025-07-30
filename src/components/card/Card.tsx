import Image from "next/image"
import { Poppins } from "next/font/google"
type Props = {
  color: string;
  imageUrl: string;
  text: string;
}

const poppinsFont = Poppins({
  subsets: ["devanagari"],
  weight: ["400"],
});

const Card = (props: Props) => {
  return (
    <div className={`card w-64 md:w-72 lg:w-80 h-64 md:h-72 lg:h-80 rounded-2xl p-4 mx-8 my-4 cursor-pointer hover:-translate-y-2 transition-all duration-300`} style={{ background: props.color }}>
      <div className="topPart flex flex-row justify-end items-center">


        <div className="circleDiv bg-[#f6f7ee] rounded-full w-10 h-10 flex items-center justify-center">
          <Image src={"https://cdn-icons-png.flaticon.com/128/6941/6941884.png"} height={30} width={30} alt="up arrow" />
        </div>




      </div>
      <center className="mt-12">
        <img src={props.imageUrl} height={80} width={120} alt="middle image" className='w-16 h-16 md:w20 md:h-20 object-contain' />
      </center>

      <h3 className={`${poppinsFont.className} mt-12 text-xl`}>{props.text}</h3>
    </div>
  )
}

export default Card;
