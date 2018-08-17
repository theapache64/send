import 'reflect-metadata';

import { plainToClass } from 'class-transformer';
import fs from 'fs';

import { SendConfig } from './interfaces/SendConfig';
import { CommandParser } from './utils/CommandParser';
import { Send } from './utils/Send';

const sendConfigJson = JSON.parse(fs.readFileSync(`${__dirname}/../send_config.json`, 'UTF-8'));
const sendConfig: SendConfig = plainToClass<SendConfig, string>(SendConfig, sendConfigJson);

const command = new CommandParser(process.argv, sendConfig);
if (command.isValidCommand()) {
  // Sending file
  Send.sendFile(command, sendConfig);
} else {
  console.log('Invalid command :', command.getReason());
}
