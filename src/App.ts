
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import * as fs from 'fs';

import { SendConfig, SmtpConfig } from './interfaces/SendConfig';

const sendConfigJson = JSON.parse(fs.readFileSync(`${__dirname}/../send_config.json`, 'UTF-8'));
const sendConfig: SendConfig = plainToClass<SendConfig, string>(SendConfig, sendConfigJson);
console.log(sendConfig.smtpConfig.username);
