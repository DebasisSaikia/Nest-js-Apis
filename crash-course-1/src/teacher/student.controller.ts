import { Controller, Get, Put, Param, Body } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string) {
    return `get all Students that belong to a teacher with id ${teacherId}`;
  }
  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ) {
    return `Update student with id ${studentId} teacher with id ${teacherId}`;
  }
}
