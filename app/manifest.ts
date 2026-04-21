import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Md Abu Sufian — Portfolio",
    short_name: "Sufian",
    description:
      "Md Abu Sufian — Senior full-stack developer shipping AI-native products.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ee",
    theme_color: "#0e0e10",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
