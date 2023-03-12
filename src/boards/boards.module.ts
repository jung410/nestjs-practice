import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';

// 모듈을 최초 생성할때는 nest cli 명령어로 쉽게 생성 가능
// nest g module boards << 요런식으로, app.module 파일에 자동으로 Import까지 해줌!
@Module({
  controllers: [BoardsController],
})
export class BoardsModule {}
