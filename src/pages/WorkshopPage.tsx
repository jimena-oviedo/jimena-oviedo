import { gql, useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { HiSquare2Stack } from "react-icons/hi2";
import { Lightbox, SlideImage } from "yet-another-react-lightbox";
import {
  WorkshopGalleryQueryDocument,
  WorkshopPhotoGroup,
} from "../gql/graphql";

gql`
  query workshopGalleryQuery {
    gallery(id: "4mO5GAdPRGISUXIGw1UwXY") {
      sys {
        id
      }
      title
      photoSlidersCollection {
        items {
          sys {
            id
          }
          title
          slidesCollection {
            limit
            skip
            total
            items {
              title
              url
              width
              height
            }
          }
        }
      }
    }
  }
`;

type DeepOptional<T> = {
  [K in keyof T]?: DeepOptional<T[K]> | null;
};

interface LightboxImageProps {
  slider: DeepOptional<WorkshopPhotoGroup>;
}

function LightboxImage({ slider }: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const first = slider.slidesCollection?.items?.[0];

  const slides = useMemo(() => {
    const items =
      slider.slidesCollection?.items?.filter(
        (slide): slide is { url: string; width?: number; height?: number } =>
          Boolean(slide && slide.url)
      ) ?? [];
    return items.map<SlideImage>((slide) => ({
      src: slide.url,
      width: slide.width ?? undefined,
      height: slide.height ?? undefined,
    }));
  }, [slider]);

  if (!first || !first.url) return null;
  return (
    <>
      <figure
        className="basis-1/3 cursor-pointer relative max-w-xs overflow-hidden bg-cover bg-no-repeat aspect-square"
        onClick={() => setOpen(true)}
      >
        <img
          className="block h-full w-full object-cover object-center"
          src={first.url}
          width={first.width ?? undefined}
          height={first.height ?? undefined}
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
  const { data } = useQuery(WorkshopGalleryQueryDocument);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data?.gallery?.photoSlidersCollection?.items.map((slider) =>
        slider ? <LightboxImage key={slider.sys.id} slider={slider} /> : null
      )}
    </section>
  );
}
