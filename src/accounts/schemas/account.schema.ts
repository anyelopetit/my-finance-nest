import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {
  @Prop()
  title: string;

  @Prop()
  amount: number;

  @Prop()
  color: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
