import {
  Card,
  Layout,
  Page,
  Text,
  TextContainer,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { ProductsCard } from "../components";

export default function HomePage() {
  return (
    <>
      <TitleBar title="Product Extra Add-ons" />

      <Page
        title="Product Extra Add-ons"
        subtitle="Create and manage custom product option groups, add-ons, and pricing."
      >
        <Layout>
          <Layout.Section>
            <Card>
              <TextContainer spacing="loose">
                <Text variant="headingMd" as="h2">
                  Phase 1 — Application foundation
                </Text>

                <Text as="p">
                  The basic Shopify application connection is working.
                  The React frontend communicates with the Express backend,
                  and the backend can securely request store data from the
                  Shopify GraphQL Admin API.
                </Text>

                <Text as="p">
                  The product add-on builder will be developed in the next
                  phases.
                </Text>
              </TextContainer>
            </Card>
          </Layout.Section>

          <Layout.Section>
            <ProductsCard />
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
}