# **Avito-challenge-2024**

## Используемые технологии:

- React
- Typescript
- Redux-toolkit
- React router dom
- axios
- Material UI

---

## Запуск и установка:

`npm install` - для установки пакетов

### Запуск:

- Windows (cmd.exe): set "REACT_APP_TOKEN=api-token" && npm start
- Linux, macOS (Bash): REACT_APP_TOKEN=api-token npm start

Открыть http://localhost:7070

---

## Выполненные задания:

### Функциональные требования:

---

#### На странице со списком всех фильмов:

- [x] Отображается список фильмов и сериалов
- [x] Реализована пагинация
- [x] Можно выбрать количество фильмов для показа на странице
- [x] Можно отфильтровать выдачу (по году, стране и возрастному рейтингу)
- [x] Реализован поиск по названию фильма
- [x] Можно перейти на страницу фильма из выдачи

#### Дополнительные задания:

- [x] Реализована возможность поделиться результатами выдачи с другими пользователями через копирование ссылки.
- [x] Сохраняется история поиска в localstorage
- [x] Debounce

---

#### На странице с отдельным фильмом:

- [x] Отображается информация о фильме или сериале
- [x] Реализован вывод списка фильмов, похожих на текущий, в виде «карусели».
- [x] В случае, если какой-то из списков пустой, реализовано отображение заглушки на подобие «нет информации о ...»
- [x] Реализована кнопка «назад», которая ведет на выдачу. (Логотип - это та самая кнопка)

---

### Нефункциональные требования:

---

- [x] React, версия 18
- [x] Библиотека компонент: Material UI
- [x] сборщик: Webpack (Использовал CRA, т.к под капотом он использует вебпак)
- [x] Node.js: 18 или выше
- [x] пакетный менеджер: npm
- [x] Реализован адаптивный интерфейс
- [x] Роутинг выполнен с использованием React Router v6
- [x] При переходах по ссылкам страница не перезагружается (SPA)

#### Дополнительные задания:

---

- [x] Использование TypeScript
- [x] При переходе со страницы на страницу, запросы, относящиеся к старой странице, прерываются
