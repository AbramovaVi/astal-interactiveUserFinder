import React from 'react';

const UserList = ({users}) => {
    return ( users.length !== 0 ) ?
        (<ul> {users.map((item, index) => <li key={index}>{item.firstName} {item.secondName}</li>)} </ul>)
        : (<h3>Нет данных</h3>)
};
export {UserList};

