// styled.d.ts : 타입 선언 파일, 테마 작성파일
import "styled-components";
import { ColorsTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
  }
}
