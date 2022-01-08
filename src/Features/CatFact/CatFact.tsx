// An example of a reusable component using typescript
// import { useEffect, useState } from "react";

// Defines the type for the components props
// Here there is only one acceptable prop, name, which is optional as indicated by the ?
// It is defined as a string
// type HelloProps = {
// 	name?: string;
// };

// export const Hello = ({ name = "stranger" }: HelloProps = {}) => {
// 	return <p>Hello {name}!</p>;
// };

// export const catFactApi = async () => {
// 	return { fact: "test", length: 4 };
// };

export const CatFact = () => {
	// const [catFact, setCatFact] = useState("");

	// useEffect(() => {
		// catFactApi().then((res) => setCatFact(res.fact));
	// }, []);

	// if (catFact) return <h1>{catFact}</h1>;
	return <p>Loading...</p>;
};
