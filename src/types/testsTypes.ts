import { Test } from '@prisma/client';

export type ITypesData = Omit<Test, 'id'>;

export type IcreateData = Omit<Test, "id" >;

export type ITestInput = {
    name: string,
    pdfUrl: string,
    category: string,
    discipline: string,
    teacher: string
}