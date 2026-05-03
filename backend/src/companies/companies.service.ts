import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto.js';

@Injectable()
export class CompaniesService {
  private readonly companies: any[] = [];

  create(payload: CreateCompanyDto) {
    const company = { id: crypto.randomUUID(), ...payload };
    this.companies.push(company);
    return company;
  }

  findBySlug(slug: string) {
    return this.companies.find((c) => c.slug === slug);
  }
}
