import React, { useState } from "react";

function Login(props) {
	const username = useFormInput("");
	const password = useFormInput("");

	// handle button click of login form
	const handleLogin = () => {
		// props.history.push("/");
		window.location.replace("http://localhost:3000/");
	};

	return (
		<div>
			Login
			<br />
			<br />
			<div>
				Username
				<br />
				<input type='text' {...username} />
			</div>
			<div style={{ marginTop: 10 }}>
				Password
				<br />
				<input type='password' {...password} />
			</div>
			<br />
			<input type='button' value='Login' onClick={handleLogin} />
			<br />
		</div>
	);
}

const useFormInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	return {
		value,
		onChange: handleChange,
	};
};

export default Login;
