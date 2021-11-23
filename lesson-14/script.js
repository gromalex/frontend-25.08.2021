// Git -----------------------------------------------------------------------
//
// 1. Установка GitBash (https://git-scm.com/downloads)
//  - Соглашаемся с лицензией
//  - Оставляем дефолтные компоненты
//  - Выбрать редактор
//  - https://drive.google.com/drive/folders/1Y7QhIo29MD-2AzblDWjODifek53naa2G?usp=sharing

// Основные команды bash https://kmb.cybber.ru/bash/main.html
//  $ cd - сокращенное change directory. Позволяет перемещаться по файловой системе
//  $ ls - сокращение от list. Отображает все файлы и директории
//  $ mkdir - сокращение от make directory. Создает директории с именем directory
//  $ touch <file_name> - создать файл

// Регистрация на https://github.com/

// Основные команды git
// $ git clone <url> - создать локальный репозиторий
// $ git status - проверить состояние файлов

// $ git add . - проиндексировать текущее состояния/новые изменения, . - это все файлы с изменениями в репозитории
// $ git commit -m "Name commit" - коммит изменений

// $ git checkout name_file - отменить изменения в файле name_file
// $ git checkout . - отменить изменения во всех файлах

// .gitignore

// Установка node.js -----------------------------------------------------------
// Скачать https://nodejs.org/ru/ и установить


// Свойства аксессоры
const rectangle = {
  width: 100,
  height: 60,

  // calcArea () {
  //   return this.height * this.width
  // }

  get area () {
    return this.height * this.width
  },

  set area (value) {
    if (value != this.area) {
      console.error('Error')

    }
  },

  setArea(value) {
    if (value != this.area) {
      console.error('Error')

    }
  }
}

console.log(rectangle.area)
rectangle.area = 1000
rectangle.setArea(1000)
