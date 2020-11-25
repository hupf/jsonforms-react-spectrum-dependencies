var {
  useCalendarState,
  useRangeCalendarState
} = require("@react-stately/calendar");

var {
  useProviderProps
} = require("@react-spectrum/provider");

var _spectrumIconsUiChevronRightLarge = $parcel$interopDefault(require("@spectrum-icons/ui/ChevronRightLarge"));

var _spectrumIconsUiChevronLeftLarge = $parcel$interopDefault(require("@spectrum-icons/ui/ChevronLeftLarge"));

var {
  VisuallyHidden
} = require("@react-aria/visually-hidden");

var {
  useHover
} = require("@react-aria/interactions");

var {
  useDateFormatter,
  useLocale
} = require("@react-aria/i18n");

var _react2 = require("react");

var _react = $parcel$interopDefault(_react2);

var {
  useRef
} = _react2;

var {
  isSameDay,
  isSameMonth,
  isToday
} = require("date-fns");

var {
  classNames,
  useStyleProps
} = require("@react-spectrum/utils");

var {
  useCalendarCell,
  useCalendar,
  useRangeCalendar
} = require("@react-aria/calendar");

var {
  ActionButton
} = require("@react-spectrum/button");

var _babelRuntimeHelpersObjectWithoutPropertiesLoose = $parcel$interopDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _babelRuntimeHelpersExtends = $parcel$interopDefault(require("@babel/runtime/helpers/extends"));

require("./main.css");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

// ASSET: /home/mburri/dev/jsonforms/react-spectrum/node_modules/@adobe/spectrum-css-temp/components/calendar/vars.css
var $fc2fc91c11e03e6573b316082f3cde$exports = {};
$fc2fc91c11e03e6573b316082f3cde$exports = {
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
var $fc2fc91c11e03e6573b316082f3cde$$interop$default = $parcel$interopDefault($fc2fc91c11e03e6573b316082f3cde$exports);

function $a724b9f005a0f81fd8e885eddefe2b9$export$CalendarCell(_ref) {
  let {
    state
  } = _ref,
      props = _babelRuntimeHelpersObjectWithoutPropertiesLoose(_ref, ["state"]);

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
  return /*#__PURE__*/_react.createElement("td", _babelRuntimeHelpersExtends({}, cellProps, {
    className: classNames($fc2fc91c11e03e6573b316082f3cde$$interop$default, 'spectrum-Calendar-tableCell')
  }), /*#__PURE__*/_react.createElement("span", _babelRuntimeHelpersExtends({}, buttonProps, hoverProps, {
    ref: ref,
    className: classNames($fc2fc91c11e03e6573b316082f3cde$$interop$default, 'spectrum-Calendar-date', {
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

function $f7e7c17e360f8ed7facdd6c7bf4f33$export$CalendarTableBody(_ref) {
  let {
    state
  } = _ref;
  return /*#__PURE__*/_react.createElement("tbody", null, [...new Array(state.weeksInMonth).keys()].map(weekIndex => /*#__PURE__*/_react.createElement("tr", {
    key: weekIndex
  }, [...new Array(7).keys()].map(dayIndex => /*#__PURE__*/_react.createElement($a724b9f005a0f81fd8e885eddefe2b9$export$CalendarCell, {
    key: dayIndex,
    state: state,
    date: state.getCellDate(weekIndex, dayIndex)
  })))));
}

function $c4cd97df824857d26a41a6b478feba$export$CalendarTableHeader(_ref) {
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
      className: classNames($fc2fc91c11e03e6573b316082f3cde$$interop$default, 'spectrum-Calendar-tableCell')
    }, /*#__PURE__*/_react.createElement(VisuallyHidden, null, dayLong), /*#__PURE__*/_react.createElement("span", {
      "aria-hidden": "true",
      className: classNames($fc2fc91c11e03e6573b316082f3cde$$interop$default, 'spectrum-Calendar-dayOfWeek')
    }, day));
  })));
}

function $c5c738c2592de01e15d070fbb9b608f$export$CalendarBase(props) {
  props = useProviderProps(props);

  let {
    state,
    aria
  } = props,
      otherProps = _babelRuntimeHelpersObjectWithoutPropertiesLoose(props, ["state", "aria"]);

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
  return /*#__PURE__*/_react.createElement("div", _babelRuntimeHelpersExtends({}, styleProps, calendarProps, {
    className: classNames($fc2fc91c11e03e6573b316082f3cde$$interop$default, 'spectrum-Calendar', styleProps.className)
  }), /*#__PURE__*/_react.createElement("div", {
    className: classNames($fc2fc91c11e03e6573b316082f3cde$$interop$default, 'spectrum-Calendar-header')
  }, /*#__PURE__*/_react.createElement("h2", _babelRuntimeHelpersExtends({}, calendarTitleProps, {
    className: classNames($fc2fc91c11e03e6573b316082f3cde$$interop$default, 'spectrum-Calendar-title')
  }), monthDateFormatter.format(state.currentMonth)), /*#__PURE__*/_react.createElement(ActionButton, _babelRuntimeHelpersExtends({}, prevButtonProps, {
    UNSAFE_className: classNames($fc2fc91c11e03e6573b316082f3cde$$interop$default, 'spectrum-Calendar-prevMonth'),
    isQuiet: true
  }), direction === 'rtl' ? /*#__PURE__*/_react.createElement(_spectrumIconsUiChevronRightLarge, null) : /*#__PURE__*/_react.createElement(_spectrumIconsUiChevronLeftLarge, null)), /*#__PURE__*/_react.createElement(ActionButton, _babelRuntimeHelpersExtends({}, nextButtonProps, {
    UNSAFE_className: classNames($fc2fc91c11e03e6573b316082f3cde$$interop$default, 'spectrum-Calendar-nextMonth'),
    isQuiet: true
  }), direction === 'rtl' ? /*#__PURE__*/_react.createElement(_spectrumIconsUiChevronLeftLarge, null) : /*#__PURE__*/_react.createElement(_spectrumIconsUiChevronRightLarge, null))), /*#__PURE__*/_react.createElement("table", _babelRuntimeHelpersExtends({}, calendarBodyProps, {
    className: classNames($fc2fc91c11e03e6573b316082f3cde$$interop$default, 'spectrum-Calendar-body', 'spectrum-Calendar-table')
  }), /*#__PURE__*/_react.createElement(VisuallyHidden, _babelRuntimeHelpersExtends({
    elementType: "caption"
  }, captionProps)), /*#__PURE__*/_react.createElement($c4cd97df824857d26a41a6b478feba$export$CalendarTableHeader, {
    weekDays: state.weekDays
  }), /*#__PURE__*/_react.createElement($f7e7c17e360f8ed7facdd6c7bf4f33$export$CalendarTableBody, {
    state: state
  })));
}

function Calendar(props) {
  let state = useCalendarState(props);
  let aria = useCalendar(props, state);
  return /*#__PURE__*/_react.createElement($c5c738c2592de01e15d070fbb9b608f$export$CalendarBase, _babelRuntimeHelpersExtends({}, props, {
    state: state,
    aria: aria
  }));
}

exports.Calendar = Calendar;

function RangeCalendar(props) {
  let state = useRangeCalendarState(props);
  let aria = useRangeCalendar(props, state);
  return /*#__PURE__*/_react.createElement($c5c738c2592de01e15d070fbb9b608f$export$CalendarBase, _babelRuntimeHelpersExtends({}, props, {
    state: state,
    aria: aria
  }));
}

exports.RangeCalendar = RangeCalendar;
//# sourceMappingURL=main.js.map
