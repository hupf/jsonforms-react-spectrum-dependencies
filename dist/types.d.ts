import { AriaButtonProps } from "@react-types/button";
import { HTMLAttributes, RefObject } from "react";
import { CalendarProps, RangeCalendarProps } from "@react-types/calendar";
import { CalendarState, RangeCalendarState } from "@react-stately/calendar";
import { PressProps } from "@react-aria/interactions";
type DOMProps = HTMLAttributes<HTMLElement>;
export interface CalendarAria {
    calendarProps: DOMProps;
    calendarTitleProps: DOMProps;
    nextButtonProps: AriaButtonProps;
    prevButtonProps: AriaButtonProps;
    calendarBodyProps: DOMProps & {
        ref: RefObject<HTMLTableElement>;
    };
    captionProps: DOMProps & {
        children: string;
    };
}
export function useCalendar(props: CalendarProps, state: CalendarState): CalendarAria;
export function useRangeCalendar(props: RangeCalendarProps, state: RangeCalendarState): CalendarAria;
export interface AriaCalendarCellProps {
    date: Date;
}
interface CalendarCellAria {
    cellProps: PressProps & HTMLAttributes<HTMLElement>;
    buttonProps: HTMLAttributes<HTMLElement>;
}
export function useCalendarCell(props: AriaCalendarCellProps, state: CalendarState | RangeCalendarState, ref: RefObject<HTMLElement>): CalendarCellAria;

//# sourceMappingURL=types.d.ts.map
