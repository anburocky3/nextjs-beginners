import Link from "next/link";

const Header = () => {
  const appName = "NextJS";

  return (
    <header className="bg-blue-950 text-white  p-4  sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <h4 className="font-semibold text-indigo-300">{appName}</h4>
        </Link>
        <ul className="flex items-center space-x-10 text-sm">
          <li>
            <Link href="/" className="hover:text-orange-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-300">
              About
            </Link>
          </li>

          <li>
            <Link href="#contact" className="hover:text-orange-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
