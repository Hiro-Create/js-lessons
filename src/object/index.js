/**
  Создать и вернуть пустой объект
 */
function createObject() {
let obj = {};
return obj;
}

/**
 * Вернуть кол-во свойств объекта
 *
 * Пример
 * const obj = {
 *   name: 'Name',
 *   age: 11,
 * }
 *
 * getCountOfProp(a) = 2
 *
 * @param object
 */
function getCountOfProp(object) {
let a = 0;
for (key in object) {
  a = a + 1;
}
return a;
}

/**
 * Вернуть копию объекта
 * @param obj
 */
function copyObject(obj) {
let k = {};
for (let key in obj) {
  k[key] = obj[key];
}
return k;
}

/**
 * Вернуть новый объект, включающий значения обоих
 * const a = { name: 'Max', };
 * const b = { age: 18, };
 * Пример
 * mergeObject(a, b) = { name: 'Max', age: 18, }
 */
function mergeObject(objectA, objectB) {
  let mergeObject = {};

  let obj1 = {};
  let obj2 = {};
  Object.assign(mergeObject, obj1, obj2);
  return mergeObject;
}

/**
 * Проверить наличие ключа
 * const a = { name: '1' }
 * hasKey(a, 'name') = true
 */
function hasKey(object, key) {

}

/**
 * Добавить значение в объект
 * вернуть тот же объект
 * Пример
 * const a = { name: '1' };
 * const key = 'age';
 * const value = '18';
 * addToObject(a, key, value) = { name: '1', age: 18 }
 */
function addToObject(object, key, value) {

}

module.exports = {
  createObject,
  getCountOfProp,
  copyObject,
  mergeObject,
  hasKey,
  addToObject,
};
