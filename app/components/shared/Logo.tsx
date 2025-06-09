import { SlGraph } from "react-icons/sl";

const Logo = () => (
  <header className="flex items-center gap-2 left-10 top-8">
    <div className="size-9 bg-primary rounded-md flex items-center justify-center">
      <SlGraph className="text-white text-lg" aria-hidden />
    </div>

    <h1 className="font-semibold text-2xl font-poppins max-md:hidden">
      Wi <span className="text-primary font-normal">Seen</span>
    </h1>
  </header>
);

export default Logo;
