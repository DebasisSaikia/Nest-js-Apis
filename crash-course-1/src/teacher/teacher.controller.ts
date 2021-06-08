import { Controller, Get, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'Get all teachers';
  }
  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string) {
    return `Teacher id is ${teacherId}`;
  }
}
