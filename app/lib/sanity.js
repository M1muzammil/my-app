
import { createClient } from "@sanity/client";
export const client = createClient({
  projectId: "3jq541cx",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});