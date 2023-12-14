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
  const copyToClipboard = () => {
    const url = location.href;
    const hashIndex = url.indexOf("#");
    const hasHash = hashIndex !== -1;
    const baseUrl = hasHash ? url.slice(0, hashIndex) : url;
    const finalUrl = `${baseUrl}#${currency}`;
    navigator.clipboard.writeText(finalUrl);
  };

  return (
    <div
      id={currency}
      className="card is-flex p-5 mt-3 is-size-5 has-background-light has-text-weight-bold is-outlined"
      onClick={copyToClipboard}
      style={{ cursor: "pointer" }}
    >
      <div style={{ width: 60 }}>{currency}</div>
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
        {middle.toFixed(3)}
        <span className="is-inline-block ml-5" style={{ width: 140 }}>
          {currency} / 1 {baseCurrency}
        </span>
      </div>
    </div>
  );
};
