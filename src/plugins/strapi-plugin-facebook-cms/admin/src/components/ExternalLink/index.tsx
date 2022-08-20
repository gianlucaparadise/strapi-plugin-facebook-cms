/**
 *
 * ExternalLink
 *
 */

import React from "react";

import { Link } from "@strapi/design-system/Link";

export type Props = {
  href: string;
  children: React.ReactNode;
};

const ExternalLink: React.FC<Props> = ({ href, children }) => {
  return (
    <span style={{ marginRight: "0.5em", marginLeft: "0.3em" }}>
      <Link isExternal href={href}>
        {children}
      </Link>
    </span>
  );
};

export default ExternalLink;
