import { useState } from "react";
import { Button } from "../ui/button";
import { ArtworkUploader } from "./ArtworkUploader";
import { ColorPicker } from "./ColorPicker";
import { TshirtViewer } from "./TshirtViewer";

export function TshirtGenerator() {
  const [shirtColor, setShirtColor] = useState("#D4D4D4");
  const [textureCanvas, setTextureCanvas] = useState<HTMLCanvasElement | null>(
    null,
  );
  const controlSummary = [
    "Upload artwork to preview it on the shirt",
    "Pick a shirt color from the palette",
    "Rotate the 3D model inside the viewport",
  ];

  const handleUpload = (image: HTMLImageElement) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Rotate the uploaded image 180deg so it aligns with the model UVs
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.translate(canvas.width, canvas.height);
    context.rotate(Math.PI);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    context.restore();
    setTextureCanvas(canvas);
  };

  return (
    <div className="relative z-10 min-h-screen bg-black pt-0">
      <div className="mx-auto max-w-7xl px-4 py-8 pt-24 sm:pb-12 sm:pt-32 md:pt-40">
        <div className="my-6 text-center md:my-8 md:text-left">
          <h1 className="text-[26px] uppercase tracking-[0.15em] text-white sm:text-[32px] md:text-[40px]">
            T-SHIRT GENERATOR
          </h1>
          <p className="mt-2 text-[14px] uppercase tracking-wider text-white/50">
            Design the mockup in real time
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.8fr)] lg:items-start">
          <div
            className="mx-auto h-full w-full max-w-full overflow-hidden rounded-md border border-white/10"
            style={{ minHeight: 360 }}
          >
            <div className="h-full w-full sm:min-h-[560px]">
              <TshirtViewer textureCanvas={textureCanvas} shirtColor={shirtColor} />
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-md border border-white px-4 py-4 sm:gap-6 sm:px-6 sm:py-6">
            <div>
              <h2 className="text-[18px] uppercase tracking-[0.18em] text-white">
                Control Panel
              </h2>
              <p className="mt-1 text-[13px] leading-relaxed text-white/50">
                Configure the shirt and artwork before generating the final look.
              </p>
            </div>

            <div className="space-y-4 flex-1">
              <div className="rounded-2xl border border-white/10 bg-black/5 px-4 py-4 text-white">
                <ArtworkUploader onUpload={handleUpload} />
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/5 px-4 py-4 text-white">
                <ColorPicker value={shirtColor} onChange={setShirtColor} />
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl">
              <Button className="w-full bg-[#ea2525] text-white hover:bg-[#d81f1f]">
                Generate Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
