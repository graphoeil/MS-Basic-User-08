// Imports
import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

// Component
const App = () => {

	// Initial users
	const INITIAL_USERS = [
		{ id:1, name:'Cahouet', age:10 },
		{ id:2, name:'Jambon', age:8 },
		{ id:3, name:'Pataud', age:7 },
		{ id:4, name:'Mushi', age:11 }
	];

	// State
	const [users, setUsers] = useState(INITIAL_USERS);

	// Add new user
	const addNewUSer = (user) => {
		const newID = Math.random()*1000;
		setUsers((oldState) => {
			return [
				...oldState,
				{ id:newID, name:user.name, age:user.age }
			];
		});
	};

	// Return
	return(
		<React.Fragment>

			{/* Add new user */}
			<AddUser onAddUser={ addNewUSer }/>
			{/* Add new user */}

			{/* Users list */}
			<UsersList users={ users }/>
			{/* Users list */}

		</React.Fragment>
	);

};

// Export
export default App;