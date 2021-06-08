import { Controller, Get } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'Get all teachers';
  }
  @Get('/:teacherId')
  getTeacherById() {
    return 'get Teacher by Id';
  }
}
