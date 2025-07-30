
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


        <h3 className={`${rubikMonoOne.className} font-bold text-4xl md:text-6xl lg:text-[10vh] leading-tight md:leading-[10.2vh] ml-4 md:ml-16 mt-8 p-2 tracking-wider w-full md:w-[120rem] uppercase`}>
          let's have the best MUN prep!
        </h3>

        <div className="flex flex-wrap justify-center items-center mt-12 ml-12">
          <Card color="#d2d8df" imageUrl="https://cdn-icons-png.flaticon.com/128/3073/3073412.png" text="Position Paper creator" />
          <Card color="#d2e1d2" imageUrl="https://cdn-icons-png.flaticon.com/128/3403/3403504.png" text="AI Researcher" />
          <Card color="#e0d7d1" imageUrl="https://cdn-icons-png.flaticon.com/128/3281/3281329.png" text="Card for test purposes" />
        </div>

      </div>
    </div>
  )
}

export default HomePage; 
