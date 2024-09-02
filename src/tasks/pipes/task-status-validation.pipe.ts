import {  BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform{

     readonly validStatus = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE
     ]

     transform(value: any) {
        value = value.toUpperCase()

        if(!this.IsValideStatus(value)){
            throw new BadRequestException(`"${value}" is not valid status`)
        }
        return value
     }


     private IsValideStatus (status : any){
        const idx = this.validStatus.indexOf(status)
        return idx !== -1
     }
}