import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonsService {
    private readonly persons: CreatePersonDto[] = [];

    create(person: CreatePersonDto) {
        this.persons.push(person);
        return person;
    }

    findAll(): CreatePersonDto[] {
        return this.persons;
    }
}
