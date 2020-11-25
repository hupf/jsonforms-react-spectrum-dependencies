import { RangeValue } from "@react-types/shared";
import { CalendarProps, RangeCalendarProps } from "@react-types/calendar";
export interface CalendarStateBase {
    isDisabled: boolean;
    isReadOnly: boolean;
    currentMonth: Date;
    focusedDate: Date;
    setFocusedDate(value: Date): void;
    focusNextDay(): void;
    focusPreviousDay(): void;
    focusNextWeek(): void;
    focusPreviousWeek(): void;
    focusNextMonth(): void;
    focusPreviousMonth(): void;
    focusStartOfMonth(): void;
    focusEndOfMonth(): void;
    focusNextYear(): void;
    focusPreviousYear(): void;
    selectFocusedDate(): void;
    selectDate(date: Date): void;
    isFocused: boolean;
    setFocused(value: boolean): void;
    weeksInMonth: number;
    weekStart: number;
    daysInMonth: number;
    weekDays: Array<Date>;
    getCellDate(weekIndex: number, dayIndex: number): Date;
    isInvalid(date: Date): boolean;
    isSelected(date: Date): boolean;
    isCellFocused(date: Date): boolean;
    isCellDisabled(date: Date): boolean;
    isPreviousMonthInvalid(): boolean;
    isNextMonthInvalid(): boolean;
}
export interface CalendarState extends CalendarStateBase {
    value: Date;
    setValue(value: Date): void;
}
export interface RangeCalendarState extends CalendarStateBase {
    value: RangeValue<Date>;
    setValue(value: RangeValue<Date>): void;
    highlightDate(date: Date): void;
    anchorDate: Date | null;
    setAnchorDate(date: Date | null): void;
    highlightedRange: RangeValue<Date>;
}
export function useCalendarState(props: CalendarProps): CalendarState;
export function useRangeCalendarState(props: RangeCalendarProps): RangeCalendarState;

//# sourceMappingURL=types.d.ts.map
