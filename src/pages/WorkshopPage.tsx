import { gql, useQuery } from "@apollo/client";
import { useCallback, useMemo, useState } from "react";
import { HiSquare2Stack } from "react-icons/hi2";
import { Lightbox, SlideImage } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { JsonDump } from "../components/JsonDump";
import { WorkshopGalleryQueryDocument } from "../gql/graphql";
import { slidesFromCollection } from "../utils";
import { Loading } from "./components/Loading";

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

interface LightboxImageProps {
  slide: SlideImage;
  onClick: () => void;
  hasMore: boolean;
}

// https://www.contentful.com/developers/docs/references/images-api
const IMG_THUMBNAIL_PARAMS = "?fm=webp&w=400&h=400&fit=fill&q=80";
const IMG_CAROUSEL_PARAMS = "?fm=webp&w=1400&q=80";

function LightboxImage({ slide, onClick, hasMore }: LightboxImageProps) {
  return (
    <figure
      className="basis-1/3 cursor-pointer relative max-w-xs overflow-hidden bg-cover bg-no-repeat aspect-square"
      onClick={onClick}
    >
      <img
        className="block h-full w-full object-cover object-center"
        src={`${slide.src}${IMG_THUMBNAIL_PARAMS}`}
        width={slide.width ?? undefined}
        height={slide.height ?? undefined}
      />
      <div className="absolute bottom-0 left-0 h-full w-full bg-black bg-opacity-20 overflow-hidden opacity-0 hover:opacity-100"></div>
      {hasMore && (
        <HiSquare2Stack className="absolute text-base top-0 right-0 text-white drop-shadow m-1" />
      )}
    </figure>
  );
}

export function WorkshopPage() {
  const { data, error, loading } = useQuery(WorkshopGalleryQueryDocument);

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = useMemo(() => {
    const items = data?.gallery?.photoSlidersCollection?.items ?? [];
    return items.flatMap((item) =>
      slidesFromCollection(item?.slidesCollection, {
        params: IMG_CAROUSEL_PARAMS,
        imageFit: "contain",
      })
    );
  }, [data]);

  const onClickImage = useCallback((index: number) => {
    setOpen(true);
    setIndex(index);
  }, []);

  if (loading) return <Loading />;
  if (error) return <JsonDump error={error} />;
  return (
    <section className="grid grid-cols-3 gap-4">
      {slides
        .map((slide, index) => ({ ...slide, index }))
        .filter((slide) => slide.isFirst)
        .map((slide) => (
          <LightboxImage
            key={slide.src}
            slide={slide}
            onClick={() => onClickImage(slide.index)}
            hasMore={slide.hasMore}
          />
        ))}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        carousel={{ finite: true }}
        controller={{ closeOnBackdropClick: true }}
        animation={{ swipe: 300 }}
        slides={slides}
        index={index}
        plugins={[Zoom]}
        render={{
          iconZoomIn: () => null,
          iconZoomOut: () => null,
        }}
      />
    </section>
  );
}
