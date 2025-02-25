import './Form.scss';
import {useState} from 'react';

const Form = () => {
	const [value, setValue] = useState('');
	const [age, setAge] = useState(0);

	return (
		<>
			<label htmlFor="input">
				<input
					type="text"
					name="input"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</label>
			<fieldset onChange={(e) => setAge(e.target.age)}>
				<legend>Select one:</legend>
				<div>
					<input type="radio" id="1" name="age-group" value="0-20"/>
					<label htmlFor="1">0-20</label>
				</div>
				<div>
					<input type="radio" id="2" name="age-group" value="21-40"/>
					<label htmlFor="2">21-40</label>
				</div>
				<div>
					<input type="radio" id="3" name="age-group" value="41-60"/>
					<label htmlFor="3">41-60</label>
				</div>
				<div>
					<input type="radio" id="4" name="age-group" value=">60"/>
					<label htmlFor="4">60-60</label>
				</div>
			</fieldset>

			{value !== '' && <p>Name: {value}</p>}
			{age !== 0 && <p>Age: {age - group}</p>}
		</>
	);
};

// Show Active/Selected radio button

export default Form;