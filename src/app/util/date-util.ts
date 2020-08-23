export class DateUtil {

    static getHoras(data:Date): string{
        return `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
    }

    static converter(data: string): Date {
        if (data) {
          const arrayData: number[] = data
            .split("-")
            .map((num, ind) => (ind === 1 ? +num - 1 : +num));
          return new Date(arrayData[0], arrayData[1], arrayData[2]);
        }
      }
    
      static convertToString(data: Date) {
        return `${data.getFullYear()}-${(`00${data.getMonth() + 1}`).slice(-2)}-${(`00${data.getDate()}`).slice(-2)}`;
      }
}
