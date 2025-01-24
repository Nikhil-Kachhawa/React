Theory :
---------
- React is a free opensource JS library specifically designed for building UI's.
- Developed in 2011
- it uses components model (can be small as button or entire webApp)
- build modular apps
- Learn Once, write anywhere (React Native, Desktop, React 360)

React cooking :
----------------
- Open up Terminal & type 
	npm create vite@latest
- choose options as stated
- Now run the following commands
	cd "your-project-name"
	npm install
	npm run dev
- Now u will hv bunch of folders

Folder Structure :
-------------------
- node_modules = pkgs which react requires
- public = where we put all of our public assets and HTML file
- src = imp folder where we r going to spend our 90% of time
- assets = where we put all of our img and svg
- App.css
- App.jsx
- index.css
- main.jsx
- .gitignore
- eslint.config.js = config file for eslint
- index.html = the file with root element, where we render all of our content
- package-lock.json = locked dependencies
- package.json = dependencies
- readme.md = readme
- vite.config.js = config for vite itself

Run :
------
- Open up the terminal and type the following command
	npm run dev
- And see whether everything is working fine(check the webpage on chrome)

First Steps :
-------------
- Remove public folder, assets, App.css and index.css (also remove their reference from App.jsx, main.jsx)
- open up App.jsx and remove every line
- And type "rafce" hit tab/enter u will hv component ready in your project(check the webpage on chrome)

Components :
------------
- Components are independent and reusable bits of code. they r small like JS functions but work in isolation and return the html 
- It can be simple JS function or Arrow function but keep that in mind that the function name's first letter should be capital letter and it should return some HTML code.
- Don't forget to export it :(
- We usually create components folder inside the src folder and store all of the components inside it
- Don't forget to include them inside the App.jsx file/ main file so that it will get displayed also make sure to return only one element

JSX :
------
- JSX/JS XML allows us to write HTML code inside the React
- Behind the scenes JSX will boil down to render HTML code
- Babel.js -> website to see boiled down code 

Some Rules of JSX :
--------------------
- One functional component should only return one parent/HTML tag
- In JSX u need to close the tag 
- for "class" keyword use "className"
- in the form tag -> label "for" use "htmlFor" instead

Expressions in JSX :
---------------------
- with JSX we can write expressions inside curly braces.
- Expressions can be React variable, property or any other valid JS expressions.
- JSX will execute the expression and return thhe result
- for e.g. <p>2+3<p/> => 2+3, <p>{2+3}</p> => 5

Lists :
--------
- In react JS we need to render or loop through some list then the prefer way we use is JS map() method 
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
      
	  {users.map
        (
            user => 
              (
                <ul key={user.id}>
                  <li>{user.id} {user.name} {user.age}</li>
                </ul>
              )
        ) 
      }
- Remember to use "key" as unique value
