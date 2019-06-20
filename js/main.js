'use strict';

// Константы
var PHOTOS_COUNT = 25;
var MIN_LIKES = 15;
var MAX_LIKES = 200;
var AD_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var AD_NAMES = ['Иван', 'Хуан', 'Себастья', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон', 'да Мария', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var getRandomLikes = function () {
  return Math.floor(Math.random() * (MAX_LIKES - MIN_LIKES + 1) + MIN_LIKES);
};

var getRandomElement = function (array) {
  var indexArray = Math.floor(Math.random() * array.length);
  return array[indexArray];
};

// Данные.
var PHOTOS = [];
for (var i = 0; i < PHOTOS_COUNT; i++) {
  PHOTOS.push({
    url: 'photos/' + (i + 1) + '.jpg',
    likes: getRandomLikes(MIN_LIKES, MAX_LIKES),
    comments: {
      avatar: 'img/avatar-' + (i + 1) + '.svg',
      message: getRandomElement(AD_COMMENTS),
      name: getRandomElement(AD_NAMES),
    }
  });
}

// Контейнер для изображений и шаблон изображений
var publicationContainer = document.querySelector('.pictures');
var newPostTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

// Отрисовка постов
var renderPublication = function () {
  var postElement = newPostTemplate.cloneNode(true);

  postElement.querySelector('.picture__img').src = PHOTOS[i].url;
  postElement.querySelector('.picture__comments').textContent = PHOTOS[i].comments;
  postElement.querySelector('.picture__likes').textContent = PHOTOS[i].likes;

  return postElement;
};

// Вставка фрагмента в документ
var fragment = document.createDocumentFragment();
for (i = 0; i < PHOTOS.length; i++) {
  fragment.appendChild(renderPublication(PHOTOS[i]));
}
publicationContainer.appendChild(fragment);
