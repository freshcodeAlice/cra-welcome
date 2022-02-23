import React, { Component } from 'react';
import UserCard from './UserCard';

const userDB = [
    {
        id: 1,
        firstName: 'Luke',
        lastName: 'Skywalker'
    },
    {
        id: 2,
        firstName: 'Leya',
        lastName: 'Skywalker'
    },
    {
        id: 3,
        firstName: 'Han',
        lastName: 'Solo'
    },
    {
        id: 4,
        firstName: 'R2D2',
        lastName: 'Robot'
    },
    {
        id: 5,
        firstName: 'C3PO',
        lastName: 'Robot'
    },
    {
        id: 6,
        firstName: 'Chubakka',
        lastName: 'Wookee'
    },
];


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: userDB.map((user)=> ({...user, isSelected: false})
            )
        }
    }

    mapUsers = ({firstName, lastName, id, isSelected})=> <UserCard firstName={firstName} lastName={lastName} id={id} key={id} isSelected={isSelected} selectCallback={this.setSelected}/>;

    setSelected = (id) => {
        const {users} = this.state;
        const newUsers = [...users];
        this.setState({
            users: newUsers.map((user)=>({
                ...user,
                isSelected: user.id === id ? !user.isSelected : user.isSelected
            }))
        })
    }
    
    render() {
        const {users} = this.state;
        return (
            <ul>
                {users.map(this.mapUsers)}
            </ul>
        );
    }
}

export default UserList;




/*

Создайте компоненту UserList, которая будет рендерить список "карточек" Юзера - UserCard. (Карточка - прямоугольник с именем и фамилией).

Список юзеров будет храниться в userDB в состоянии UserList.

По нажатию на карточку - она "подсечивается" - появляет бордер красного цвета.
При этом UserCard сделать функциональной компонентой (stateless).

Родитель должен спустить через пропсы значение "выбранности" карточке.

Задачка со *:
В шапке сайта сделать небольшую область, где отображаться имена всех "выбранных" сейчас Юзеров

*/