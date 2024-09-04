
import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="bg-blue-300 ">
      <div className="container mx-auto h-20  sm:text-[22px] flex justify-between items-center">
        <div className={`flex-1 flex md:items-center justify-end pr-2 gap-6 md:space-x-6`}>
          <Link href="/" className="text-white  bg-[#9191ff] p-[4px_10px_8px_10px] rounded-[7px]">
           Home
          </Link>
          <Link href="/" className="text-white  bg-[#9191ff] p-[4px_10px_8px_10px] rounded-[7px]">
           Resume
          </Link>
          <Link href="/uploadnotes" className="text-white  bg-[#9191ff] p-[4px_10px_8px_10px] rounded-[7px]">
           Add Notes
          </Link>
       
        </div>
      </div>
    </nav>
  );
}
