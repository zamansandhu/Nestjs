import { Repository } from 'typeorm';
import { UnitsDTO } from './units.dto';
import { UnitsEntity } from './units.entity';
export declare class UnitsService {
    private unitsRepository;
    constructor(unitsRepository: Repository<UnitsEntity>);
    showAll(): Promise<UnitsEntity[]>;
    create(data: UnitsDTO): Promise<UnitsEntity>;
    read(id: number): Promise<UnitsEntity>;
    update(_id: number, data: Partial<UnitsDTO>): Promise<UnitsEntity>;
    destroy(_id: number): Promise<{
        deleted: boolean;
    }>;
}
