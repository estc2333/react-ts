import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from "./component/SingleComment";

const App = () => {
    return(
        <div className='ui comments'>
            <SingleComment></SingleComment>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
