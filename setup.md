# React

```bash
# Creates a React JavaScript based project named users
npx create-react-app users
cd users
# Open the project in VS Code Editor
code .
# Run the App
yarn start
```

# Cleanup CLI Generated React project

```bash
cd users
cd src
rm -rf logo.svg reportWebVitals.js setupTests.js App.test.js
```

```js
// PATH: src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

```css
/* PATH: src/index.css */
```

```css
/* PATH: src/App.css */
```

```js
// PATH: src/App.js
import React from 'react'
import './App.css'

function App() {
  return <div className="App">Hello World</div>
}

export default App
```

# Adding Relevant packages

## Bootstrap

```bash
cd users
# add Bootstrap to our project: Styling framework
yarn add bootstrap
```

```js
// PATH: src/App.js
import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return <div className="App">Hello World</div>
}

export default App
```

## React Router DOM

```bash
yarn add react-router-dom
```

```js
// PATH: src/App.js
import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Navbar from './components/layout/Navbar'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './components/pages/Home'
// import About from './components/pages/About'
// import Contact from './components/pages/Contact'

function App() {
  // return (
  //   <Router>
  //     <div className="App">
  //       <Navbar />
  //       <Switch>
  //         <Route exact path="/" component={Home} />
  //         <Route exact path="/about" component={About} />
  //         <Route exact path="/contact" component={Contact} />
  //       </Switch>
  //     </div>
  //   </Router>
  // )

  return <div className="App">Hello World</div>
}

export default App
```

# Create React Folder Structure

```bash
cd users
cd src
mkdir components
cd components

# Create files for 3 different components
mkdir pages
cd pages
touch Home.js
touch Contact.js
touch About.js
touch NotFound.js

# Navigate back to root directory
cd ..
cd ..
cd ..
```

```js
// PATH: src/components/pages/Home.js
import React from 'react'

export const Home = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default Home
```

```js
// PATH: src/components/pages/Contact.js
import React from 'react'

export const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Page</h1>
      </div>
    </div>
  )
}

export default Contact
```

```js
// PATH: src/components/pages/About.js
import React from 'react'

export const About = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>About Page</h1>
      </div>
    </div>
  )
}

export default About
```

```js
// PATH: src/components/pages/NotFound.js
import React from 'react'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="display-1">Page Not Found</h1>
    </div>
  )
}

export default NotFound
```

```css
/* PATH: src/App.css */
.not-found {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
}
```

# Create Navbar: To Navigate to different pages

```bash
cd users
cd src/components/layout

touch Navbar.js

cd ..
cd ..
cd ..
```

https://getbootstrap.com/docs/4.0/components/navbar/

```js
// PATH: src/components/layout/Navbar.js
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a class="navbar-brand" href="#">
            React Users
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
```

```js
// PATH: src/App.js
import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
```

# Modify Navbar to use the benefits of Single Page Application

- Use `<Link />` from `react-router-dom` package in place of `<a></a>` tag.
- This stops reloading everytime there is a change in navigation.

```js
// PATH: src/components/layout/Navbar.js
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link class="navbar-brand" to="#">
            React Users
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
```

- Replace Link with NavLink
- Replace `class` attribute with `className`

```js
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="#">
            React Users
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
```

## JSON-Server installation: Only needed to create a Fake API(If you have real API json-server is not required)

```bash
yarn add json-server

# Create a fake database file in the root directory
cd users
touch db.json
```

```json
// Copy the data in users typicodeplaceholder
// https://jsonplaceholder.typicode.com/users

// PATH: users/db.json

{
  "users": [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "username": "Karianne",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "street": "Hoeger Mall",
        "suite": "Apt. 692",
        "city": "South Elvis",
        "zipcode": "53919-4257",
        "geo": {
          "lat": "29.4572",
          "lng": "-164.2990"
        }
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery",
        "catchPhrase": "Multi-tiered zero tolerance productivity",
        "bs": "transition cutting-edge web services"
      }
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
          "lat": "-31.8129",
          "lng": "62.5342"
        }
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
      }
    },
    {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
          "lat": "-71.4197",
          "lng": "71.7478"
        }
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
      }
    },
    {
      "id": 7,
      "name": "Kurtis Weissnat",
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "street": "Rex Trail",
        "suite": "Suite 280",
        "city": "Howemouth",
        "zipcode": "58804-1099",
        "geo": {
          "lat": "24.8918",
          "lng": "21.8984"
        }
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group",
        "catchPhrase": "Configurable multimedia task-force",
        "bs": "generate enterprise e-tailers"
      }
    },
    {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "address": {
        "street": "Ellsworth Summit",
        "suite": "Suite 729",
        "city": "Aliyaview",
        "zipcode": "45169",
        "geo": {
          "lat": "-14.3990",
          "lng": "-120.7677"
        }
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group",
        "catchPhrase": "Implemented secondary concept",
        "bs": "e-enable extensible e-tailers"
      }
    },
    {
      "id": 9,
      "name": "Glenna Reichert",
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "street": "Dayna Park",
        "suite": "Suite 449",
        "city": "Bartholomebury",
        "zipcode": "76495-3109",
        "geo": {
          "lat": "24.6463",
          "lng": "-168.8889"
        }
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons",
        "catchPhrase": "Switchable contextually-based project",
        "bs": "aggregate real-time technologies"
      }
    },
    {
      "id": 10,
      "name": "Clementina DuBuque",
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "street": "Kattie Turnpike",
        "suite": "Suite 198",
        "city": "Lebsackbury",
        "zipcode": "31428-2261",
        "geo": {
          "lat": "-38.2386",
          "lng": "57.2232"
        }
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC",
        "catchPhrase": "Centralized empowering task-force",
        "bs": "target end-to-end models"
      }
    }
  ]
}
```

```json
// package.json

{
  ....

  "scripts": {
    ....
    "json-server": "json-server --watch db.json --port 3003"
  }

  ....
}
```

```bash
# Run Fake API on port number 3003
yarn json-server

# This API Can be used to create CRUD Operations
```

# Client Side API Request to server using Axios package(Very Important)

```bash
# Add this package to get data from server
yarn add axios

cd users
cd src
mkdir utils
cd utils
touch httpClient.js
```

```js
// PATH: src/utils/httpClient.js
import axios from 'axios'

const defaultConfig = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 1000, // indicates, 1000ms ie. 1 second
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

// const getAuthToken = () => 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYXZpa2lyYW4iLCJpYXQiOjE1ODU3MzM2MTZ9.PFVnbKiTlW72UY_mlDiqZ_Ize4OqJcA-6gCZvlxTyKpJuHoYFZ-L6hn3RxkIxcdJXtsg_pZbQVB4QbN64RwL5w'
const getAuthToken = () => localStorage.getItem('token')

const authInterceptor = (config) => {
  config.headers['Authorization'] = getAuthToken()
  return config
}

const httpClient = axios.create(defaultConfig)

/**
 * Request Interceptor
 */

httpClient.interceptors.request.use(authInterceptor)

/**
 * Response Interceptor
 */

export default httpClient
```

```bash
cd users
touch .env
```

- `.env` file in root directory

```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_BASE_API_URL='http://localhost:3003'
```

- Simple Http Request

```js
// PATH: src/components/Home.js
import React, { useState, useEffect } from 'react'
import httpClient from '../utils/httpClient'

export const Home = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await httpClient.get(`users`)
    console.log(result)
    // .reverse(): newest data added to the array gets displayed first
    setUser(result.data.reverse())
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default Home
```

- List name, username, email in a datatable and Action: View, Edit and Delete

```js
// PATH: src/components/Home.js
import React, { useState, useEffect } from 'react'
import httpClient from '../utils/httpClient'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await httpClient.get(`users`)
    console.log(result)
    setUser(result.data.reverse())
  }
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                      View
                    </Link>
                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
                      Edit
                    </Link>
                    <Link className="btn btn-outline-danger" to="#">
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
```

## Add User Component

```js
// PATH: src/components/layout/Navbar.js
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="#">
            React Users
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newly added: Add User Button */}
          <NavLink className="btn btn-outline-light" exact to="/users/add">
            Add User
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
```

## UI Implementation

- Add User Component
- View User Component
- Edit User Component
- Delete User Component

```bash
cd users
cd src/components
mkdir users
cd users

touch AddUser.js
touch EditUser.js
touch User.js
```

```js
// PATH: src/components/users/AddUser.js
import React from 'react'

const AddUser = () => {
  return <div>Add user</div>
}

export default AddUser
```

```js
// PATH: src/components/users/EditUser.js
import React from 'react'

const EditUser = () => {
  return <div>Edit user</div>
}

export default EditUser
```

```js
// PATH: src/components/users/User.js
import React from 'react'

const User = () => {
  return <div>View user</div>
}

export default User
```

- Register the components in Routes `App.js` file

```js
// PATH: src/App.js
import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'
import AddUser from './components/users/AddUser'
import EditUser from './components/users/EditUser'
import User from './components/users/User'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />

          {/* Newly added routes */}
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
```

## Add User Component

1. Write HTML for the required form to collect information as below

- name
- username
- email
- phone
- website

```js
// PATH: src/components/users/AddUser.js
import React from 'react'

const AddUser = () => {
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser
```

2. Capture the DOM(Document Object Model state) to Javascript variable using useState

- Below is the object to capture form state: Any update in the variable is not shown in the UI

  ```js
  let user = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  }
  ```

- In React we shall use `useState` method: Whenever the state of the variable changes it re-renders to update in the dom

  ```js
  // Set Initial value to user variable
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  })
  ```

- Connect DOM State to Javascript state

  ```js
  import React, { useState } from 'react'

  const AddUser = () => {
    const [user, setUser] = useState({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    })

    const { name, username, email, phone, website } = user
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                value={website}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    )
  }

  export default AddUser
  ```

- Form is ready to capture the state and submit to the server

  - Here we shall use POST request
  - `user` variable shall become the payload

  ```js
  /**
     * Ask the backend person the pattern for payload
     * If the backend person asks for payload as below
     * {
     *    name: '',
     *    username: '',
     *    email: '',
     *    phone: '',
     *    website: ''
     * }
     * store it in a variable and send it to the backend as below
     *
     * a) POST request with Empty payload
     * let user = {}
     * const onSubmit = async (e) => {
     *   e.preventDefault()
     *   await axios.post('users', user)
     * }
     *
     * b) POST request with payload
     * let user = {
     *    name: 'Varun',
     *    username: 'varun',
     *    email: 'bsvarun@gmail.com',
     *    phone: '112348546848',
     *    website: 'https://www.varun.com'
     * }
     * const onSubmit = async (e) => {
     *   e.preventDefault()
     *   await axios.post('users', user)
     * }
     * 
     * c) GET request: Accepts only params, it doesnot have payload
     *  Example: GET Request without params
     *
     *  export const Home = () => {
     *    useEffect(() => {
     *       loadUsers()
     *    }, [])
     *
     *    const loadUsers = async () => {
     *      const result = await httpClient.get(`users`)
     *      console.log(result)
     *      setUser(result.data)
     *    }
     *   
     *    return <div></div>
     *  }
     *
     *
     *  Example: GET Request with params
     *
     *  export const Home = () => {
     *    useEffect(() => {
     *       loadUsers()
     *    }, [])
     *
     *    const loadUsers = async (id) => {
     *      const result = await httpClient.get(`users/${id}`)
     *      console.log(result)
     *      setUser(result.data)
     *    }
     *   
     *    return <div></div>
     *  }
     */
  const onSubmit = async (e) => {
    e.preventDefault()
    // user is the payload
    
    await axios.post('users', user)
  }
  ```

  - history.push('/')
    - After successful submit. It navigates to Home Page

- Final

```js
// PATH: src/components/users/AddUser.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import httpClient from '../utils/httpClient'

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await httpClient.post("users", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser; 
```

## Edit User Component: Almost same as that of Add User Component. The only difference is that it takes in ID and updates the data by sending params

1. Accept the params using useParams

```js
// PATH: src/components/users/EditUser.js
import React from 'react'
import { useParams } from "react-router-dom";

const EditUser = () => {
  /** 
   * This id is same as that of variable used in registered route in App.js
   * <Route exact path="/users/edit/:id" component={EditUser} />
   */
  const { id } = useParams()
  return <div>Edit user: { id }</div>
}

export default EditUser

```

2. Load the data corresponding to the user id

```js
// PATH: src/components/users/EditUser.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import httpClient from '../utils/httpClient'

const EditUser = () => {
  const { id } = useParams()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await httpClient.get(`users/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default EditUser
```

3. Since you have loaded the data: Connect to the Form similar to that of AddUser.js Form

```js
// PATH: src/components/users/EditUser.js
import React, { useState, useEffect } from "react";
import httpClient from '../utils/httpClient'
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await httpClient.put(`users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await httpClient.get(`users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
```

## Delete User

1. Call Delete API: Below are the only changes present

```js
import React, { useState, useEffect } from 'react'
import httpClient from '../utils/httpClient'
import { Link } from 'react-router-dom'

export const Home = () => {
  const deleteUser = async id => {
    await httpClient.delete(`users/${id}`);
    loadUsers();
  };

  return <div>
    <Link className="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>
      Delete
    </Link>
  </div>
}
```


2. Final Code

```js
// PATH: src/components/pages/Home.js
import React, { useState, useEffect } from 'react'
import httpClient from '../utils/httpClient'
import { Link } from 'react-router-dom'

export const Home = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers = async () => {
    const result = await httpClient.get(`users`)
    console.log(result)
    setUser(result.data.reverse())
  }

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>
                      View
                    </Link>
                    <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>
                      Edit
                    </Link>
                    <Link className="btn btn-outline-danger" onClick={() => deleteUser(user.id)}>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
```

## View User Component

1. Accept the params using useParams

```js
// PATH: src/components/users/User.js
import React from 'react'
import { useParams } from "react-router-dom";

const User = () => {
  /** 
   * This id is same as that of variable used in registered route in App.js
   * <Route exact path="/users/edit/:id" component={EditUser} />
   */
  const { id } = useParams()
  return <div>User: { id }</div>
}

export default User

```

2. Load the data corresponding to the user id

```js
// PATH: src/components/users/User.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import httpClient from '../utils/httpClient'

const User = () => {
  const { id } = useParams()

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await httpClient.get(`users/${id}`);
    setUser(result.data);
  };

  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default User
```

3. Final Code

```js
// PATH: src/components/User.js
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import httpClient from '../utils/httpClient'

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await httpClient.get(`users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
```