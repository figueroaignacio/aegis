import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout/layout.tsx", [
    layout("./layout/lobby-layout.tsx", [route("/", "routes/home.tsx")]),
    ...prefix("auth", [
      layout("./layout/auth-layout.tsx", [
        route("login", "./routes/login.tsx"),
      ]),
    ]),
    layout("./layout/dashboard-layout.tsx", [
      route("/dashboard", "./routes/dashboard.tsx"),
      ...prefix("/vault", [
        index("./routes/vaults.tsx"),
        route("/:id", "./routes/vault-details.tsx"),
        route("/create-vault", "./routes/create-vault.tsx"),
      ]),
      route("/settings", "./routes/settings.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
