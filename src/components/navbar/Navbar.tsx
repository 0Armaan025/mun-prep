import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <nav className="navbar py-4 px-2 border-b-2 border-b-[#dcdad6] mx-16 my-4 flex flex-row justify-between items-center">
        {/* we will have 3 elements  */}
        <div className="branding">
          <Image src="./logo.svg" height={80} width={80} alt="logo image" />
        </div>
        <div className="end-section flex flex-row items-center justify-center gap-4">
          <h3>About</h3>
          <input type="button" value="Github" className="bg-transparent border-[1.5px] border-black rounded-md px-3 py-1 cursor-pointer hover:bg-white/90 transition-all duration-300 "/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
