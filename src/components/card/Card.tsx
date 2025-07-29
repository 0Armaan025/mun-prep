import Image from "next/image"
type Props = {
  color: string;
}

const Card = (props: Props) => {
  return (
    <div className={`card w-80 h-80 rounded-2xl p-4 mx-8 my-4`} style={{ background: props.color }}>
      <div className="topPart flex flex-row justify-end items-center">


        <div className="circleDiv bg-[#f6f7ee] rounded-full w-10 h-10 flex items-center justify-center">
          <Image src={"https://cdn-icons-png.flaticon.com/128/6941/6941884.png"} height={30} width={30} alt="up arrow" />
        </div>

      </div>
    </div>
  )
}

export default Card
