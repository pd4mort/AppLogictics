import { Column, Entity } from "typeorm";

@Entity()
export class PackageType {

    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    typeName: string;

    @Column({ type: 'decimal', precision: 3, scale: 1 })
    minWeight: number

    @Column({ type: 'decimal', precision: 3, scale: 1 })
    maxWeight: number;
    
    @Column()
    form: string;
}
