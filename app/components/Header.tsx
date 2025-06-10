import Logo from "./shared/Logo";
import { ModeToggle } from "@/components/mode-toggle";
import SearchBar from "./shared/SearchBar";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <nav
      className={cn(
        "flex h-[73px] items-center justify-between px-6",
        className
      )}
    >
      <Logo />
      <div className="flex items-center justify-between gap-4 lg:w-[30%]">
        <SearchBar />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;
