import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config';
import { title } from 'process';

const Evento = sequelize.define('Evento', {
    
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING
    },
    lugar: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true
});

export default Evento;
