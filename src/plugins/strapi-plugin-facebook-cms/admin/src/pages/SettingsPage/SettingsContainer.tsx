import React, { useEffect, useState } from "react";

import { Box } from "@strapi/design-system/Box";
import { Stack } from "@strapi/design-system/Stack";
import { FieldLabel, FieldInput, FieldHint } from "@strapi/design-system/Field";
import { Loader } from "@strapi/design-system/Loader";
import { Flex } from "@strapi/design-system/Flex";

import ExternalLink from "../../components/ExternalLink";
import BoxField from "./BoxField";
import { useFormattedMessageGetter } from "../../hooks/useFormattedMessageGetter";
import { getConfig } from "../../utils/api";
import type { GetConfigResponse } from "../../../../types";
import type { ApiError } from "../../types";

type Config = GetConfigResponse["data"];

const SettingsContainer: React.FC = () => {
  const getFormatterMessage = useFormattedMessageGetter();
  const apiKeyPlaceholder = getFormatterMessage(
    "settings-page.api-key.placeholder"
  );
  const labelLoader = getFormatterMessage(
    "settings-page.settings-container.loader"
  );

  const [apiError, setApiError] = useState<ApiError | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const [pluginConfig, setPluginConfig] = useState<Config>({});

  useEffect(() => {
    getConfig()
      .then((response) => {
        setPluginConfig(response.data);
      })
      .catch((error) => {
        console.error(
          "[facebook-cms] error while retrieving plugin config",
          error
        );
        setPluginConfig({});
        if (error && error.response && error.response.status === 403) {
          setApiError("FORBIDDEN");
        } else {
          setApiError("GENERIC_ERROR");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsLoading, setPluginConfig, setApiError]);

  const apiKey = pluginConfig.apiKeyPartial
    ? `${pluginConfig.apiKeyPartial}[...]`
    : "";

  if (isLoading) {
    return (
      <Flex justifyContent="center">
        <Loader>{labelLoader}</Loader>
      </Flex>
    );
  }

  if (apiError) {
    return (
      <Box padding={8} background="neutral100">
        {/* TODO: add empty state */}
        {apiError}
      </Box>
    );
  }

  return (
    <>
      <BoxField
        fieldName="facebook-cms-api-key"
        fieldHint={
          <>
            {getFormatterMessage("settings-page.api-key.learn-more-intro")}
            {/* TODO: fix this link */}
            <ExternalLink href="https://facebook.com/account/tokens">
              {getFormatterMessage(
                "settings-page.api-key.learn-more-link-text"
              )}
            </ExternalLink>
          </>
        }
      >
        <Stack>
          <FieldLabel required>
            {getFormatterMessage("settings-page.api-key.label")}
          </FieldLabel>
          <FieldInput
            type="text"
            placeholder={apiKeyPlaceholder}
            value={apiKey}
            disabled={true}
          />
          <FieldHint />
        </Stack>
      </BoxField>
    </>
  );
};

export default SettingsContainer;
