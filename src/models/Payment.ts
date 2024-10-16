import { DateDataType } from 'sequelize';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

@Table({
    tableName: 'payment',
    timestamps: true,
})
export class Payment extends Model<Payment> {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true 
    })
    id_usuario!: number

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    fecha!: Date

    @Column({
        type: DataType.STRING(45),
        allowNull: false
    })
    estudiante!: string

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    celular!: number

    @Column({
        type: DataType.STRING(45),
        allowNull: false,
    })
    estado!: string
}
