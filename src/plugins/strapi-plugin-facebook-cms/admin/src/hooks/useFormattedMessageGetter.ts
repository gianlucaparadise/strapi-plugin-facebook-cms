import { useIntl } from "react-intl";

import type { TranslationKey } from "../types";
import getTrad from "../utils/getTrad";

export const useFormattedMessageGetter = () => {
  const { formatMessage } = useIntl();
  return (labelId: TranslationKey) => formatMessage({ id: getTrad(labelId) });
};
