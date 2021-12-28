import '../scss/app.scss'
// Регулярные выражения

// const regexp = new RegExp('джеймс', 'gim')
const regexp = /\bджеймс\b/gim

const text = `Хотя 23 Уильям Джеймс был прихожанином англиканской церкви, многие из его потомков перешли 3 в католицизм Джеймсу. Одной из них была старшая двоюродная 4 сестра Джеймса Нелли.`;

// Флаги:
// i - не учитывает регистр
// g - поиск всех совпадений
// m - многострочный поиск

const matches = text.match(regexp)
const newText = text.replace(regexp, 'Джек')
// console.log(newText)

const str =
  'Мы будем 34 javascript 0 использовать 76 браузер... в качестве 3 окружения.., Мы но основное... внимание будет34 уделяться именно .... самому 456 языку JavaScript';

// Символьные классы
// \w - буква из латинского алфавита, цифры и _
// \W - любой символ кроме буквы латинского алфавита
// \d - цифра 0-9
// \D - не цифра
// \s - пробел, таб, новые строки
// \S - все, кроме \s
// \n - перенос строки
// . - любой, символ точка \.
// \b - конец, начало слова

const regexpNum = /\d/gim

// console.log(text.match(regexpNum))
// console.log(str.match(/\d\d/gim))

// Начало ^ и конец $ строки
// console.log(str.match(/^Мы/gim))
// console.log(str.match(/javascript$/gim))

// Наборы []
// [...] - любой символ, который находится в [] (условно между ними оператор "или")
// [^...] - любой символ, кроме тех, которые находятся в []
// [а-яА-Я] - любой символ из кириллицы
// [0-9] == \d
// [^0-9] == \D
// [.+,] - любой из символов

console.log(str.match(/[30]/gim)) // 3 || 0
// console.log(str.match(/[а-яА-Я]/gim))

// Скобочные группы (...)
// Позволяет поместить часть совпадений в отдельный элемент массива
// Позволяет применять квантификатор ко всей группе

// console.log(str.match(/\d/gim))
console.log(text.match(/(23){3}/gim))

// Квантификаторы
// {n} - добавляется к символу (/5{3}/gim == /555/gim)
// [01]{1} - только один, 0 или 1
// \s{0,1} - символ должен быть хотя бы 1
// [а-яА-Я]{1,6} - символы в количестве от 1 до 6

// {0,1} == ?
// {1,} == +
// {0,} == *

console.log(text.match(/джеймса?у?/gim))

// TODO: Написать регулярное выражение для поиска многоточия...
console.log(str.match(/\.{3}/gim))
console.log(str.match(/\.\.\./gim))

// TODO: Написать регулярное выражение для css цветов (#237bcb, #232323, #1c24b9). Еще для rgb цветов
const colors = '#237bcb #f3f3f3f3f3 #232323 #1c24b9 #fffffff'

console.log(colors.match(/#[0-9a-f]{6}\s/gim))

// +375 (33) 665-98-09
// 8 029 355-98-08
const text2 = 'Lorem +375336659809 ipsum, dolor sit amet consectetur adipisicing elit. Aut pariatur 80293559809 commodi sunt odit repellendus exercitationem!'

console.log(text2.replace(/(\+375)(\d{2})(\d{3})(\d{2})(\d{2})/gim, '$1 ($2) $3-$4-$5'))

text2.replace(/(\+375)(\d{2})(\d{3})(\d{2})(\d{2})/gim, '$1 ($2) $3-$4-$5')

// console.log(newText2)

// console.log(text2.match(regexpPhone))

// * Жадные и ленивые квантификаторы
const text1 = '**Lorem** "html ipsum" dolor sit amet consectetur "adipisicing" elit. Aut ab css labore in deserunt perferendis ipsum dolorum js omnis nisi, voluptatibus "nostrum" quos repellendus javascript provident "totam" dicta a! **Explicabo** beatae alias deserunt!'

console.log(text1.match(/".+?"/gim));

console.log(text1.replace(/\*\*(.+?)\*\*/gim, '<strong>$1</strong>'))

// * Альтернация (или) |
const text3 = 'Lorem html ipsum dolor sit amet consectetur adipisicing elit. Aut ab css labore in deserunt perferendis ipsum dolorum js omnis nisi, voluptatibus nostrum quos repellendus javascript provident totam dicta a! Explicabo beatae alias css deserunt!'

console.log(text3.match(/html|css|js|javascript/gim))
