import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

export default function NotFound() {
  return (
    <>
      <div className="flex justify-center items-center h-screen flex-col space-y-6">
        <h2 className="text-center text-[40px] md:text-5xl lg:text-6xl font-sans font-bold">404 | Not Found</h2>
        {/* <p>Could not find requested resource</p> */}
        <p className="font-sans text-sm md:text-base font-semibold">This page does not exist.</p>
        <Link href="/">
          <button className="bg-white text-center w-48 md:w-64 rounded-2xl h-14 relative text-black text-xl font-semibold group" type="button">
            <div className="bg-purple rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] md:group-hover:w-[248px] z-10 duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" height="25px" width="25px">
                <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000"></path>
                <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000"></path>
              </svg>
            </div>
            <p className="translate-x-2 text-base md:text-lg font-semibold">Return Home</p>
          </button>
        </Link>
      </div>
    </>
  );
}
