import { render,  queryByAttribute } from "@testing-library/react";
import Home from "../../app/page";
import "@testing-library/jest-dom";
import React from "react";
 
describe("At Home page ", () => {
	it("check if it is rendering correctly", () => {

		const getById = queryByAttribute.bind(null, "id");
		const dom = render(<Home />);
 
		const cardTitle = getById(dom.container, "card-title");
		expect(cardTitle).toBeInTheDocument();
	});
});