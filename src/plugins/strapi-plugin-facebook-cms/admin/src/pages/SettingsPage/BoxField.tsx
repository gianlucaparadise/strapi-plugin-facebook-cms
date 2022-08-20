import React from "react";

import { Box } from "@strapi/design-system/Box";
import { Field } from "@strapi/design-system/Field";

type Props = {
  fieldName: string;
  fieldHint: React.ReactNode;
  children: React.ReactNode;
};

const BoxField: React.FC<Props> = ({ fieldName, fieldHint, children }) => {
  const horizontalPadding = 10;
  const verticalPadding = 2;
  return (
    <Box
      paddingLeft={horizontalPadding}
      paddingRight={horizontalPadding}
      paddingTop={verticalPadding}
      paddingBottom={verticalPadding}
    >
      <Field name={fieldName} hint={fieldHint}>
        {children}
      </Field>
    </Box>
  );
};

export default BoxField;
