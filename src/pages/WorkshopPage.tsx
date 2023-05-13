import { gql, useQuery } from "@apollo/client";
import { useMemo, useState } from "react";
import { HiSquare2Stack } from "react-icons/hi2";
import { Lightbox } from "yet-another-react-lightbox";
import { WorkshopGalleryQueryDocument } from "../gql/graphql";
import { AssetCollection, slidesFromCollection } from "../utils";
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
  slider: { slidesCollection?: AssetCollection | null };
}

// https://www.contentful.com/developers/docs/references/images-api
const IMG_THUMBNAIL_PARAMS = "?fm=webp&w=400&h=400&fit=fill&q=80";
const IMG_CAROUSEL_PARAMS = "?fm=webp&w=1400&q=80";

function LightboxImage({ slider }: LightboxImageProps) {
  const [open, setOpen] = useState(false);
  const first = slider.slidesCollection?.items?.[0];

  const slides = useMemo(() => {
    return slidesFromCollection(slider?.slidesCollection, {
      params: IMG_CAROUSEL_PARAMS,
      imageFit: "contain",
    });
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
          src={`${first.url}${IMG_THUMBNAIL_PARAMS}`}
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
  const { data, error, loading } = useQuery(WorkshopGalleryQueryDocument);
  if (loading) return <Loading />;
  if (error)
    return <pre className="text-red-600">{JSON.stringify(error, null, 2)}</pre>;
  return (
    <section className="grid grid-cols-3 gap-4">
      {data?.gallery?.photoSlidersCollection?.items.map((slider) =>
        slider ? <LightboxImage key={slider.sys.id} slider={slider} /> : null
      )}
    </section>
  );
}
