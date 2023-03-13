/**
 * class나 interface로 만들 수 있다.
 * interface : 변수의 타입만 체크
 * class : 변수의 타입도 체크하고, 인스턴스 또한 생성할 수 있음
 */

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}
