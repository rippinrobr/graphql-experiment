import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite:2018-baseball-databank.db');

export const Player = sequelize.define('People', {
    playerID: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    birthYear: Sequelize.INTEGER,
    birthMonth: Sequelize.INTEGER,
    birthDay: Sequelize.INTEGER,
    birthCountry: Sequelize.STRING,
    birthState: Sequelize.STRING,
    birthCity: Sequelize.STRING,
    deathYear: Sequelize.INTEGER,
    deathMonth: Sequelize.INTEGER,
    deathDay: Sequelize.INTEGER,
    deathCountry: Sequelize.STRING,
    deathState: Sequelize.STRING,
    deathCity: Sequelize.STRING,
    nameFirst: Sequelize.STRING,
    nameLast: Sequelize.STRING,
    nameGiven: Sequelize.STRING,
    weight: Sequelize.INTEGER,
    height: Sequelize.INTEGER,
    bats: Sequelize.STRING,
    throws: Sequelize.STRING,
    debut: Sequelize.STRING,
    finalGame: Sequelize.STRING,
    retroID: Sequelize.STRING,
    bbrefID: Sequelize.STRING,
},{
    timestamps: false,
});

