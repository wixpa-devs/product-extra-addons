import {
  Card,
  Stack,
  Text,
  TextContainer,
} from "@shopify/polaris";
import { useQuery } from "react-query";

export function ProductsCard() {
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productCount"],
    queryFn: async () => {
      const response = await fetch("/api/products/count");

      if (!response.ok) {
        throw new Error("Unable to load the Shopify product count.");
      }

      return response.json();
    },
    refetchOnWindowFocus: false,
  });

  let productCount = "Loading...";

  if (isError) {
    productCount = "Unable to load";
  } else if (!isLoading) {
    productCount = data?.count ?? 0;
  }

  return (
    <Card>
      <TextContainer spacing="loose">
        <Text variant="headingMd" as="h2">
          Application connection status
        </Text>

        <Stack vertical spacing="tight">
          <Text as="p">
            Embedded React application: Connected
          </Text>

          <Text as="p">
            Node.js and Express backend: Connected
          </Text>

          <Text as="p">
            Shopify authentication: Working
          </Text>

          <Text as="p">
            Shopify GraphQL Admin API: Working
          </Text>

          <Text as="p">
            Products currently in the development store:{" "}
            <strong>{productCount}</strong>
          </Text>
        </Stack>
      </TextContainer>
    </Card>
  );
}