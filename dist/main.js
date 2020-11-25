var {
  useDateFormatter
} = require("@react-aria/i18n");

var _dateFnsParse = $parcel$interopDefault(require("date-fns/parse"));

var {
  getDate,
  getDaysInMonth,
  getHours,
  getMinutes,
  getMonth,
  getSeconds,
  getYear,
  setDate: _setDate,
  setHours,
  setMinutes,
  setMonth,
  setSeconds,
  setYear
} = require("date-fns");

var _babelRuntimeHelpersExtends = $parcel$interopDefault(require("@babel/runtime/helpers/extends"));

var {
  useState,
  useMemo
} = require("react");

var {
  useControlledState
} = require("@react-stately/utils");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
function $d2539a9a7cedbf57925a2a19$export$setTime(date, time) {
  if (!date || !time) {
    return;
  }

  date.setHours(time.getHours());
  date.setMinutes(time.getMinutes());
  date.setSeconds(time.getSeconds());
  date.setMilliseconds(time.getMilliseconds());
}

function $d2539a9a7cedbf57925a2a19$export$isInvalid(value, minValue, maxValue) {
  return value != null && (minValue != null && value < new Date(minValue) || maxValue != null && value > new Date(maxValue));
}

function useDatePickerState(props) {
  let [isOpen, setOpen] = useState(false);
  let [value, setValue] = useControlledState(props.value, props.defaultValue || null, props.onChange);
  let dateValue = value != null ? new Date(value) : null; // Intercept setValue to make sure the Time section is not changed by date selection in Calendar

  let selectDate = newValue => {
    if (value) {
      $d2539a9a7cedbf57925a2a19$export$setTime(newValue, dateValue);
    }

    setValue(newValue);
    setOpen(false);
  };

  let validationState = props.validationState || ($d2539a9a7cedbf57925a2a19$export$isInvalid(dateValue, props.minValue, props.maxValue) ? 'invalid' : null);
  return {
    value: dateValue,
    setValue,
    selectDate,
    isOpen,
    setOpen,
    validationState
  };
}

exports.useDatePickerState = useDatePickerState;
const $b879385ee0fe7268aa1feb476f2d613$var$EDITABLE_SEGMENTS = {
  year: true,
  month: true,
  day: true,
  hour: true,
  minute: true,
  second: true,
  dayPeriod: true
};
const $b879385ee0fe7268aa1feb476f2d613$var$PAGE_STEP = {
  year: 5,
  month: 2,
  day: 7,
  hour: 2,
  minute: 15,
  second: 15
}; // Node seems to convert everything to lowercase...

const $b879385ee0fe7268aa1feb476f2d613$var$TYPE_MAPPING = {
  dayperiod: 'dayPeriod'
};

function useDatePickerFieldState(props) {
  let [validSegments, setValidSegments] = useState(props.value || props.defaultValue ? _babelRuntimeHelpersExtends({}, $b879385ee0fe7268aa1feb476f2d613$var$EDITABLE_SEGMENTS) : {});
  let dateFormatter = useDateFormatter(props.formatOptions);
  let resolvedOptions = useMemo(() => dateFormatter.resolvedOptions(), [dateFormatter]); // Determine how many editable segments there are for validation purposes.
  // The result is cached for performance.

  let numSegments = useMemo(() => dateFormatter.formatToParts(new Date()).filter(seg => $b879385ee0fe7268aa1feb476f2d613$var$EDITABLE_SEGMENTS[seg.type]).length, [dateFormatter]); // If there is a value prop, and some segments were previously placeholders, mark them all as valid.

  if (props.value && Object.keys(validSegments).length < numSegments) {
    setValidSegments(_babelRuntimeHelpersExtends({}, $b879385ee0fe7268aa1feb476f2d613$var$EDITABLE_SEGMENTS));
  } // We keep track of the placeholder date separately in state so that onChange is not called
  // until all segments are set. If the value === null (not undefined), then assume the component
  // is controlled, so use the placeholder as the value until all segments are entered so it doesn't
  // change from uncontrolled to controlled and emit a warning.


  let [placeholderDate, setPlaceholderDate] = useState($b879385ee0fe7268aa1feb476f2d613$var$convertValue(props.placeholderDate) || new Date(new Date().getFullYear(), 0, 1));
  let [date, setDate] = useControlledState(props.value === null ? $b879385ee0fe7268aa1feb476f2d613$var$convertValue(placeholderDate) : $b879385ee0fe7268aa1feb476f2d613$var$convertValue(props.value), $b879385ee0fe7268aa1feb476f2d613$var$convertValue(props.defaultValue), props.onChange); // If all segments are valid, use the date from state, otherwise use the placeholder date.

  let value = Object.keys(validSegments).length >= numSegments ? date : placeholderDate;

  let setValue = value => {
    if (Object.keys(validSegments).length >= numSegments) {
      setDate(value);
    } else {
      setPlaceholderDate(value);
    }
  };

  let segments = dateFormatter.formatToParts(value).map(segment => _babelRuntimeHelpersExtends({
    type: $b879385ee0fe7268aa1feb476f2d613$var$TYPE_MAPPING[segment.type] || segment.type,
    text: segment.value
  }, $b879385ee0fe7268aa1feb476f2d613$var$getSegmentLimits(value, segment.type, resolvedOptions), {
    isPlaceholder: !validSegments[segment.type]
  }));

  let adjustSegment = (type, amount) => {
    validSegments[type] = true;
    setValidSegments(_babelRuntimeHelpersExtends({}, validSegments));
    setValue($b879385ee0fe7268aa1feb476f2d613$var$add(value, type, amount, resolvedOptions));
  };

  return {
    value,
    setValue,
    segments,
    dateFormatter,

    increment(part) {
      adjustSegment(part, 1);
    },

    decrement(part) {
      adjustSegment(part, -1);
    },

    incrementPage(part) {
      adjustSegment(part, $b879385ee0fe7268aa1feb476f2d613$var$PAGE_STEP[part] || 1);
    },

    decrementPage(part) {
      adjustSegment(part, -($b879385ee0fe7268aa1feb476f2d613$var$PAGE_STEP[part] || 1));
    },

    setSegment(part, v) {
      validSegments[part] = true;
      setValidSegments(_babelRuntimeHelpersExtends({}, validSegments));
      setValue($b879385ee0fe7268aa1feb476f2d613$var$setSegment(value, part, v, resolvedOptions));
    },

    confirmPlaceholder(part) {
      validSegments[part] = true;
      setValidSegments(_babelRuntimeHelpersExtends({}, validSegments));
      setValue(new Date(value));
    }

  };
}

exports.useDatePickerFieldState = useDatePickerFieldState;

function $b879385ee0fe7268aa1feb476f2d613$var$convertValue(value) {
  if (!value) {
    return undefined;
  }

  return _dateFnsParse(value);
}

function $b879385ee0fe7268aa1feb476f2d613$var$getSegmentLimits(date, type, options) {
  let value, minValue, maxValue;

  switch (type) {
    case 'day':
      value = getDate(date);
      minValue = 1;
      maxValue = getDaysInMonth(date);
      break;

    case 'dayPeriod':
      value = getHours(date) >= 12 ? 12 : 0;
      minValue = 0;
      maxValue = 12;
      break;

    case 'hour':
      value = getHours(date);

      if (options.hour12) {
        let isPM = value >= 12;
        minValue = isPM ? 12 : 0;
        maxValue = isPM ? 23 : 11;
      } else {
        minValue = 0;
        maxValue = 23;
      }

      break;

    case 'minute':
      value = getMinutes(date);
      minValue = 0;
      maxValue = 59;
      break;

    case 'second':
      value = getSeconds(date);
      minValue = 0;
      maxValue = 59;
      break;

    case 'month':
      value = getMonth(date) + 1;
      minValue = 1;
      maxValue = 12;
      break;

    case 'year':
      value = getYear(date);
      minValue = 1;
      maxValue = 9999;
      break;

    default:
      return {};
  }

  return {
    value,
    minValue,
    maxValue
  };
}

function $b879385ee0fe7268aa1feb476f2d613$var$add(value, part, amount, options) {
  switch (part) {
    case 'day':
      {
        let day = getDate(value);
        return _setDate(value, $b879385ee0fe7268aa1feb476f2d613$var$cycleValue(day, amount, 1, getDaysInMonth(value)));
      }

    case 'dayPeriod':
      {
        let hours = getHours(value);
        let isPM = hours >= 12;
        return setHours(value, isPM ? hours - 12 : hours + 12);
      }

    case 'hour':
      {
        let hours = getHours(value);
        let min = 0;
        let max = 23;

        if (options.hour12) {
          let isPM = hours >= 12;
          min = isPM ? 12 : 0;
          max = isPM ? 23 : 11;
        }

        hours = $b879385ee0fe7268aa1feb476f2d613$var$cycleValue(hours, amount, min, max);
        return setHours(value, hours);
      }

    case 'minute':
      {
        let minutes = $b879385ee0fe7268aa1feb476f2d613$var$cycleValue(getMinutes(value), amount, 0, 59, true);
        return setMinutes(value, minutes);
      }

    case 'month':
      {
        let months = $b879385ee0fe7268aa1feb476f2d613$var$cycleValue(getMonth(value), amount, 0, 11);
        return setMonth(value, months);
      }

    case 'second':
      {
        let seconds = $b879385ee0fe7268aa1feb476f2d613$var$cycleValue(getSeconds(value), amount, 0, 59, true);
        return setSeconds(value, seconds);
      }

    case 'year':
      {
        let year = $b879385ee0fe7268aa1feb476f2d613$var$cycleValue(getYear(value), amount, 1, 9999, true);
        return setYear(value, year);
      }
  }
}

function $b879385ee0fe7268aa1feb476f2d613$var$cycleValue(value, amount, min, max, round) {
  if (round === void 0) {
    round = false;
  }

  if (round) {
    value += amount > 0 ? 1 : -1;

    if (value < min) {
      value = max;
    }

    let div = Math.abs(amount);

    if (amount > 0) {
      value = Math.ceil(value / div) * div;
    } else {
      value = Math.floor(value / div) * div;
    }

    if (value > max) {
      value = min;
    }
  } else {
    value += amount;

    if (value < min) {
      value = max - (min - value - 1);
    } else if (value > max) {
      value = min + (value - max - 1);
    }
  }

  return value;
}

function $b879385ee0fe7268aa1feb476f2d613$var$setSegment(value, part, segmentValue, options) {
  switch (part) {
    case 'day':
      return _setDate(value, segmentValue);

    case 'dayPeriod':
      {
        let hours = getHours(value);
        let wasPM = hours >= 12;
        let isPM = segmentValue >= 12;

        if (isPM === wasPM) {
          return value;
        }

        return setHours(value, wasPM ? hours - 12 : hours + 12);
      }

    case 'hour':
      // In 12 hour time, ensure that AM/PM does not change
      if (options.hour12) {
        let hours = getHours(value);
        let wasPM = hours >= 12;

        if (!wasPM && segmentValue === 12) {
          segmentValue = 0;
        }

        if (wasPM && segmentValue < 12) {
          segmentValue += 12;
        }
      }

      return setHours(value, segmentValue);

    case 'minute':
      return setMinutes(value, segmentValue);

    case 'month':
      return setMonth(value, segmentValue - 1);

    case 'second':
      return setSeconds(value, segmentValue);

    case 'year':
      return setYear(value, segmentValue);
  }
}

function useDateRangePickerState(props) {
  let [isOpen, setOpen] = useState(false);

  let onChange = value => {
    if (value.start && value.end && props.onChange) {
      props.onChange(value);
    }
  };

  let [value, setValue] = useControlledState(props.value === null ? {
    start: null,
    end: null
  } : props.value, props.defaultValue || {
    start: null,
    end: null
  }, onChange); // Intercept setValue to make sure the Time section is not changed by date selection in Calendar

  let selectDateRange = range => {
    if (range) {
      $d2539a9a7cedbf57925a2a19$export$setTime(range.start, value.start);
      $d2539a9a7cedbf57925a2a19$export$setTime(range.end, value.end);
    }

    setValue(range);
    setOpen(false);
  };

  let validationState = props.validationState || (value != null && ($d2539a9a7cedbf57925a2a19$export$isInvalid(value.start, props.minValue, props.maxValue) || $d2539a9a7cedbf57925a2a19$export$isInvalid(value.end, props.minValue, props.maxValue) || value.end != null && value.start != null && value.end < value.start) ? 'invalid' : null);
  return {
    value,
    setValue,

    setDate(part, date) {
      setValue(_babelRuntimeHelpersExtends({}, value, {
        [part]: date
      }));
    },

    selectDateRange,
    isOpen,
    setOpen,
    validationState
  };
}

exports.useDateRangePickerState = useDateRangePickerState;
//# sourceMappingURL=main.js.map
