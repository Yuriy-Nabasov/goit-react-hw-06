Завдання 3 - Історія транзакцій

Необхідно створити компонент історії транзакцій в особистому кабінеті інтернет-банку.

Дані для списку доступні у форматі массива об'єктів, де кожен об'єкт описує одну транзакцію з наступними властивостями:

id — унікальний ідентифікатор транзакції
type — тип транзакції
amount - сума транзакції
currency - тип валюти
Необхідно створити компонент <TransactionHistory>, який приймає один проп items - масив об'єктів транзакцій. Компонент створює розмітку таблиці. Кожна транзакція - це рядок таблиці. У прикладі наведена розмітка двох транзакцій.

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

Приклад використання компонента TransactionHistory у компоненті App. Використовуйте ці дані у своїй роботі для значень пропсів.

const transactions = [
{
id: "1e0700a2-5183-4291-85cc-2065a036a683",
type: "invoice",
amount: "964.82",
currency: "LRD",
},
{
id: "a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",
type: "payment",
amount: "686.50",
currency: "WST",
},
{
id: "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
type: "invoice",
amount: "828.62",
currency: "UGX",
},
{
id: "ea8ed3dc-2b68-4a53-905a-53ecb0adef33",
type: "withdrawal",
amount: "527.80",
currency: "ALL",
},
{
id: "63ca02f9-d637-46b5-9237-f3b24425e029",
type: "payment",
amount: "862.44",
currency: "AUD",
},
{
id: "ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",
type: "withdrawal",
amount: "907.00",
currency: "GEL",
},
{
id: "4eaab41b-b967-40ac-82ed-85fc66f646f1",
type: "deposit",
amount: "103.10",
currency: "BWP",
},
{
id: "9648a350-8469-42d5-8bf3-18090de5fe67",
type: "withdrawal",
amount: "322.32",
currency: "MRO",
},
{
id: "9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",
type: "invoice",
amount: "14.79",
currency: "PYG",
}
];

const App = () => {
return (
<>
<TransactionHistory items={transactions} />
</>
);
};

Треба винести дані про транзакції у JSON-файл, щоб не захламлювати компонент App. Наприклад, створіть файл із назвою transactions.json у папці src, перемістіть туди масив транзакцій, відформатуйте дані у формат JSON, а потім імпортуйте його в компонент App, щоб передати ці дані як пропси.

import userData from "../userData.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

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
<TransactionHistory items={transactions} />
</>
);
};
