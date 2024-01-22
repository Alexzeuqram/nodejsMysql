const { DataTypes, Sequelize } = require('sequelize');
const { config } = require('../database');

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: 'mysql',
    port: config.port,
});

const Articulo = sequelize.define('Articulo', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    imagen: {
        type: DataTypes.STRING,
        defaultValue: 'default.png'
    }
}, {
    tableName: 'articulos',
    timestamps: false
});

module.exports = Articulo;
