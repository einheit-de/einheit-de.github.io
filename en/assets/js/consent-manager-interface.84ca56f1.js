exports.id = 266;
exports.ids = [266];
exports.modules = {

/***/ 94225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _interface_chunk_8903abaa_esm_js__WEBPACK_IMPORTED_MODULE_6__.C)
/* harmony export */ });
/* harmony import */ var _index_bca06175_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3511);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _consent_manager_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32329);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63679);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71617);
/* harmony import */ var react_div_100vh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66409);
/* harmony import */ var _interface_chunk_8903abaa_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63175);
/* harmony import */ var activity_detector_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10532);












//# sourceMappingURL=interface-chunk-859175d7.esm.js.map


/***/ }),

/***/ 63175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ ConsentManagerInterfaceChunk),
  "S": () => (/* binding */ Switch)
});

// EXTERNAL MODULE: ./node_modules/@consent-manager/interface-default/dist/index-bca06175.esm.js
var index_bca06175_esm = __webpack_require__(3511);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@consent-manager/core/dist/core.esm.js + 3 modules
var core_esm = __webpack_require__(32329);
// EXTERNAL MODULE: ./node_modules/@loadable/component/dist/loadable.esm.js + 1 modules
var loadable_esm = __webpack_require__(63679);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/io5/IoShieldCheckmark.js
var IoShieldCheckmark = __webpack_require__(5931);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__(75068);
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
;// CONCATENATED MODULE: ./node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js

/* harmony default export */ const TransitionGroupContext = (react.createContext(null));
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,objectWithoutPropertiesLoose/* default */.Z)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);
;// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/CSSTransition.js











var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass_addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) forceReflow(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0,objectWithoutPropertiesLoose/* default */.Z)(_this$props, ["classNames"]);

    return /*#__PURE__*/react.createElement(esm_Transition, (0,esm_extends/* default */.Z)({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? 0 : {};
/* harmony default export */ const esm_CSSTransition = (CSSTransition);
// EXTERNAL MODULE: ./node_modules/@react-icons/all-files/io5/IoClose.js
var IoClose = __webpack_require__(5981);
// EXTERNAL MODULE: ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
var bodyScrollLock_esm = __webpack_require__(71617);
// EXTERNAL MODULE: ./node_modules/react-div-100vh/dist/esm/index.js
var esm = __webpack_require__(66409);
// EXTERNAL MODULE: ./node_modules/activity-detector-ssr/dist/activity-detector.js
var activity_detector = __webpack_require__(10532);
;// CONCATENATED MODULE: ./node_modules/@consent-manager/interface-default/dist/interface-chunk-8903abaa.esm.js












var _excluded = ["children", "input", "meta", "styles"];
var Switch = function Switch(_ref) {
  var children = _ref.children,
      input = _ref.input,
      styles = _ref.styles,
      rest = (0,index_bca06175_esm._)(_ref, _excluded);

  var key = "switch-" + input.name;
  return react.createElement("label", Object.assign({
    htmlFor: key,
    className: styles.switchLabel
  }, rest), react.createElement("div", {
    className: styles.switchWrapper
  }, react.createElement("input", Object.assign({
    id: key
  }, input, {
    className: styles.switchInput
  })), react.createElement("div", {
    className: (0,clsx_m["default"])(styles.switchSlide, input.checked && styles.switchSlideEnabled)
  }), react.createElement("div", {
    className: (0,clsx_m["default"])(styles.switchNodge, input.checked && styles.switchNodgeEnabled)
  })), react.createElement("div", {
    className: styles.switchContent
  }, children, " "));
};

var defaultAnimationStyles = {"enter":"animation-slide-module_enter__3awR-","enterActive":"animation-slide-module_enterActive__czWLr","enterDone":"animation-slide-module_enterDone__2LW-R","exit":"animation-slide-module_exit__FMUjC","exitActive":"animation-slide-module_exitActive__1rZXx"};

var Introduction = function Introduction(_ref) {
  var CloseIcon = _ref.CloseIcon,
      introductionFinished = _ref.introductionFinished,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? index_bca06175_esm.b : _ref$styles,
      _ref$animationStyles = _ref.animationStyles,
      animationStyles = _ref$animationStyles === void 0 ? defaultAnimationStyles : _ref$animationStyles,
      slideDuration = _ref.slideDuration,
      Button = _ref.Button,
      _ref$noActionDelay = _ref.noActionDelay,
      noActionDelay = _ref$noActionDelay === void 0 ? 4000 : _ref$noActionDelay;

  var _useContext = (0,react.useContext)(index_bca06175_esm.a),
      setFormVisible = _useContext.setFormVisible;

  var _useDecisions = (0,core_esm/* useDecisions */.EI)(),
      decisions = _useDecisions[0],
      setAndStoreDecisions = _useDecisions[1];

  var _useState = (0,react.useState)(false),
      show = _useState[0],
      setShow = _useState[1];

  var _React$useState = react.useState(false),
      isIdle = _React$useState[0],
      setIsIdle = _React$useState[1];

  var _useState2 = (0,react.useState)(),
      activityDetectorInstance = _useState2[0],
      setActivityDetector = _useState2[1]; // Listen for user interaction


  react.useEffect(function () {
    var activityDetector = (0,activity_detector/* default */.Z)({
      timeToIdle: noActionDelay,
      inactivityEvents: []
    });
    activityDetector.on('idle', function () {
      return setIsIdle(true);
    });
    activityDetector.on('active', function () {
      return setIsIdle(false);
    });
    setActivityDetector(activityDetector);
    return function () {
      return activityDetector.stop();
    };
  }, [noActionDelay, setActivityDetector]); // As soon user is idle for the first time, show the intro and stop listening

  (0,react.useEffect)(function () {
    if (isIdle && activityDetectorInstance) {
      setShow(true);
      activityDetectorInstance.stop();
    }
  }, [isIdle, setShow, activityDetectorInstance]);
  var onLearnMore = (0,react.useCallback)(function (e) {
    e.preventDefault();
    setShow(false);
    setFormVisible(true);
  }, [setShow, setFormVisible]);
  var onEnableAll = (0,react.useCallback)(function (e) {
    e.preventDefault();
    setShow(false);

    for (var _i = 0, _Object$keys = Object.keys(decisions); _i < _Object$keys.length; _i++) {
      var integrationId = _Object$keys[_i];
      decisions[integrationId] = true;
    }

    setAndStoreDecisions(decisions);
  }, [setShow, decisions, setAndStoreDecisions]);
  var onClose = (0,react.useCallback)(function (e) {
    e.preventDefault();
    setShow(false);
  }, [setShow]);
  return react.createElement(esm_CSSTransition, {
    "in": show,
    timeout: slideDuration,
    classNames: animationStyles,
    mountOnEnter: true,
    unmountOnExit: true,
    onExited: function onExited() {
      return introductionFinished();
    }
  }, react.createElement("section", {
    className: (0,clsx_m["default"])(styles.introduction, styles.slide),
    style: {
      transitionDuration: slideDuration + "ms"
    }
  }, react.createElement("div", {
    className: (0,clsx_m["default"])(styles.introductionShape)
  }), react.createElement("div", {
    className: (0,clsx_m["default"])(styles.introductionContent)
  }, react.createElement("h1", {
    className: (0,clsx_m["default"])(styles.introductionTitle)
  }, react.createElement(index_bca06175_esm.T, {
    id: "consent-manager.introduction.title"
  })), react.createElement("p", {
    className: (0,clsx_m["default"])(styles.introductionDescription)
  }, react.createElement(index_bca06175_esm.T, {
    id: "consent-manager.introduction.description"
  })), react.createElement("div", {
    className: (0,clsx_m["default"])(styles.introductionControls)
  }, react.createElement(Button, {
    onClick: onLearnMore
  }, react.createElement(index_bca06175_esm.T, {
    id: "consent-manager.introduction.learn-more"
  })), react.createElement(Button, {
    "data-button-style": "primary",
    onClick: onEnableAll
  }, react.createElement(index_bca06175_esm.T, {
    id: "consent-manager.introduction.enable-all"
  }))), react.createElement(index_bca06175_esm.T, {
    id: "consent-manager.close",
    render: function render(_ref2) {
      var message = _ref2.message;
      return react.createElement("button", {
        className: (0,clsx_m["default"])(styles.buttonReset, styles.buttonClose, styles.buttonClose),
        onClick: onClose,
        title: message
      }, react.createElement(CloseIcon, {
        className: (0,clsx_m["default"])(styles.buttonCloseIcon)
      }));
    }
  }))));
};

var defaultAnimationStyles$1 = {"enter":"animation-fade-module_enter__Cdouv","enterActive":"animation-fade-module_enterActive__24h_A","enterDone":"animation-fade-module_enterDone__37N87","exit":"animation-fade-module_exit__e58dR","exitActive":"animation-fade-module_exitActive__1EUHU"};

var Backdrop = function Backdrop(_ref) {
  var fadeDuration = _ref.fadeDuration,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? index_bca06175_esm.b : _ref$styles,
      _ref$animationStyles = _ref.animationStyles,
      animationStyles = _ref$animationStyles === void 0 ? defaultAnimationStyles$1 : _ref$animationStyles;

  var _useContext = (0,react.useContext)(index_bca06175_esm.a),
      formVisible = _useContext.formVisible;

  return react.createElement(esm_CSSTransition, {
    "in": formVisible,
    timeout: fadeDuration,
    classNames: animationStyles,
    mountOnEnter: true,
    unmountOnExit: true
  }, react.createElement("div", {
    id: "backdrop",
    className: (0,clsx_m["default"])(styles.backdrop),
    style: {
      transitionDuration: fadeDuration + "ms"
    }
  }));
};

var defaultAnimationStyles$2 = {"enter":"animation-slide-out-module_enter__1wEoM","enterActive":"animation-slide-out-module_enterActive__2qMzJ","enterDone":"animation-slide-out-module_enterDone__3DFeb","exit":"animation-slide-out-module_exit__3k8kb","exitActive":"animation-slide-out-module_exitActive__bztmW"};

var ToggleButton = function ToggleButton(_ref) {
  var styles = _ref.styles,
      _ref$animationStyles = _ref.animationStyles,
      animationStyles = _ref$animationStyles === void 0 ? defaultAnimationStyles$2 : _ref$animationStyles,
      ToggleIcon = _ref.ToggleIcon,
      toggleControlForm = _ref.toggleControlForm,
      _ref$slideDuration = _ref.slideDuration,
      slideDuration = _ref$slideDuration === void 0 ? 700 : _ref$slideDuration;

  var _useContext = (0,react.useContext)(index_bca06175_esm.a),
      formVisible = _useContext.formVisible;

  return react.createElement(esm_CSSTransition, {
    "in": formVisible,
    timeout: slideDuration,
    classNames: animationStyles
  }, react.createElement("button", {
    className: (0,clsx_m["default"])(styles.toggleButton),
    title: "Toggle website settings visibility",
    onClick: function onClick(e) {
      return toggleControlForm(e);
    },
    style: {
      transitionDuration: slideDuration + "ms"
    }
  }, react.createElement("div", {
    className: (0,clsx_m["default"])(styles.toggleButtonContent)
  }, react.createElement(ToggleIcon, {
    className: (0,clsx_m["default"])(styles.toggleButtonIcon)
  }))));
};

var DefaultForm = /*#__PURE__*/(0,loadable_esm/* default */.ZP)(function () {
  return __webpack_require__.e(/* import() | consent-manager-form */ 996).then(__webpack_require__.bind(__webpack_require__, 7669));
});
var Interface = function Interface(_ref) {
  var integrations = _ref.integrations,
      initialValues = _ref.initialValues,
      onSubmit = _ref.onSubmit,
      _ref$useDefaultButton = _ref.useDefaultButtonForIntroduction,
      useDefaultButtonForIntroduction = _ref$useDefaultButton === void 0 ? true : _ref$useDefaultButton,
      _ref$slideDuration = _ref.slideDuration,
      slideDuration = _ref$slideDuration === void 0 ? 700 : _ref$slideDuration,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? index_bca06175_esm.b : _ref$styles,
      _ref$CloseIcon = _ref.CloseIcon,
      CloseIcon = _ref$CloseIcon === void 0 ? IoClose/* IoClose */.b : _ref$CloseIcon,
      _ref$ToggleIcon = _ref.ToggleIcon,
      ToggleIcon = _ref$ToggleIcon === void 0 ? IoShieldCheckmark/* IoShieldCheckmark */.O : _ref$ToggleIcon,
      _ref$ToggleButton = _ref.ToggleButton,
      ToggleButton$1 = _ref$ToggleButton === void 0 ? ToggleButton : _ref$ToggleButton,
      _ref$Switch = _ref.Switch,
      Switch$1 = _ref$Switch === void 0 ? Switch : _ref$Switch,
      _ref$Button = _ref.Button,
      Button = _ref$Button === void 0 ? function (props) {
    return react.createElement("button", Object.assign({}, props));
  } : _ref$Button,
      _ref$Form = _ref.Form,
      Form = _ref$Form === void 0 ? DefaultForm : _ref$Form,
      _ref$animationStyles = _ref.animationStyles,
      animationStyles = _ref$animationStyles === void 0 ? defaultAnimationStyles : _ref$animationStyles;
  var DefaultButton = (0,index_bca06175_esm.u)(styles);
  var hasPendingDecisions = (0,core_esm/* useConsentFormVisible */.Hv)();

  var _useContext = (0,react.useContext)(index_bca06175_esm.a),
      formVisible = _useContext.formVisible,
      setFormVisible = _useContext.setFormVisible;

  var _useState = (0,react.useState)(hasPendingDecisions),
      needsIntroduction = _useState[0],
      setNeedsIntroduction = _useState[1];

  var introductionFinished = (0,react.useCallback)(function () {
    setNeedsIntroduction(false);
  }, [setNeedsIntroduction]);
  var formContainerRef = (0,react.useRef)(null);
  var toggleControlForm = (0,react.useCallback)(function (e) {
    e.preventDefault();
    setFormVisible(!formVisible);
  }, [formVisible, setFormVisible]); // Freeze scroll when form is shown

  (0,react.useEffect)(function () {
    var target = formContainerRef.current;

    if (!target) {
      return;
    }

    if (formVisible) {
      (0,bodyScrollLock_esm/* disableBodyScroll */.Qp)(target);
      target.scrollTo({
        top: 0
      });
    }

    if (!formVisible) {
      (0,bodyScrollLock_esm/* enableBodyScroll */.tG)(target);
    }

    return bodyScrollLock_esm/* clearAllBodyScrollLocks */.tP;
  }, [formVisible, formContainerRef]); // Get 100vh on mobile browsers as well

  var viewportHeight = (0,esm/* use100vh */.g)();
  var handleEsc = (0,react.useCallback)(function (e) {
    if (formVisible && e.keyCode === 27) {
      e.preventDefault();
      setFormVisible(false);
    }
  }, [formVisible, setFormVisible]); // Allow close on ESC key

  (0,react.useEffect)(function () {
    window.addEventListener('keydown', handleEsc);
    return function () {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [handleEsc]); // Check if component was mounted for SSR

  var _useState2 = (0,react.useState)(false),
      isMounted = _useState2[0],
      setIsMounted = _useState2[1];

  (0,react.useEffect)(function () {
    return setIsMounted(true);
  }, [setIsMounted]); // Do not render the interface on SSR.

  if (!isMounted) {
    return null;
  }

  return react.createElement("div", {
    className: (0,clsx_m["default"])(styles.wrapper),
    id: "consent-control-ui"
  }, needsIntroduction && react.createElement(Introduction, {
    introductionFinished: introductionFinished,
    slideDuration: slideDuration,
    CloseIcon: CloseIcon,
    Button: useDefaultButtonForIntroduction ? DefaultButton : Button
  }), react.createElement(Backdrop, {
    fadeDuration: slideDuration,
    styles: styles
  }), react.createElement(esm_CSSTransition, {
    "in": formVisible,
    timeout: slideDuration,
    classNames: animationStyles,
    unmountOnExit: true,
    mountOnEnter: true
  }, react.createElement("div", {
    className: (0,clsx_m["default"])(styles.pane, styles.slide),
    style: {
      transitionDuration: slideDuration + "ms"
    }
  }, react.createElement("section", {
    className: (0,clsx_m["default"])(styles.form),
    style: {
      maxHeight: viewportHeight ? viewportHeight + "px" : 'null'
    },
    ref: formContainerRef
  }, formVisible && react.createElement(Form, {
    styles: styles,
    onSubmit: onSubmit,
    integrations: integrations,
    initialValues: initialValues,
    Switch: Switch$1,
    Button: Button,
    CloseIcon: CloseIcon,
    ToggleIcon: ToggleIcon
  })))), react.createElement(ToggleButton$1, {
    ToggleIcon: ToggleIcon,
    styles: styles,
    toggleControlForm: toggleControlForm
  }));
};

var ConsentManagerInterfaceChunk = function ConsentManagerInterfaceChunk(props) {
  return react.createElement(core_esm/* ConsentManagerForm */.su, Object.assign({
    formComponent: Interface,
    id: "consent-manager-default-interface"
  }, props));
};


//# sourceMappingURL=interface-chunk-8903abaa.esm.js.map


/***/ }),

/***/ 5981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// THIS FILE IS AUTO GENERATED
var GenIcon = (__webpack_require__(15787)/* .GenIcon */ .w_)
module.exports.b = function IoClose (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(props);
};


/***/ }),

/***/ 10532:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ACTIVE = 'active';
var IDLE = 'idle';

var DEFAULT_INITIAL_STATE = ACTIVE;

var DEFAULT_ACTIVITY_EVENTS = ['click', 'mousemove', 'keydown', 'DOMMouseScroll', 'mousewheel', 'mousedown', 'touchstart', 'touchmove', 'focus'];

var DEFAULT_INACTIVITY_EVENTS = ['blur', 'visibilitychange'];

var DEFAULT_IGNORED_EVENTS_WHEN_IDLE = ['mousemove'];

/**
 * Creates an activity detector instance
 *
 * @param  {Object}   options
 * @param  {string[]} options.activityEvents        Events which force a transition to 'active'
 * @param  {string[]} options.inactivityEvents      Events which force a transition to 'idle'
 * @param  {string[]} options.ignoredEventsWhenIdle Events that are ignored in 'idle' state
 * @param  {number}   options.timeToIdle            Inactivity time in ms to transition to 'idle'
 * @param  {string}   options.initialState          One of 'active' or 'idle'
 * @param  {boolean}  options.autoInit
 * @return {Object}   activity detector instance
 */
var activityDetector = function activityDetector() {
    var _listeners;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$activityEvents = _ref.activityEvents,
        activityEvents = _ref$activityEvents === undefined ? DEFAULT_ACTIVITY_EVENTS : _ref$activityEvents,
        _ref$inactivityEvents = _ref.inactivityEvents,
        inactivityEvents = _ref$inactivityEvents === undefined ? DEFAULT_INACTIVITY_EVENTS : _ref$inactivityEvents,
        _ref$ignoredEventsWhe = _ref.ignoredEventsWhenIdle,
        ignoredEventsWhenIdle = _ref$ignoredEventsWhe === undefined ? DEFAULT_IGNORED_EVENTS_WHEN_IDLE : _ref$ignoredEventsWhe,
        _ref$timeToIdle = _ref.timeToIdle,
        timeToIdle = _ref$timeToIdle === undefined ? 30000 : _ref$timeToIdle,
        _ref$initialState = _ref.initialState,
        initialState = _ref$initialState === undefined ? DEFAULT_INITIAL_STATE : _ref$initialState,
        _ref$autoInit = _ref.autoInit,
        autoInit = _ref$autoInit === undefined ? true : _ref$autoInit;

    var hidden = void 0,
        visibilityChangeEvent = void 0;
    if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden';
        visibilityChangeEvent = 'visibilitychange';
    } else {
        var prefixes = ['webkit', 'moz', 'ms'];
        for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            if (typeof document[prefix + 'Hidden'] !== 'undefined') {
                hidden = prefix + 'Hidden';
                visibilityChangeEvent = prefix + 'visibilitychange';
                break;
            }
        }
    }

    var listeners = (_listeners = {}, _defineProperty(_listeners, ACTIVE, []), _defineProperty(_listeners, IDLE, []), _listeners);
    var state = void 0;
    var timer = void 0;

    var setState = function setState(newState) {
        clearTimeout(timer);
        if (newState === ACTIVE) {
            timer = setTimeout(function () {
                return setState(IDLE);
            }, timeToIdle);
        }
        if (state !== newState) {
            state = newState;
            listeners[state].forEach(function (l) {
                return l();
            });
        }
    };

    var handleUserActivityEvent = function handleUserActivityEvent(event) {
        if (state === ACTIVE || ignoredEventsWhenIdle.indexOf(event.type) < 0) {
            setState(ACTIVE);
        }
    };

    var handleUserInactivityEvent = function handleUserInactivityEvent() {
        setState(IDLE);
    };

    var handleVisibilityChangeEvent = function handleVisibilityChangeEvent() {
        setState(document[hidden] ? IDLE : ACTIVE);
    };

    /**
     * Starts the activity detector with the given state.
     * @param {string} firstState 'idle' or 'active'
     */
    var init = function init() {
        var firstState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_INITIAL_STATE;

        setState(firstState === ACTIVE ? ACTIVE : IDLE);
        activityEvents.forEach(function (eventName) {
            return window.addEventListener(eventName, handleUserActivityEvent);
        });

        inactivityEvents.filter(function (eventName) {
            return eventName !== 'visibilitychange';
        }).forEach(function (eventName) {
            return window.addEventListener(eventName, handleUserInactivityEvent);
        });

        if (inactivityEvents.indexOf('visibilitychange') >= 0 && visibilityChangeEvent) {
            document.addEventListener(visibilityChangeEvent, handleVisibilityChangeEvent);
        }
    };

    /**
     * Register an event listener for the required event
     * @param {string} eventName 'active' or 'idle'
     * @param {Function} listener
     */
    var on = function on(eventName, listener) {
        listeners[eventName].push(listener);
        var off = function off() {
            var index = listeners[eventName].indexOf(listener);
            if (index >= 0) {
                listeners[eventName].splice(index, 1);
            }
        };
        return off;
    };

    /**
     * Stops the activity detector and clean the listeners
     */
    var stop = function stop() {
        listeners[ACTIVE] = [];
        listeners[IDLE] = [];

        clearTimeout(timer);

        activityEvents.forEach(function (eventName) {
            return window.removeEventListener(eventName, handleUserActivityEvent);
        });

        inactivityEvents.forEach(function (eventName) {
            return window.removeEventListener(eventName, handleUserInactivityEvent);
        });

        if (visibilityChangeEvent) {
            document.removeEventListener(visibilityChangeEvent, handleVisibilityChangeEvent);
        }
    };

    if (autoInit) {
        init(initialState);
    }

    return { on: on, stop: stop, init: init };
};

exports.Z = activityDetector;

/***/ }),

/***/ 71617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qp": () => (/* binding */ disableBodyScroll),
/* harmony export */   "tG": () => (/* binding */ enableBodyScroll),
/* harmony export */   "tP": () => (/* binding */ clearAllBodyScrollLocks)
/* harmony export */ });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  } else {
    setOverflowHidden(options);
  }
};

var clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all locks ontouchstart/ontouchmove handlers, and the references.
    locks.forEach(function (lock) {
      lock.targetElement.ontouchstart = null;
      lock.targetElement.ontouchmove = null;
    });

    if (documentListenerAdded) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }

    // Reset initial clientY.
    initialClientY = -1;
  } else {
    restoreOverflowSetting();
  }

  locks = [];
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  } else if (!locks.length) {
    restoreOverflowSetting();
  }
};



/***/ }),

/***/ 66409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ use100vh)
/* harmony export */ });
/* unused harmony export measureHeight */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

var warned = false;
var Div100vh = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var style = _a.style, other = __rest(_a, ["style"]);
    var height = use100vh();
    // TODO: warn only in development
    if (!warned && (style === null || style === void 0 ? void 0 : style.height)) {
        warned = true;
        console.warn('<Div100vh /> overrides the height property of the style prop');
    }
    var styleWithRealHeight = __assign(__assign({}, style), { height: height ? height + "px" : '100vh' });
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ ref: ref, style: styleWithRealHeight }, other));
});
Div100vh.displayName = 'Div100vh';
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Div100vh)));
function use100vh() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(measureHeight), height = _a[0], setHeight = _a[1];
    var wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!wasRenderedOnClientAtLeastOnce)
            return;
        function setMeasuredHeight() {
            var measuredHeight = measureHeight();
            setHeight(measuredHeight);
        }
        window.addEventListener('resize', setMeasuredHeight);
        return function () { return window.removeEventListener('resize', setMeasuredHeight); };
    }, [wasRenderedOnClientAtLeastOnce]);
    return wasRenderedOnClientAtLeastOnce ? height : null;
}
function measureHeight() {
    if (!isClient())
        return null;
    return window.innerHeight;
}
// Once we ended up on the client, the first render must look the same as on
// the server so hydration happens without problems. _Then_ we immediately
// schedule a subsequent update and return the height measured on the client.
// It's not needed for CSR-only apps, but is critical for SSR.
function useWasRenderedOnClientAtLeastOnce() {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), wasRenderedOnClientAtLeastOnce = _a[0], setWasRenderedOnClientAtLeastOnce = _a[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (isClient()) {
            setWasRenderedOnClientAtLeastOnce(true);
        }
    }, []);
    return wasRenderedOnClientAtLeastOnce;
}
function isClient() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}


/***/ })

};
;