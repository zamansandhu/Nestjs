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
exports.UnitsController = void 0;
const common_1 = require("@nestjs/common");
const units_service_1 = require("./units.service");
let UnitsController = class UnitsController {
    constructor(unitService) {
        this.unitService = unitService;
    }
    async showAllUnits() {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.unitService.showAll(),
        };
    }
    async createUnits(data) {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Units added successfully',
            data: await this.unitService.create(data),
        };
    }
    async readUser(id) {
        return {
            statusCode: common_1.HttpStatus.OK,
            data: await this.unitService.read(id),
        };
    }
    async uppdateUnits(id, data) {
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Units update successfully',
            data: await this.unitService.update(id, data),
        };
    }
    async deleteUser(id) {
        await this.unitService.destroy(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Unit deleted successfully',
        };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "showAllUnits", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "createUnits", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "readUser", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "uppdateUnits", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnitsController.prototype, "deleteUser", null);
UnitsController = __decorate([
    common_1.Controller('units'),
    __metadata("design:paramtypes", [units_service_1.UnitsService])
], UnitsController);
exports.UnitsController = UnitsController;
//# sourceMappingURL=units.controller.js.map