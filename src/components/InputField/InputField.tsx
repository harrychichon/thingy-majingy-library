import {useState} from 'react';
import './InputField';

const InputField = () => {
	const [value, setValue] = useState('');

	return (
		<>
			<label>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</label>
			{value !== '' && <p>You typed: {value}</p>}
		</>
	);
};

export default InputField;