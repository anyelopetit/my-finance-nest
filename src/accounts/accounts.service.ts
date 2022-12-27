import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account, AccountDocument } from './schemas/account.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<AccountDocument>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    const newAccount = new this.accountModel(createAccountDto);
    console.log('newAccount', newAccount);
    return await newAccount.save();
  }

  findAll() {
    return this.accountModel.find().exec();
  }

  findOne(id: string) {
    return this.accountModel.findById(id);
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.accountModel.findById(id).update(updateAccountDto);
  }

  remove(id: string) {
    return `This action removes a #${id} account`;
  }
}
