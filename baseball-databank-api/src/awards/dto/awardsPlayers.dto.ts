import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite:2018-baseball-databank.db');

export const AwardsPlayer = sequelize.define('AwardsPlayers', {
    playerID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    yearID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    awardID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    lgID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    tie: Sequelize.STRING,
    notes: Sequelize.STRING,
}, {
    timestamps: false,
    freezeTableName: true
})