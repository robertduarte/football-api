import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Player } from "./Player";
import { Competition } from "./Competition";

@Entity()
@ObjectType()
export class Team extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn("int")
  id: number;

  @Field()
  @Column("text")
  name: string = "";

  @Field()
  @Column("text")
  tla?: string = "";

  @Field()
  @Column("text")
  shortName: string = "";

  @Field()
  @Column("text")
  areaName: string = "";

  @Field()
  @Column("text")
  address: string = "";

  @Field(() => [Player], { nullable: true })
  @OneToMany(() => Player, (player) => player.team)
  players: Player[];

  @ManyToMany(() => Competition, { eager: true })
  @JoinTable()
  competitions: Competition[];
}
