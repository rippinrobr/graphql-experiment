import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sqlite:2018-baseball-databank.db');

export const PitchingPost = sequelize.define('PitchingPost', {
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
    round: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    lgID: Sequelize.STRING,
    W: Sequelize.INTEGER,
    L: Sequelize.INTEGER,
    G: Sequelize.INTEGER,
    GS: Sequelize.INTEGER,
    CG: Sequelize.INTEGER,
    SHO: Sequelize.INTEGER,
    SV: Sequelize.INTEGER,
    IPouts: Sequelize.INTEGER,
    H: Sequelize.INTEGER,
    ER: Sequelize.INTEGER,
    HR: Sequelize.INTEGER,
    BB: Sequelize.INTEGER,
    SO: Sequelize.INTEGER,
    BAOpp: Sequelize.DOUBLE,
    ERA: Sequelize.DOUBLE,
    IBB: Sequelize.INTEGER,
    WP: Sequelize.INTEGER,
    HBP: Sequelize.DOUBLE,
    BK: Sequelize.INTEGER,
    BFP: Sequelize.INTEGER,
    GF: Sequelize.INTEGER,
    R: Sequelize.INTEGER,
    SH: Sequelize.INTEGER,
    SF: Sequelize.INTEGER,
    GIDP: Sequelize.INTEGER
}, {
    timestamps: false,
    freezeTableName: true
})