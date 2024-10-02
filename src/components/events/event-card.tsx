import { CardSpotlight } from "@/components/ui/card-spotlight";
import { EventType } from "@/types";
import { BorderBeam } from "@/components/magicui/border-beam";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import api from "@/api/api";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast, Toaster } from "sonner";
import localFont from "next/font/local";

const font = localFont({
  src: "../../../public/font/BDSupperRegular.ttf",
});

export function CardSpotlightDemo({ event }: { event: EventType }) {
  const router = useRouter();
  const pathName = usePathname();
  const [loading, setLoading] = useState(true);
  const [slots, setSlots] = useState<
    {
      id: number;
      capacity: number;
      start_time: string;
      end_time: string;
      year: string;
    }[]
  >([]);

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const fetchMyEventsSlots = async (event_id: number) => {
    setLoading(false);
    try {
      const response = await api.get(`/user_slots?event_id=${event_id}`);
      // Extracting the transaction array
      const slots = response.data.slots;
      setSlots(slots);
    } catch (error: any) {
      // Error handling
      console.log(error);
    } finally {
      setLoading(true);
    }
  };

  const bookSlot = async (event_id: number, slot_id: number) => {
    try {
      const response = await api.post(`/user_slots`, {
        event_id,
        slot_id,
      });
      if (response) {
        closeDialog();
        toast.success("Slot booked successfully!");
      }
    } catch (error: any) {
      // Error handling
      console.log(error);
      closeDialog();
      toast.error(error.response.data.error);
    }
  };
  const convertDate = (dateStr: string) => {
    const date = new Date(dateStr);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    let hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");

    const getAMPM = (hours: number) => {
      return hours >= 12 ? "PM" : "AM";
    };

    const ampm = getAMPM(hours);
    hours = hours % 12 || 12;
    const formattedHours = String(hours).padStart(2, "0");

    const formattedDateTime = `${day}-${month}-${year}, ${formattedHours}:${minutes} ${ampm}`;

    return formattedDateTime;
  };

  return (
    <div
      onClick={() => {
        pathName !== "/orders" && router.push(`/events/${event.id}`);
      }}
    >
      <Toaster
        position="top-right"
        richColors
        closeButton
        duration={2000}
        pauseWhenPageIsHidden
        visibleToasts={1}
      />

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
          {pathName === "/orders" && (
            <Dialog onOpenChange={setIsOpen} open={isOpen}>
              <DialogTrigger className="z-50">
                <Button
                  onClick={() => {
                    openDialog();
                    fetchMyEventsSlots(event.id);
                  }}
                  className="z-50 mt-10 rounded-xl text-white bg-[#E8AF49]"
                >
                  Book a slot
                </Button>
              </DialogTrigger>
              <DialogContent
                className={`${font.className} bg-black max-w-[80%] w-full rounded-xl text-white md:rounded-xl
              border-[0.3px] border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.6)]`}
              >
                {loading ? (
                  <div className="">
                    {slots.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow className="border-b border-b-gray-600 hover:bg-gray-900">
                            <TableHead className="w-[100px] text-center">
                              Capacity
                            </TableHead>
                            <TableHead className="text-center">
                              Start Time
                            </TableHead>
                            <TableHead className="text-center">
                              End Time
                            </TableHead>
                            <TableHead className="text-center">
                              Category
                            </TableHead>
                            <TableHead className="text-center">Book</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {slots.map((slot, index) => (
                            <TableRow
                              key={index}
                              className="border-b border-b-gray-600 hover:bg-gray-900 hover:cursor-pointer"
                            >
                              <TableCell className="font-medium text-center">
                                {slot.capacity}
                              </TableCell>
                              <TableCell className="text-center">
                                {convertDate(slot.start_time)}
                              </TableCell>
                              <TableCell className="text-center">
                                {convertDate(slot.end_time)}
                              </TableCell>
                              <TableCell className="text-center">
                                {slot.year}
                              </TableCell>
                              <TableCell className="text-center">
                                <Button
                                  onClick={() => bookSlot(event.id, slot.id)}
                                  className="bg-[#E8AF49] text-white rounded-xl"
                                >
                                  Book slot
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="w-full text-white text-xl text-center my-20">
                        No slots available for the event
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full text-white text-xl text-center my-20">
                    Loading...
                  </div>
                )}
              </DialogContent>
            </Dialog>
          )}
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

          {pathName === "/orders" && (
            <Dialog onOpenChange={setIsOpen} open={isOpen}>
              <DialogTrigger className="z-50">
                <Button
                  onClick={() => {
                    openDialog();
                    fetchMyEventsSlots(event.id);
                  }}
                  className="z-50 rounded-xl text-white bg-[#E8AF49]"
                >
                  Book a slot
                </Button>
              </DialogTrigger>
              <DialogContent
                className={`bg-black max-w-[80%] w-full rounded-xl text-white
              border-[0.3px] border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.6)] ${font.className}`}
              >
                {loading ? (
                  <div className="">
                    {slots.length > 0 ? (
                      <Table>
                        <TableHeader>
                          <TableRow className="border-b border-b-gray-600 hover:bg-gray-900">
                            <TableHead className="w-[100px] text-center">
                              Capacity
                            </TableHead>
                            <TableHead className="text-center">
                              Start Time
                            </TableHead>
                            <TableHead className="text-center">
                              End Time
                            </TableHead>
                            <TableHead className="text-center">
                              Category
                            </TableHead>
                            <TableHead className="text-center">Book</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {slots.map((slot, index) => (
                            <TableRow
                              key={index}
                              className="border-b border-b-gray-600 hover:bg-gray-900 hover:cursor-pointer"
                            >
                              <TableCell className="font-medium text-center">
                                {slot.capacity}
                              </TableCell>
                              <TableCell className="text-center">
                                {convertDate(slot.start_time)}
                              </TableCell>
                              <TableCell className="text-center">
                                {convertDate(slot.end_time)}
                              </TableCell>
                              <TableCell className="text-center">
                                {slot.year}
                              </TableCell>
                              <TableCell className="text-center">
                                <Button
                                  onClick={() => bookSlot(event.id, slot.id)}
                                  className="bg-[#E8AF49] text-white rounded-xl"
                                >
                                  Book slot
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    ) : (
                      <div className="w-full text-white text-xl text-center my-20">
                        No slots available for the event
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full text-white text-xl text-center my-20">
                    Loading...
                  </div>
                )}
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  );
}
