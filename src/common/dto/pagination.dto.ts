import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDTO {
  @IsPositive()
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsPositive()
  @IsOptional()
  @IsNumber()
  offset?: number;
}
