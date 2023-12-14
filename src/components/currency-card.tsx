import { CurrencyListItem } from "../types";

type CurrencyCardProps = CurrencyListItem & {
  baseCurrency: string;
};

export const CurrencyCard = ({
  baseCurrency,
  currency,
  exchangeRate: { middle },
  countries,
}: CurrencyCardProps) => {
  return (
    <div className="card is-flex p-5 mt-3 is-size-5 has-background-light has-text-weight-bold is-outlined">
      <div>{currency}</div>
      <div className="pl-5 is-flex-grow-1">
        {countries.map((country) => {
          return (
            <div
              key={country.flag}
              className="is-flex is-align-content-center is-align-items-center"
            >
              {country.flag && (
                <figure className="image" style={{ width: 24 }}>
                  <img src={`/flags/${country.flag}.png`} />
                </figure>
              )}
              <span className="pl-2">{country.name}</span>
            </div>
          );
        })}
      </div>
      <div>
        {middle} {baseCurrency}
      </div>
    </div>
  );
};
