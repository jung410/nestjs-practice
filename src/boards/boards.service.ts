import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
// 컨트롤러을 생성할 때와 마찬가지로 nest cli 명령어로 쉽게 생성 가능
// nest g service boards --no-spec << 요런식으로, app.module 파일에 자동으로 Import까지 해줌!
// --no-spec 은 테스트 코드 작성 X
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  // 모든 게시물 가져오기
  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
