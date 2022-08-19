import axios from "./axiosInstance";
import pluginId from "../pluginId";

export const getConfig = async () => {
  try {
    const response = await axios(`/${pluginId}/config`, { method: "GET" });
    return response.data;
  } catch (error) {
    console.error(`[${pluginId}] Error while fetching configs -`, error);
    throw error;
  }
};
