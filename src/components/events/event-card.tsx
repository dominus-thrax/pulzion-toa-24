import { CardSpotlight } from "@/components/ui/card-spotlight";
import { EventType } from "@/types";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useRouter } from "next/navigation";

export function CardSpotlightDemo({ event }: { event: EventType }) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/events/${event.id}`);
      }}
    >
      {/* Only render CardSpotlight for medium and larger screens */}
      <div className="cursor-pointer hidden md:block">
        <CardSpotlight className="flex flex-col justify-center items-center relative overflow-hidden group p-4 rounded-2xl  w-36 h-44 md:w-44 md:h-64">
          <div className="flex justify-center items-center mb-4 z-10">
            <img
              src={
                event.name === "Fandom-TMKOC" ||
                event.name === "Fandom-Cricket" ||
                event.name === "Fandom-Football" ||
                event.name === "Fandom-Sitcom" ||
                event.name === "Fandom-Anime"
                  ? `/assets/EventsNew/Fandom.png`
                  : `/assets/EventsNew/${event.name}.png`
              }
              alt=""
              className="rounded-lg w-16 h-16 md:w-24 md:h-24 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center text-white items-center text-center z-10">
            <p className="text-lg font-bold mt-2">{event.name}</p>
          </div>
          <BorderBeam size={250} duration={12} delay={9} />
        </CardSpotlight>
      </div>

      {/* Render a simpler card without CardSpotlight for mobile */}
      <div className="cursor-pointer md:hidden">
        <div className="flex flex-col justify-center items-center relative overflow-hidden group p-4 rounded-2xl  w-36 h-44 border-[0.3px] border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.6)]">
          <div className="flex justify-center items-center mb-4">
            <img
              src={
                event.name === "Fandom-TMKOC" ||
                event.name === "Fandom-Cricket" ||
                event.name === "Fandom-Football" ||
                event.name === "Fandom-Sitcom" ||
                event.name === "Fandom-Anime"
                  ? `/assets/EventsNew/Fandom.png`
                  : `/assets/EventsNew/${event.name}.png`
              }
              alt=""
              className="rounded-lg w-16 h-16 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center text-white items-center text-center">
            <p className="text-lg font-bold mt-2">{event.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
