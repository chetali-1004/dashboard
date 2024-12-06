import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* SEARCH BAR */}
      <div className="flex">
        <Image src="/search.png" alt="" width={14} height={14}></Image>
        <input type="text" placeholder="Search..."></input>
      </div>

      {/* ICONS & USER */}
      <div className="">
        <div className="bg-white rounded-full">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
