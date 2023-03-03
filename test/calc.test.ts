import { createElement } from "../src/core";

describe("createElement", () => {
  it("Should create element without children", () => {
    expect(createElement("div", { className: "teste" })).toEqual(
      '<div className="teste"></div>'
    );
  });
  it("Should create element successfully with one children", () => {
    const teste = createElement(
      "div",
      { className: "teste" },
      createElement("div", { className: "teste" }),
      createElement("div", { className: "teste" })
    );

    console.log(teste);

    expect(teste).toEqual(
      '<div className="teste"><div className="teste"></div><div className="teste"></div></div>'
    );
  });
});
