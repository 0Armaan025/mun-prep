
import { Rubik_Mono_One } from "next/font/google";
import Card from "../../components/card/Card"

const rubikMonoOne = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400", // only one available for Rubik Mono One
  display: "swap", // optional but good for FOUT
});

const HomePage = () => {
  return (
    <div >
      <div className="bodyDiv flex flex-col justify-start items-start">

        <h3 className={`${rubikMonoOne.className} font-bold text-[10vh] leading-[10.2vh] ml-16 mt-8 p-2 tracking-wider w-[90rem] uppercase md:w-[70rem]`}>
          let's have the best MUN prep!
        </h3>


        {/* <h4 className='mb-8'>it does use ai, but it helps a ton for researching for stances and stuff, so yeah, use it!</h4> */}



        <Card color="#d2d8df" />
      </div>
    </div>
  )
}

export default HomePage; 
