import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import glimpses from "../../../public/assets/landing/glimpses/image.jpg";

const CarouselComponent: FC = () => {
  return (
    <div className="md:max-w-[50%] w-full flex justify-center items-center relative">
      {/* Fixed Borders */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="border-4 border-[#00C853] w-full h-full box-border rounded-3xl">
          <div className="border-4 border-[#F0C66B] w-full h-full box-border rounded-2xl"></div>
        </div>
      </div>

      {/* Carousel */}
      <div className="">
        <Carousel className="bg-transparent w-full h-full relative">
          <CarouselContent className="w-full h-full ">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="flex justify-center items-center"
              >
                <Card className="bg-transparent w-full h-[600px] rounded-3xl overflow-hidden border-none">
                  <CardContent className="w-full h-full">
                    <Image
                      className="w-full h-full rounded-3xl ml-2 mt-3"
                      src={glimpses}
                      alt="image"
                      height={600}
                      width={600}
                      quality={100}
                      layout="fixed"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons Container */}
          <div className="sm:flex sm:justify-center sm:space-x-2 md:hidden mt-2 z-30">
            <CarouselPrevious className="bg-transparent text-[#00C853] border-[#F0C66B]" />
            <CarouselNext className="bg-transparent text-[#00C853] border-[#F0C66B]" />
          </div>

          {/* Separate navigation for larger screens */}
          <div className="hidden md:flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-4 z-30">
            <CarouselPrevious className="bg-transparent text-[#00C853] border-[#F0C66B] hover:opacity-80" />
            <CarouselNext className="bg-transparent text-[#00C853] border-[#F0C66B] hover:opacity-80" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
