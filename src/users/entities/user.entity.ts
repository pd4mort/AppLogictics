import { IsOptional } from "class-validator";
import { Role } from "../../common/enums/rol.enum";
import { Entity, Column, DeleteDateColumn, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false, select: false })
    password:string;

    @Column({ type: 'enum', enum: Role })
    role?: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
