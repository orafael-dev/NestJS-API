import {  Body,  Controller,  Delete,  Get,  Param,  ParseIntPipe,  Patch,  Post,  Put,} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ParamId } from 'src/decorators/param-id.decorator';
import { UpdatePutUserDTO } from './dto/update-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async showById(@ParamId() id: number) {
    return this.userService.showById(id);
  }

  @Put(':id')
  async update(
    @Body() data: UpdatePutUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
