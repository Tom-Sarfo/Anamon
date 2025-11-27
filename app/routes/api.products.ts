import type { Route } from "./+types/api.products";
import { mockProducts, getProductsByCategory } from "~/lib/products";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category");
  const products = getProductsByCategory(category || undefined);
  return Response.json({ products });
}

