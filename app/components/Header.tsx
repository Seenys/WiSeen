import { Search } from "lucide-react";
import Logo from "./shared/Logo";

const Header = () => {
  return (
    <nav className="flex h-[73px] items-center justify-center px-6">
      <Logo />
      <div className="flex items-center justify-center gap-4 w-[30%]">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-primary" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
