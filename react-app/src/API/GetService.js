import axios from "axios";

export default class GetService{
  static async getAll() {
    try {
      const responce = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
      return responce.data.Valute;
    } catch (e) {
      console.log('Ошибка запроса!',e);
    }
  }
}