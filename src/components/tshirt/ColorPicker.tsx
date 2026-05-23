import { useEffect, useState } from "react";

const colors = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Ash Gray", hex: "#D4D4D4" },
  { name: "Navy", hex: "#1B2838" },
  { name: "Izha Red", hex: "#EA2525" },
  { name: "Heather Gray", hex: "#B0B0B0" },
  { name: "Olive", hex: "#4A5D23" },
  { name: "Burgundy", hex: "#6E2027" },
  { name: "Royal Blue", hex: "#2C6FBB" },
  { name: "Sand", hex: "#E8D5B7" },
];

export function ColorPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (color: string) => void;
}) {
  const [hex, setHex] = useState(value);

  useEffect(() => {
    setHex(value);
  }, [value]);

  const handleHexInput = (next: string) => {
    // normalize
    const v = next.startsWith("#") ? next : `#${next}`;
    setHex(v);
  };

  const commitHex = () => {
    if (/^#([0-9A-Fa-f]{6})$/.test(hex)) {
      onChange(hex.toUpperCase());
    }
  };

  return (
      <div>
      <h3 className="mb-4 text-[16px] uppercase tracking-wider text-white">
        Shirt Color
      </h3>

        <div className="mb-3 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <div
            className="h-12 w-12 rounded-md border-2"
            style={{ backgroundColor: value, borderColor: "rgba(255,255,255,0.12)" }}
          />
          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-white">{colors.find(c => c.hex.toUpperCase() === value.toUpperCase())?.name ?? 'Custom'}</div>
            <div className="text-xs text-white/60">{value.toUpperCase()}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:ml-auto">
          <input
            aria-label="Pick custom color"
            type="color"
            value={hex}
            onChange={(e) => {
              handleHexInput(e.target.value);
              onChange(e.target.value);
            }}
            className="h-10 w-10 appearance-none rounded-sm p-0 border-0 flex-shrink-0"
          />
          <input
            aria-label="Hex value"
            className="w-24 rounded-md bg-black/10 px-2 py-1 text-sm text-white flex-shrink-0"
            value={hex.replace("#", "")}
            onChange={(e) => handleHexInput(e.target.value)}
            onBlur={commitHex}
            onKeyDown={(e) => {
              if (e.key === "Enter") commitHex();
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {colors.map((c) => {
          const active = value.toUpperCase() === c.hex.toUpperCase();
          return (
            <button
              key={c.hex}
              title={c.name}
              onClick={() => onChange(c.hex)}
              aria-pressed={active}
              className={`min-w-[2.5rem] min-h-[2.5rem] p-0 box-border flex-shrink-0 rounded-md border-2 transition-all justify-self-center self-center flex items-center justify-center ${
                  active
                    ? "ring-4 ring-white/80 scale-105"
                      : "border-white/30 hover:border-white/70"
                }`}
                style={{ backgroundColor: c.hex, width: 40, height: 40, minWidth: 40, minHeight: 40 }}
            >
              {active && (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
