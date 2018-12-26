import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite:2018-baseball-databank.db');

export const HallOfFame = sequelize.define('HallOfFame', {
    playerID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    yearID: Sequelize.INTEGER,
    votedBy: Sequelize.STRING,
    ballots: Sequelize.INTEGER,
    needed: Sequelize.INTEGER,
    votes: Sequelize.INTEGER,
    inducted: Sequelize.STRING,
    needed_note: Sequelize.STRING
},{
    timestamps: false,
    freezeTableName: true
})