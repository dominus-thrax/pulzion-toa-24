import { CardSpotlight } from "@/components/ui/card-spotlight";
import { EventType } from "@/types";
import Link from "next/link";
import { BorderBeam } from "@/components/magicui/border-beam";

export function CardSpotlightDemo({ event }: { event: EventType }) {
  const eventLink = `/events/${event.name.toLowerCase().replace(/ /g, "-")}`;

  return (
    <Link href={eventLink}>
      <div className="cursor-pointer">
        <CardSpotlight className="flex flex-col justify-center items-center relative overflow-hidden group p-4 rounded-2xl  w-36 h-44 md:w-44 md:h-64">
          <div className="flex justify-center items-center z-50 mb-4">
            <img
              src="/photo.png"
              alt=""
              className="rounded-lg w-16 h-16 md:w-24 md:h-24 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center text-white items-center text-center">
            <p className="text-lg font-bold mt-2">{event.name}</p>
          </div>
          <BorderBeam size={250} duration={12} delay={9} />
        </CardSpotlight>
      </div>
    </Link>
  );
}
