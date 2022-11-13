//файл, который будет работать с базой данных

const {Sequelize} = require('sequelize') //создаем объект

//sequelize - это библиотека для работы с бд
//мы ее подключаем и берем оттуда именно класс 'sequelize', так как вся библиотека большая

module.exports = new Sequelize(
  // передаем в конструктор переменные для подклбчения к бд
  // эти переменные хранятся в файле .env
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "postgres",
    host:process.env.DB_HOST,
    port:process.env.DB_PORT
  }
)