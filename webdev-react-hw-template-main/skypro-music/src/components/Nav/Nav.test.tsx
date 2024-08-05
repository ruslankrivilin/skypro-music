import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Компонент навигации", () => {
  it("Должен рендерить логотип скайпро музыка", () => {
    render(<Nav />);
    const image = screen.getByAltText("логотип скайпро музыка");
    expect(image).toBeInTheDocument();
  });
});
