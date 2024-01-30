import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
@ObjectType()
export class Competition extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn("int")
  id: number;

  @Field()
  @Column("text")
  name: string = "";

  @Field()
  @Column("text")
  code: string = "";

  @Field()
  @Column("text")
  areaName: string = "";
}
