import React, { useState } from 'react';
import './paramEditor.css';

interface Param {
	id: number;
	name: string;
	type: string;
}

interface ParamValue {
	paramId: number;
	value: string;
}

interface Model {
	paramValues: ParamValue[];
}

interface Props {
	params: Param[];
	model: Model;
}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
	const [paramValues, setParamValues] = useState<ParamValue[]>(
		model.paramValues
	);

	const handleChange = (paramId: number, value: string) => {
		setParamValues((prevValues) =>
			prevValues.map((pv) => (pv.paramId === paramId ? { ...pv, value } : pv))
		);
	};

	const getModel = (): Model => {
		return { paramValues };
	};

	return (
		<div className="form">
			{params.map((param) => (
				<div key={param.id} className='input'>
					<label>{param.name}</label>
					<input
						type="text"
						value={
							paramValues.find((pv) => pv.paramId === param.id)?.value || ''
						}
						onChange={(e) => handleChange(param.id, e.target.value)}
					/>
				</div>
			))}
			<button onClick={() => console.log(getModel())}>Get Model</button>
		</div>
	);
};

export default ParamEditor;