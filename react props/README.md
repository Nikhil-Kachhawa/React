Props :
--------
- Props / properties are arguments are passed into React components
- Props allows us to pass data from parent to child component
- Props are passed to components via HTML attributes 
- Sometimes our Parent contains some HTML tags that we want to pass directly as is into the Child components so for that we will use the following things 
- Parent component 
```
    <Car>
      <h2>Car Component</h2>
      <p>Car Component Content</p>
    </Car>
```
- Child component
```
 const Car = (props) => {
		return (
			<div>
				{props.children}
			</div>
		)
	}
```