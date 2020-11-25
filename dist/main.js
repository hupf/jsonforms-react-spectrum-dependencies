var {
  useProviderProps
} = require("@react-spectrum/provider");

var {
  useLocale
} = require("@react-aria/i18n");

var {
  useHover
} = require("@react-aria/interactions");

var {
  mergeProps
} = require("@react-aria/utils");

var {
  FieldButton
} = require("@react-spectrum/button");

var {
  Dialog,
  DialogTrigger
} = require("@react-spectrum/dialog");

var {
  useDatePickerFieldState,
  useDatePickerState,
  useDateRangePickerState
} = require("@react-stately/datepicker");

var {
  useFocusManager,
  FocusRing,
  FocusScope
} = require("@react-aria/focus");

var {
  useDateSegment,
  useDateField,
  useDatePicker,
  useDateRangePicker
} = require("@react-aria/datepicker");

var _react2 = require("react");

var _react = $parcel$interopDefault(_react2);

var {
  useRef
} = _react2;

var _spectrumIconsUiCheckmarkMedium = $parcel$interopDefault(require("@spectrum-icons/ui/CheckmarkMedium"));

var _spectrumIconsUiAlertMedium = $parcel$interopDefault(require("@spectrum-icons/ui/AlertMedium"));

var {
  classNames,
  useStyleProps
} = require("@react-spectrum/utils");

var _spectrumIconsWorkflowCalendar = $parcel$interopDefault(require("@spectrum-icons/workflow/Calendar"));

var {
  Calendar,
  RangeCalendar
} = require("@react-spectrum/calendar");

var _babelRuntimeHelpersObjectWithoutPropertiesLoose = $parcel$interopDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _babelRuntimeHelpersExtends = $parcel$interopDefault(require("@babel/runtime/helpers/extends"));

require("./main.css");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-spectrum/datepicker/src/index.css
var $b6d0c479f6b0b3ae6b1bda0e763d0b7$exports = {};
$b6d0c479f6b0b3ae6b1bda0e763d0b7$exports = {
  "react-spectrum-Datepicker-field": "_react-spectrum-Datepicker-field_905d3",
  "react-spectrum-Datepicker-endField": "_react-spectrum-Datepicker-endField_905d3",
  "react-spectrum-Datepicker-input": "_react-spectrum-Datepicker-input_905d3",
  "react-spectrum-Datepicker-literal": "_react-spectrum-Datepicker-literal_905d3",
  "is-placeholder": "_is-placeholder_905d3",
  "react-spectrum-DatePicker-cell": "_react-spectrum-DatePicker-cell_905d3",
  "react-spectrum-Datepicker-dialog": "_react-spectrum-Datepicker-dialog_905d3"
};

function $a4d5ef9475d76e07632597e25134d21f$export$DatePickerSegment(_ref) {
  let {
    segment,
    state
  } = _ref,
      otherProps = _babelRuntimeHelpersObjectWithoutPropertiesLoose(_ref, ["segment", "state"]);

  switch (segment.type) {
    // A separator, e.g. punctuation
    case 'literal':
      return /*#__PURE__*/_react.createElement($a4d5ef9475d76e07632597e25134d21f$var$LiteralSegment, {
        segment: segment
      });
    // These segments cannot be directly edited by the user.

    case 'weekday':
    case 'timeZoneName':
    case 'era':
      return /*#__PURE__*/_react.createElement($a4d5ef9475d76e07632597e25134d21f$var$LiteralSegment, {
        segment: segment,
        isPlaceholder: true
      });
    // Editable segment

    default:
      return /*#__PURE__*/_react.createElement($a4d5ef9475d76e07632597e25134d21f$var$EditableSegment, _babelRuntimeHelpersExtends({
        segment: segment,
        state: state
      }, otherProps));
  }
}

var $b6d0c479f6b0b3ae6b1bda0e763d0b7$$interop$default = $parcel$interopDefault($b6d0c479f6b0b3ae6b1bda0e763d0b7$exports);

function $a4d5ef9475d76e07632597e25134d21f$var$LiteralSegment(_ref2) {
  let {
    segment,
    isPlaceholder
  } = _ref2;
  let focusManager = useFocusManager();

  let onMouseDown = e => {
    let node = focusManager.focusNext({
      from: e.target
    });

    if (node) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return /*#__PURE__*/_react.createElement("span", {
    role: "presentation",
    className: classNames($b6d0c479f6b0b3ae6b1bda0e763d0b7$$interop$default, 'react-spectrum-Datepicker-literal', {
      'is-placeholder': isPlaceholder
    }),
    onMouseDown: onMouseDown
  }, segment.text);
}

function $a4d5ef9475d76e07632597e25134d21f$var$EditableSegment(_ref3) {
  let {
    segment,
    state
  } = _ref3,
      otherProps = _babelRuntimeHelpersObjectWithoutPropertiesLoose(_ref3, ["segment", "state"]);

  let {
    segmentProps
  } = useDateSegment(otherProps, segment, state);
  return /*#__PURE__*/_react.createElement("div", _babelRuntimeHelpersExtends({
    className: classNames($b6d0c479f6b0b3ae6b1bda0e763d0b7$$interop$default, 'react-spectrum-DatePicker-cell', {
      'is-placeholder': segment.isPlaceholder
    })
  }, segmentProps), segment.text);
}

// ASSET: /home/mburri/dev/jsonforms/react-spectrum/node_modules/@adobe/spectrum-css-temp/components/inputgroup/vars.css
var $da042374adac990dbdf960d689b813$exports = {};
$da042374adac990dbdf960d689b813$exports = {
  "spectrum-InputGroup": "_spectrum-InputGroup_7cfca",
  "spectrum-FieldButton": "_spectrum-FieldButton_7cfca",
  "is-disabled": "_is-disabled_7cfca",
  "spectrum-InputGroup-field": "_spectrum-InputGroup-field_7cfca",
  "spectrum-InputGroup-input": "_spectrum-InputGroup-input_7cfca",
  "spectrum-InputGroup--quiet": "_spectrum-InputGroup--quiet_7cfca",
  "spectrum-InputGroup-icon": "_spectrum-InputGroup-icon_7cfca",
  "spectrum-Datepicker--range": "_spectrum-Datepicker--range_7cfca",
  "spectrum-Datepicker--datetimeRange": "_spectrum-Datepicker--datetimeRange_7cfca",
  "spectrum-Datepicker-startField": "_spectrum-Datepicker-startField_7cfca",
  "spectrum-Datepicker-endField": "_spectrum-Datepicker-endField_7cfca",
  "spectrum-Datepicker--rangeDash": "_spectrum-Datepicker--rangeDash_7cfca",
  "is-focused": "_is-focused_7cfca",
  "spectrum-Datepicker-focusRing": "_spectrum-Datepicker-focusRing_7cfca",
  "is-invalid": "_is-invalid_7cfca",
  "is-hovered": "_is-hovered_7cfca",
  "focus-ring": "_focus-ring_7cfca",
  "is-selected": "_is-selected_7cfca"
};
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/node_modules/@adobe/spectrum-css-temp/components/textfield/vars.css
var $d6ccebc39ce6c9807064e14b8824ec$exports = {};
$d6ccebc39ce6c9807064e14b8824ec$exports = {
  "spectrum-Textfield": "_spectrum-Textfield_60a69",
  "spectrum-Textfield--quiet": "_spectrum-Textfield--quiet_60a69",
  "spectrum-Textfield--multiline": "_spectrum-Textfield--multiline_60a69",
  "spectrum-Textfield-input": "_spectrum-Textfield-input_60a69",
  "is-placeholder": "_is-placeholder_60a69",
  "is-hovered": "_is-hovered_60a69",
  "is-valid": "_is-valid_60a69",
  "is-invalid": "_is-invalid_60a69",
  "spectrum-Textfield-validationIcon": "_spectrum-Textfield-validationIcon_60a69",
  "spectrum-Textfield-icon": "_spectrum-Textfield-icon_60a69",
  "spectrum-Textfield-inputIcon": "_spectrum-Textfield-inputIcon_60a69",
  "is-focused": "_is-focused_60a69",
  "focus-ring": "_focus-ring_60a69",
  "is-disabled": "_is-disabled_60a69"
};
var $d6ccebc39ce6c9807064e14b8824ec$$interop$default = $parcel$interopDefault($d6ccebc39ce6c9807064e14b8824ec$exports);
var $da042374adac990dbdf960d689b813$$interop$default = $parcel$interopDefault($da042374adac990dbdf960d689b813$exports);

function $bb1beeb056291dd4835f70688fa2d1$export$DatePickerField(props) {
  let state = useDatePickerFieldState(props);

  let {
    isDisabled,
    isReadOnly,
    isRequired,
    isQuiet,
    validationState
  } = props,
      otherProps = _babelRuntimeHelpersObjectWithoutPropertiesLoose(props, ["isDisabled", "isReadOnly", "isRequired", "isQuiet", "validationState"]);

  let {
    styleProps
  } = useStyleProps(otherProps);
  let {
    fieldProps,
    segmentProps
  } = useDateField(props);
  let isInvalid = validationState === 'invalid';
  let textfieldClass = classNames($d6ccebc39ce6c9807064e14b8824ec$$interop$default, 'spectrum-Textfield', {
    'is-invalid': isInvalid,
    'is-valid': validationState === 'valid',
    'spectrum-Textfield--quiet': isQuiet
  }, classNames($b6d0c479f6b0b3ae6b1bda0e763d0b7$$interop$default, 'react-spectrum-Datepicker-field'), styleProps.className);
  let inputClass = classNames($d6ccebc39ce6c9807064e14b8824ec$$interop$default, 'spectrum-Textfield-input', {
    'is-disabled': isDisabled,
    'is-invalid': isInvalid
  }, classNames($da042374adac990dbdf960d689b813$$interop$default, 'spectrum-InputGroup-input', {
    'is-disabled': isDisabled,
    'is-invalid': isInvalid
  }), classNames($b6d0c479f6b0b3ae6b1bda0e763d0b7$$interop$default, 'react-spectrum-Datepicker-input'));
  let iconClass = classNames($d6ccebc39ce6c9807064e14b8824ec$$interop$default, 'spectrum-Textfield-validationIcon', {
    'is-invalid': isInvalid,
    'is-valid': validationState === 'valid'
  });
  let validationIcon = null;

  if (validationState === 'invalid') {
    validationIcon = /*#__PURE__*/_react.createElement(_spectrumIconsUiAlertMedium, {
      UNSAFE_className: iconClass
    });
  } else if (validationState === 'valid') {
    validationIcon = /*#__PURE__*/_react.createElement(_spectrumIconsUiCheckmarkMedium, {
      UNSAFE_className: iconClass
    });
  }

  return /*#__PURE__*/_react.createElement("div", _babelRuntimeHelpersExtends({}, fieldProps, styleProps, {
    className: textfieldClass
  }), /*#__PURE__*/_react.createElement("div", {
    className: inputClass
  }, state.segments.map((segment, i) => /*#__PURE__*/_react.createElement($a4d5ef9475d76e07632597e25134d21f$export$DatePickerSegment, _babelRuntimeHelpersExtends({}, segmentProps, {
    key: i,
    segment: segment,
    state: state,
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    isRequired: isRequired
  })))), validationIcon);
}

function DatePicker(props) {
  props = useProviderProps(props);

  let {
    autoFocus,
    formatOptions,
    isQuiet,
    isDisabled,
    isReadOnly,
    isRequired,
    placeholderDate
  } = props,
      otherProps = _babelRuntimeHelpersObjectWithoutPropertiesLoose(props, ["autoFocus", "formatOptions", "isQuiet", "isDisabled", "isReadOnly", "isRequired", "placeholderDate"]);

  let {
    styleProps
  } = useStyleProps(otherProps);
  let {
    hoverProps,
    isHovered
  } = useHover({
    isDisabled
  });
  let state = useDatePickerState(props);
  let {
    comboboxProps,
    fieldProps,
    buttonProps,
    dialogProps
  } = useDatePicker(props, state);
  let {
    value,
    setValue,
    selectDate,
    isOpen,
    setOpen
  } = state;
  let targetRef = useRef();
  let {
    direction
  } = useLocale();
  let className = classNames($da042374adac990dbdf960d689b813$$interop$default, 'spectrum-InputGroup', {
    'spectrum-InputGroup--quiet': isQuiet,
    'is-invalid': state.validationState === 'invalid',
    'is-disabled': isDisabled,
    'is-hovered': isHovered
  }, styleProps.className);
  return /*#__PURE__*/_react.createElement(FocusRing, {
    within: true,
    isTextInput: true,
    focusClass: classNames($da042374adac990dbdf960d689b813$$interop$default, 'is-focused'),
    focusRingClass: classNames($da042374adac990dbdf960d689b813$$interop$default, 'focus-ring'),
    autoFocus: autoFocus
  }, /*#__PURE__*/_react.createElement("div", _babelRuntimeHelpersExtends({}, styleProps, mergeProps(comboboxProps, hoverProps), {
    className: className,
    ref: targetRef
  }), /*#__PURE__*/_react.createElement(FocusScope, {
    autoFocus: autoFocus
  }, /*#__PURE__*/_react.createElement($bb1beeb056291dd4835f70688fa2d1$export$DatePickerField, _babelRuntimeHelpersExtends({}, fieldProps, {
    isQuiet: isQuiet,
    validationState: state.validationState,
    value: value,
    onChange: setValue,
    placeholderDate: placeholderDate,
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    isRequired: isRequired,
    formatOptions: formatOptions,
    UNSAFE_className: classNames($b6d0c479f6b0b3ae6b1bda0e763d0b7$$interop$default, 'react-spectrum-Datepicker-endField')
  }))), /*#__PURE__*/_react.createElement(DialogTrigger, {
    type: "popover",
    mobileType: "tray",
    placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
    targetRef: targetRef,
    hideArrow: true,
    isOpen: isOpen,
    onOpenChange: setOpen
  }, /*#__PURE__*/_react.createElement(FieldButton, _babelRuntimeHelpersExtends({}, buttonProps, {
    UNSAFE_className: classNames($da042374adac990dbdf960d689b813$$interop$default, 'spectrum-FieldButton'),
    isQuiet: isQuiet,
    validationState: state.validationState,
    isDisabled: isDisabled || isReadOnly
  }), /*#__PURE__*/_react.createElement(_spectrumIconsWorkflowCalendar, null)), /*#__PURE__*/_react.createElement(Dialog, _babelRuntimeHelpersExtends({
    UNSAFE_className: classNames($b6d0c479f6b0b3ae6b1bda0e763d0b7$$interop$default, 'react-spectrum-Datepicker-dialog')
  }, dialogProps), /*#__PURE__*/_react.createElement(Calendar, {
    autoFocus: true,
    value: value,
    onChange: selectDate
  })))));
}

exports.DatePicker = DatePicker;

function DateRangePicker(props) {
  props = useProviderProps(props);

  let {
    isQuiet,
    isDisabled,
    isReadOnly,
    isRequired,
    autoFocus,
    formatOptions,
    placeholderDate
  } = props,
      otherProps = _babelRuntimeHelpersObjectWithoutPropertiesLoose(props, ["isQuiet", "isDisabled", "isReadOnly", "isRequired", "autoFocus", "formatOptions", "placeholderDate"]);

  let {
    styleProps
  } = useStyleProps(otherProps);
  let {
    hoverProps,
    isHovered
  } = useHover({
    isDisabled
  });
  let state = useDateRangePickerState(props);
  let {
    comboboxProps,
    buttonProps,
    dialogProps,
    startFieldProps,
    endFieldProps
  } = useDateRangePicker(props, state);
  let {
    value,
    setDate,
    selectDateRange,
    isOpen,
    setOpen
  } = state;
  let targetRef = useRef();
  let {
    direction
  } = useLocale();
  let className = classNames($da042374adac990dbdf960d689b813$$interop$default, 'spectrum-InputGroup', 'spectrum-Datepicker--range', {
    'spectrum-InputGroup--quiet': isQuiet,
    'is-invalid': state.validationState === 'invalid',
    'is-disabled': isDisabled,
    'is-hovered': isHovered
  }, styleProps.className);
  return /*#__PURE__*/_react.createElement(FocusRing, {
    within: true,
    isTextInput: true,
    focusClass: classNames($da042374adac990dbdf960d689b813$$interop$default, 'is-focused'),
    focusRingClass: classNames($da042374adac990dbdf960d689b813$$interop$default, 'focus-ring'),
    autoFocus: autoFocus
  }, /*#__PURE__*/_react.createElement("div", _babelRuntimeHelpersExtends({}, styleProps, mergeProps(comboboxProps, hoverProps), {
    className: className,
    ref: targetRef
  }), /*#__PURE__*/_react.createElement(FocusScope, {
    autoFocus: autoFocus
  }, /*#__PURE__*/_react.createElement($bb1beeb056291dd4835f70688fa2d1$export$DatePickerField, _babelRuntimeHelpersExtends({}, startFieldProps, {
    isQuiet: props.isQuiet,
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    isRequired: isRequired,
    formatOptions: formatOptions,
    placeholderDate: placeholderDate,
    value: value.start,
    onChange: start => setDate('start', start),
    UNSAFE_className: classNames($da042374adac990dbdf960d689b813$$interop$default, 'spectrum-Datepicker-startField')
  })), /*#__PURE__*/_react.createElement($ba91a2bde73306c4b85ccbc76fb468fc$var$DateRangeDash, null), /*#__PURE__*/_react.createElement($bb1beeb056291dd4835f70688fa2d1$export$DatePickerField, _babelRuntimeHelpersExtends({}, endFieldProps, {
    isQuiet: props.isQuiet,
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    isRequired: isRequired,
    validationState: state.validationState,
    formatOptions: formatOptions,
    placeholderDate: placeholderDate,
    value: value.end,
    onChange: end => setDate('end', end),
    UNSAFE_className: classNames($da042374adac990dbdf960d689b813$$interop$default, 'spectrum-Datepicker-endField', classNames($b6d0c479f6b0b3ae6b1bda0e763d0b7$$interop$default, 'react-spectrum-Datepicker-endField'))
  }))), /*#__PURE__*/_react.createElement(DialogTrigger, {
    type: "popover",
    mobileType: "tray",
    placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
    targetRef: targetRef,
    hideArrow: true,
    isOpen: isOpen,
    onOpenChange: setOpen
  }, /*#__PURE__*/_react.createElement(FieldButton, _babelRuntimeHelpersExtends({}, buttonProps, {
    UNSAFE_className: classNames($da042374adac990dbdf960d689b813$$interop$default, 'spectrum-FieldButton'),
    isQuiet: isQuiet,
    validationState: state.validationState,
    isDisabled: isDisabled || isReadOnly
  }), /*#__PURE__*/_react.createElement(_spectrumIconsWorkflowCalendar, null)), /*#__PURE__*/_react.createElement(Dialog, _babelRuntimeHelpersExtends({
    UNSAFE_className: classNames($b6d0c479f6b0b3ae6b1bda0e763d0b7$$interop$default, 'react-spectrum-Datepicker-dialog')
  }, dialogProps), /*#__PURE__*/_react.createElement(RangeCalendar, {
    autoFocus: true,
    value: value,
    onChange: selectDateRange
  })))));
}

exports.DateRangePicker = DateRangePicker;

function $ba91a2bde73306c4b85ccbc76fb468fc$var$DateRangeDash() {
  let focusManager = useFocusManager();

  let onMouseDown = e => {
    e.preventDefault();
    focusManager.focusNext({
      from: e.target
    });
  };

  return /*#__PURE__*/_react.createElement("div", {
    role: "presentation",
    className: classNames($da042374adac990dbdf960d689b813$$interop$default, 'spectrum-Datepicker--rangeDash'),
    onMouseDown: onMouseDown
  });
}
//# sourceMappingURL=main.js.map
