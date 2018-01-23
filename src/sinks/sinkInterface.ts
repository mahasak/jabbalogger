export interface SinksWriter {
  error(message?: any, ...properties: any[]);
  warn(message?: any, ...properties: any[]);
  info(message?: any, ...properties: any[]);
  debug(message?: any, ...properties: any[]);
  log(message?: any, ...properties: any[]);
}
