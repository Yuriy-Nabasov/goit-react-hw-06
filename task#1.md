Завдання 1 - Профіль соціальної мережі

Необхідно створити компонент <Profile>, за допомогою якого ми могли б відображати інформацію про користувача соціальної мережі.

Компонент повинен приймати кілька пропсів з інформацією про користувача:

name — ім'я користувача
tag — тег в соціальній мережі без @
location — місто і країна
image — посилання на зображення
stats — об'єкт з інформацією про активності

Компонент повинен створювати розмітку наступної структури, але з динамічними даними, що надходять у вигляді описаних раніше пропсів.

<div>
  <div>
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
    />
    <p>Petra Marica</p>
    <p>@pmarica</p>
    <p>Salvador, Brasil</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>1000</span>
    </li>
    <li>
      <span>Views</span>
      <span>2000</span>
    </li>
    <li>
      <span>Likes</span>
      <span>3000</span>
    </li>
  </ul>
</div>

Приведений нижче є приклад використання компонента Profile у компоненті App:

Рендеримо компонент Profile всередині App
Передаємо компоненту Profile дані у вигляді пропсів

Використовуйте ці дані користувача у своїй роботі для значень пропсів.

const userData = {
username: "Jacques Gluke",
tag: "jgluke",
location: "Ocho Rios, Jamaica",
avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
stats: {
followers: 5603,
views: 4827,
likes: 1308
}
};

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
</>
);
};

Треба винести дані користувача в JSON-файл, щоб не завантажувати компонент App. Наприклад, створіть у папці src файл userData.json, перенесіть туди дані користувача, відформатуйте їх у формат JSON, а потім імпортуйте його в App, щоб передати ці дані через пропси.

import userData from "../userData.json";

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
</>
);
};
