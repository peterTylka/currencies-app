import { expect, it, describe, afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { App } from "../App";

describe("useSearch", () => {
  afterEach(() => {
    cleanup();
  });

  it("should return a default search term", () => {
    // @ts-expect-error should work
    delete window.location;
    // @ts-expect-error should work
    window.location = { href: "http://localhost:3000/" };

    const { getByLabelText } = render(<App />);
    // @ts-expect-error should work
    expect(getByLabelText("Search").value).toBe("");
  });

  it("should return search term from url", () => {
    // @ts-expect-error should work
    delete window.location;
    // @ts-expect-error should work
    window.location = { href: "http://localhost:3000/?search=eur" };

    const { getByLabelText } = render(<App />);
    // @ts-expect-error should work
    expect(getByLabelText("Search").value).toBe("eur");
  });
});
