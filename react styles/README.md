Styles  :
------------------------
- There are 2-3 different methods in react components by which we can apply styles 
1. Inline Styles
```
const StyleCard = () => {
  return (
    <div style = {{ backgroundColor : 'lightblue', padding : '20px', borderRadius : '10px', color : 'blue'}}>
        <h1>This is title </h1>
        <p>This whole div is styled by using inline styles</p>
    </div>
  )
}
```
2. Style Objects
```
const ProfileCard = () => {
let style = {backgroundColor : "gray", padding : '15px', borderRadius : '8px', color : 'black'}
  return (
    <div style = {style} >
        <h1>This is Second title</h1>
        <p>This whole div is styled using inline styles with object</p>
    </div>
  )
}
```

3. React icons (search react icons on Google)
```
import { DiCodeigniter } from "react-icons/di";

const IconComponent = () => {
  return (
    <div>
        <h1>Flame Icon Below </h1>
        <DiCodeigniter />
    </div>
  )
}
```