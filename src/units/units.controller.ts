import { Controller,Get, Post, Put, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import { UnitsDTO } from './units.dto';
import { UnitsService } from './units.service';

@Controller('units')
export class UnitsController {
    constructor(private unitService: UnitsService) {}
    //Get All units

    @Get()  
  async showAllUnits() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.unitService.showAll(),
    };
  }
   //Add units

  @Post()
  async createUnits(@Body() data: UnitsDTO) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Units added successfully',
      data: await this.unitService.create(data),
    };
  }
   //Get Units by ID

  @Get(':id')
  async readUser(@Param('id') id: number) {
    return {
      statusCode: HttpStatus.OK,
      data: await this.unitService.read(id),
    };
  }
   //Update Units

  @Put(':id')
  async uppdateUnits(@Param('id') id: number, @Body() data: Partial<UnitsDTO>) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Units update successfully',
      data: await this.unitService.update(id, data),
    };
  }
   //Delete Unit By ID

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.unitService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Unit deleted successfully',
    };
  }

}
