// // Imports
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import ErrorModal from "../ui/ErrorModal";

// Component
const AddUser = (props) => {

	// Variables
	const { onAddUser } = props;

	// State
	const [formData, setFormData] = useState({
		username:'',
		age:''
	});
	const [error, setError] = useState();

	// Autofocus name input
	const inputRef = useRef();
	useEffect(() => {
		inputRef.current.focus();
	},[formData.username]);

	// Inputs change
	const handleChange = (e) => {
		setFormData((oldState) => {
			return {
				...oldState,
				[e.target.name]:e.target.value
			};
		});
	};

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		// Form valid ?
		if (formData.username.trim().length === 0 || formData.age.trim().length === 0){
			setError({
				title:'Invalid input',
				message:'Please enter a valid name and age (non-empty values).'
			});
			return;
		}
		if (Number(formData.age) < 1){
			setError({
				title:'Invalid age',
				message:'Please enter a valid age (> 0).'
			});
			return;
		}
		// Send to App
		onAddUser({
			name:formData.username,
			age:Number(formData.age)
		});
		// Reset
		setFormData({
			username:'',
			age:''
		});
	};

	// Close modal
	const closeModal = () => {
		setError();
	};

	// Return
	return(
		<React.Fragment>
			{
				error && <ErrorModal title={ error.title } message={ error.message } onCloseModal={ closeModal }/>
			}
			<Wrapper className="shadowBox" onSubmit={ handleSubmit }>
				<label htmlFor="username">Username</label>
				<input ref={ inputRef } type="text" name="username" id="username" value={ formData.username } onChange={ handleChange } />
				<label htmlFor="age">Age (Years)</label>
				<input type="number" name="age" id="age" value={ formData.age } onChange={ handleChange } />
				<Button type="submit">
					Add user
				</Button>
			</Wrapper>
		</React.Fragment>
	);

};

// Styled
const Wrapper = styled.form`
	margin: 2rem auto;
	padding: 1rem;
	width: 90%;
	max-width: 40rem;
	label{
		display: block;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	input{
		font: inherit;
		display: block;
		width: 100%;
		border: 1px solid #ccc;
		padding: 0.15rem;
		margin-bottom: 0.5rem;
		&:focus{
			outline: none;
			border-color: #4f005f;
		}
	}
`;

// Export
export default AddUser;