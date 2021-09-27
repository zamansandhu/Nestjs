import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnitsDTO } from './units.dto';
import { UnitsEntity } from './units.entity';

@Injectable()
export class UnitsService {
    constructor(
        @InjectRepository(UnitsEntity)
          private unitsRepository: Repository<UnitsEntity>,
        ) {}
        async showAll() {
            return await this.unitsRepository.find();
          }

          async create(data: UnitsDTO) {
            const units = this.unitsRepository.create(data);
            await this.unitsRepository.save(data);
            return units;
          }

          async read(id: number) {
            return await this.unitsRepository.findOne({ where: { _id: id } });
          }
        
          async update(_id: number, data: Partial<UnitsDTO>) {
            await this.unitsRepository.update({ _id }, data);
            return await this.unitsRepository.findOne({ _id });
          }
        
          async destroy(_id: number) {
            await this.unitsRepository.delete({ _id });
            return { deleted: true };
          }
        
}
