import { createElement } from "../src/";

describe("createElement", () => {
  it("Should create element without props", () => {
    expect(createElement("div", undefined)).toEqual("<div ></div>");
  });
  it("Should create element without children", () => {
    expect(createElement("div", { className: "teste" })).toEqual(
      '<div class-name="teste"></div>'
    );
  });
  it("Should create element successfully with one children", () => {
    const teste = createElement(
      "div",
      { className: "teste" },
      createElement("div", { className: "teste" }),
      createElement("div", { className: "teste" })
    );

    expect(teste).toEqual(
      '<div class-name="teste"><div class-name="teste"></div><div class-name="teste"></div></div>'
    );
  });
  it("Should create element successfully with many props", () => {
    expect(createElement("div", { className: "teste", id: 2 })).toEqual(
      '<div class-name="teste" id="2"></div>'
    );
  });
});
