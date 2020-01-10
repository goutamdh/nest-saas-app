import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CreateTenantDto } from './dtos/create-tenant.dto';
import { TenantsService } from './tenants.service';

@ApiUseTags('tenants')
@Controller('tenants')
export class TenantsController {
    constructor(
        private tenantService: TenantsService,
    ) {}

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() createTenant: CreateTenantDto) {
        return this.tenantService.create(createTenant);
    }

    @Get()
    @ApiResponse({ status: 200 })
    async findAll() {
        return this.tenantService.findAll();
    }
}