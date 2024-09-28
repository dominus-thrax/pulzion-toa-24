import { EventType } from "@/types";

export const convertEvent = (event: EventType) => {
  const data = {
    id: event.id,
    name: event.name.toLowerCase().replace(/ /g, "-"),
    mode: event.mode,
    price: event.price,
    rules: event.rules || "No details available.",
    rounds: event.rounds || "",
    teamDistribution: event.teams || "",
    eventLeads: event.notes
      ? event.notes
          .split(/\d+\)\s*/)
          .filter(Boolean)
          .map((note) => {
            const nameMatch = note.match(/name:\s*([a-zA-Z]+)/);
            const phoneMatch = note.match(/phone:\s*(\d+)/);
            return {
              name: nameMatch ? nameMatch[1] : "",
              phone: phoneMatch ? phoneMatch[1] : "",
            };
          })
      : [],
    logo: event.logo || "",
  };

  return data;
};
