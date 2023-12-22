import { COVID_API } from "@/settings";
import { logger } from "@/utils";
import { fakeList } from "./fakeData";


export interface CountryDataApi {
  countryregion: string;
  lastupdate: string; //
  location: Location;
  countrycode?: Countrycode;
  confirmed: number;
  deaths: number;
  recovered?: number;
}

export interface Countrycode {
  iso2: string;
  iso3: string;
}

export interface Location {
  lat: number;
  lng: number;
}

export const getStatusCountries = async (): Promise<CountryDataApi[]> => {
  try {
    const response = await fetch(COVID_API);
    validationError(response);
    return response.json() as Promise<CountryDataApi[]>;
  } catch (error) {
    if ((error instanceof Error)) {
      logger({ API_ERROR: error.message });
    }
    return fakeList;
  }
};


interface IStatusMap {
  [key: string]: string;
}
/**
 * VALIDATION RESPONSE
 */
const validationError = (res: Response) => {
  const { status } = res;
  if (res.ok) return; // status 200 ok

  const errorStatusMap: IStatusMap = {
    503: "Service Unavailable",
  };

  const errorMessage = `${status} ${errorStatusMap[status] ?? ""}`;
  throw new Error(errorMessage);
};
