import { SendConfig } from '../interfaces/SendConfig';
import nodemailer from 'nodemailer';
import { CommandParser } from './CommandParser';

export class Send {
  static sendFile(command: CommandParser, sendConfig: SendConfig)
    : any {

    // Getting fileNam
    console.log(`Sending ${command.getFileName()} to ${command.getEmail()}...`);

    const smtp = sendConfig.smtpConfig;
    const transport = nodemailer.createTransport(
      `smtp://${smtp.username}:${smtp.password}@${smtp.host}/?pool=true&port=${smtp.port}`
    );

    transport.sendMail(
      {
        from: smtp.username,
        to: command.getEmail(),
        subject: `File Shared: ${command.getFileName()}`,
        text: 'Hi, \n\n Please find the attached file',
        attachments: [
          {
            filename: command.getFileName(),
            path: command.getFilePath()
          }
        ]
      },
      (error, info) => {
        if (error) {
          console.log(`✖️ Failed to send: ${error}: ${info}`);
        } else {
          console.log('👍 Sent: ', info);
        }
        transport.close();
      });
  }

}
