import { Hello } from "./Features/Hello";
import { CatFact } from "./Features/CatFact";

const App = () => {
	return (
		<>
			<Hello name={"Daniel"} />
			<CatFact />
		</>
	);
};

export default App;
