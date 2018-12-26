import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite:2018-baseball-databank.db');

export const FieldingOF = sequelize.define('FieldingOF', {
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
    stint: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    Glf: Sequelize.INTEGER,
    Gcf: Sequelize.INTEGER,
    Grf: Sequelize.INTEGER
}, {
    timestamps: false,
    freezeTableName: true
});