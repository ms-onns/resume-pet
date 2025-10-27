// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Maxim',
    lastname: 'Sheyn',
  },

  position: 'Junior Fullstack JS Developer',
  salary: '900$ в місяць',
  address: 'Ukraine, Kharkiv',
}

var footer = {
  sotial: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
          experience in development. Whenever I start to
          work on a new project I learn the domain and try
          to understand the idea of the project. Good team
          player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
          different platforms ( odds ) and sport statistics
          ( tournament position, goals etc), analyzing by
          simple mathematics models and preparing
          probability for such events like: money line -
          first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code & NPM',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 7,
          isTop: false,
        },
        {
          name: 'React.js',
          point: 0,
          isTop: false,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Cycling',
          isMain: true,
        },
        {
          name: 'Swiming',
          isMain: false,
        },
        {
          name: 'Cooking',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'IT Brains',
          isEnd: false,
        },
        {
          name: 'HPLM',
          isEnd: true,
        },
        {
          name: 'freeCodeCampe',
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: 'IT Brains',
          id: 1,
        },
        {
          name: 'HPLM',
          id: 2,
        },
      ],
    },
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'Anduril Industries',
            url: 'https://www.anduril.com/',
          },
          duration: {
            from: '10.10.2023',
            too: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: `
                A dynamic resume web application built to showcase Full-Stack development skills.
                It is powered by Node.js/Express.js for server-side logic and leverages Handlebars.js for template rendering.
                The project effectively uses Handlebars Partials for component reusability and separation of data from the presentation layer, ensuring high scalability.`,

              stackAmount: 4,
              awardAmount: 6,

              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
                {
                  name: 'Express.js',
                },
              ],
              awords: [
                {
                  name: 'The implementation of this feature resulted in a 15% increase in page rendering speed.',
                },
                {
                  name: 'Developed reusable Handlebars components, reducing the development time for new sections by 20%.',
                },
                {
                  name: 'Designed a responsive layout, ensuring a flawless display of the project across mobile and desktop devices.',
                },
                {
                  name: 'Successfully integrated an API for dynamic resume data updates without requiring a page reload.',
                },
                {
                  name: 'The project passed a code cleanliness audit, confirming adherence to ES6 standards and best practices.',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
