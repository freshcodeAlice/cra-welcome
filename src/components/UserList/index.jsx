import React, { Component } from 'react';

class UserList extends Component {
    render() {
        return (
            <div>
                
            </div>
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