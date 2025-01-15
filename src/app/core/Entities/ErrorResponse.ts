export interface ErrorResponse {
  success: boolean;
  message: string;
  errors?: string[];
  id?: number;
}
