import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layouts/home_layout.tsx", [
    index("routes/root/home_layout_indexPage.tsx"),

    // 👇 fallback route for anything unmatched
    route("*", "routes/pages/notFound.tsx"),
  ]),
] satisfies RouteConfig;
