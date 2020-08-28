export default [
  {
    id: 1,
    title: "Outline Prototype",
    description:
      "Во время обучения вёрстке, в начале, не всегда понятно было какое место занимают блоки. Вдохновился подсветкой на учебных демонстрациях, и написал свой инструмент. Сначало это было просто набор стилей. Позже прикрутил переключатель на JS - отображение блоков, подпись семантичных блоков, отключение подсветки. Скрипт возможно запустить из консоли браузера на любом сайт(если не запрешено политиками сайта).",
    github: "https://github.com/ArtMan-8/outline-prototype",
    featured: true,
    image: "project-outline-prototype",
    stack: [
      {
        id: 1,
        title: "CSS",
      },
      {
        id: 2,
        title: "JS",
      },
    ],
  },
  {
    id: 2,
    title: "Studio Ghibli, info",
    description:
      "Реализовал одностроничника на чистом JS, с использованием патерна MVP. В разметке использовал BEM-нейминг. Стили писал на SCSS. Набросок дизайн выполнил в Figma. За основу взял цветовую гамму с официального сайта студиии. Реализовал автодеплой на gh-pages с использованием travis-CI. Для данных использовал публичное REST API с информацией о аниме студии Ghibli.",
    github: "https://github.com/ArtMan-8/Studio-Ghibli-info",
    url: "https://artman-8.github.io/Studio-Ghibli-info/",
    featured: true,
    image: "project-studio-ghibli",
    stack: [
      {
        id: 1,
        title: "SASS",
      },
      {
        id: 2,
        title: "JS",
      },
    ],
  },
]
