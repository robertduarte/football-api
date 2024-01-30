import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Team } from "./Team";

@Entity()
@ObjectType()
export class Player extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn("int")
  id: number;

  @Field()
  @Column("text")
  name: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  position?: string;

  @Field({ nullable: true })
  @Column("text", { nullable: true })
  dateOfBirth?: string;

  @Field()
  @Column("text")
  nationality: string;

  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}
