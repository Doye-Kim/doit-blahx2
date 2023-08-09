export default class CustomServerError extends Error {
  public statusCode: number;

  public location?: string;

  //값 안 넘기면 500으로 설정
  constructor({ statusCode = 500, message, location }: { statusCode?: number; message: string; location?: string }) {
    super(message);
    this.statusCode = statusCode;
    this.location = location;
  }

  serializeErrors(): { message: string } | string {
    return { message: this.message };
  }
}
