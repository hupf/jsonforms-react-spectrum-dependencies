import { DatePickerProps, DateRange, DateRangePickerProps, DateValue } from "@react-types/datepicker";
import { ValidationState, RangeValue } from "@react-types/shared";
export interface DatePickerState {
    value: Date;
    setValue: (value: Date) => void;
    selectDate: (value: Date) => void;
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    validationState: ValidationState;
}
export function useDatePickerState(props: DatePickerProps): DatePickerState;
export interface DateSegment {
    type: Intl.DateTimeFormatPartTypes;
    text: string;
    value?: number;
    minValue?: number;
    maxValue?: number;
    isPlaceholder: boolean;
}
export interface DatePickerFieldState {
    value: Date;
    setValue: (value: Date) => void;
    segments: DateSegment[];
    dateFormatter: Intl.DateTimeFormat;
    increment: (type: Intl.DateTimeFormatPartTypes) => void;
    decrement: (type: Intl.DateTimeFormatPartTypes) => void;
    incrementPage: (type: Intl.DateTimeFormatPartTypes) => void;
    decrementPage: (type: Intl.DateTimeFormatPartTypes) => void;
    setSegment: (type: Intl.DateTimeFormatPartTypes, value: number) => void;
    confirmPlaceholder: (type: Intl.DateTimeFormatPartTypes) => void;
}
export function useDatePickerFieldState(props: DatePickerProps): DatePickerFieldState;
export interface DateRangePickerState {
    value: DateRange;
    setValue: (value: DateRange) => void;
    setDate: (part: keyof DateRange, value: DateValue) => void;
    selectDateRange: (value: RangeValue<Date>) => void;
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    validationState: ValidationState;
}
export function useDateRangePickerState(props: DateRangePickerProps): DateRangePickerState;

//# sourceMappingURL=types.d.ts.map
