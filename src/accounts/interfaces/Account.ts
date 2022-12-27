import { Document } from 'mongoose';

export interface Account extends Document {
  id: number;
  title: string;
  amount: number;
  color: string;
}
