//Unit test example checks the functionality of an individual component

import { render, cleanup, waitFor } from "@testing-library/react";
import { CatFact } from "./CatFact";

afterEach(cleanup);

const testData = {
	fact: "A cat can spend five or more hours a day grooming himself.",
	length: 58,
};

it("Should call the cat fact api", async () => {
	const { getByRole } = render(<CatFact />);

});
