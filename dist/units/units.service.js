"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const units_entity_1 = require("./units.entity");
let UnitsService = class UnitsService {
    constructor(unitsRepository) {
        this.unitsRepository = unitsRepository;
    }
    async showAll() {
        return await this.unitsRepository.find();
    }
    async create(data) {
        const units = this.unitsRepository.create(data);
        await this.unitsRepository.save(data);
        return units;
    }
    async read(id) {
        return await this.unitsRepository.findOne({ where: { _id: id } });
    }
    async update(_id, data) {
        await this.unitsRepository.update({ _id }, data);
        return await this.unitsRepository.findOne({ _id });
    }
    async destroy(_id) {
        await this.unitsRepository.delete({ _id });
        return { deleted: true };
    }
};
UnitsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(units_entity_1.UnitsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UnitsService);
exports.UnitsService = UnitsService;
//# sourceMappingURL=units.service.js.map