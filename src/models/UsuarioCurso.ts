import { Table, Model, Column, ForeignKey, DataType } from 'sequelize-typescript';
import { Usuario } from './Usuarios';
import { Curso } from './Cusro';

@Table({
    tableName: 'usuario_curso',
    timestamps: false,
})
export class UsuarioCurso extends Model<UsuarioCurso> {
    @ForeignKey(() => Usuario)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    usuarioId!: number;

    @ForeignKey(() => Curso)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cursoId!: number;
}
