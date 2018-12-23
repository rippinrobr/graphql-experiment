import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite:2018-baseball-databank.db');

export const Manager = sequelize.define('Managers', {
    playerID: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    yearID: Sequelize.INTEGER,
    teamID: Sequelize.STRING,
    lgID: Sequelize.STRING,
    inseason: Sequelize.INTEGER,
    G: Sequelize.INTEGER,
    W: Sequelize.INTEGER,
    L: Sequelize.INTEGER,
    rank: Sequelize.INTEGER,
    plyrMgr: Sequelize.STRING,
},{
    timestamps: false,
});
