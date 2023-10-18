import { Column, Entity } from "typeorm";

@Entity()
export class Item {

    @Column({ primary: true, generated: true })
    id: number;

    @Column()
    destinationAddress: string;

    @Column()
    postalCode: number

    @Column()
    destinationName: string;
    
    @Column()
    senderName: string;

    @Column({ type: 'decimal', precision: 2, scale: 1 })
    itemWeight: number;
}
