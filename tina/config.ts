import { defineConfig } from "tinacms";
import { concertFields } from "./templates";
import { photoselectionFields } from "./templates";
import { repertoireFields } from "./templates";
import { simplepageFields } from "./templates";
import { startseiteFields } from "./templates";
import { videoFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "440344f9-f1eb-4f6a-8588-db4ccd670ba2", // Get this from tina.io
  token: "73fe21ccd9e437be4ff304cf0987ac8b6078af5d", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        format: "toml",
        label: "Konfiguration der Seite",
        name: "konfiguration_der_seite",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "config",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Startseite (Deutsch)",
        name: "startseite__deutsch_",
        path: "content",
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...startseiteFields(),
        ],
      },
      {
        format: "md",
        label: "Startpage (English)",
        name: "startpage__english_",
        path: "content",
        match: {
          include: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...startseiteFields(),
        ],
      },
      {
        format: "md",
        label: "Events (Konzert, Deutsch)",
        name: "events__konzert__deutsch_",
        path: "content/events",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...concertFields(),
        ],
      },
      {
        format: "md",
        label: "Events (English)",
        name: "events__english_",
        path: "content/events",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...concertFields(),
        ],
      },
      {
        format: "md",
        label: "Photos (Deutsch)",
        name: "photos__deutsch_",
        path: "content/photos",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...photoselectionFields(),
        ],
      },
      {
        format: "md",
        label: "Photos (English)",
        name: "photos__english_",
        path: "content/photos",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...photoselectionFields(),
        ],
      },
      {
        format: "md",
        label: "Videos (Deutsch)",
        name: "videos__deutsch_",
        path: "content/videos",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...videoFields(),
        ],
      },
      {
        format: "md",
        label: "Videos (English)",
        name: "videos__english_",
        path: "content/videos",
        match: {
          include: "**/*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...videoFields(),
        ],
      },
      {
        format: "json",
        label: "Repertoire Data",
        name: "repertoire_data",
        path: "data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "repertoire",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Uncategorised Pages ( nicht kategorisierbare Seiten, Deutsch)",
        name: "uncategorised_pages___nicht_kategorisierbare_seiten__deutsch_",
        path: "content",
        match: {
          include: "*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...simplepageFields(),
        ],
      },
      {
        format: "md",
        label: "Uncategorised Pages (English)",
        name: "uncategorised_pages__english_",
        path: "content",
        match: {
          include: "*",
          exclude: "_index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...simplepageFields(),
        ],
      },
    ],
  },
});
