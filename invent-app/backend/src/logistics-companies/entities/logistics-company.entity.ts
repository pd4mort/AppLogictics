import { IsOptional } from "class-validator";
import { Column, DeleteDateColumn, Entity } from "typeorm";

@Entity()
export class LogisticsCompany {

    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    name: string;

    @Column()
    areaCode: number;

    @IsOptional()
    @Column({ length: 600 })
    image: string;

    @DeleteDateColumn()
    deletedAt: Date;
}