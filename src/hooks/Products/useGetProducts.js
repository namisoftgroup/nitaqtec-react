import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../apiServices/apiProducts";
import { useSearchParams } from "react-router-dom";

export function useGetProducts() {
  const [searchParams] = useSearchParams();
  const products = searchParams.get("products");

  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(products),
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  return { products: data, isLoading, error };
}
