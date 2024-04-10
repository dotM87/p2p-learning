import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";

export class RegisterDto {
  @IsString()
  @MinLength(1)
  username: string;


  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  password: string;

  // id de problema random de codeforces
  contestId: string;
  // index de problema random de codeforces
  indexProblem: string;
}