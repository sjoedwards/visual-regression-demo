import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  console.log = jest.fn();
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Lace Up/i);
  expect(linkElement).toBeInTheDocument();
});
