/*
 *
 * EmptyState
 *
 */

import React, { memo } from "react";

import { EmptyStateLayout } from "@strapi/design-system/EmptyStateLayout";
import EmotionUnhappy from "@strapi/icons/EmotionUnhappy";

import { useFormattedMessageGetter } from "../../hooks/useFormattedMessageGetter";
import type { TranslationKey } from "../../types";

type EmptyStateType = "ERROR_CONFIG" | "ERROR_AVAILABILITY_FORBIDDEN";

type Props = {
  type: EmptyStateType;
};

const wrapIcon = (icon: React.ReactNode) => (
  <div style={{ fontSize: "6rem" }}>{icon}</div>
);

const getIcon = (listDeployAvailability: EmptyStateType) => {
  switch (listDeployAvailability) {
    case "ERROR_AVAILABILITY_FORBIDDEN":
    case "ERROR_CONFIG":
    default:
      return wrapIcon(<EmotionUnhappy />);
  }
};

const getTextId = (listDeployAvailability: EmptyStateType): TranslationKey => {
  switch (listDeployAvailability) {
    case "ERROR_AVAILABILITY_FORBIDDEN":
      return "empty-state.error-forbidden";

    case "ERROR_CONFIG":
      return "empty-state.error-config";

    default:
      return "empty-state.default";
  }
};

const EmptyState: React.FC<Props> = ({ type }) => {
  const getFormattedMessage = useFormattedMessageGetter();

  const messageId = getTextId(type);
  const message = getFormattedMessage(messageId);

  return <EmptyStateLayout icon={getIcon(type)} content={message} />;
};

export default memo(EmptyState);
