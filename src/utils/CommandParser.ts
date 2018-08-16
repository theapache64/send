import fs from 'fs';
import { SendConfig } from '../interfaces/SendConfig';

export class CommandParser {

  private arr: string[];
  private reason: string;
  private sendConfig: SendConfig;

  private filePath: string;
  private email: string;

  constructor(arr: string[], sendConfig: SendConfig) {
    this.arr = arr;
    this.sendConfig = sendConfig;
  }
  getReason(): string {
    return this.reason;
  }

  getFilePath(): string {
    return this.filePath;
  }

  getEmail(): string {
    return this.email;
  }

  isValidCommand(): boolean {

    this.reason = '';

    if (this.arr.length === 6) {
      const baseCommand = this.arr[2];
      if (baseCommand === 'send') {
        const fileName = this.arr[3];
        // Checking if file exists
        const filePath = `${process.cwd()}/${fileName}`;
        if (fs.existsSync(filePath)) {

          // Setting filePath
          this.filePath = filePath;

          const toFlag = this.arr[4];
          if (toFlag === 'to') {
            const to = this.arr[5];
            if (to.indexOf('@') !== -1) {
              this.email = to;
            } else {
              this.email = `${to}@${this.sendConfig.defaultDomain}`;
            }
          } else {
            this.reason = `Expected 'to', but found ${toFlag}`;
          }
        } else {
          this.reason = `File not found ${filePath}`;
        }
      } else {
        this.reason = `Unsupported base command '${baseCommand}'`;
      }
    } else {
      this.reason = 'Invalid command : Number of segments should be 6';
    }

    return !this.reason;

  }
}
