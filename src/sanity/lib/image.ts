// Image URL builder
import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(image: Image) {
  return builder.image(image).auto("format").fit("max");
}
