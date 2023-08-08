import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Todo, Login } from "./pages/index";
import "./App.css";

const App = () => (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/login" Component={Login} />
				<Route path="/todo" Component={Todo} />
			</Routes>
		</BrowserRouter>
	</>
);
export default App;
