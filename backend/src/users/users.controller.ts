import { Body, Controller, Post } from '@nestjs/common';@Controller('users') export class UsersController{@Post() create(@Body() body:any){return {id:Date.now().toString(),...body};}}
