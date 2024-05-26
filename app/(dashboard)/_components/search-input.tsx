"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import qs from "query-string";

const SearchInput = () => {
  const router = useRouter();
  const [debouncedValue, setValue] = useDebounceValue("", 500)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: "/",
      query: {
        search: debouncedValue
      }
    }, {skipEmptyString: true, skipNull: true})

    router.push(url);
  }, [debouncedValue, router])

  return (
    <div className="relative w-full">
        <Search 
          className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4"
        />
        <Input 
          className="pl-9 w-full max-w-[516px]"
          placeholder="Search Boards"
          onChange={handleChange}
        />
    </div>
  )
}

export default SearchInput;
