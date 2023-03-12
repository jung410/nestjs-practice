import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

// 모듈을 생성할 때와 마찬가지로 nest cli 명령어로 쉽게 생성 가능
// nest g controller boards --no-spec << 요런식으로, app.module 파일에 자동으로 Import까지 해줌!
// --no-spec 은 테스트 코드 작성 X
@Controller('boards')
export class BoardsController {
  /**
   * 원래 방식은 이런식으로 작성된다.
   * boardsService: BoardsService;
   * constructor(boardsService: BoardsService) {
   *   this.boardsService = boardsService;
   * }
   */

  // 접근제한자를 생성자의 파라미터로 선언하면 그 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언됨
  constructor(private boardsService: BoardsService) {}
}
