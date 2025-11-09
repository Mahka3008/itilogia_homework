let clients = [
  {
    firstName: "Александр",
    lastName: "Иванчук",
    date: "11-29-1990",
    phone: "8 (929) 988-90-09",
    amounts: [2546, 2098, 764, 7266],
  },
  {
    firstName: "Анатолий",
    lastName: "Стаценко",
    date: "02-12-1987",
    phone: null,
    amounts: [563, 8287, 889],
  },
  {
    firstName: "Марина",
    lastName: "Петрова",
    date: "07-26-1997",
    phone: "8 (899) 546-09-08",
    amounts: [6525, 837, 1283, 392],
  },
  {
    firstName: "Иван",
    lastName: "Караванов",
    date: "09-12-1999",
    phone: null,
    amounts: [7634, 283, 9823, 3902],
  },
  {
    firstName: "Оксана",
    lastName: "Абрамова",
    date: "01-24-2002",
    phone: "8 (952) 746-99-22",
    amounts: [342, 766, 362],
  },
];

let newClient = {};

newClient.firstName = prompt("Введите имя");
newClient.lastName = prompt("Введите фамилию");
newClient.phone = prompt("Введите номер телефона");
newClient.date = prompt("Введите дату рождения в формате мм-дд-ггг");
newClient.amounts = [];

while (
  confirm("Добавить покупку для клиента " + newClient.firstName) === true
) {
  sum = Number(prompt("Введите сумму покупки"));
  newClient.amounts.push(sum);
}

clients.push(newClient);

function fullName(obj) {
  return (nameAndLastName = obj.firstName + " " + obj.lastName);
}

fullName(clients[0]);

function getBirthday(date) {
  let parts = date.split("-");

  let month = parseInt(parts[0]) - 1;

  let day = parseInt(parts[1]);

  let year = parseInt(parts[2]);

  let birthday = new Date(year, month, day);

  let formattedDate = birthday.toLocaleString("ru-RU", {
    day: "numeric",
    month: "long",
  });

  let today = new Date();

  if (
    birthday.getDate() === today.getDate() &&
    birthday.getMonth() === today.getMonth()
  ) {
    return formattedDate + " (сегодня)";
  } else {
    return formattedDate;
  }
}

getBirthday(clients[0].date);

function getAllAmount(arr) {
  let sumOfArr = 0;
  for (let num of arr.amounts) {
    sumOfArr += num;
  }
  return sumOfArr;
}

function getAverageAmount(array) {
  let sumOfArr = 0;
  for (let num of array.amounts) {
    sumOfArr += num;
  }
  let average = sumOfArr / array.amounts.length;
  return average.toFixed(1);
}

let showClients = (clients) => {
  for (i = 0; i < clients.length; i++) {
    alert(
      "Клиент " +
        fullName(clients[i]) +
        " имеет среднюю сумму чека " +
        getAverageAmount(clients[i]) +
        ". День рождения клиента: " +
        getBirthday(clients[i].date)
    );
  }
};

// showClients(clients);
try {
  showClients();
} catch (e) {
  console.log("Вызвана функция без параметров.");
  console.log(e.message);
}

let bestClients = [
  {
    firstName: "Таисия",
    lastName: "Филорес",
    date: "12-23-1991",
    phone: "8 (939) 688-94-19",
    amounts: [256, 298, 864, 7234],
  },
  {
    firstName: "Джо",
    lastName: "Васильев",
    date: "14-11-2003",
    phone: null,
    amounts: [3456, 4321, 547],
  },
  {
    firstName: "Стефания",
    lastName: "Бессонова",
    date: "02-13-1675",
    phone: "8 (800) 555-35-35",
    amounts: [676, 455, 4554, 4342],
  },
];

setTimeout(() => {
  showClients(bestClients);
}, 3000);

function whoSpentMore(array) {
  let maxAmount = 0;
  let bestClient = null;

  for (let client of array) {
    let clientAmount = getAllAmount(client);

    if (clientAmount > maxAmount) {
      maxAmount = clientAmount;
      bestClient = client;
    }
  }

  if (bestClient) {
    let clientFullName = fullName(bestClient);
    console.log(
      `Больше всех потратил ${clientFullName}. Сумма покупок: ${maxAmount}.`
    );
  } else {
    console.log("Клиенты не найдены");
  }
};

whoSpentMore(clients);

whoSpentMore(bestClients);