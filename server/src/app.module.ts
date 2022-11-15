import { Module } from '@nestjs/common';
import { FeedbackModule } from './feedback/feedback.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FeedbackModule, PrismaModule]
})
export class AppModule {}
