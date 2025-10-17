import type { StatusCode } from "hono/utils/http-status";

export type Success = {
  message?: unknown;
  urlImage?: string;
};
const NewSuccess = (message?: string, urlImage?: string): Success => {
  return { message, urlImage };
};

export type CustomError = {
  message?: string;
};

const NewError = (message: string): CustomError => {
  return { message: message };
};

export { NewSuccess, NewError };

export type HandlerResult = {
  success?: Success;
  error?: CustomError;
  status: StatusCode;
};
