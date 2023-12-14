import { useEffect, useState } from "react";
import { CurrencyCard } from "./components";
import { CURRENCY_LIST } from "./constants";
import { useSearch } from "./hooks";

export function App() {
  const [currencies, setCurrencies] = useState(CURRENCY_LIST);
  const { searchValue, setSearchValue } = useSearch();

  useEffect(() => {
    setCurrencies({
      baseCurrency: CURRENCY_LIST.baseCurrency,
      fx: CURRENCY_LIST.fx.filter(({ currency }) =>
        currency.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ),
    });
  }, [searchValue]);

  return (
    <section className="section pt-0">
      <div className="container is-max-desktop">
        <header style={{ display: "initial" }}>
          <h1 className="has-background-black has-text-light pl-3 is-size-2">
            Currencies
          </h1>
          <div
            className="has-background-grey has-text-light pl-3 py-1"
            style={{ position: "sticky", top: 0, zIndex: 32000 }}
          >
            <label htmlFor="currency" className="is-size-5">
              Search
            </label>
            <input
              type="search"
              id="currency"
              className="is-size-5 ml-3"
              value={searchValue}
              onChange={(el) => {
                setSearchValue(el.target.value);
              }}
            />
          </div>
        </header>

        <main>
          {currencies.fx.map(({ countries, currency, exchangeRate }) => (
            <CurrencyCard
              key={currency}
              baseCurrency={currencies.baseCurrency}
              currency={currency}
              countries={countries}
              exchangeRate={exchangeRate}
            />
          ))}
        </main>
      </div>
    </section>
  );
}
