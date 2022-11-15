import {Body, Controller, HttpCode, Post} from '@nestjs/common';
import {FeedbackService} from "./feedback.service";
import {FeedbackDto} from "./dto";

@Controller('feedback')
export class FeedbackController {

    constructor(private readonly feedbackService: FeedbackService) {
    }

    @Post()
    @HttpCode(201)
    uploadFeedback(@Body() body: FeedbackDto): Promise<void>{
        return this.feedbackService.insertFeedback(body);
    }

    @Post('test')
    @HttpCode(201)
    uploadMessage(@Body() body: FeedbackDto): Promise<any>{
        return this.feedbackService.testFeedback(body);
    }
}
