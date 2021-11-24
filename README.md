# bug-tracker
A fully functional MERN stack CRUD application, where admins can report and assign bug issues to developers, while developers respond to the raised issues. 
Authentication was implemented with JWT token. Used Redux for state management and Material UI for building components. Implemented MVC model to files and folder structure.
- Admins can view, create, edit, delete and update the status(resolved/unresolved) of bug issues. They can also assign bugs to a particular developer.
- Developers can only view and respond to the bug issues they are assigned to.

client : https://bug-tracker-app-sylamsh.netlify.app/  
server : https://bug-tracker-sylamsh.herokuapp.com/

## Frontend Routes

`/` - [dashBoard](https://github.com/Sylamsh/bug-tracker/blob/main/frontend/src/Views/Pages/dashBoard.jsx)  
Dashboard of the number of bugs active and resolved. Accessible to both admins and developers.

`/viewBugs` - [viewBugs](https://github.com/Sylamsh/bug-tracker/blob/main/frontend/src/Views/Pages/viewBugs.jsx)  
Here all the bug cards can be viewed with different filters. These cards can be expanded to view more information.
- Admins have the option to edit/delete or delete their bugs.
- Developers can respond to their assigned bugs.
- Admins can choose resolve the bug one's the developer responds.
 
`/form` - [bugForm](https://github.com/Sylamsh/bug-tracker/blob/main/frontend/src/Views/Pages/bugForm.jsx)  
This form is **only accessible to admins**. The form is for both for creating and editing a bug. A [Markdown editor](https://github.com/uiwjs/react-md-editor) is provided for both "_steps to reproduce_" and "_details_" sections.

## Backend Routes

### [Bug Routes](https://github.com/Sylamsh/bug-tracker/blob/main/backend/Routes/bugRoutes.js)
| Route  | Request  | Method | Description |
| :----- |:-------- | :----- | :---------- |
| `/` | GET | getBugs | Fetch all bugs |
| `/` | POST | createBug | Add a new bug issue |
| `/:id` | PATCH | updateBug | Update an existing bug issue |
| `/:id` | DELETE | deleteBug | Delete an existing bug issue |
|`/:id/isResolved` | PATCH | resolveBug | Update the status of a bug to resolved or not |
| `/:id/devRespond` | PATCH | devRespond | Updates the bug with developer's response |

### [User Routes](https://github.com/Sylamsh/bug-tracker/blob/main/backend/Routes/userRoutes.js)
| Route  | Request  | Method | Description |
| :----- |:-------- | :----- | :---------- |
| `/signin` | POST | signin | Create a new user |
| `/signup` | POST | signup | Authenticates an existing user |
| `/dev` | GET | fetchDevs | Fetch all developer names |

## Tech stack

Frontend - React.js, Redux  
Backend - node.js, Express.js, Mongoose  
Database - MongoDB Atlas  
