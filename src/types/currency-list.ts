import { Country } from "./country";

export interface CurrencyListItem {
  currency: string;
  exchangeRate: {
    middle: number;
  };
  countries: Country[];
}

export interface CurrencyList {
  baseCurrency: string;
  fx: CurrencyListItem[];
}
