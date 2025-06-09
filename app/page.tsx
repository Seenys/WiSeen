import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="poppins">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg text-gray-700">
        This is a simple Next.js application with Tailwind CSS.
      </p>
      <ModeToggle />
    </div>
  );
}
