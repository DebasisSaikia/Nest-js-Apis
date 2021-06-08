import { Controller, Get, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'get all Students that belong to a teacher';
  }
  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Update student teacher';
  }
}
