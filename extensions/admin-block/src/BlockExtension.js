import { extend, AdminBlock, BlockStack, Text } from "@shopify/ui-extensions/admin";

// The target used here must match the target used in the extension's toml file (./shopify.extension.toml)
extend("admin.product-details.block.render", (root, { extension: {target}, i18n, data }) => {
  console.log({data});
  root.appendChild(
    root.createComponent(
      AdminBlock,
      { summary: "3 items" },
      root.createComponent(BlockStack, null,
        root.createComponent(Text, { fontWeight: "bold" }, i18n.translate('welcome', {target}))
      )
    )
  );
});