import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
       <div className="w-[400px] h-[500px] rounded-full">
       <img className="w-full h-full object-cover rounded-md opacity-80" src="/cat.jpg" alt="" />
       </div>
        <h1 className="text-xl py-5 ">We have moved to <a target="_blank" href="https://kiitconnect.com" className="text-blue-500 font-bold"> kiitconnect.com</a></h1>
      </div>
     
    </main>
  );
}
