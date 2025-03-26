Завдання 2 - Список друзів

Необхідно створити компонент <FriendList>, за допомогою якого ми могли б відображати інформацію про друзів користувача.

Компонент <FriendList> повинен приймати один проп friends - масив об'єктів друзів та створювати DOM розмітку наступної структури.

<ul>
	{/* Кількість li залежить від кількості об'єктів в масиві */}
	<li>
		<FriendListItem />
	</li>
</ul>

Компонент <FriendListItem> - це картка одного друга, яка повинна приймати кілька пропсів:

avatar - посилання на аватар
name - ім'я друга
isOnline - буль, що сигналізує про стан друга: в мережі або ні.
Компонент <FriendListItem> повинен створювати DOM розмітку наступної структури.

<div>
  <img src="" alt="Avatar" width="48" />
  <p>Friend name</p>
  <p>Friend status</p>
</div>

Залежно від пропа isOnline, текст в p.status повинен змінюватися, а його колір тексту - також. Якщо значення true, то текст Online і колір тексту зелений, в іншому випадку текст Offline і червоний колір тексту. Це можна зробити за допомогою різних CSS-класів.

Приклад використання компонента FriendList в компоненті App. Дані про друзі це масив об'єктів із відомими властивостями. Використовуй ці дані в своїй роботі для значень пропсів.

const friends = [
{
avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
name: "Mango",
isOnline: true,
id: 1812
},
{
avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
name: "Kiwi",
isOnline: false,
id: 1137
},
{
avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
name: "Ajax",
isOnline: true,
id: 1213
},
{
avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
name: "Jay",
isOnline: true,
id: 1714
},
{
avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
name: "Poly",
isOnline: false,
id: 1284
}
];

const App = () => {
return (
<>
<FriendList friends={friends} />
</>
);
};

Треба винести дані про друзів в JSON-файл, щоб не ускладнювати компонент App. Наприклад, створіть у папці src файл friends.json, перемістіть туди масив друзів, форматуючи дані під формат JSON, і потім імпортуйте його в App, щоб передати ці дані пропсами.

import userData from "../userData.json";
import friends from "../friends.json";

const App = () => {
return (
<>
<Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
<FriendList friends={friends} />
</>
);
};
