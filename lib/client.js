import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "ntz1ucxc",
    dataset: "production",
    apiVersion: "2023-01-07",
    useCdn: true,
    token: process.env.PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)