import { HttpStatus } from '@nestjs/common';
import { UnitsDTO } from './units.dto';
import { UnitsService } from './units.service';
export declare class UnitsController {
    private unitService;
    constructor(unitService: UnitsService);
    showAllUnits(): Promise<{
        statusCode: HttpStatus;
        data: import("./units.entity").UnitsEntity[];
    }>;
    createUnits(data: UnitsDTO): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./units.entity").UnitsEntity;
    }>;
    readUser(id: number): Promise<{
        statusCode: HttpStatus;
        data: import("./units.entity").UnitsEntity;
    }>;
    uppdateUnits(id: number, data: Partial<UnitsDTO>): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: import("./units.entity").UnitsEntity;
    }>;
    deleteUser(id: number): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}
