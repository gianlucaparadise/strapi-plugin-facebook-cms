/*
 *
 * SettingsPage
 *
 */

import React, { useEffect } from "react";
import pluginId from "../../pluginId";
import { getConfig } from "../../utils/api";

const SettingsPage: React.FunctionComponent = () => {
  useEffect(() => {
    getConfig().then(console.log).catch(console.log);
  }, []);
  return (
    <div>
      <h1>{pluginId}&apos;s Settings Page</h1>
      <p>Happy coding</p>
    </div>
  );
};

export default SettingsPage;
