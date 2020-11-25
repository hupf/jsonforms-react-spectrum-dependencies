var {
  VisuallyHidden
} = require("@react-aria/visually-hidden");

var _reactDom = $parcel$interopDefault(require("react-dom"));

var _react2 = require("react");

var _react = $parcel$interopDefault(_react2);

var {
  Fragment,
  useImperativeHandle,
  useState
} = _react2;

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

/* Inspired by https://github.com/AlmeroSteyn/react-aria-live */
const $daf77d092755557a1dfdc345b21308d$var$LIVEREGION_TIMEOUT_DELAY = 7000;

let $daf77d092755557a1dfdc345b21308d$var$liveRegionAnnouncer = _react.createRef();

let $daf77d092755557a1dfdc345b21308d$var$node = null;
let $daf77d092755557a1dfdc345b21308d$var$messageId = 0;
/**
 * Announces the message using screen reader technology.
 */

function announce(message, assertiveness, timeout) {
  if (assertiveness === void 0) {
    assertiveness = 'assertive';
  }

  if (timeout === void 0) {
    timeout = $daf77d092755557a1dfdc345b21308d$var$LIVEREGION_TIMEOUT_DELAY;
  }

  $daf77d092755557a1dfdc345b21308d$var$ensureInstance(announcer => announcer.announce(message, assertiveness, timeout));
}
/**
 * Stops all queued announcements.
 */


exports.announce = announce;

function clearAnnouncer(assertiveness) {
  $daf77d092755557a1dfdc345b21308d$var$ensureInstance(announcer => announcer.clear(assertiveness));
}
/**
 * Removes the announcer from the DOM.
 */


exports.clearAnnouncer = clearAnnouncer;

function destroyAnnouncer() {
  if ($daf77d092755557a1dfdc345b21308d$var$liveRegionAnnouncer.current) {
    _reactDom.unmountComponentAtNode($daf77d092755557a1dfdc345b21308d$var$node);

    document.body.removeChild($daf77d092755557a1dfdc345b21308d$var$node);
    $daf77d092755557a1dfdc345b21308d$var$node = null;
  }
}
/**
 * Ensures we only have one instance of the announcer so that we don't have elements competing.
 */


exports.destroyAnnouncer = destroyAnnouncer;

function $daf77d092755557a1dfdc345b21308d$var$ensureInstance(callback) {
  if (!$daf77d092755557a1dfdc345b21308d$var$liveRegionAnnouncer.current) {
    $daf77d092755557a1dfdc345b21308d$var$node = document.createElement('div');
    $daf77d092755557a1dfdc345b21308d$var$node.dataset.liveAnnouncer = 'true';
    document.body.prepend($daf77d092755557a1dfdc345b21308d$var$node);

    _reactDom.render( /*#__PURE__*/_react.createElement($daf77d092755557a1dfdc345b21308d$var$LiveRegionAnnouncer, {
      ref: $daf77d092755557a1dfdc345b21308d$var$liveRegionAnnouncer
    }), $daf77d092755557a1dfdc345b21308d$var$node, () => callback($daf77d092755557a1dfdc345b21308d$var$liveRegionAnnouncer.current));
  } else {
    callback($daf77d092755557a1dfdc345b21308d$var$liveRegionAnnouncer.current);
  }
}

const $daf77d092755557a1dfdc345b21308d$var$LiveRegionAnnouncer = _react.forwardRef((props, ref) => {
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
      timeout = $daf77d092755557a1dfdc345b21308d$var$LIVEREGION_TIMEOUT_DELAY;
    }

    let id = $daf77d092755557a1dfdc345b21308d$var$messageId++;

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
  return /*#__PURE__*/_react.createElement(Fragment, null, /*#__PURE__*/_react.createElement($daf77d092755557a1dfdc345b21308d$var$MessageBlock, {
    "aria-live": "assertive"
  }, assertiveMessages.map(message => /*#__PURE__*/_react.createElement("div", {
    key: message.id
  }, message.text))), /*#__PURE__*/_react.createElement($daf77d092755557a1dfdc345b21308d$var$MessageBlock, {
    "aria-live": "polite"
  }, politeMessages.map(message => /*#__PURE__*/_react.createElement("div", {
    key: message.id
  }, message.text))));
});

function $daf77d092755557a1dfdc345b21308d$var$MessageBlock(_ref) {
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
//# sourceMappingURL=main.js.map
