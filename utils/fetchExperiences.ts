import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Experience } from "../typings";

const query = groq`
  *[_type == "experience"] | order(dateStarted desc) {
  // *[_type == "experience"] {
    ...,
    technologies[]->
  }
`;

export const fetchExperiences = async () => {
  const res = await await sanityClient.fetch(query);

  const experiences: Experience[] = res.map((item: Experience) => ({
    ...item,
    dateStarted: `${new Date(item.dateStarted).toLocaleString("en-GB", {
      month: "short",
    })}-${new Date(item.dateStarted).getUTCFullYear()}`,
    dateEnded: `${new Date(item.dateEnded).toLocaleString("en-GB", {
      month: "short",
    })}-${new Date(item.dateEnded).getUTCFullYear()}`,
  }));

  return experiences;
};
