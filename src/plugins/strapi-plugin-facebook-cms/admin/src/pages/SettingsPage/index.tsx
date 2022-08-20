/*
 *
 * SettingsPage
 *
 */

import React from "react";

import { Box } from "@strapi/design-system/Box";
import { HeaderLayout } from "@strapi/design-system/Layout";

import SettingsContainer from "./SettingsContainer";
import { useFormattedMessageGetter } from "../../hooks/useFormattedMessageGetter";

const SettingsPage = () => {
  const getFormattedMessage = useFormattedMessageGetter();
  const headerTitle = getFormattedMessage("settings-page.header.title");
  const headerSubtitle = getFormattedMessage("settings-page.header.subtitle");

  return (
    <>
      <Box background="neutral100">
        <HeaderLayout title={headerTitle} subtitle={headerSubtitle} as="h2" />
      </Box>
      <SettingsContainer />
    </>
  );
};

export default SettingsPage;
