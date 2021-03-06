// Відображення повідомлення
function btn_1_press() {
  alert(`Ви натиснули кнопку №1`);
}

// Відображення вікна підтвердження
function btn_2_press() {
  let res = confirm(`Ви любите морозиво?`);
  let like = "";
  if (!res) {
    like = "не ";
  }
  alert(`Користувач який натиснув кнопку №2 ${like}любить морозиво`);
}

// Відображеня поля введення
function btn_3_press() {
  let name = prompt(`Як вас звати?`);
  if (name) {
    name = name.trim();
  }
  if (!name) {
    name = "незнайомцю";
  }
  alert(`Привіт, ${name}!`);
}

// Очищення поля введення
function clear_spec_field_1() {
  document.getElementById("spec_field_1").value = "";
}

// Очищення поля введення
function clear_spec_field_2() {
  document.getElementById("spec_field_2").value = "";
}

// Переведення введеного тексту у верхній регістр
function only_big_letter(element) {
  element.value = element.value.toUpperCase();
}

// Переведення введеного тексту у нижній регістр
function only_small_letter(element) {
  element.value = element.value.toLowerCase();
}

// Перевірка правильності заповнення форм вводу
function btn_register_press() {
  // Шукаємо поля вводу по їх id
  let login = document.getElementById("login");
  let pass_a = document.getElementById("password_a");
  let pass_b = document.getElementById("password_b");
  // Отримуємо значення полів вводу
  let text_log = login.value;
  let text_pas_a = pass_a.value;
  let text_pas_b = pass_b.value;
  // Перевірка заповнення поля #login
  if (!text_log) {
    alert("Ви не ввели логін!");
    return;
  }
  // Перевірка правильності заповнення поля #login
  text_log = text_log.trim();
  if (!text_log) {
    alert("Ви ввели некоректний логін!");
    return;
  }
  // Перевірка заповнення поля #password_a
  if (!text_pas_a) {
    alert("Ви не ввели пароль!");
    return;
  }
  // Перевірка довжини паролю
  if (text_pas_a.length < 6) {
    alert(
      "Ви ввели закороткий пароль!" +
        "\n" +
        "Мінімальна довжина паролю - 6 символів"
    );
    return;
  }
  // Перевірка заповнення поля #password_b
  if (!text_pas_b) {
    alert("Ви не повторили пароль!");
    return;
  }
  // Перевірка ідентичності паролів
  if (text_pas_a !== text_pas_b) {
    alert("Паролі не збігаються!");
    return;
  }
  // Повідомлення про успішну реєстрацію
  alert("Реєстрація завершилася успішно");
}

// .......................................................................

// Необхідні змінні
let added_elements = 1;

// Додавання нового елементу до списку
function add_li() {
  // Пошук списку за id
  let ul = document.getElementById("editable_list");
  // Створення нового елементу <li>
  let li = document.createElement("li");
  // Створення тексту для елементу <li>
  let text = document.createTextNode(`Новий елемент списку №${added_elements}`);
  // Збільшуємо лічильник на 1
  added_elements++;
  // Додаємо текст до елемента <li>
  li.appendChild(text);
  // Додаємо елемент <li> до списку
  ul.appendChild(li);
}

// Видалення останнього елементу зі списку
function remove_li() {
  // Пошук списку за id
  let ul = document.getElementById("editable_list");
  // Отримання останнього дочірнього елемента
  let li = ul.lastChild;
  // Видалення останнього дочірнього елемента
  ul.removeChild(ul.lastChild);
}

// .......................................................................

// Прослуховування кнопок управління блоком #flex_block
function add_flex_button_listener() {
  // Шукаємо кнопки по їх id
  let direction = document.getElementById("flex_direction");
  let justify = document.getElementById("justify-content");
  let align = document.getElementById("align-items");
  // Додаємо прослуховування події <onclick>
  direction.onclick = change_flex_direction;
  justify.onclick = change_justify_content;
  align.onclick = change_align_items;
}

// .......................................................................

// Необхідні змінні
let flex_direction_id = 0;
let flex_direction = ["row", "row-reverse", "column", "column-reverse"];

// Зміна властивості <flex-direction>
function change_flex_direction(event) {
  // Шукаємо блок по id
  let block = document.getElementById("flex_block");
  // Збільшуємо лічильник
  flex_direction_id += flex_direction_id < 3 ? 1 : -3;
  // Отримуємо нове значення властивості
  let value = flex_direction[flex_direction_id];
  // Змінюємо властивість <flex-direction>
  block.style.flexDirection = value;
  // Змінюємо текст кнопки
  event.target.innerHTML = `flex_direction: ${value}`;
}

// .......................................................................

// Необхідні змінні
let justify_content_id = 3;
let justify_content = [
  "center",
  "flex-start",
  "flex-end",
  "space-around",
  "space-between",
];

// Зміна властивості <justify-content>
function change_justify_content(event) {
  // Шукаємо блок по id
  let block = document.getElementById("flex_block");
  // Збільшуємо лічильник
  justify_content_id += justify_content_id < 4 ? 1 : -4;
  // Отримуємо нове значення властивості
  let value = justify_content[justify_content_id];
  // Змінюємо властивість <justify-content>
  block.style.justifyContent = value;
  // Змінюємо текст кнопки
  event.target.innerHTML = `justify_content: ${value}`;
}

// .......................................................................

// Необхідні змінні
let align_items_id = 0;
let align_items = ["center", "baseline", "flex-start", "flex-end", "stretch"];

// Зміна властивості <align_items>
function change_align_items(event) {
  // Шукаємо блок по id
  let block = document.getElementById("flex_block");
  // Збільшуємо лічильник
  align_items_id += align_items_id < 4 ? 1 : -4;
  // Отримуємо нове значення властивості
  let value = align_items[align_items_id];
  // Змінюємо властивість <align_items>
  block.style.alignItems = value;
  // Змінюємо текст кнопки
  event.target.innerHTML = `align_items: ${value}`;
}

// .......................................................................

// Необхідні змінні
let title_color_id = 1;
let title_colors = ["#F00", "#0F0", "#00F", "#FF0", "#F0F", "#0FF"];

// Зміна кольору фону заголовку
function change_title_background() {
  // Допоміжна константа
  const colors = title_colors.length - 1;
  // Шукаємо елемент по id
  let title = document.getElementById("title");
  // Змінюємо колір рамки
  title.style.borderColor = title_colors[title_color_id];
  // Допоміжна змінна
  let alpha_color = title_colors[title_color_id] + "5";
  // Змінюємо колір фону
  title.style.backgroundColor = alpha_color;
  // Збільшуємо лічильник
  title_color_id += title_color_id < colors ? 1 : -colors;
}

// .......................................................................

// Позначаємо елементи, які задовільняють умову №1
function check_condition_1() {
  select_elements($("input.test_b"));
}

// Позначаємо елементи, які задовільняють умову №2
function check_condition_2() {
  select_elements($("#cb3, #cb7"));
}

// Позначаємо елементи, які задовільняють умову №3
function check_condition_3() {
  select_elements($("#div_4 input[type='checkbox']").not(".test_z"));
}

// Позначаємо елементи, які задовільняють умову №4
function check_condition_4() {
  // Знімаємо позначки з усіх елементів
  unselect_all_elements();
  // Результат пошуку
  let result = $("[custom_atr]");
  // Допоміжний масив
  let array = [];
  // Перебираємо знайдені елементи
  for (let z = 0; z < result.length; z++) {
    // Отримуємо елемент
    let element = result.get(z);
    // Отримуємо значення атрибуту
    let atr = Number($(element).attr("custom_atr"));
    // Виконуємо перевірку значення атрибуту
    if (atr >= 25) {
      $(element).prop("checked", true);
    }
  }
}

// .......................................................................

// Позначаємо необхідні елементи
function select_elements(elements) {
  // Знімаємо позначки з усіх елементів
  unselect_all_elements();
  // Позначаємо необхідні елементи
  for (let z = 0; z < elements.length; z++) {
    let element = elements.get(z);
    $(element).prop("checked", true);
  }
}

// Знімаємо позначки з усіх елементів
function unselect_all_elements() {
  // Отримуємо усі елементи типу <checkbox>
  let result = $("#div_4 input[type='checkbox']");
  // Знімаємо позначки з усіх елементів
  for (let z = 0; z < result.length; z++) {
    let element = result.get(z);
    $(element).prop("checked", false);
  }
}

// .......................................................................

// Додаємо прослуховувачі подій до кнопок
function add_animation_button_listener() {
  // Кнопка "Запустити таймер"
  $("#btn_timer").bind("click", start_timer);
  // Кнопка "Запустити інтервал"
  $("#btn_interval").bind("click", start_interval);
}

// .......................................................................

// Запускаємо таймер
function start_timer() {
  console.log("start timer");
  // Змінюємо текст кнопки
  $("#btn_timer").attr("value", "Анімація запуститься через 3 сек.");
  // Запускаємо таймер
  setTimeout(() => {
    // Змінюємо текст кнопки
    $("#btn_timer").attr("value", "Запустити таймер");
    // Запускаємо анімацію
    start_animation();
  }, 3000);
}

// .......................................................................

let intervar_run = false;

// Запускаємо або зупиняємо інтервал
function start_interval() {
  // Зупиняємо інтервал
  if (intervar_run) {
    intervar_run = false;
    $("#btn_interval").attr("value", "Запустити інтервал");
    return;
  }
  // Запускаємо інтервал
  else {
    intervar_run = true;
    $("#btn_interval").attr("value", "Зупинити інтервал");
  }
  // Задаємо інтервал
  let interval = setInterval(() => {
    // Запускаємо анімацію
    start_animation();
    // Якщо інтервал зупинено - очищуємо його
    if (!intervar_run) {
      clearInterval(interval);
    }
  }, 3000);
}

// .......................................................................

// Необхідні змінні
let animation_id = 0;

// Запускаємо анімацію
function start_animation() {
  // Виводимо інформаційне повідомлення
  console.log(`Start animation №${animation_id}`);
  // Анімуємо об'єкт
  switch (animation_id) {
    // Анімація №1
    case 0:
      $("#img")
        .animate({ opacity: 0.0, left: "-39%", top: "25%" }, 500)
        .animate({ opacity: 1.0, top: "-25%" }, 500);
      break;
    // Анімація №2
    case 1:
      $("#img").animate(
        { opacity: 0.0, left: "0%", top: "0%", width: "40%" },
        500
      );
      break;
    // Анімація №3
    case 2:
      $("#img").animate({ opacity: 1.0, width: "128px" }, 500);
      break;
    // Анімація №4
    case 3:
      $("#img").animate({ opacity: 0.0, left: "40%", width: "16px" }, 500);
      break;
    // Анімація №5
    case 4:
      $("#img")
        .animate({ opacity: 0.5, left: "-35%", width: "128px" }, 500)
        .animate({ opacity: 1.0, left: "0%", width: "128px" }, 500);
      break;
  }
  // Збільшуємо індекс анімації
  animation_id += animation_id < 4 ? 1 : -4;
}

// .......................................................................

// Додаємо прослуховувачі подій до кнопок
add_flex_button_listener();
add_animation_button_listener();

// Змінюємо колір фону заголовку кожні 2 сек.
setInterval(change_title_background, 3000);
