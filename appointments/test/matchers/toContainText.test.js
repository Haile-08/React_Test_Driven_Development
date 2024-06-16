import {
  matcherHint,
  printExpected,
} from "jest-matcher-utils";

const stripTerminalColor = (text) => text.replace(/\x1B\[\d+m/g, "");

export const toContainText = (
    received,
    expectedText
  ) => {
    const pass = received.textContent.includes(expectedText);
    const message = () =>
      matcherHint(
        "toContainText",
        "element",
        printExpected(expectedText),
        { }
      );

    return { pass, message };
};