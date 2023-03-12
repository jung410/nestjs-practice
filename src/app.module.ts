import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';

@Module({
  // 최소 하나 이상의 app.module 파일이 필요하다.
  // 근데 2개 이상이면? 어떻게 동작하는거지?
  imports: [BoardsModule],
})
export class AppModule {}
