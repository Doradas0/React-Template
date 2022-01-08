// An example of a reusable component using typescript
//
// Defines the type for the components props
// Here there is only one acceptable prop, name, which is optional as indicated by the ?
// It is defined as a string
type HelloProps = {
	name?: string;
};

export const Hello = ({ name = "stranger" }: HelloProps = {}) => {
	return <p>Hello {name}!</p>;
};
