import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript'
import { Usuario } from './Usuarios';
import { UsuarioCurso } from './UsuarioCurso';

@Table({
    tableName: 'curso',
    timestamps: true,
})
export class Curso extends Model<Curso> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    })
    id_curso!: number

    @Column({
        type: DataType.STRING(250),
        allowNull: false,
    })
    nombre_curso!: string

    @Column({
        type: DataType.STRING(250),
        allowNull: false,
    })
    nivel_categorias!: string

    @Column({
        type: DataType.STRING(1000),
        allowNull: false,
    })
    descripcion_curso!: string

    @Column({
        type: DataType.STRING(1000),
        allowNull: false,
    })
    maestro!: string

    @Column({
        type: DataType.DECIMAL,
        allowNull: false,
    })
    costo_curso!: number

    @BelongsToMany(() => Usuario, () => UsuarioCurso)
    usuarios!: Usuario[];

}