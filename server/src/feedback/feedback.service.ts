import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { FeedbackDto } from "./dto";

@Injectable()
export class FeedbackService {

    constructor(private readonly prisma: PrismaService) {
    }

    async insertFeedback(dto: FeedbackDto): Promise<void>{
        const { name, email, message: content } = dto;
        await this.prisma.message.create({
            data: {
                content,
                owner: {
                    connectOrCreate: {
                        where: {
                            email,
                        },
                        create: {
                            name,
                            email,
                        }
                    }
                }
            },
        });
    };
}
