import { useCallback, useEffect, useRef } from "react";
import { announce } from "@react-aria/live-announcer";
export function useSpinButton(props) {
  const _async = useRef();

  let {
    value,
    textValue,
    minValue,
    maxValue,
    isDisabled,
    isReadOnly,
    isRequired,
    onIncrement,
    onIncrementPage,
    onDecrement,
    onDecrementPage,
    onDecrementToMin,
    onIncrementToMax
  } = props;

  const clearAsync = () => clearTimeout(_async.current); // eslint-disable-next-line arrow-body-style


  useEffect(() => {
    return () => clearAsync();
  }, []);

  let onKeyDown = e => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || isReadOnly) {
      return;
    }

    switch (e.key) {
      case 'PageUp':
        if (onIncrementPage) {
          e.preventDefault();
          onIncrementPage();
          break;
        }

      // fallthrough!

      case 'ArrowUp':
      case 'Up':
        if (onIncrement) {
          e.preventDefault();
          onIncrement();
        }

        break;

      case 'PageDown':
        if (onDecrementPage) {
          e.preventDefault();
          onDecrementPage();
          break;
        }

      // fallthrough

      case 'ArrowDown':
      case 'Down':
        if (onDecrement) {
          e.preventDefault();
          onDecrement();
        }

        break;

      case 'Home':
        if (minValue != null && onDecrementToMin) {
          e.preventDefault();
          onDecrementToMin();
        }

        break;

      case 'End':
        if (maxValue != null && onIncrementToMax) {
          e.preventDefault();
          onIncrementToMax();
        }

        break;
    }
  };

  let isFocused = useRef(false);

  let onFocus = () => {
    isFocused.current = true;
  };

  let onBlur = () => {
    isFocused.current = false;
  };

  useEffect(() => {
    if (isFocused.current) {
      announce(textValue || "" + value);
    }
  }, [textValue, value]);
  const onIncrementPressStart = useCallback(initialStepDelay => {
    onIncrement(); // Start spinning after initial delay

    _async.current = window.setTimeout(() => onIncrementPressStart(60), initialStepDelay);
  }, [onIncrement]);
  const onDecrementPressStart = useCallback(initialStepDelay => {
    onDecrement(); // Start spinning after initial delay

    _async.current = window.setTimeout(() => onDecrementPressStart(60), initialStepDelay);
  }, [onDecrement]);
  return {
    spinButtonProps: {
      role: 'spinbutton',
      'aria-valuenow': typeof value === 'number' ? value : null,
      'aria-valuetext': textValue || null,
      'aria-valuemin': minValue,
      'aria-valuemax': maxValue,
      'aria-disabled': isDisabled || null,
      'aria-readonly': isReadOnly || null,
      'aria-required': isRequired || null,
      onKeyDown,
      onFocus,
      onBlur
    },
    incrementButtonProps: {
      onPressStart: () => onIncrementPressStart(400),
      onPressEnd: clearAsync
    },
    decrementButtonProps: {
      onPressStart: () => onDecrementPressStart(400),
      onPressEnd: clearAsync
    }
  };
}
//# sourceMappingURL=module.js.map
