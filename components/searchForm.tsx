"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BedDoubleIcon, CalendarIcon } from "lucide-react";
import { Popover } from "@headlessui/react";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  location: z.string().min(2).max(50),
  dates: z.object({
    from: z.date(),
    to: z.date(),
  }),
  adults: z
    .string()
    .min(1, { message: "please select atleast one adult" })
    .max(12, { message: "max 12 adults occupancy" }),
  children: z.string().min(0).max(12, {
    message: "max 12 children occupancy",
  }),
  rooms: z.string().min(1, {
    message: "please select atleast one room",
  }),
});

function SearchForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      adults: "1",
      children: "0",
      rooms: "1",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col lg:flex-row  lg:max-w-6xl lg:mx-auto items-center space-x-0 justify-center space-y-4 lg:space-y-0 rounded-lg "
      >
        <div className="grid w-full lg:mx-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-white flex">
                  Location
                  <BedDoubleIcon className=" ml-2 h-4 w-4 text-white" />
                </FormLabel>
                <FormMessage />
                <FormControl>
                  <input placeholder="London uk" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid w-full lg:mx-w-sm items-center gap-1.5">
          <FormField
            control={form.control}
            name="dates"
            render={({ field }) => (
              <FormItem className=" flex flex-col">
                <FormLabel className="text-white">Dates</FormLabel>
                <FormMessage />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        id="date"
                        name="dates"
                        variant={"outline"}
                        className={cn(
                          "w-[300px] justify-start text-left font-normal",
                          !field.value.from && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-3 h-4 w-4 opacity-50" />
                        {field.value?.from ? (
                          field.value?.to ? (
                            <>
                              {format(field.value?.from, "LLL dd, y")} -{" "}
                              {format(field.value?.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(field.value?.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Select your dates</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                </Popover>
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}

export default SearchForm;
