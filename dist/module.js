import { VisuallyHidden } from "@react-aria/visually-hidden";
import _reactDom from "react-dom";
import _react, { Fragment, useImperativeHandle, useState } from "react";

/* Inspired by https://github.com/AlmeroSteyn/react-aria-live */
const $de8b453f082d29ae3c4c121e2b261$var$LIVEREGION_TIMEOUT_DELAY = 7000;

let $de8b453f082d29ae3c4c121e2b261$var$liveRegionAnnouncer = _react.createRef();

let $de8b453f082d29ae3c4c121e2b261$var$node = null;
let $de8b453f082d29ae3c4c121e2b261$var$messageId = 0;
/**
 * Announces the message using screen reader technology.
 */

export function announce(message, assertiveness, timeout) {
  if (assertiveness === void 0) {
    assertiveness = 'assertive';
  }

  if (timeout === void 0) {
    timeout = $de8b453f082d29ae3c4c121e2b261$var$LIVEREGION_TIMEOUT_DELAY;
  }

  $de8b453f082d29ae3c4c121e2b261$var$ensureInstance(announcer => announcer.announce(message, assertiveness, timeout));
}
/**
 * Stops all queued announcements.
 */

export function clearAnnouncer(assertiveness) {
  $de8b453f082d29ae3c4c121e2b261$var$ensureInstance(announcer => announcer.clear(assertiveness));
}
/**
 * Removes the announcer from the DOM.
 */

export function destroyAnnouncer() {
  if ($de8b453f082d29ae3c4c121e2b261$var$liveRegionAnnouncer.current) {
    _reactDom.unmountComponentAtNode($de8b453f082d29ae3c4c121e2b261$var$node);

    document.body.removeChild($de8b453f082d29ae3c4c121e2b261$var$node);
    $de8b453f082d29ae3c4c121e2b261$var$node = null;
  }
}
/**
 * Ensures we only have one instance of the announcer so that we don't have elements competing.
 */

function $de8b453f082d29ae3c4c121e2b261$var$ensureInstance(callback) {
  if (!$de8b453f082d29ae3c4c121e2b261$var$liveRegionAnnouncer.current) {
    $de8b453f082d29ae3c4c121e2b261$var$node = document.createElement('div');
    $de8b453f082d29ae3c4c121e2b261$var$node.dataset.liveAnnouncer = 'true';
    document.body.prepend($de8b453f082d29ae3c4c121e2b261$var$node);

    _reactDom.render( /*#__PURE__*/_react.createElement($de8b453f082d29ae3c4c121e2b261$var$LiveRegionAnnouncer, {
      ref: $de8b453f082d29ae3c4c121e2b261$var$liveRegionAnnouncer
    }), $de8b453f082d29ae3c4c121e2b261$var$node, () => callback($de8b453f082d29ae3c4c121e2b261$var$liveRegionAnnouncer.current));
  } else {
    callback($de8b453f082d29ae3c4c121e2b261$var$liveRegionAnnouncer.current);
  }
}

const $de8b453f082d29ae3c4c121e2b261$var$LiveRegionAnnouncer = _react.forwardRef((props, ref) => {
  let [assertiveMessages, setAssertiveMessages] = useState([]);
  let [politeMessages, setPoliteMessages] = useState([]);

  let clear = assertiveness => {
    if (!assertiveness || assertiveness === 'assertive') {
      setAssertiveMessages([]);
    }

    if (!assertiveness || assertiveness === 'polite') {
      setPoliteMessages([]);
    }
  };

  let announce = function announce(message, assertiveness, timeout) {
    if (assertiveness === void 0) {
      assertiveness = 'assertive';
    }

    if (timeout === void 0) {
      timeout = $de8b453f082d29ae3c4c121e2b261$var$LIVEREGION_TIMEOUT_DELAY;
    }

    let id = $de8b453f082d29ae3c4c121e2b261$var$messageId++;

    if (assertiveness === 'assertive') {
      setAssertiveMessages(messages => [...messages, {
        id,
        text: message
      }]);
    } else {
      setPoliteMessages(messages => [...messages, {
        id,
        text: message
      }]);
    }

    if (message !== '') {
      setTimeout(() => {
        if (assertiveness === 'assertive') {
          setAssertiveMessages(messages => messages.filter(message => message.id !== id));
        } else {
          setPoliteMessages(messages => messages.filter(message => message.id !== id));
        }
      }, timeout);
    }
  };

  useImperativeHandle(ref, () => ({
    announce,
    clear
  }));
  return /*#__PURE__*/_react.createElement(Fragment, null, /*#__PURE__*/_react.createElement($de8b453f082d29ae3c4c121e2b261$var$MessageBlock, {
    "aria-live": "assertive"
  }, assertiveMessages.map(message => /*#__PURE__*/_react.createElement("div", {
    key: message.id
  }, message.text))), /*#__PURE__*/_react.createElement($de8b453f082d29ae3c4c121e2b261$var$MessageBlock, {
    "aria-live": "polite"
  }, politeMessages.map(message => /*#__PURE__*/_react.createElement("div", {
    key: message.id
  }, message.text))));
});

function $de8b453f082d29ae3c4c121e2b261$var$MessageBlock(_ref) {
  let {
    children,
    'aria-live': ariaLive
  } = _ref;
  return /*#__PURE__*/_react.createElement(VisuallyHidden, {
    role: "log",
    "aria-live": ariaLive,
    "aria-relevant": "additions"
  }, children);
}
//# sourceMappingURL=module.js.map
