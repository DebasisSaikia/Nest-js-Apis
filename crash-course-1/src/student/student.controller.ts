import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student By Id ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    return `Student created with following data ${JSON.stringify(body)}`;
  }
  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Update student with Id of ${studentId} with data of ${JSON.stringify(
      body,
    )}`;
  }
}
