import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PersonsService } from './persons.service';
import type { Person } from './interfaces/person.interface';

@Controller('persons')
export class PersonsController {
    constructor(private personsService: PersonsService) {}

    @Post()
    async createPerson(@Body() createPerson: CreatePersonDto): Promise<CreatePersonDto> {
        return this.personsService.create(createPerson);
    }

    @Get()
    async findAllPersons(): Promise<Person[]> {
        return this.personsService.findAll();
    }

    @Get(':id')
    findPerson(@Param() params: Record<string, any>): string {
        return `Этот action возвращает конкретного человека с id ${params.id}`;
    }
}
