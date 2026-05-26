import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "mayen-legacy",
  title: "Mayen Legacy — Studio",

  projectId: "pf010nyp",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Contenido")
          .items([
            S.listItem()
              .title("✦ ESSENTIA — Blog")
              .child(
                S.documentList()
                  .title("Posts ESSENTIA")
                  .filter('_type == "blogPost" && brand == "essentia"')
              ),
            S.listItem()
              .title("💧 AlkaliNation — Blog")
              .child(
                S.documentList()
                  .title("Posts AlkaliNation")
                  .filter('_type == "blogPost" && brand == "alkalination"')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() === "blogPost"
            ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
