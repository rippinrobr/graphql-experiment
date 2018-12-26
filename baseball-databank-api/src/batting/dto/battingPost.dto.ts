import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite:2018-baseball-databank.db');

export const BattingPost = sequelize.define('BattingPost', {
    playerID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    round: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    teamID: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    yearID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    lgID: Sequelize.STRING,
    G: Sequelize.INTEGER,
    AB: Sequelize.INTEGER,
    R: Sequelize.INTEGER,
    H: Sequelize.INTEGER,
    _2B: Sequelize.INTEGER,
    _3B: Sequelize.INTEGER,
    HR: Sequelize.INTEGER,
    RBI: Sequelize.INTEGER,
    SB: Sequelize.INTEGER,
    CS: Sequelize.INTEGER,
    BB: Sequelize.INTEGER,
    SO: Sequelize.INTEGER,
    IBB: Sequelize.INTEGER,
    HBP: Sequelize.INTEGER,
    SH: Sequelize.INTEGER,
    SF: Sequelize.INTEGER,
    GIDP: Sequelize.INTEGER
},{
    timestamps: false,
    freezeTableName: true
});
