import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite:2018-baseball-databank.db');

export const Franchise = sequelize.define('TeamsFranchises', {
    franchID: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    franchName: Sequelize.STRING,
    active: Sequelize.STRING,
    NAAssoc: Sequelize.STRING,
},{
    timestamps: false,
});
