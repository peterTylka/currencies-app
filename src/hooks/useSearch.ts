import { useEffect, useState } from "react";

const URL_SEARCH_PARAM = "search";

export const useSearch = (initialValue = "") => {
  const [searchValue, setSearchValue] = useState(initialValue);

  // handle searchValue setup on page load
  useEffect(() => {
    const url = new URL(location.href);
    const urlSearchParamValue = url.searchParams.get(URL_SEARCH_PARAM);
    if (urlSearchParamValue) {
      setSearchValue(urlSearchParamValue);
    }
  }, []);

  // show search value in the url
  useEffect(() => {
    const newUrl = new URL(location.href);
    const urlSearchParamValue = newUrl.searchParams.get(URL_SEARCH_PARAM);

    if (urlSearchParamValue !== searchValue) {
      if (searchValue === "") {
        newUrl.searchParams.delete(URL_SEARCH_PARAM);
      } else {
        newUrl.searchParams.set(URL_SEARCH_PARAM, searchValue);
      }

      history.replaceState({}, "", newUrl);
    }
  }, [searchValue]);

  return { searchValue, setSearchValue };
};
