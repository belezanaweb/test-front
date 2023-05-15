export interface AsyncUseCase<T> {
  invoke(): Promise<T>;
}
