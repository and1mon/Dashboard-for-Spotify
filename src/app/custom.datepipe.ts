import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'customDate',
    standalone: true
})
export class CustomDatePipe extends
    DatePipe implements PipeTransform {
    override transform(value: any, args?: any): any {

        const convertMinute = 1000 * 60;
        const convertHour = convertMinute * 60;
        const convertDay = convertHour * 24;
        const convertWeek = convertDay * 7;
        const convertMonth = convertDay * 30;
        const convertYear = convertDay * 365;

        const currentDate = new Date();
        const playbackDate = new Date(value);

        let timeAgo;

        let yearsAgo = Math.floor((currentDate.getTime() - playbackDate.getTime()) / convertYear);
        let monthsAgo = Math.floor((currentDate.getTime() - playbackDate.getTime()) / convertMonth);
        let weeksAgo = Math.floor((currentDate.getTime() - playbackDate.getTime()) / convertWeek);
        let daysAgo = Math.floor((currentDate.getTime() - playbackDate.getTime()) / convertDay);
        let hoursAgo = Math.floor((currentDate.getTime() - playbackDate.getTime()) / convertHour);
        let minutesAgo = Math.floor((currentDate.getTime() - playbackDate.getTime()) / convertMinute);

        if (yearsAgo > 0) {
            timeAgo = yearsAgo + "y";
        }
        else if (daysAgo > 30) {
            timeAgo = monthsAgo + "mon";
        }
        else if (daysAgo > 6) {
            timeAgo = weeksAgo + "w";
        }
        else if (hoursAgo > 48) {
            timeAgo = daysAgo + "d";
        }
        else if (minutesAgo > 59) {
            timeAgo = hoursAgo + "h";
        }
        else {
            timeAgo = minutesAgo + "min";
        }

        return timeAgo;
    }
}