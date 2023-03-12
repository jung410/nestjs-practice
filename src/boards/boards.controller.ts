import { Controller, Get } from '@nestjs/common';

// 모듈을 생성할 때와 마찬가지로 nest cli 명령어로 쉽게 생성 가능
// nest g controller boards --no-spec << 요런식으로, app.module 파일에 자동으로 Import까지 해줌!
// --no-spec 은 테스트 코드 작성 X
@Controller('boards')
export class BoardsController {}
