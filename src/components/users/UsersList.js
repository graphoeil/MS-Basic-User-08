// Imports
import React from "react";
import styled from "styled-components";

// Component
const UsersList = ({ users }) => {

	// Return
	return(
		<Wrapper className="shadowBox">
			{
				users.map((user) => {
					return(
						<li key={ user.id }>{ user.name } ({ user.age } year's old)</li>
					);
				})
			}
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.ul`
	margin: 2rem auto;
	width: 90%;
	max-width: 40rem;
	list-style: none;
	padding: 1rem;
	li{
		border: 1px solid #ccc;
		margin: 0.5rem 0;
		padding: 0.5rem;
	}
`;

// Export
export default UsersList;