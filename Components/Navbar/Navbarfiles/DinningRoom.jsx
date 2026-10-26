import { ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Tables",
    items: ["Dining Tables", "Coffee Tables", "Side Tables", "Console Tables", "Outdoor Tables", "View all Tables"],
  },
  {
    title: "Chairs",
    items: ["Dining Chairs", "Lounge Chairs", "Outdoor Chairs", "Rocking Chairs", "View all Chairs"],
  },
  {
    title: "Stools",
    items: ["Bar Stools", "Counter Stools", "Step Stools", "Wooden Stools", "Backless Stools", "View all Stools"],
  },
  {
    title: "Benches",
    items: ["Entryway Benches", "Dining Benches", "Outdoor Benches", "Storage Benches", "Wooden Benches", "View all Benches"],
  },
  {
    title: "Storage",
    items: ["Cabinets", "Bookshelves", "Sideboards", "Dressers", "View all Storage"],
  },
  {
    title: "Decor",
    items: ["Wall Art", "Mirrors", "Rugs", "View all Decor"],
  },
];

export default function DiningRoomMenu() {
  return (
    <div className="w-full bg-white px-16 py-8 text-[#1E1B18]">
      <div className="flex gap-16">
        {/* Left: link columns */}
        <div className="grid flex-1 grid-cols-4 gap-x-10 gap-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h3 className="flex cursor-pointer items-center gap-2 text-xl hover:underline underline-offset-4">
                {s.title}
                <ArrowRight size={14} />
              </h3>

              <ul className="mt-6 space-y-2.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer text-[15px] hover:underline underline-offset-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* View all Dining room (sits after Decor in the grid) */}
          <div>
            <h3 className="cursor-pointer text-xl hover:underline underline-offset-4">
              View all Dining room
            </h3>
          </div>
        </div>

        {/* Right: image + caption */}
        <div className="w-[570px] shrink-0">
          <div className="h-[380px] w-full overflow-hidden bg-neutral-200">
            <img
              src="Theme Images\Dining-1.webp"
              alt="Dining room"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-lg">50% off on Dining room Furniture</p>
        </div>
      </div>
    </div>
  );
}