import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class Item {
  @Column({ primary: true, generated: true })
  id: number;

  @Column()
  destinationAddress: string;

  @Column()
  postalCode: number;

  @Column()
  destinationName: string;

  @Column()
  senderName: string;

  @Column({ type: 'decimal', precision: 3, scale: 1 })
  itemWeight: number;

  @Column()
  company: string;

  @Column()
  price: number;

  @DeleteDateColumn({ type: 'timestamp', default: null, nullable: true })
  deletedAt?: Date;
}
