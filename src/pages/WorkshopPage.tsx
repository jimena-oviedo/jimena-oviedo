import { useMemo, useState } from "react";
import { HiSquare2Stack } from "react-icons/hi2";
import { Lightbox } from "yet-another-react-lightbox";

const PHOTOS_STUB = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

interface LightboxImageProps {
  photo: number;
}

function LightboxImage({ photo }: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  const slide = (ph: number) => `https://picsum.photos/seed/${ph}/800/600`;
  const slides = useMemo(() => {
    return [
      { src: slide(photo) },
      ...Array.from({ length: Math.floor(Math.random() * 2) }, () => ({
        src: slide(photo + Math.random()),
      })),
    ];
  }, [photo]);

  return (
    <>
      <figure
        className="basis-1/3 cursor-pointer relative max-w-xs overflow-hidden bg-cover bg-no-repeat aspect-square"
        onClick={() => setOpen(true)}
      >
        <img
          className="block h-full w-full object-cover object-center"
          src={`https://picsum.photos/seed/${photo}/300/250`}
        />
        <div className="absolute bottom-0 left-0 h-full w-full bg-black bg-opacity-20 overflow-hidden opacity-0 hover:opacity-100"></div>
        {slides.length > 1 && (
          <HiSquare2Stack className="absolute text-base top-0 right-0 text-white drop-shadow m-1" />
        )}
      </figure>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        carousel={{ finite: true }}
        controller={{ closeOnBackdropClick: true }}
        animation={{ swipe: 300 }}
        slides={slides}
      />
    </>
  );
}

export function WorkshopPage() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {PHOTOS_STUB.map((photo) => (
        <LightboxImage key={photo} photo={photo} />
      ))}
    </section>
  );
}
