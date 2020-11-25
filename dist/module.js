import { useProviderProps } from "@react-spectrum/provider";
import { useLocale } from "@react-aria/i18n";
import { useHover } from "@react-aria/interactions";
import { mergeProps } from "@react-aria/utils";
import { FieldButton } from "@react-spectrum/button";
import { Dialog, DialogTrigger } from "@react-spectrum/dialog";
import { useDatePickerFieldState, useDatePickerState, useDateRangePickerState } from "@react-stately/datepicker";
import { useFocusManager, FocusRing, FocusScope } from "@react-aria/focus";
import { useDateSegment, useDateField, useDatePicker, useDateRangePicker } from "@react-aria/datepicker";
import _react, { useRef } from "react";
import _spectrumIconsUiCheckmarkMedium from "@spectrum-icons/ui/CheckmarkMedium";
import _spectrumIconsUiAlertMedium from "@spectrum-icons/ui/AlertMedium";
import { classNames, useStyleProps } from "@react-spectrum/utils";
import _spectrumIconsWorkflowCalendar from "@spectrum-icons/workflow/Calendar";
import { Calendar, RangeCalendar } from "@react-spectrum/calendar";
import _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _babelRuntimeHelpersEsmExtends from "@babel/runtime/helpers/esm/extends";
import "./main.css";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-spectrum/datepicker/src/index.css
var $fc5c1aaa653a82d8278e64c777eca$exports = {};
$fc5c1aaa653a82d8278e64c777eca$exports = {
  "react-spectrum-Datepicker-field": "_react-spectrum-Datepicker-field_905d3",
  "react-spectrum-Datepicker-endField": "_react-spectrum-Datepicker-endField_905d3",
  "react-spectrum-Datepicker-input": "_react-spectrum-Datepicker-input_905d3",
  "react-spectrum-Datepicker-literal": "_react-spectrum-Datepicker-literal_905d3",
  "is-placeholder": "_is-placeholder_905d3",
  "react-spectrum-DatePicker-cell": "_react-spectrum-DatePicker-cell_905d3",
  "react-spectrum-Datepicker-dialog": "_react-spectrum-Datepicker-dialog_905d3"
};

function $d90fc87ed39803c47c775d8a63e9b3ac$export$DatePickerSegment(_ref) {
  let {
    segment,
    state
  } = _ref,
      otherProps = _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose(_ref, ["segment", "state"]);

  switch (segment.type) {
    // A separator, e.g. punctuation
    case 'literal':
      return /*#__PURE__*/_react.createElement($d90fc87ed39803c47c775d8a63e9b3ac$var$LiteralSegment, {
        segment: segment
      });
    // These segments cannot be directly edited by the user.

    case 'weekday':
    case 'timeZoneName':
    case 'era':
      return /*#__PURE__*/_react.createElement($d90fc87ed39803c47c775d8a63e9b3ac$var$LiteralSegment, {
        segment: segment,
        isPlaceholder: true
      });
    // Editable segment

    default:
      return /*#__PURE__*/_react.createElement($d90fc87ed39803c47c775d8a63e9b3ac$var$EditableSegment, _babelRuntimeHelpersEsmExtends({
        segment: segment,
        state: state
      }, otherProps));
  }
}

var $fc5c1aaa653a82d8278e64c777eca$$interop$default = $parcel$interopDefault($fc5c1aaa653a82d8278e64c777eca$exports);

function $d90fc87ed39803c47c775d8a63e9b3ac$var$LiteralSegment(_ref2) {
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
    className: classNames($fc5c1aaa653a82d8278e64c777eca$$interop$default, 'react-spectrum-Datepicker-literal', {
      'is-placeholder': isPlaceholder
    }),
    onMouseDown: onMouseDown
  }, segment.text);
}

function $d90fc87ed39803c47c775d8a63e9b3ac$var$EditableSegment(_ref3) {
  let {
    segment,
    state
  } = _ref3,
      otherProps = _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose(_ref3, ["segment", "state"]);

  let {
    segmentProps
  } = useDateSegment(otherProps, segment, state);
  return /*#__PURE__*/_react.createElement("div", _babelRuntimeHelpersEsmExtends({
    className: classNames($fc5c1aaa653a82d8278e64c777eca$$interop$default, 'react-spectrum-DatePicker-cell', {
      'is-placeholder': segment.isPlaceholder
    })
  }, segmentProps), segment.text);
}

// ASSET: /home/mburri/dev/jsonforms/react-spectrum/node_modules/@adobe/spectrum-css-temp/components/inputgroup/vars.css
var $ed163f34af6780259e0266609fb62099$exports = {};
$ed163f34af6780259e0266609fb62099$exports = {
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
var $aa1c742e7a2a16aa7981ca9e2f4a89$exports = {};
$aa1c742e7a2a16aa7981ca9e2f4a89$exports = {
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
var $aa1c742e7a2a16aa7981ca9e2f4a89$$interop$default = $parcel$interopDefault($aa1c742e7a2a16aa7981ca9e2f4a89$exports);
var $ed163f34af6780259e0266609fb62099$$interop$default = $parcel$interopDefault($ed163f34af6780259e0266609fb62099$exports);

function $f89a664b25735c9291b8addecfd59013$export$DatePickerField(props) {
  let state = useDatePickerFieldState(props);

  let {
    isDisabled,
    isReadOnly,
    isRequired,
    isQuiet,
    validationState
  } = props,
      otherProps = _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose(props, ["isDisabled", "isReadOnly", "isRequired", "isQuiet", "validationState"]);

  let {
    styleProps
  } = useStyleProps(otherProps);
  let {
    fieldProps,
    segmentProps
  } = useDateField(props);
  let isInvalid = validationState === 'invalid';
  let textfieldClass = classNames($aa1c742e7a2a16aa7981ca9e2f4a89$$interop$default, 'spectrum-Textfield', {
    'is-invalid': isInvalid,
    'is-valid': validationState === 'valid',
    'spectrum-Textfield--quiet': isQuiet
  }, classNames($fc5c1aaa653a82d8278e64c777eca$$interop$default, 'react-spectrum-Datepicker-field'), styleProps.className);
  let inputClass = classNames($aa1c742e7a2a16aa7981ca9e2f4a89$$interop$default, 'spectrum-Textfield-input', {
    'is-disabled': isDisabled,
    'is-invalid': isInvalid
  }, classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'spectrum-InputGroup-input', {
    'is-disabled': isDisabled,
    'is-invalid': isInvalid
  }), classNames($fc5c1aaa653a82d8278e64c777eca$$interop$default, 'react-spectrum-Datepicker-input'));
  let iconClass = classNames($aa1c742e7a2a16aa7981ca9e2f4a89$$interop$default, 'spectrum-Textfield-validationIcon', {
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

  return /*#__PURE__*/_react.createElement("div", _babelRuntimeHelpersEsmExtends({}, fieldProps, styleProps, {
    className: textfieldClass
  }), /*#__PURE__*/_react.createElement("div", {
    className: inputClass
  }, state.segments.map((segment, i) => /*#__PURE__*/_react.createElement($d90fc87ed39803c47c775d8a63e9b3ac$export$DatePickerSegment, _babelRuntimeHelpersEsmExtends({}, segmentProps, {
    key: i,
    segment: segment,
    state: state,
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    isRequired: isRequired
  })))), validationIcon);
}

export function DatePicker(props) {
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
      otherProps = _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose(props, ["autoFocus", "formatOptions", "isQuiet", "isDisabled", "isReadOnly", "isRequired", "placeholderDate"]);

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
  let className = classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'spectrum-InputGroup', {
    'spectrum-InputGroup--quiet': isQuiet,
    'is-invalid': state.validationState === 'invalid',
    'is-disabled': isDisabled,
    'is-hovered': isHovered
  }, styleProps.className);
  return /*#__PURE__*/_react.createElement(FocusRing, {
    within: true,
    isTextInput: true,
    focusClass: classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'is-focused'),
    focusRingClass: classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'focus-ring'),
    autoFocus: autoFocus
  }, /*#__PURE__*/_react.createElement("div", _babelRuntimeHelpersEsmExtends({}, styleProps, mergeProps(comboboxProps, hoverProps), {
    className: className,
    ref: targetRef
  }), /*#__PURE__*/_react.createElement(FocusScope, {
    autoFocus: autoFocus
  }, /*#__PURE__*/_react.createElement($f89a664b25735c9291b8addecfd59013$export$DatePickerField, _babelRuntimeHelpersEsmExtends({}, fieldProps, {
    isQuiet: isQuiet,
    validationState: state.validationState,
    value: value,
    onChange: setValue,
    placeholderDate: placeholderDate,
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    isRequired: isRequired,
    formatOptions: formatOptions,
    UNSAFE_className: classNames($fc5c1aaa653a82d8278e64c777eca$$interop$default, 'react-spectrum-Datepicker-endField')
  }))), /*#__PURE__*/_react.createElement(DialogTrigger, {
    type: "popover",
    mobileType: "tray",
    placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
    targetRef: targetRef,
    hideArrow: true,
    isOpen: isOpen,
    onOpenChange: setOpen
  }, /*#__PURE__*/_react.createElement(FieldButton, _babelRuntimeHelpersEsmExtends({}, buttonProps, {
    UNSAFE_className: classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'spectrum-FieldButton'),
    isQuiet: isQuiet,
    validationState: state.validationState,
    isDisabled: isDisabled || isReadOnly
  }), /*#__PURE__*/_react.createElement(_spectrumIconsWorkflowCalendar, null)), /*#__PURE__*/_react.createElement(Dialog, _babelRuntimeHelpersEsmExtends({
    UNSAFE_className: classNames($fc5c1aaa653a82d8278e64c777eca$$interop$default, 'react-spectrum-Datepicker-dialog')
  }, dialogProps), /*#__PURE__*/_react.createElement(Calendar, {
    autoFocus: true,
    value: value,
    onChange: selectDate
  })))));
}
export function DateRangePicker(props) {
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
      otherProps = _babelRuntimeHelpersEsmObjectWithoutPropertiesLoose(props, ["isQuiet", "isDisabled", "isReadOnly", "isRequired", "autoFocus", "formatOptions", "placeholderDate"]);

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
  let className = classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'spectrum-InputGroup', 'spectrum-Datepicker--range', {
    'spectrum-InputGroup--quiet': isQuiet,
    'is-invalid': state.validationState === 'invalid',
    'is-disabled': isDisabled,
    'is-hovered': isHovered
  }, styleProps.className);
  return /*#__PURE__*/_react.createElement(FocusRing, {
    within: true,
    isTextInput: true,
    focusClass: classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'is-focused'),
    focusRingClass: classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'focus-ring'),
    autoFocus: autoFocus
  }, /*#__PURE__*/_react.createElement("div", _babelRuntimeHelpersEsmExtends({}, styleProps, mergeProps(comboboxProps, hoverProps), {
    className: className,
    ref: targetRef
  }), /*#__PURE__*/_react.createElement(FocusScope, {
    autoFocus: autoFocus
  }, /*#__PURE__*/_react.createElement($f89a664b25735c9291b8addecfd59013$export$DatePickerField, _babelRuntimeHelpersEsmExtends({}, startFieldProps, {
    isQuiet: props.isQuiet,
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    isRequired: isRequired,
    formatOptions: formatOptions,
    placeholderDate: placeholderDate,
    value: value.start,
    onChange: start => setDate('start', start),
    UNSAFE_className: classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'spectrum-Datepicker-startField')
  })), /*#__PURE__*/_react.createElement($f52d33e8ff443414997ed587ce7ed905$var$DateRangeDash, null), /*#__PURE__*/_react.createElement($f89a664b25735c9291b8addecfd59013$export$DatePickerField, _babelRuntimeHelpersEsmExtends({}, endFieldProps, {
    isQuiet: props.isQuiet,
    isDisabled: isDisabled,
    isReadOnly: isReadOnly,
    isRequired: isRequired,
    validationState: state.validationState,
    formatOptions: formatOptions,
    placeholderDate: placeholderDate,
    value: value.end,
    onChange: end => setDate('end', end),
    UNSAFE_className: classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'spectrum-Datepicker-endField', classNames($fc5c1aaa653a82d8278e64c777eca$$interop$default, 'react-spectrum-Datepicker-endField'))
  }))), /*#__PURE__*/_react.createElement(DialogTrigger, {
    type: "popover",
    mobileType: "tray",
    placement: direction === 'rtl' ? 'bottom right' : 'bottom left',
    targetRef: targetRef,
    hideArrow: true,
    isOpen: isOpen,
    onOpenChange: setOpen
  }, /*#__PURE__*/_react.createElement(FieldButton, _babelRuntimeHelpersEsmExtends({}, buttonProps, {
    UNSAFE_className: classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'spectrum-FieldButton'),
    isQuiet: isQuiet,
    validationState: state.validationState,
    isDisabled: isDisabled || isReadOnly
  }), /*#__PURE__*/_react.createElement(_spectrumIconsWorkflowCalendar, null)), /*#__PURE__*/_react.createElement(Dialog, _babelRuntimeHelpersEsmExtends({
    UNSAFE_className: classNames($fc5c1aaa653a82d8278e64c777eca$$interop$default, 'react-spectrum-Datepicker-dialog')
  }, dialogProps), /*#__PURE__*/_react.createElement(RangeCalendar, {
    autoFocus: true,
    value: value,
    onChange: selectDateRange
  })))));
}

function $f52d33e8ff443414997ed587ce7ed905$var$DateRangeDash() {
  let focusManager = useFocusManager();

  let onMouseDown = e => {
    e.preventDefault();
    focusManager.focusNext({
      from: e.target
    });
  };

  return /*#__PURE__*/_react.createElement("div", {
    role: "presentation",
    className: classNames($ed163f34af6780259e0266609fb62099$$interop$default, 'spectrum-Datepicker--rangeDash'),
    onMouseDown: onMouseDown
  });
}
//# sourceMappingURL=module.js.map
