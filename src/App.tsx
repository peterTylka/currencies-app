import { useEffect, useState } from "react";
import { CurrencyCard } from "./components";
import { CURRENCY_LIST } from "./constants";

export function App() {
  const [currencies, setCurrencies] = useState(CURRENCY_LIST);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setCurrencies({
      baseCurrency: CURRENCY_LIST.baseCurrency,
      fx: CURRENCY_LIST.fx.filter(({ currency }) =>
        currency.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ),
    });
  }, [searchValue]);

  return (
    <>
      <section className="section is-mobile pt-0">
        <div className="container">
          {/* HEADER */}
          <header>
            <h1 className="has-background-black has-text-light pl-3 is-size-2">
              Currencies
            </h1>
            <div className="has-background-grey has-text-light pl-3 py-1">
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
    </>
  );
}
