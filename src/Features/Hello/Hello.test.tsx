//Unit test example checks the functionality of an individual component

import { render, cleanup } from "@testing-library/react";
import { Hello } from "./Hello";

afterEach(cleanup);

//Here we are psduo rendering the Hello component without any props to make sure
//It still renders and behaves as expected
it("Should greet a stranger when no name is passed", () => {
	const { getByText } = render(<Hello />);

	expect(getByText(/Hello/i).textContent).toMatch(/stranger/);
});

//And then here we pass the prop and make sure it displays the passed in name
it("Should greet a user when a name is passed", () => {
	const name = "Daniel";
	const { getByText } = render(<Hello name={name} />);

	expect(getByText(/Hello/i).textContent).toMatch(new RegExp(name));
});
