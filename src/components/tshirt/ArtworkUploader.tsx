import { useRef } from "react";

export function ArtworkUploader({
  onUpload,
  label = "Artwork",
}: {
  onUpload: (image: HTMLImageElement) => void;
  label?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      onUpload(img);
      if (inputRef.current) inputRef.current.value = "";
    };
    img.src = URL.createObjectURL(file);
  };

  return (
    <div>
      <h3 className="mb-3 text-[16px] uppercase tracking-wider text-white">{label}</h3>
      <label className="flex cursor-pointer items-center justify-center border-2 border-dashed border-white/30 px-4 py-6 transition-colors hover:border-white/60">
        <span className="text-[14px] uppercase tracking-wider text-white/70">
          + Upload Image
        </span>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />
      </label>
    </div>
  );
}
