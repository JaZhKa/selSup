import ParamEditor from './components/paramEditor';
import './App.css';

const params = [
	{ id: 1, name: 'Назначение', type: 'string' },
	{ id: 2, name: 'Длина', type: 'string' },
];

const model = {
	paramValues: [
		{ paramId: 1, value: 'повседневное' },
		{ paramId: 2, value: 'макси' },
	],
};

function App() {
	return (
		<div className="App">
			<h1>Param Editor</h1>
			<ParamEditor
				params={params}
				model={model}
			/>
		</div>
	);
}

export default App;
