import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Welcome to the Game World</h1>
        <p className="text-lg ">
          U can share your opinion and read other's opinion about the games
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="https://www.svgrepo.com/show/38540/mousepad-and-mouse.svg"
          alt="hero"
          width={225}
          height={225}
        />
      </div>

    </div>
  );
}
