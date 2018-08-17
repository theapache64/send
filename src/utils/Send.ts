import { SendConfig } from '../interfaces/SendConfig';
import nodemailer from 'nodemailer';

export class Send {
  static sendFile(filePath: string, email: string, sendConfig: SendConfig): any {

    // Getting fileName
    const fileName = filePath.replace(/^.*[\\\/]/, '');
    console.log(`Sending ${fileName} to ${email}...`);

    const smtp = sendConfig.smtpConfig;
    const transport = nodemailer.createTransport(
      `smtp://${smtp.username}:${smtp.password}@${smtp.host}/?pool=true&port=${smtp.port}`
    );

    transport.sendMail(
      {
        from: smtp.username,
        to: email,
        subject: `File Shared: ${fileName}`,
        text: 'Hi, \n\n Please find the attached file',
        attachments: [
          {
            path: filePath
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
