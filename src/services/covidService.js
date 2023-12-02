import { COVID_API } from "../config/constants";
import { logger } from "../utils/logger";
import { fakeList } from "./fakeData";

export const getStatusCountries = async () => {
  try {
    const response = await fetch(COVID_API);
    validationError(response);
    return response.json();
  } catch (error) {
    logger({ API_ERROR: error.message });
    return fakeList;
  }
};

/**
 * VALIDATION RESPONSE
 */
const validationError = (res) => {
  const { status } = res;
  if (res.ok) return; // status 200 ok

  const errorStatusMap = {
    503: "Service Unavailable",
  };

  const errorMessage = `${status} ${errorStatusMap[status] ?? ""}`;
  throw new Error(errorMessage);
};
