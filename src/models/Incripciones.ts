import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'incripciones',
    timestamps: true,
})
export class Incripciones extends Model<Incripciones> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true
    })
    Id_Inscripcion!: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id_Estudiante!: number

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id_Curso!: number
}

