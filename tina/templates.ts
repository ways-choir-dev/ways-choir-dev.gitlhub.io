import type { TinaField } from "tinacms";
export function concertFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title (for forestry-overview)",
      required: true,
    },
    {
      type: "string",
      name: "page_title",
      label: "Überschrift der Website",
      required: true,
    },
    {
      type: "datetime",
      name: "publish_date",
      label: "Publish Datum",
    },
    {
      type: "object",
      name: "event",
      label: "Veranstaltungsdetails",
      fields: [
        {
          type: "datetime",
          name: "date",
          label: "Veranstaltungsdatum",
          required: true,
        },
        {
          type: "object",
          name: "location",
          label: "Veranstaltungsort",
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
            },
            {
              type: "string",
              name: "street",
              label: "Straße und Hausnummer",
            },
            {
              type: "string",
              name: "city",
              label: "Ort",
            },
          ],
        },
      ],
    },
    {
      type: "string",
      name: "tags",
      label: "Suchworte",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "image",
      name: "banner",
      label: "Bannerbild",
    },
    {
      type: "image",
      name: "listimg",
      label: "Listenbild",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
    {
      type: "string",
      name: "categories",
      label: "Kategorien",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "type",
      label: "Type",
      required: true,
    },
  ] as TinaField[];
}
export function photoselectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title (for forestry-overview)",
      required: true,
    },
    {
      type: "string",
      name: "page_title",
      label: "Überschrift der Photokollektion",
      required: true,
    },
    {
      type: "string",
      name: "summary",
      label: "Kurzzusammenfassung der Foto-Kollektion",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "photo_collection",
      label: "Photo Collection",
      list: true,
    },
    {
      type: "string",
      name: "ref_tag",
      nameOverride: "ref-tag",
      label: "Tag Referenz",
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
  ] as TinaField[];
}
export function repertoireFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title (for forestry-overview)",
      required: true,
    },
    {
      type: "string",
      name: "page_title",
      label: "Überschrift der Website",
      required: true,
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
  ] as TinaField[];
}
export function simplepageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title (for forestry-overview)",
      required: true,
    },
    {
      type: "string",
      name: "page_title",
      label: "Überschrift der Website",
      required: true,
    },
    {
      type: "datetime",
      name: "publish_date",
      label: "Publish Datum",
    },
    {
      type: "boolean",
      name: "draft",
      label: "Draft",
    },
    {
      type: "image",
      name: "banner",
      label: "Bannerbild",
    },
    {
      type: "string",
      name: "description",
      label: "Kurze Beschreibung",
    },
    {
      type: "string",
      name: "tags",
      label: "Suchworte",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "disclaimer",
      label: "Disclaimer",
    },
  ] as TinaField[];
}
export function startseiteFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title (for forestry-overview)",
      required: true,
    },
    {
      type: "string",
      name: "page_title",
      label: "Überschrift der Website",
      required: true,
    },
    {
      type: "string",
      name: "page_sub_title",
      label: "Unter-Überschrift",
    },
    {
      type: "image",
      name: "welcome_img",
      label: "Startseiten-Bild",
    },
    {
      type: "string",
      name: "sidebar_content",
      label: "Inhalt der About-Sidebar",
      ui: {
        component: "textarea",
      },
    },
  ] as TinaField[];
}
export function videoFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title (for forestry-overview)",
      required: true,
    },
    {
      type: "string",
      name: "page_title",
      label: "Überschrift des Videos",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Kurze Beschreibung",
    },
    {
      type: "number",
      name: "weight",
      label: "Gewichtung des Videos",
    },
    {
      type: "string",
      name: "tags",
      label: "Suchworte",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "videoid",
      label: "VimeoID oder YouTubeID des Videos",
    },
    {
      type: "string",
      name: "video_provider",
      label: "Video Provider",
      options: ["Vimeo", "YouTube"],
    },
    {
      type: "string",
      name: "type",
      label: "type",
    },
  ] as TinaField[];
}
