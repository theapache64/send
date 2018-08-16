export class CommandParser {

  private arr: string[];

  constructor(arr: string[]) {
    this.arr = arr;
    console.log('Arr is ', arr);

  }

  isValidCommand(): boolean {
    if (this.arr.length === 6) {
      const baseCommand = this.arr[2];
      let isValid: boolean = false;
      if (baseCommand === 'send') {
        const fileName = this.arr[3];
        console.log('File name is', fileName);
        isValid = true;
      } else {
        throw new Error('Unsupported base command ' + baseCommand);
      }

      return isValid;

    } else {
      throw new Error('Invalid command : Number of segments should be 6');
    }

  }
}
