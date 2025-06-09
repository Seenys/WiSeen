"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (value: string) => void;
}

const SearchBar = ({
  placeholder = "Search...",
  value,
  onChange,
  onSubmit,
}: SearchBarProps) => {
  const [internalValue, setInternalValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      setInternalValue(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(value ?? internalValue);
    }
  };

  return (
    <form
      className="relative flex items-start justify-center"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-primary z-10 " />

      <Input
        type="search"
        placeholder={placeholder}
        value={value !== undefined ? value : internalValue}
        onChange={handleChange}
        className={`
          pl-8 border-none shadow-none w-[200px] transition-all duration-200
          md:w-[300px]
        `}
      />
      <input type="submit" hidden />
    </form>
  );
};

export default SearchBar;
