import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

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

  @Get()
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  // DTO를 사용하지 않을 경우
  // @Post()
  // createBoard(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ): Board {
  //   console.log(title);
  //   console.log(description);
  //   return this.boardsService.createBoard(title, description);
  // }

  // DTO를 사용할 경우
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    const found = this.boardsService.getBoardById(id);
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  @Delete('/:id')
  deleteBoardById(@Param('id') id: string): void {
    return this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}
