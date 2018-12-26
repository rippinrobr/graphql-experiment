import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite:2018-baseball-databank.db');

export const Fielding = sequelize.define('Fielding', {
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
    teamID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    stint: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    lgID: Sequelize.STRING,
    POS: Sequelize.STRING,
    G: Sequelize.INTEGER,
    GS: Sequelize.INTEGER,
    InnOuts: Sequelize.INTEGER,
    PO: Sequelize.INTEGER,
    A: Sequelize.INTEGER,
    E: Sequelize.INTEGER,
    DP: Sequelize.INTEGER,
    PB: Sequelize.INTEGER,
    WP: Sequelize.INTEGER,
    SB: Sequelize.INTEGER,
    CS: Sequelize.INTEGER,
    ZR: Sequelize.INTEGER
}, {
    timestamps: false,
    freezeTableName: true
});