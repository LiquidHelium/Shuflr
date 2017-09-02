import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Playlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shortcode: string;

  @Column({ length: 9999 })
  videos: string;
}
