import Logo from "./shared/Logo";
import { ModeToggle } from "@/components/mode-toggle";
import SearchBar from "./shared/SearchBar";

const Header = () => {
  return (
    <nav className="flex h-[73px] items-center justify-between px-6">
      <Logo />
      <div className="flex items-center justify-between gap-4 lg:w-[30%]">
        <SearchBar />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;
