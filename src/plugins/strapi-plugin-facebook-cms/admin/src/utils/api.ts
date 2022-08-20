import axios from "./axiosInstance";
import pluginId from "../pluginId";
import type { GetConfigResponse } from "../../../types";

export const getConfig = async () => {
  try {
    const response = await axios.get<GetConfigResponse>(`/${pluginId}/config`);
    return response.data;
  } catch (error) {
    console.error(`[${pluginId}] Error while fetching configs -`, error);
    throw error;
  }
};
