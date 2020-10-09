export interface Mapper<Response, Type> {
  format(request: Response): Type;
}
