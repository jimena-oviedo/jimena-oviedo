import { SlideImage } from "yet-another-react-lightbox/*";
import { AssetCollection, Maybe } from "./gql/graphql";

export type DeepOptional<T> = {
  [K in keyof T]?: DeepOptional<T[K]> | null;
};

export function slidesFromCollection(
  collection: DeepOptional<Maybe<AssetCollection | undefined>>
): SlideImage[] {
  const items =
    collection?.items?.filter(
      (
        slide
      ): slide is {
        url: string;
        width?: number;
        height?: number;
        title?: string;
      } => Boolean(slide && slide.url)
    ) ?? [];
  return items.map<SlideImage>((slide) => ({
    src: slide.url,
    width: slide.width ?? undefined,
    height: slide.height ?? undefined,
    alt: slide.title,
  }));
}
