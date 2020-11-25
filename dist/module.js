import _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _babelRuntimeHelpersEsmExtends from "@babel/runtime/helpers/esm/extends";
import { useLocale } from "@react-aria/i18n";
import { useMemo, useState } from "react";
import { useControlledState } from "@react-stately/utils";
import { addDays, addMonths, addWeeks, addYears, endOfDay, endOfMonth, getDaysInMonth, isSameDay, isSameMonth, setDay, startOfDay, startOfMonth, subDays, subMonths, subWeeks, subYears } from "date-fns";
// Data from https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/weekData.json
// Locales starting on Sunday have been removed for compression.
const $c9003c7b7bcb5a74bbd4485504bdc6b$var$data = {
  '001': 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AT: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BY: 1,
  CH: 1,
  CL: 1,
  CM: 1,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  HR: 1,
  HU: 1,
  IE: 1,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JO: 6,
  KG: 1,
  KW: 6,
  KZ: 1,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MK: 1,
  MN: 1,
  MQ: 1,
  MV: 5,
  MY: 1,
  NL: 1,
  NO: 1,
  NZ: 1,
  OM: 6,
  PL: 1,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SD: 6,
  SE: 1,
  SI: 1,
  SK: 1,
  SM: 1,
  SY: 6,
  TJ: 1,
  TM: 1,
  TR: 1,
  UA: 1,
  UY: 1,
  UZ: 1,
  VA: 1,
  VN: 1,
  XK: 1
};

function $c9003c7b7bcb5a74bbd4485504bdc6b$export$useWeekStart() {
  let region = $c9003c7b7bcb5a74bbd4485504bdc6b$var$useRegion();
  return $c9003c7b7bcb5a74bbd4485504bdc6b$var$data[region] || 0;
}

function $c9003c7b7bcb5a74bbd4485504bdc6b$var$useRegion() {
  let {
    locale
  } = useLocale(); // If the Intl.Locale API is available, use it to get the region for the locale.
  // @ts-ignore

  if (Intl.Locale) {
    // @ts-ignore
    return new Intl.Locale(locale).maximize().region;
  } // If not, just try splitting the string.


  return locale.split('-')[1];
}

export function useCalendarState(props) {
  let [value, setControlledValue] = useControlledState(props.value || undefined, props.defaultValue, props.onChange);
  let dateValue = value ? new Date(value) : null;
  let defaultMonth = dateValue || new Date();
  let [currentMonth, setCurrentMonth] = useState(defaultMonth); // TODO: does this need to be in state at all??

  let [focusedDate, setFocusedDate] = useState(defaultMonth);
  let [isFocused, setFocused] = useState(props.autoFocus || false);
  let month = currentMonth.getMonth();
  let year = currentMonth.getFullYear();
  let weekStart = $c9003c7b7bcb5a74bbd4485504bdc6b$export$useWeekStart();
  let monthStartsAt = (startOfMonth(currentMonth).getDay() - weekStart) % 7;

  if (monthStartsAt < 0) {
    monthStartsAt += 7;
  }

  let days = getDaysInMonth(currentMonth);
  let weeksInMonth = Math.ceil((monthStartsAt + days) / 7);
  let minDate = props.minValue ? startOfDay(props.minValue) : null;
  let maxDate = props.maxValue ? endOfDay(props.maxValue) : null; // Sets focus to a specific cell date

  function focusCell(date) {
    if ($df6f60a200969972340f467bbdd2506e$var$isInvalid(date, minDate, maxDate)) {
      return;
    }

    if (!isSameMonth(date, currentMonth)) {
      setCurrentMonth(startOfMonth(date));
    }

    setFocusedDate(date);
  }

  function setValue(value) {
    if (!props.isDisabled && !props.isReadOnly) {
      setControlledValue(value);
    }
  }

  let weekDays = useMemo(() => [...new Array(7).keys()].map(index => setDay(Date.now(), (index + weekStart) % 7)), [weekStart]);
  return {
    isDisabled: props.isDisabled,
    isReadOnly: props.isReadOnly,
    value: dateValue,
    setValue,
    currentMonth,
    focusedDate,
    setFocusedDate,

    focusNextDay() {
      focusCell(addDays(focusedDate, 1));
    },

    focusPreviousDay() {
      focusCell(subDays(focusedDate, 1));
    },

    focusNextWeek() {
      focusCell(addWeeks(focusedDate, 1));
    },

    focusPreviousWeek() {
      focusCell(subWeeks(focusedDate, 1));
    },

    focusNextMonth() {
      focusCell(addMonths(focusedDate, 1));
    },

    focusPreviousMonth() {
      focusCell(subMonths(focusedDate, 1));
    },

    focusStartOfMonth() {
      focusCell(startOfMonth(focusedDate));
    },

    focusEndOfMonth() {
      focusCell(endOfMonth(startOfDay(focusedDate)));
    },

    focusNextYear() {
      focusCell(addYears(focusedDate, 1));
    },

    focusPreviousYear() {
      focusCell(subYears(focusedDate, 1));
    },

    selectFocusedDate() {
      setValue(focusedDate);
    },

    selectDate(date) {
      setValue(date);
    },

    isFocused,
    setFocused,
    weeksInMonth,
    weekStart,
    daysInMonth: getDaysInMonth(currentMonth),
    weekDays,

    getCellDate(weekIndex, dayIndex) {
      let day = weekIndex * 7 + dayIndex - monthStartsAt + 1;
      return new Date(year, month, day);
    },

    isInvalid(date) {
      return $df6f60a200969972340f467bbdd2506e$var$isInvalid(date, minDate, maxDate);
    },

    isSelected(date) {
      return isSameDay(date, value);
    },

    isCellFocused(date) {
      return isFocused && focusedDate && isSameDay(date, focusedDate);
    },

    isCellDisabled(date) {
      return props.isDisabled || !isSameMonth(date, currentMonth) || $df6f60a200969972340f467bbdd2506e$var$isInvalid(date, minDate, maxDate);
    },

    isPreviousMonthInvalid() {
      return $df6f60a200969972340f467bbdd2506e$var$isInvalid(endOfMonth(subMonths(currentMonth, 1)), minDate, maxDate);
    },

    isNextMonthInvalid() {
      return $df6f60a200969972340f467bbdd2506e$var$isInvalid(startOfMonth(addMonths(currentMonth, 1)), minDate, maxDate);
    }

  };
}

function $df6f60a200969972340f467bbdd2506e$var$isInvalid(date, minDate, maxDate) {
  return minDate != null && date < minDate || maxDate != null && date > maxDate;
}

export function useRangeCalendarState(props) {
  let {
    value: valueProp,
    defaultValue,
    onChange
  } = props,
      calendarProps = _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose(props, ["value", "defaultValue", "onChange"]);

  let [value, setValue] = useControlledState(valueProp, defaultValue, onChange);
  let dateRange = value != null ? $b99e30b96646887f54a48af37fe3b03$var$convertRange(value) : null;
  let [anchorDate, setAnchorDate] = useState(null);
  let calendar = useCalendarState(_babelRuntimeHelpersEsmExtends({}, calendarProps, {
    value: value && value.start
  }));
  let highlightedRange = anchorDate ? $b99e30b96646887f54a48af37fe3b03$var$makeRange(anchorDate, calendar.focusedDate) : value && $b99e30b96646887f54a48af37fe3b03$var$makeRange(dateRange.start, dateRange.end);

  let selectDate = date => {
    if (props.isReadOnly) {
      return;
    }

    if (!anchorDate) {
      setAnchorDate(date);
    } else {
      setValue($b99e30b96646887f54a48af37fe3b03$var$makeRange(anchorDate, date));
      setAnchorDate(null);
    }
  };

  return _babelRuntimeHelpersEsmExtends({}, calendar, {
    value: dateRange,
    setValue,
    anchorDate,
    setAnchorDate,
    highlightedRange,

    selectFocusedDate() {
      selectDate(calendar.focusedDate);
    },

    selectDate,

    highlightDate(date) {
      if (anchorDate) {
        calendar.setFocusedDate(date);
      }
    },

    isSelected(date) {
      return highlightedRange && date >= highlightedRange.start && date <= highlightedRange.end;
    }

  });
}

function $b99e30b96646887f54a48af37fe3b03$var$makeRange(start, end) {
  if (end < start) {
    [start, end] = [end, start];
  }

  return {
    start: startOfDay(start),
    end: endOfDay(end)
  };
}

function $b99e30b96646887f54a48af37fe3b03$var$convertRange(range) {
  return {
    start: new Date(range.start),
    end: new Date(range.end)
  };
}
//# sourceMappingURL=module.js.map
