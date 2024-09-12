import { cn } from "@/lib/utils";
import Particles from "../magicui/particles";

export default function RetroGrid({
  className,
  angle = 70,
}: {
  className?: string;
  angle?: number;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px] bg-black opacity-90",
        className
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      <Particles
        className="absolute inset-0"
        quantity={100}
        size={1.0}
        ease={80}
        color="#ffffff"
        refresh
      />
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",

            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",

            // Light Styles
            "[background-image:linear-gradient(to_right,rgba(34,197,94)_1px,transparent_0),linear-gradient(to_bottom,rgba(34,197,94)_1px,transparent_0)]",

            // Dark styles
            "dark:[background-image:linear-gradient(to_right,rgba(34,197,94)_1px,transparent_0),linear-gradient(to_bottom,rgba(34,197,94)_1px,transparent_0)]"
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0" />
    </div>
  );
}
