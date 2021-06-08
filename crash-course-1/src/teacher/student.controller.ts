import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'get Teacher by Id';
  }
  @Put('/:studentId')
  updateStudentTeacher() {}
}
