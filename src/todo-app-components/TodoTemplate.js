import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
    return(
        <div className="TodoTemplate">
            <div className="app-title">things to do</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default TodoTemplate;