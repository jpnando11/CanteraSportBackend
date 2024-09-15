import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'usuario',
    timestamps: true,
})
export class Usuario extends Model<Usuario> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id_usuario!: number;

    @Column({
        type: DataType.STRING(45),
        allowNull: false
    })
    primer_nombre!: string;

    @Column({
        type: DataType.STRING(45),
        allowNull: false
    })
    segundo_nombre!: string;

    @Column({
        type: DataType.STRING(45),
        allowNull: false
    })
    primer_apellido!: string;

    @Column({
        type: DataType.STRING(45),
        allowNull: false
    })
    segundo_apellido!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    edad!: number

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    correo!: string;

    @Column({
        type: DataType.STRING(45),
        allowNull: false
    })
    telefono!: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false
    })
    contrasena!: string;

    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    tipo_identificacion!: string;

    @Column({
        type: DataType.STRING(15),
        allowNull: false
    })
    identificacion!: string;

    @Column({
        type: DataType.STRING(15),
        allowNull: false,
        defaultValue: 'user'
    })
<<<<<<< HEAD
=======
    identificacion!: string

    @Column({
        type: DataType.STRING(15),
        allowNull: false,
    })
    rol!: string  // ESTUDIANTE, ADMITRADOR
}
>>>>>>> 2aaf0b0fdbbf59d9de5e366e82b3ec84540a01bd

    
    role!: string;
}