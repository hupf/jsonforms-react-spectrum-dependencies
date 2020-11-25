import { useCalendarState, useRangeCalendarState } from "@react-stately/calendar";
import { useProviderProps } from "@react-spectrum/provider";
import _spectrumIconsUiChevronRightLarge from "@spectrum-icons/ui/ChevronRightLarge";
import _spectrumIconsUiChevronLeftLarge from "@spectrum-icons/ui/ChevronLeftLarge";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useHover } from "@react-aria/interactions";
import { useDateFormatter, useLocale } from "@react-aria/i18n";
import _react, { useRef } from "react";
import { isSameDay, isSameMonth, isToday } from "date-fns";
import { classNames, useStyleProps } from "@react-spectrum/utils";
import { useCalendarCell, useCalendar, useRangeCalendar } from "@react-aria/calendar";
import { ActionButton } from "@react-spectrum/button";
import _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _babelRuntimeHelpersEsmExtends from "@babel/runtime/helpers/esm/extends";
import "./main.css";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

// ASSET: /home/mburri/dev/jsonforms/react-spectrum/node_modules/@adobe/spectrum-css-temp/components/calendar/vars.css
var $be4f0cec50a586942f46dfb826aeabe0$exports = {};
$be4f0cec50a586942f46dfb826aeabe0$exports = {
  "spectrum-Calendar": "_spectrum-Calendar_793a7",
  "spectrum-Calendar--padded": "_spectrum-Calendar--padded_793a7",
  "spectrum-Calendar-header": "_spectrum-Calendar-header_793a7",
  "spectrum-Calendar-title": "_spectrum-Calendar-title_793a7",
  "spectrum-Calendar-prevMonth": "_spectrum-Calendar-prevMonth_793a7",
  "spectrum-Calendar-nextMonth": "_spectrum-Calendar-nextMonth_793a7",
  "spectrum-Calendar-dayOfWeek": "_spectrum-Calendar-dayOfWeek_793a7",
  "spectrum-Calendar-body": "_spectrum-Calendar-body_793a7",
  "spectrum-Calendar-table": "_spectrum-Calendar-table_793a7",
  "spectrum-Calendar-tableCell": "_spectrum-Calendar-tableCell_793a7",
  "spectrum-Calendar-date": "_spectrum-Calendar-date_793a7",
  "is-disabled": "_is-disabled_793a7",
  "is-outsideMonth": "_is-outsideMonth_793a7",
  "is-selected": "_is-selected_793a7",
  "is-range-selection": "_is-range-selection_793a7",
  "is-today": "_is-today_793a7",
  "is-range-start": "_is-range-start_793a7",
  "is-range-end": "_is-range-end_793a7",
  "is-selection-start": "_is-selection-start_793a7",
  "is-selection-end": "_is-selection-end_793a7",
  "is-hovered": "_is-hovered_793a7",
  "is-focused": "_is-focused_793a7"
};
var $be4f0cec50a586942f46dfb826aeabe0$$interop$default = $parcel$interopDefault($be4f0cec50a586942f46dfb826aeabe0$exports);

function $e063fdddb71e9ef291bdbb1ac2f23b10$export$CalendarCell(_ref) {
  let {
    state
  } = _ref,
      props = _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose(_ref, ["state"]);

  let ref = useRef();
  let {
    cellProps,
    buttonProps
  } = useCalendarCell(props, state, ref);
  let {
    hoverProps,
    isHovered
  } = useHover({});
  let dateFormatter = useDateFormatter({
    day: 'numeric'
  });
  let isSelected = state.isSelected(props.date);
  let highlightedRange = 'highlightedRange' in state && state.highlightedRange;
  let isSelectionStart = highlightedRange && isSameDay(props.date, highlightedRange.start);
  let isSelectionEnd = highlightedRange && isSameDay(props.date, highlightedRange.end);
  let isRangeStart = isSelected && (props.date.getDay() === 0 || props.date.getDate() === 1);
  let isRangeEnd = isSelected && (props.date.getDay() === 6 || props.date.getDate() === state.daysInMonth);
  return /*#__PURE__*/_react.createElement("td", _babelRuntimeHelpersEsmExtends({}, cellProps, {
    className: classNames($be4f0cec50a586942f46dfb826aeabe0$$interop$default, 'spectrum-Calendar-tableCell')
  }), /*#__PURE__*/_react.createElement("span", _babelRuntimeHelpersEsmExtends({}, buttonProps, hoverProps, {
    ref: ref,
    className: classNames($be4f0cec50a586942f46dfb826aeabe0$$interop$default, 'spectrum-Calendar-date', {
      'is-today': isToday(props.date),
      'is-selected': isSelected,
      'is-focused': state.isCellFocused(props.date),
      'is-disabled': state.isCellDisabled(props.date),
      'is-outsideMonth': !isSameMonth(props.date, state.currentMonth),
      'is-range-start': isRangeStart,
      'is-range-end': isRangeEnd,
      'is-range-selection': isSelected && 'highlightedRange' in state,
      'is-selection-start': isSelectionStart,
      'is-selection-end': isSelectionEnd,
      'is-hovered': isHovered
    })
  }), dateFormatter.format(props.date)));
}

function $acd477ebc97eacda9bdbee4e25639bf$export$CalendarTableBody(_ref) {
  let {
    state
  } = _ref;
  return /*#__PURE__*/_react.createElement("tbody", null, [...new Array(state.weeksInMonth).keys()].map(weekIndex => /*#__PURE__*/_react.createElement("tr", {
    key: weekIndex
  }, [...new Array(7).keys()].map(dayIndex => /*#__PURE__*/_react.createElement($e063fdddb71e9ef291bdbb1ac2f23b10$export$CalendarCell, {
    key: dayIndex,
    state: state,
    date: state.getCellDate(weekIndex, dayIndex)
  })))));
}

function $eb39eedf4298d8daae1e5328d9f3a7$export$CalendarTableHeader(_ref) {
  let {
    weekDays
  } = _ref;
  let dayFormatter = useDateFormatter({
    weekday: 'narrow'
  });
  let dayFormatterLong = useDateFormatter({
    weekday: 'long'
  });
  return /*#__PURE__*/_react.createElement("thead", null, /*#__PURE__*/_react.createElement("tr", null, weekDays.map((dateDay, index) => {
    let day = dayFormatter.format(dateDay);
    let dayLong = dayFormatterLong.format(dateDay);
    return /*#__PURE__*/_react.createElement("th", {
      key: index,
      className: classNames($be4f0cec50a586942f46dfb826aeabe0$$interop$default, 'spectrum-Calendar-tableCell')
    }, /*#__PURE__*/_react.createElement(VisuallyHidden, null, dayLong), /*#__PURE__*/_react.createElement("span", {
      "aria-hidden": "true",
      className: classNames($be4f0cec50a586942f46dfb826aeabe0$$interop$default, 'spectrum-Calendar-dayOfWeek')
    }, day));
  })));
}

function $ff7cb4cae699b79d58b93fa58010e9$export$CalendarBase(props) {
  props = useProviderProps(props);

  let {
    state,
    aria
  } = props,
      otherProps = _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose(props, ["state", "aria"]);

  let monthDateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric'
  });
  let {
    calendarProps,
    calendarTitleProps,
    nextButtonProps,
    prevButtonProps,
    calendarBodyProps,
    captionProps
  } = aria;
  let {
    direction
  } = useLocale();
  let {
    styleProps
  } = useStyleProps(otherProps);
  return /*#__PURE__*/_react.createElement("div", _babelRuntimeHelpersEsmExtends({}, styleProps, calendarProps, {
    className: classNames($be4f0cec50a586942f46dfb826aeabe0$$interop$default, 'spectrum-Calendar', styleProps.className)
  }), /*#__PURE__*/_react.createElement("div", {
    className: classNames($be4f0cec50a586942f46dfb826aeabe0$$interop$default, 'spectrum-Calendar-header')
  }, /*#__PURE__*/_react.createElement("h2", _babelRuntimeHelpersEsmExtends({}, calendarTitleProps, {
    className: classNames($be4f0cec50a586942f46dfb826aeabe0$$interop$default, 'spectrum-Calendar-title')
  }), monthDateFormatter.format(state.currentMonth)), /*#__PURE__*/_react.createElement(ActionButton, _babelRuntimeHelpersEsmExtends({}, prevButtonProps, {
    UNSAFE_className: classNames($be4f0cec50a586942f46dfb826aeabe0$$interop$default, 'spectrum-Calendar-prevMonth'),
    isQuiet: true
  }), direction === 'rtl' ? /*#__PURE__*/_react.createElement(_spectrumIconsUiChevronRightLarge, null) : /*#__PURE__*/_react.createElement(_spectrumIconsUiChevronLeftLarge, null)), /*#__PURE__*/_react.createElement(ActionButton, _babelRuntimeHelpersEsmExtends({}, nextButtonProps, {
    UNSAFE_className: classNames($be4f0cec50a586942f46dfb826aeabe0$$interop$default, 'spectrum-Calendar-nextMonth'),
    isQuiet: true
  }), direction === 'rtl' ? /*#__PURE__*/_react.createElement(_spectrumIconsUiChevronLeftLarge, null) : /*#__PURE__*/_react.createElement(_spectrumIconsUiChevronRightLarge, null))), /*#__PURE__*/_react.createElement("table", _babelRuntimeHelpersEsmExtends({}, calendarBodyProps, {
    className: classNames($be4f0cec50a586942f46dfb826aeabe0$$interop$default, 'spectrum-Calendar-body', 'spectrum-Calendar-table')
  }), /*#__PURE__*/_react.createElement(VisuallyHidden, _babelRuntimeHelpersEsmExtends({
    elementType: "caption"
  }, captionProps)), /*#__PURE__*/_react.createElement($eb39eedf4298d8daae1e5328d9f3a7$export$CalendarTableHeader, {
    weekDays: state.weekDays
  }), /*#__PURE__*/_react.createElement($acd477ebc97eacda9bdbee4e25639bf$export$CalendarTableBody, {
    state: state
  })));
}

export function Calendar(props) {
  let state = useCalendarState(props);
  let aria = useCalendar(props, state);
  return /*#__PURE__*/_react.createElement($ff7cb4cae699b79d58b93fa58010e9$export$CalendarBase, _babelRuntimeHelpersEsmExtends({}, props, {
    state: state,
    aria: aria
  }));
}
export function RangeCalendar(props) {
  let state = useRangeCalendarState(props);
  let aria = useRangeCalendar(props, state);
  return /*#__PURE__*/_react.createElement($ff7cb4cae699b79d58b93fa58010e9$export$CalendarBase, _babelRuntimeHelpersEsmExtends({}, props, {
    state: state,
    aria: aria
  }));
}
//# sourceMappingURL=module.js.map
