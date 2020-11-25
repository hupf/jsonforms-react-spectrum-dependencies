import { AriaButtonProps } from "@react-types/button";
import { AriaDialogProps } from "@react-types/dialog";
import { DatePickerProps, DateRangePickerProps } from "@react-types/datepicker";
import { DatePickerState, DateRangePickerState, DatePickerFieldState, DateSegment } from "@react-stately/datepicker";
import { DOMProps } from "@react-types/shared";
import { HTMLAttributes } from "react";
interface DatePickerAria {
    comboboxProps: HTMLAttributes<HTMLElement>;
    fieldProps: HTMLAttributes<HTMLElement>;
    buttonProps: AriaButtonProps;
    dialogProps: AriaDialogProps;
}
type DatePickerAriaProps = (DatePickerProps | DateRangePickerProps) & DOMProps;
export function useDatePicker(props: DatePickerAriaProps, state: DatePickerState | DateRangePickerState): DatePickerAria;
interface DateSegmentAria {
    segmentProps: HTMLAttributes<HTMLDivElement>;
}
export function useDateSegment(props: DatePickerProps & DOMProps, segment: DateSegment, state: DatePickerFieldState): DateSegmentAria;
interface DateFieldAria {
    fieldProps: HTMLAttributes<HTMLElement>;
    segmentProps: HTMLAttributes<HTMLElement>;
}
export function useDateField(props: DatePickerProps & DOMProps): DateFieldAria;
interface DateRangePickerAria {
    comboboxProps: HTMLAttributes<HTMLElement>;
    startFieldProps: HTMLAttributes<HTMLElement>;
    endFieldProps: HTMLAttributes<HTMLElement>;
    buttonProps: HTMLAttributes<HTMLElement>;
    dialogProps: HTMLAttributes<HTMLElement> & {
        role?: 'dialog' | 'alertdialog';
    };
}
export function useDateRangePicker(props: DateRangePickerProps & DOMProps, state: DateRangePickerState): DateRangePickerAria;

//# sourceMappingURL=types.d.ts.map
