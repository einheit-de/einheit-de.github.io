"use strict";
exports.id = 996;
exports.ids = [996];
exports.modules = {

/***/ 7669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ form_e08b69fd_esm)
});

// EXTERNAL MODULE: ./node_modules/@consent-manager/interface-default/dist/index-bca06175.esm.js
var index_bca06175_esm = __webpack_require__(3511);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@consent-manager/core/dist/core.esm.js + 3 modules
var core_esm = __webpack_require__(32329);
// EXTERNAL MODULE: ./node_modules/@loadable/component/dist/loadable.esm.js + 1 modules
var loadable_esm = __webpack_require__(63679);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(86010);
// EXTERNAL MODULE: ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js
var bodyScrollLock_esm = __webpack_require__(71617);
// EXTERNAL MODULE: ./node_modules/react-div-100vh/dist/esm/index.js
var esm = __webpack_require__(66409);
// EXTERNAL MODULE: ./node_modules/@consent-manager/interface-default/dist/interface-chunk-8903abaa.esm.js + 8 modules
var interface_chunk_8903abaa_esm = __webpack_require__(63175);
// EXTERNAL MODULE: ./node_modules/activity-detector-ssr/dist/activity-detector.js
var activity_detector = __webpack_require__(10532);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(87462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(63366);
;// CONCATENATED MODULE: ./node_modules/final-form/dist/final-form.es.js



//      
var charCodeOfDot = ".".charCodeAt(0);
var reEscapeChar = /\\(\\)?/g;
var rePropName = RegExp( // Match anything that isn't a dot or bracket.
"[^.[\\]]+" + "|" + // Or match property names within brackets.
"\\[(?:" + // Match a non-string expression.
"([^\"'][^[]*)" + "|" + // Or match strings (supports escaping characters).
"([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2" + ")\\]" + "|" + // Or match "" as the space between consecutive dots or empty brackets.
"(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))", "g");
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = function stringToPath(string) {
  var result = [];

  if (string.charCodeAt(0) === charCodeOfDot) {
    result.push("");
  }

  string.replace(rePropName, function (match, expression, quote, subString) {
    var key = match;

    if (quote) {
      key = subString.replace(reEscapeChar, "$1");
    } else if (expression) {
      key = expression.trim();
    }

    result.push(key);
  });
  return result;
};

var keysCache = {};

var toPath = function toPath(key) {
  if (key === null || key === undefined || !key.length) {
    return [];
  }

  if (typeof key !== "string") {
    throw new Error("toPath() expects a string");
  }

  if (keysCache[key] == null) {
    keysCache[key] = stringToPath(key);
  }

  return keysCache[key];
};

//      

var getIn = function getIn(state, complexKey) {
  // Intentionally using iteration rather than recursion
  var path = toPath(complexKey);
  var current = state;

  for (var i = 0; i < path.length; i++) {
    var key = path[i];

    if (current === undefined || current === null || typeof current !== "object" || Array.isArray(current) && isNaN(key)) {
      return undefined;
    }

    current = current[key];
  }

  return current;
};

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var setInRecursor = function setInRecursor(current, index, path, value, destroyArrays) {
  if (index >= path.length) {
    // end of recursion
    return value;
  }

  var key = path[index]; // determine type of key

  if (isNaN(key)) {
    var _extends2;

    // object set
    if (current === undefined || current === null) {
      var _ref;

      // recurse
      var _result2 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // delete or create an object


      return _result2 === undefined ? undefined : (_ref = {}, _ref[key] = _result2, _ref);
    }

    if (Array.isArray(current)) {
      throw new Error("Cannot set a non-numeric property on an array");
    } // current exists, so make a copy of all its values, and add/update the new one


    var _result = setInRecursor(current[key], index + 1, path, value, destroyArrays);

    if (_result === undefined) {
      var numKeys = Object.keys(current).length;

      if (current[key] === undefined && numKeys === 0) {
        // object was already empty
        return undefined;
      }

      if (current[key] !== undefined && numKeys <= 1) {
        // only key we had was the one we are deleting
        if (!isNaN(path[index - 1]) && !destroyArrays) {
          // we are in an array, so return an empty object
          return {};
        } else {
          return undefined;
        }
      }

      current[key];
          var _final = (0,objectWithoutPropertiesLoose/* default */.Z)(current, [key].map(_toPropertyKey));

      return _final;
    } // set result in key


    return (0,esm_extends/* default */.Z)({}, current, (_extends2 = {}, _extends2[key] = _result, _extends2));
  } // array set


  var numericKey = Number(key);

  if (current === undefined || current === null) {
    // recurse
    var _result3 = setInRecursor(undefined, index + 1, path, value, destroyArrays); // if nothing returned, delete it


    if (_result3 === undefined) {
      return undefined;
    } // create an array


    var _array = [];
    _array[numericKey] = _result3;
    return _array;
  }

  if (!Array.isArray(current)) {
    throw new Error("Cannot set a numeric property on an object");
  } // recurse


  var existingValue = current[numericKey];
  var result = setInRecursor(existingValue, index + 1, path, value, destroyArrays); // current exists, so make a copy of all its values, and add/update the new one

  var array = [].concat(current);

  if (destroyArrays && result === undefined) {
    array.splice(numericKey, 1);

    if (array.length === 0) {
      return undefined;
    }
  } else {
    array[numericKey] = result;
  }

  return array;
};

var setIn = function setIn(state, key, value, destroyArrays) {
  if (destroyArrays === void 0) {
    destroyArrays = false;
  }

  if (state === undefined || state === null) {
    throw new Error("Cannot call setIn() with " + String(state) + " state");
  }

  if (key === undefined || key === null) {
    throw new Error("Cannot call setIn() with " + String(key) + " key");
  } // Recursive function needs to accept and return State, but public API should
  // only deal with Objects


  return setInRecursor(state, 0, toPath(key), value, destroyArrays);
};

var FORM_ERROR = "FINAL_FORM/form-error";
var ARRAY_ERROR = "FINAL_FORM/array-error";

//      
/**
 * Converts internal field state to published field state
 */

function publishFieldState(formState, field) {
  var errors = formState.errors,
      initialValues = formState.initialValues,
      lastSubmittedValues = formState.lastSubmittedValues,
      submitErrors = formState.submitErrors,
      submitFailed = formState.submitFailed,
      submitSucceeded = formState.submitSucceeded,
      submitting = formState.submitting,
      values = formState.values;
  var active = field.active,
      blur = field.blur,
      change = field.change,
      data = field.data,
      focus = field.focus,
      modified = field.modified,
      modifiedSinceLastSubmit = field.modifiedSinceLastSubmit,
      name = field.name,
      touched = field.touched,
      validating = field.validating,
      visited = field.visited;
  var value = getIn(values, name);
  var error = getIn(errors, name);

  if (error && error[ARRAY_ERROR]) {
    error = error[ARRAY_ERROR];
  }

  var submitError = submitErrors && getIn(submitErrors, name);
  var initial = initialValues && getIn(initialValues, name);
  var pristine = field.isEqual(initial, value);
  var dirtySinceLastSubmit = !!(lastSubmittedValues && !field.isEqual(getIn(lastSubmittedValues, name), value));
  var valid = !error && !submitError;
  return {
    active: active,
    blur: blur,
    change: change,
    data: data,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    error: error,
    focus: focus,
    initial: initial,
    invalid: !valid,
    length: Array.isArray(value) ? value.length : undefined,
    modified: modified,
    modifiedSinceLastSubmit: modifiedSinceLastSubmit,
    name: name,
    pristine: pristine,
    submitError: submitError,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitting: submitting,
    touched: touched,
    valid: valid,
    value: value,
    visited: visited,
    validating: validating
  };
}

//      
var fieldSubscriptionItems = ["active", "data", "dirty", "dirtySinceLastSubmit", "error", "initial", "invalid", "length", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "value", "visited", "validating"];

//      
var shallowEqual = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== "object" || !a || typeof b !== "object" || !b) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

//      
function subscriptionFilter (dest, src, previous, subscription, keys, shallowEqualKeys) {
  var different = false;
  keys.forEach(function (key) {
    if (subscription[key]) {
      dest[key] = src[key];

      if (!previous || (~shallowEqualKeys.indexOf(key) ? !shallowEqual(src[key], previous[key]) : src[key] !== previous[key])) {
        different = true;
      }
    }
  });
  return different;
}

//      
var shallowEqualKeys$1 = ["data"];
/**
 * Filters items in a FieldState based on a FieldSubscription
 */

var filterFieldState = function filterFieldState(state, previousState, subscription, force) {
  var result = {
    blur: state.blur,
    change: state.change,
    focus: state.focus,
    name: state.name
  };
  var different = subscriptionFilter(result, state, previousState, subscription, fieldSubscriptionItems, shallowEqualKeys$1) || !previousState;
  return different || force ? result : undefined;
};

//      
var formSubscriptionItems = ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "error", "errors", "hasSubmitErrors", "hasValidationErrors", "initialValues", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "submitting", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "touched", "valid", "validating", "values", "visited"];

//      
var shallowEqualKeys = ["touched", "visited"];
/**
 * Filters items in a FormState based on a FormSubscription
 */

function filterFormState(state, previousState, subscription, force) {
  var result = {};
  var different = subscriptionFilter(result, state, previousState, subscription, formSubscriptionItems, shallowEqualKeys) || !previousState;
  return different || force ? result : undefined;
}

//      

var memoize = function memoize(fn) {
  var lastArgs;
  var lastResult;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!lastArgs || args.length !== lastArgs.length || args.some(function (arg, index) {
      return !shallowEqual(lastArgs[index], arg);
    })) {
      lastArgs = args;
      lastResult = fn.apply(void 0, args);
    }

    return lastResult;
  };
};

var isPromise = (function (obj) {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
});

var version = "4.20.7";

var configOptions = (/* unused pure expression or super */ null && (["debug", "initialValues", "keepDirtyOnReinitialize", "mutators", "onSubmit", "validate", "validateOnBlur"]));

var tripleEquals = function tripleEquals(a, b) {
  return a === b;
};

var hasAnyError = function hasAnyError(errors) {
  return Object.keys(errors).some(function (key) {
    var value = errors[key];

    if (value && typeof value === "object" && !(value instanceof Error)) {
      return hasAnyError(value);
    }

    return typeof value !== "undefined";
  });
};

function convertToExternalFormState(_ref) {
  var active = _ref.active,
      dirtySinceLastSubmit = _ref.dirtySinceLastSubmit,
      modifiedSinceLastSubmit = _ref.modifiedSinceLastSubmit,
      error = _ref.error,
      errors = _ref.errors,
      initialValues = _ref.initialValues,
      pristine = _ref.pristine,
      submitting = _ref.submitting,
      submitFailed = _ref.submitFailed,
      submitSucceeded = _ref.submitSucceeded,
      submitError = _ref.submitError,
      submitErrors = _ref.submitErrors,
      valid = _ref.valid,
      validating = _ref.validating,
      values = _ref.values;
  return {
    active: active,
    dirty: !pristine,
    dirtySinceLastSubmit: dirtySinceLastSubmit,
    modifiedSinceLastSubmit: modifiedSinceLastSubmit,
    error: error,
    errors: errors,
    hasSubmitErrors: !!(submitError || submitErrors && hasAnyError(submitErrors)),
    hasValidationErrors: !!(error || hasAnyError(errors)),
    invalid: !valid,
    initialValues: initialValues,
    pristine: pristine,
    submitting: submitting,
    submitFailed: submitFailed,
    submitSucceeded: submitSucceeded,
    submitError: submitError,
    submitErrors: submitErrors,
    valid: valid,
    validating: validating > 0,
    values: values
  };
}

function notifySubscriber(subscriber, subscription, state, lastState, filter, force) {
  var notification = filter(state, lastState, subscription, force);

  if (notification) {
    subscriber(notification);
    return true;
  }

  return false;
}

function notify(_ref2, state, lastState, filter, force) {
  var entries = _ref2.entries;
  Object.keys(entries).forEach(function (key) {
    var entry = entries[Number(key)]; // istanbul ignore next

    if (entry) {
      var subscription = entry.subscription,
          subscriber = entry.subscriber,
          notified = entry.notified;

      if (notifySubscriber(subscriber, subscription, state, lastState, filter, force || !notified)) {
        entry.notified = true;
      }
    }
  });
}

function createForm(config) {
  if (!config) {
    throw new Error("No config specified");
  }

  var debug = config.debug,
      destroyOnUnregister = config.destroyOnUnregister,
      keepDirtyOnReinitialize = config.keepDirtyOnReinitialize,
      initialValues = config.initialValues,
      mutators = config.mutators,
      onSubmit = config.onSubmit,
      validate = config.validate,
      validateOnBlur = config.validateOnBlur;

  if (!onSubmit) {
    throw new Error("No onSubmit function specified");
  }

  var state = {
    subscribers: {
      index: 0,
      entries: {}
    },
    fieldSubscribers: {},
    fields: {},
    formState: {
      asyncErrors: {},
      dirtySinceLastSubmit: false,
      modifiedSinceLastSubmit: false,
      errors: {},
      initialValues: initialValues && (0,esm_extends/* default */.Z)({}, initialValues),
      invalid: false,
      pristine: true,
      submitting: false,
      submitFailed: false,
      submitSucceeded: false,
      resetWhileSubmitting: false,
      valid: true,
      validating: 0,
      values: initialValues ? (0,esm_extends/* default */.Z)({}, initialValues) : {}
    },
    lastFormState: undefined
  };
  var inBatch = 0;
  var validationPaused = false;
  var validationBlocked = false;
  var preventNotificationWhileValidationPaused = false;
  var nextAsyncValidationKey = 0;
  var asyncValidationPromises = {};

  var clearAsyncValidationPromise = function clearAsyncValidationPromise(key) {
    return function (result) {
      delete asyncValidationPromises[key];
      return result;
    };
  };

  var changeValue = function changeValue(state, name, mutate) {
    var before = getIn(state.formState.values, name);
    var after = mutate(before);
    state.formState.values = setIn(state.formState.values, name, after) || {};
  };

  var renameField = function renameField(state, from, to) {
    if (state.fields[from]) {
      var _extends2, _extends3;

      state.fields = (0,esm_extends/* default */.Z)({}, state.fields, (_extends2 = {}, _extends2[to] = (0,esm_extends/* default */.Z)({}, state.fields[from], {
        name: to,
        // rebind event handlers
        blur: function blur() {
          return api.blur(to);
        },
        change: function change(value) {
          return api.change(to, value);
        },
        focus: function focus() {
          return api.focus(to);
        },
        lastFieldState: undefined
      }), _extends2));
      delete state.fields[from];
      state.fieldSubscribers = (0,esm_extends/* default */.Z)({}, state.fieldSubscribers, (_extends3 = {}, _extends3[to] = state.fieldSubscribers[from], _extends3));
      delete state.fieldSubscribers[from];
      var value = getIn(state.formState.values, from);
      state.formState.values = setIn(state.formState.values, from, undefined) || {};
      state.formState.values = setIn(state.formState.values, to, value);
      delete state.lastFormState;
    }
  }; // bind state to mutators


  var getMutatorApi = function getMutatorApi(key) {
    return function () {
      // istanbul ignore next
      if (mutators) {
        // ^^ causes branch coverage warning, but needed to appease the Flow gods
        var mutatableState = {
          formState: state.formState,
          fields: state.fields,
          fieldSubscribers: state.fieldSubscribers,
          lastFormState: state.lastFormState
        };

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var returnValue = mutators[key](args, mutatableState, {
          changeValue: changeValue,
          getIn: getIn,
          renameField: renameField,
          resetFieldState: api.resetFieldState,
          setIn: setIn,
          shallowEqual: shallowEqual
        });
        state.formState = mutatableState.formState;
        state.fields = mutatableState.fields;
        state.fieldSubscribers = mutatableState.fieldSubscribers;
        state.lastFormState = mutatableState.lastFormState;
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
        return returnValue;
      }
    };
  };

  var mutatorsApi = mutators ? Object.keys(mutators).reduce(function (result, key) {
    result[key] = getMutatorApi(key);
    return result;
  }, {}) : {};

  var runRecordLevelValidation = function runRecordLevelValidation(setErrors) {
    var promises = [];

    if (validate) {
      var errorsOrPromise = validate((0,esm_extends/* default */.Z)({}, state.formState.values)); // clone to avoid writing

      if (isPromise(errorsOrPromise)) {
        promises.push(errorsOrPromise.then(function (errors) {
          return setErrors(errors, true);
        }));
      } else {
        setErrors(errorsOrPromise, false);
      }
    }

    return promises;
  };

  var getValidators = function getValidators(field) {
    return Object.keys(field.validators).reduce(function (result, index) {
      var validator = field.validators[Number(index)]();

      if (validator) {
        result.push(validator);
      }

      return result;
    }, []);
  };

  var runFieldLevelValidation = function runFieldLevelValidation(field, setError) {
    var promises = [];
    var validators = getValidators(field);

    if (validators.length) {
      var error;
      validators.forEach(function (validator) {
        var errorOrPromise = validator(getIn(state.formState.values, field.name), state.formState.values, validator.length === 0 || validator.length === 3 ? publishFieldState(state.formState, state.fields[field.name]) : undefined);

        if (errorOrPromise && isPromise(errorOrPromise)) {
          field.validating = true;
          var promise = errorOrPromise.then(function (error) {
            if (state.fields[field.name]) {
              state.fields[field.name].validating = false;
              setError(error);
            }
          }); // errors must be resolved, not rejected

          promises.push(promise);
        } else if (!error) {
          // first registered validator wins
          error = errorOrPromise;
        }
      });
      setError(error);
    }

    return promises;
  };

  var runValidation = function runValidation(fieldChanged, callback) {
    if (validationPaused) {
      validationBlocked = true;
      callback();
      return;
    }

    var fields = state.fields,
        formState = state.formState;

    var safeFields = (0,esm_extends/* default */.Z)({}, fields);

    var fieldKeys = Object.keys(safeFields);

    if (!validate && !fieldKeys.some(function (key) {
      return getValidators(safeFields[key]).length;
    })) {
      callback();
      return; // no validation rules
    } // pare down field keys to actually validate


    var limitedFieldLevelValidation = false;

    if (fieldChanged) {
      var changedField = safeFields[fieldChanged];

      if (changedField) {
        var validateFields = changedField.validateFields;

        if (validateFields) {
          limitedFieldLevelValidation = true;
          fieldKeys = validateFields.length ? validateFields.concat(fieldChanged) : [fieldChanged];
        }
      }
    }

    var recordLevelErrors = {};
    var asyncRecordLevelErrors = {};
    var fieldLevelErrors = {};
    var promises = [].concat(runRecordLevelValidation(function (errors, wasAsync) {
      if (wasAsync) {
        asyncRecordLevelErrors = errors || {};
      } else {
        recordLevelErrors = errors || {};
      }
    }), fieldKeys.reduce(function (result, name) {
      return result.concat(runFieldLevelValidation(fields[name], function (error) {
        fieldLevelErrors[name] = error;
      }));
    }, []));
    var hasAsyncValidations = promises.length > 0;
    var asyncValidationPromiseKey = ++nextAsyncValidationKey;
    var promise = Promise.all(promises).then(clearAsyncValidationPromise(asyncValidationPromiseKey)); // backwards-compat: add promise to submit-blocking promises iff there are any promises to await

    if (hasAsyncValidations) {
      asyncValidationPromises[asyncValidationPromiseKey] = promise;
    }

    var processErrors = function processErrors(afterAsync) {
      var merged = (0,esm_extends/* default */.Z)({}, limitedFieldLevelValidation ? formState.errors : {}, recordLevelErrors, afterAsync ? asyncRecordLevelErrors // new async errors
      : formState.asyncErrors);

      var forEachError = function forEachError(fn) {
        fieldKeys.forEach(function (name) {
          if (fields[name]) {
            // make sure field is still registered
            // field-level errors take precedent over record-level errors
            var recordLevelError = getIn(recordLevelErrors, name);
            var errorFromParent = getIn(merged, name);
            var hasFieldLevelValidation = getValidators(safeFields[name]).length;
            var fieldLevelError = fieldLevelErrors[name];
            fn(name, hasFieldLevelValidation && fieldLevelError || validate && recordLevelError || (!recordLevelError && !limitedFieldLevelValidation ? errorFromParent : undefined));
          }
        });
      };

      forEachError(function (name, error) {
        merged = setIn(merged, name, error) || {};
      });
      forEachError(function (name, error) {
        if (error && error[ARRAY_ERROR]) {
          var existing = getIn(merged, name);
          var copy = [].concat(existing);
          copy[ARRAY_ERROR] = error[ARRAY_ERROR];
          merged = setIn(merged, name, copy);
        }
      });

      if (!shallowEqual(formState.errors, merged)) {
        formState.errors = merged;
      }

      if (afterAsync) {
        formState.asyncErrors = asyncRecordLevelErrors;
      }

      formState.error = recordLevelErrors[FORM_ERROR];
    };

    if (hasAsyncValidations) {
      // async validations are running, ensure validating is true before notifying
      state.formState.validating++;
      callback();
    } // process sync errors


    processErrors(false); // sync errors have been set. notify listeners while we wait for others

    callback();

    if (hasAsyncValidations) {
      var afterPromise = function afterPromise() {
        state.formState.validating--;
        callback();
      };

      promise.then(function () {
        if (nextAsyncValidationKey > asyncValidationPromiseKey) {
          // if this async validator has been superseded by another, ignore its results
          return;
        }

        processErrors(true);
      }).then(afterPromise, afterPromise);
    }
  };

  var notifyFieldListeners = function notifyFieldListeners(name) {
    if (inBatch) {
      return;
    }

    var fields = state.fields,
        fieldSubscribers = state.fieldSubscribers,
        formState = state.formState;

    var safeFields = (0,esm_extends/* default */.Z)({}, fields);

    var notifyField = function notifyField(name) {
      var field = safeFields[name];
      var fieldState = publishFieldState(formState, field);
      var lastFieldState = field.lastFieldState;
      field.lastFieldState = fieldState;
      var fieldSubscriber = fieldSubscribers[name];

      if (fieldSubscriber) {
        notify(fieldSubscriber, fieldState, lastFieldState, filterFieldState, lastFieldState === undefined);
      }
    };

    if (name) {
      notifyField(name);
    } else {
      Object.keys(safeFields).forEach(notifyField);
    }
  };

  var markAllFieldsTouched = function markAllFieldsTouched() {
    Object.keys(state.fields).forEach(function (key) {
      state.fields[key].touched = true;
    });
  };

  var hasSyncErrors = function hasSyncErrors() {
    return !!(state.formState.error || hasAnyError(state.formState.errors));
  };

  var calculateNextFormState = function calculateNextFormState() {
    var fields = state.fields,
        formState = state.formState,
        lastFormState = state.lastFormState;

    var safeFields = (0,esm_extends/* default */.Z)({}, fields);

    var safeFieldKeys = Object.keys(safeFields); // calculate dirty/pristine

    var foundDirty = false;
    var dirtyFields = safeFieldKeys.reduce(function (result, key) {
      var dirty = !safeFields[key].isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

      if (dirty) {
        foundDirty = true;
        result[key] = true;
      }

      return result;
    }, {});
    var dirtyFieldsSinceLastSubmit = safeFieldKeys.reduce(function (result, key) {
      // istanbul ignore next
      var nonNullLastSubmittedValues = formState.lastSubmittedValues || {}; // || {} is for flow, but causes branch coverage complaint

      if (!safeFields[key].isEqual(getIn(formState.values, key), getIn(nonNullLastSubmittedValues, key))) {
        result[key] = true;
      }

      return result;
    }, {});
    formState.pristine = !foundDirty;
    formState.dirtySinceLastSubmit = !!(formState.lastSubmittedValues && Object.values(dirtyFieldsSinceLastSubmit).some(function (value) {
      return value;
    }));
    formState.modifiedSinceLastSubmit = !!(formState.lastSubmittedValues && // Object.values would treat values as mixed (facebook/flow#2221)
    Object.keys(safeFields).some(function (value) {
      return safeFields[value].modifiedSinceLastSubmit;
    }));
    formState.valid = !formState.error && !formState.submitError && !hasAnyError(formState.errors) && !(formState.submitErrors && hasAnyError(formState.submitErrors));
    var nextFormState = convertToExternalFormState(formState);

    var _safeFieldKeys$reduce = safeFieldKeys.reduce(function (result, key) {
      result.modified[key] = safeFields[key].modified;
      result.touched[key] = safeFields[key].touched;
      result.visited[key] = safeFields[key].visited;
      return result;
    }, {
      modified: {},
      touched: {},
      visited: {}
    }),
        modified = _safeFieldKeys$reduce.modified,
        touched = _safeFieldKeys$reduce.touched,
        visited = _safeFieldKeys$reduce.visited;

    nextFormState.dirtyFields = lastFormState && shallowEqual(lastFormState.dirtyFields, dirtyFields) ? lastFormState.dirtyFields : dirtyFields;
    nextFormState.dirtyFieldsSinceLastSubmit = lastFormState && shallowEqual(lastFormState.dirtyFieldsSinceLastSubmit, dirtyFieldsSinceLastSubmit) ? lastFormState.dirtyFieldsSinceLastSubmit : dirtyFieldsSinceLastSubmit;
    nextFormState.modified = lastFormState && shallowEqual(lastFormState.modified, modified) ? lastFormState.modified : modified;
    nextFormState.touched = lastFormState && shallowEqual(lastFormState.touched, touched) ? lastFormState.touched : touched;
    nextFormState.visited = lastFormState && shallowEqual(lastFormState.visited, visited) ? lastFormState.visited : visited;
    return lastFormState && shallowEqual(lastFormState, nextFormState) ? lastFormState : nextFormState;
  };

  var callDebug = function callDebug() {
    return debug && "development" !== "production" && debug(calculateNextFormState(), Object.keys(state.fields).reduce(function (result, key) {
      result[key] = state.fields[key];
      return result;
    }, {}));
  };

  var notifying = false;
  var scheduleNotification = false;

  var notifyFormListeners = function notifyFormListeners() {
    if (notifying) {
      scheduleNotification = true;
    } else {
      notifying = true;
      callDebug();

      if (!inBatch && !(validationPaused && preventNotificationWhileValidationPaused)) {
        var lastFormState = state.lastFormState;
        var nextFormState = calculateNextFormState();

        if (nextFormState !== lastFormState) {
          state.lastFormState = nextFormState;
          notify(state.subscribers, nextFormState, lastFormState, filterFormState);
        }
      }

      notifying = false;

      if (scheduleNotification) {
        scheduleNotification = false;
        notifyFormListeners();
      }
    }
  };

  var beforeSubmit = function beforeSubmit() {
    return Object.keys(state.fields).some(function (name) {
      return state.fields[name].beforeSubmit && state.fields[name].beforeSubmit() === false;
    });
  };

  var afterSubmit = function afterSubmit() {
    return Object.keys(state.fields).forEach(function (name) {
      return state.fields[name].afterSubmit && state.fields[name].afterSubmit();
    });
  };

  var resetModifiedAfterSubmit = function resetModifiedAfterSubmit() {
    return Object.keys(state.fields).forEach(function (key) {
      return state.fields[key].modifiedSinceLastSubmit = false;
    });
  }; // generate initial errors


  runValidation(undefined, function () {
    notifyFormListeners();
  });
  var api = {
    batch: function batch(fn) {
      inBatch++;
      fn();
      inBatch--;
      notifyFieldListeners();
      notifyFormListeners();
    },
    blur: function blur(name) {
      var fields = state.fields,
          formState = state.formState;
      var previous = fields[name];

      if (previous) {
        // can only blur registered fields
        delete formState.active;
        fields[name] = (0,esm_extends/* default */.Z)({}, previous, {
          active: false,
          touched: true
        });

        if (validateOnBlur) {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        } else {
          notifyFieldListeners();
          notifyFormListeners();
        }
      }
    },
    change: function change(name, value) {
      var fields = state.fields,
          formState = state.formState;

      if (getIn(formState.values, name) !== value) {
        changeValue(state, name, function () {
          return value;
        });
        var previous = fields[name];

        if (previous) {
          // only track modified for registered fields
          fields[name] = (0,esm_extends/* default */.Z)({}, previous, {
            modified: true,
            modifiedSinceLastSubmit: !!formState.lastSubmittedValues
          });
        }

        if (validateOnBlur) {
          notifyFieldListeners();
          notifyFormListeners();
        } else {
          runValidation(name, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
        }
      }
    },

    get destroyOnUnregister() {
      return !!destroyOnUnregister;
    },

    set destroyOnUnregister(value) {
      destroyOnUnregister = value;
    },

    focus: function focus(name) {
      var field = state.fields[name];

      if (field && !field.active) {
        state.formState.active = name;
        field.active = true;
        field.visited = true;
        notifyFieldListeners();
        notifyFormListeners();
      }
    },
    mutators: mutatorsApi,
    getFieldState: function getFieldState(name) {
      var field = state.fields[name];
      return field && field.lastFieldState;
    },
    getRegisteredFields: function getRegisteredFields() {
      return Object.keys(state.fields);
    },
    getState: function getState() {
      return calculateNextFormState();
    },
    initialize: function initialize(data) {
      var fields = state.fields,
          formState = state.formState;

      var safeFields = (0,esm_extends/* default */.Z)({}, fields);

      var values = typeof data === "function" ? data(formState.values) : data;

      if (!keepDirtyOnReinitialize) {
        formState.values = values;
      }
      /**
       * Hello, inquisitive code reader! Thanks for taking the time to dig in!
       *
       * The following code is the way it is to allow for non-registered deep
       * field values to be set via initialize()
       */
      // save dirty values


      var savedDirtyValues = keepDirtyOnReinitialize ? Object.keys(safeFields).reduce(function (result, key) {
        var field = safeFields[key];
        var pristine = field.isEqual(getIn(formState.values, key), getIn(formState.initialValues || {}, key));

        if (!pristine) {
          result[key] = getIn(formState.values, key);
        }

        return result;
      }, {}) : {}; // update initalValues and values

      formState.initialValues = values;
      formState.values = values; // restore the dirty values

      Object.keys(savedDirtyValues).forEach(function (key) {
        formState.values = setIn(formState.values, key, savedDirtyValues[key]) || {};
      });
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },
    isValidationPaused: function isValidationPaused() {
      return validationPaused;
    },
    pauseValidation: function pauseValidation(preventNotification) {
      if (preventNotification === void 0) {
        preventNotification = true;
      }

      validationPaused = true;
      preventNotificationWhileValidationPaused = preventNotification;
    },
    registerField: function registerField(name, subscriber, subscription, fieldConfig) {
      if (subscription === void 0) {
        subscription = {};
      }

      if (!state.fieldSubscribers[name]) {
        state.fieldSubscribers[name] = {
          index: 0,
          entries: {}
        };
      }

      var index = state.fieldSubscribers[name].index++; // save field subscriber callback

      state.fieldSubscribers[name].entries[index] = {
        subscriber: memoize(subscriber),
        subscription: subscription,
        notified: false
      };

      if (!state.fields[name]) {
        // create initial field state
        state.fields[name] = {
          active: false,
          afterSubmit: fieldConfig && fieldConfig.afterSubmit,
          beforeSubmit: fieldConfig && fieldConfig.beforeSubmit,
          blur: function blur() {
            return api.blur(name);
          },
          change: function change(value) {
            return api.change(name, value);
          },
          data: fieldConfig && fieldConfig.data || {},
          focus: function focus() {
            return api.focus(name);
          },
          isEqual: fieldConfig && fieldConfig.isEqual || tripleEquals,
          lastFieldState: undefined,
          modified: false,
          modifiedSinceLastSubmit: false,
          name: name,
          touched: false,
          valid: true,
          validateFields: fieldConfig && fieldConfig.validateFields,
          validators: {},
          validating: false,
          visited: false
        };
      }

      var haveValidator = false;
      var silent = fieldConfig && fieldConfig.silent;

      var notify = function notify() {
        if (silent) {
          notifyFieldListeners(name);
        } else {
          notifyFormListeners();
          notifyFieldListeners();
        }
      };

      if (fieldConfig) {
        haveValidator = !!(fieldConfig.getValidator && fieldConfig.getValidator());

        if (fieldConfig.getValidator) {
          state.fields[name].validators[index] = fieldConfig.getValidator;
        }

        var noValueInFormState = getIn(state.formState.values, name) === undefined;

        if (fieldConfig.initialValue !== undefined && (noValueInFormState || getIn(state.formState.values, name) === getIn(state.formState.initialValues, name)) // only initialize if we don't yet have any value for this field
        ) {
          state.formState.initialValues = setIn(state.formState.initialValues || {}, name, fieldConfig.initialValue);
          state.formState.values = setIn(state.formState.values, name, fieldConfig.initialValue);
          runValidation(undefined, notify);
        } // only use defaultValue if we don't yet have any value for this field


        if (fieldConfig.defaultValue !== undefined && fieldConfig.initialValue === undefined && getIn(state.formState.initialValues, name) === undefined && noValueInFormState) {
          state.formState.values = setIn(state.formState.values, name, fieldConfig.defaultValue);
        }
      }

      if (haveValidator) {
        runValidation(undefined, notify);
      } else {
        notify();
      }

      return function () {
        var validatorRemoved = false; // istanbul ignore next

        if (state.fields[name]) {
          // state.fields[name] may have been removed by a mutator
          validatorRemoved = !!(state.fields[name].validators[index] && state.fields[name].validators[index]());
          delete state.fields[name].validators[index];
        }

        var hasFieldSubscribers = !!state.fieldSubscribers[name];

        if (hasFieldSubscribers) {
          // state.fieldSubscribers[name] may have been removed by a mutator
          delete state.fieldSubscribers[name].entries[index];
        }

        var lastOne = hasFieldSubscribers && !Object.keys(state.fieldSubscribers[name].entries).length;

        if (lastOne) {
          delete state.fieldSubscribers[name];
          delete state.fields[name];

          if (validatorRemoved) {
            state.formState.errors = setIn(state.formState.errors, name, undefined) || {};
          }

          if (destroyOnUnregister) {
            state.formState.values = setIn(state.formState.values, name, undefined, true) || {};
          }
        }

        if (!silent) {
          if (validatorRemoved) {
            runValidation(undefined, function () {
              notifyFormListeners();
              notifyFieldListeners();
            });
          } else if (lastOne) {
            // values or errors may have changed
            notifyFormListeners();
          }
        }
      };
    },
    reset: function reset(initialValues) {
      if (initialValues === void 0) {
        initialValues = state.formState.initialValues;
      }

      if (state.formState.submitting) {
        state.formState.resetWhileSubmitting = true;
      }

      state.formState.submitFailed = false;
      state.formState.submitSucceeded = false;
      delete state.formState.submitError;
      delete state.formState.submitErrors;
      delete state.formState.lastSubmittedValues;
      api.initialize(initialValues || {});
    },

    /**
     * Resets all field flags (e.g. touched, visited, etc.) to their initial state
     */
    resetFieldState: function resetFieldState(name) {
      state.fields[name] = (0,esm_extends/* default */.Z)({}, state.fields[name], {
        active: false,
        lastFieldState: undefined,
        modified: false,
        touched: false,
        valid: true,
        validating: false,
        visited: false
      });
      runValidation(undefined, function () {
        notifyFieldListeners();
        notifyFormListeners();
      });
    },

    /**
     * Returns the form to a clean slate; that is:
     * - Clear all values
     * - Resets all fields to their initial state
     */
    restart: function restart(initialValues) {
      if (initialValues === void 0) {
        initialValues = state.formState.initialValues;
      }

      api.batch(function () {
        for (var name in state.fields) {
          api.resetFieldState(name);
          state.fields[name] = (0,esm_extends/* default */.Z)({}, state.fields[name], {
            active: false,
            lastFieldState: undefined,
            modified: false,
            modifiedSinceLastSubmit: false,
            touched: false,
            valid: true,
            validating: false,
            visited: false
          });
        }

        api.reset(initialValues);
      });
    },
    resumeValidation: function resumeValidation() {
      validationPaused = false;
      preventNotificationWhileValidationPaused = false;

      if (validationBlocked) {
        // validation was attempted while it was paused, so run it now
        runValidation(undefined, function () {
          notifyFieldListeners();
          notifyFormListeners();
        });
      }

      validationBlocked = false;
    },
    setConfig: function setConfig(name, value) {
      switch (name) {
        case "debug":
          debug = value;
          break;

        case "destroyOnUnregister":
          destroyOnUnregister = value;
          break;

        case "initialValues":
          api.initialize(value);
          break;

        case "keepDirtyOnReinitialize":
          keepDirtyOnReinitialize = value;
          break;

        case "mutators":
          mutators = value;

          if (value) {
            Object.keys(mutatorsApi).forEach(function (key) {
              if (!(key in value)) {
                delete mutatorsApi[key];
              }
            });
            Object.keys(value).forEach(function (key) {
              mutatorsApi[key] = getMutatorApi(key);
            });
          } else {
            Object.keys(mutatorsApi).forEach(function (key) {
              delete mutatorsApi[key];
            });
          }

          break;

        case "onSubmit":
          onSubmit = value;
          break;

        case "validate":
          validate = value;
          runValidation(undefined, function () {
            notifyFieldListeners();
            notifyFormListeners();
          });
          break;

        case "validateOnBlur":
          validateOnBlur = value;
          break;

        default:
          throw new Error("Unrecognised option " + name);
      }
    },
    submit: function submit() {
      var formState = state.formState;

      if (formState.submitting) {
        return;
      }

      delete formState.submitErrors;
      delete formState.submitError;
      formState.lastSubmittedValues = (0,esm_extends/* default */.Z)({}, formState.values);

      if (hasSyncErrors()) {
        markAllFieldsTouched();
        resetModifiedAfterSubmit();
        state.formState.submitFailed = true;
        notifyFormListeners();
        notifyFieldListeners();
        return; // no submit for you!!
      }

      var asyncValidationPromisesKeys = Object.keys(asyncValidationPromises);

      if (asyncValidationPromisesKeys.length) {
        // still waiting on async validation to complete...
        Promise.all(asyncValidationPromisesKeys.map(function (key) {
          return asyncValidationPromises[Number(key)];
        })).then(api.submit, console.error);
        return;
      }

      var submitIsBlocked = beforeSubmit();

      if (submitIsBlocked) {
        return;
      }

      var resolvePromise;
      var completeCalled = false;

      var complete = function complete(errors) {
        formState.submitting = false;
        var resetWhileSubmitting = formState.resetWhileSubmitting;

        if (resetWhileSubmitting) {
          formState.resetWhileSubmitting = false;
        }

        if (errors && hasAnyError(errors)) {
          formState.submitFailed = true;
          formState.submitSucceeded = false;
          formState.submitErrors = errors;
          formState.submitError = errors[FORM_ERROR];
          markAllFieldsTouched();
        } else {
          if (!resetWhileSubmitting) {
            formState.submitFailed = false;
            formState.submitSucceeded = true;
          }

          afterSubmit();
        }

        notifyFormListeners();
        notifyFieldListeners();
        completeCalled = true;

        if (resolvePromise) {
          resolvePromise(errors);
        }

        return errors;
      };

      formState.submitting = true;
      formState.submitFailed = false;
      formState.submitSucceeded = false;
      formState.lastSubmittedValues = (0,esm_extends/* default */.Z)({}, formState.values);
      resetModifiedAfterSubmit(); // onSubmit is either sync, callback or async with a Promise

      var result = onSubmit(formState.values, api, complete);

      if (!completeCalled) {
        if (result && isPromise(result)) {
          // onSubmit is async with a Promise
          notifyFormListeners(); // let everyone know we are submitting

          notifyFieldListeners(); // notify fields also

          return result.then(complete, function (error) {
            complete();
            throw error;
          });
        } else if (onSubmit.length >= 3) {
          // must be async, so we should return a Promise
          notifyFormListeners(); // let everyone know we are submitting

          notifyFieldListeners(); // notify fields also

          return new Promise(function (resolve) {
            resolvePromise = resolve;
          });
        } else {
          // onSubmit is sync
          complete(result);
        }
      }
    },
    subscribe: function subscribe(subscriber, subscription) {
      if (!subscriber) {
        throw new Error("No callback given.");
      }

      if (!subscription) {
        throw new Error("No subscription provided. What values do you want to listen to?");
      }

      var memoized = memoize(subscriber);
      var subscribers = state.subscribers;
      var index = subscribers.index++;
      subscribers.entries[index] = {
        subscriber: memoized,
        subscription: subscription,
        notified: false
      };
      var nextFormState = calculateNextFormState();
      notifySubscriber(memoized, subscription, nextFormState, nextFormState, filterFormState, true);
      return function () {
        delete subscribers.entries[index];
      };
    }
  };
  return api;
}



;// CONCATENATED MODULE: ./node_modules/react-final-form/dist/react-final-form.es.js






var _excluded$3 = ["render", "children", "component"];
// shared logic between components that use either render prop,
// children render function, or component prop
function renderComponent(props, lazyProps, name) {
  var render = props.render,
      children = props.children,
      component = props.component,
      rest = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded$3);

  if (component) {
    return /*#__PURE__*/react.createElement(component, Object.assign(lazyProps, rest, {
      children: children,
      render: render
    }));
  }

  if (render) {
    return render(children === undefined ? Object.assign(lazyProps, rest) : // inject children back in
    Object.assign(lazyProps, rest, {
      children: children
    }));
  }

  if (typeof children !== "function") {
    throw new Error("Must specify either a render prop, a render function as children, or a component prop to " + name);
  }

  return children(Object.assign(lazyProps, rest));
}

function useWhenValueChanges(value, callback, isEqual) {
  if (isEqual === void 0) {
    isEqual = function isEqual(a, b) {
      return a === b;
    };
  }

  var previous = react.useRef(value);
  react.useEffect(function () {
    if (!isEqual(value, previous.current)) {
      callback();
      previous.current = value;
    }
  });
}

/**
 * A simple hook to create a constant value that lives for
 * the lifetime of the component.
 *
 * Plagiarized from https://github.com/Andarist/use-constant
 *
 * Do NOT reuse this code unless you know what you're doing.
 * Use Andarist's hook; it's more fault tolerant to things like
 * falsy values.
 *
 * @param {Function} init - A function to generate the value
 */

function useConstant(init) {
  var ref = react.useRef();

  if (!ref.current) {
    ref.current = init();
  }

  return ref.current;
}

var react_final_form_es_shallowEqual = function shallowEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== "object" || !a || typeof b !== "object" || !b) {
    return false;
  }

  var keysA = Object.keys(a);
  var keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(b);

  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key) || a[key] !== b[key]) {
      return false;
    }
  }

  return true;
};

var isSyntheticEvent = function isSyntheticEvent(candidate) {
  return !!(candidate && typeof candidate.stopPropagation === "function");
};

var ReactFinalFormContext = /*#__PURE__*/react.createContext();

function useLatest(value) {
  var ref = react.useRef(value);
  react.useEffect(function () {
    ref.current = value;
  });
  return ref;
}

var react_final_form_es_version = "6.5.8";

var addLazyState = function addLazyState(dest, state, keys) {
  keys.forEach(function (key) {
    Object.defineProperty(dest, key, {
      get: function get() {
        return state[key];
      },
      enumerable: true
    });
  });
};

var addLazyFormState = function addLazyFormState(dest, state) {
  return addLazyState(dest, state, ["active", "dirty", "dirtyFields", "dirtySinceLastSubmit", "dirtyFieldsSinceLastSubmit", "error", "errors", "hasSubmitErrors", "hasValidationErrors", "initialValues", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "values", "visited"]);
};
var addLazyFieldMetaState = function addLazyFieldMetaState(dest, state) {
  return addLazyState(dest, state, ["active", "data", "dirty", "dirtySinceLastSubmit", "error", "initial", "invalid", "length", "modified", "modifiedSinceLastSubmit", "pristine", "submitError", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "visited"]);
};

var _excluded$2 = ["debug", "decorators", "destroyOnUnregister", "form", "initialValues", "initialValuesEqual", "keepDirtyOnReinitialize", "mutators", "onSubmit", "subscription", "validate", "validateOnBlur"];
var versions = {
  "final-form": version,
  "react-final-form": react_final_form_es_version
};
var all$1 = formSubscriptionItems.reduce(function (result, key) {
  result[key] = true;
  return result;
}, {});

function ReactFinalForm(_ref) {
  var debug = _ref.debug,
      _ref$decorators = _ref.decorators,
      decorators = _ref$decorators === void 0 ? [] : _ref$decorators,
      destroyOnUnregister = _ref.destroyOnUnregister,
      alternateFormApi = _ref.form,
      initialValues = _ref.initialValues,
      initialValuesEqual = _ref.initialValuesEqual,
      keepDirtyOnReinitialize = _ref.keepDirtyOnReinitialize,
      mutators = _ref.mutators,
      onSubmit = _ref.onSubmit,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all$1 : _ref$subscription,
      validate = _ref.validate,
      validateOnBlur = _ref.validateOnBlur,
      rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, _excluded$2);

  var config = {
    debug: debug,
    destroyOnUnregister: destroyOnUnregister,
    initialValues: initialValues,
    keepDirtyOnReinitialize: keepDirtyOnReinitialize,
    mutators: mutators,
    onSubmit: onSubmit,
    validate: validate,
    validateOnBlur: validateOnBlur
  };
  var form = useConstant(function () {
    var f = alternateFormApi || createForm(config); // pause validation until children register all fields on first render (unpaused in useEffect() below)

    f.pauseValidation();
    return f;
  }); // synchronously register and unregister to query form state for our subscription on first render

  var _React$useState = react.useState(function () {
    var initialState = {};
    form.subscribe(function (state) {
      initialState = state;
    }, subscription)();
    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1]; // save a copy of state that can break through the closure
  // on the shallowEqual() line below.


  var stateRef = useLatest(state);
  react.useEffect(function () {
    // We have rendered, so all fields are now registered, so we can unpause validation
    form.isValidationPaused() && form.resumeValidation();
    var unsubscriptions = [form.subscribe(function (s) {
      if (!react_final_form_es_shallowEqual(s, stateRef.current)) {
        setState(s);
      }
    }, subscription)].concat(decorators ? decorators.map(function (decorator) {
      return (// this noop ternary is to appease the flow gods
        // istanbul ignore next
        decorator(form)
      );
    }) : []);
    return function () {
      form.pauseValidation(); // pause validation so we don't revalidate on every field deregistration

      unsubscriptions.reverse().forEach(function (unsubscribe) {
        return unsubscribe();
      }); // don't need to resume validation here; either unmounting, or will re-run this hook with new deps
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, decorators); // warn about decorator changes
  // istanbul ignore next

  if (false) {} // allow updatable config


  useWhenValueChanges(debug, function () {
    form.setConfig("debug", debug);
  });
  useWhenValueChanges(destroyOnUnregister, function () {
    form.destroyOnUnregister = !!destroyOnUnregister;
  });
  useWhenValueChanges(keepDirtyOnReinitialize, function () {
    form.setConfig("keepDirtyOnReinitialize", keepDirtyOnReinitialize);
  });
  useWhenValueChanges(initialValues, function () {
    form.setConfig("initialValues", initialValues);
  }, initialValuesEqual || react_final_form_es_shallowEqual);
  useWhenValueChanges(mutators, function () {
    form.setConfig("mutators", mutators);
  });
  useWhenValueChanges(onSubmit, function () {
    form.setConfig("onSubmit", onSubmit);
  });
  useWhenValueChanges(validate, function () {
    form.setConfig("validate", validate);
  });
  useWhenValueChanges(validateOnBlur, function () {
    form.setConfig("validateOnBlur", validateOnBlur);
  });

  var handleSubmit = function handleSubmit(event) {
    if (event) {
      // sometimes not true, e.g. React Native
      if (typeof event.preventDefault === "function") {
        event.preventDefault();
      }

      if (typeof event.stopPropagation === "function") {
        // prevent any outer forms from receiving the event too
        event.stopPropagation();
      }
    }

    return form.submit();
  };

  var renderProps = {
    form: (0,esm_extends/* default */.Z)({}, form, {
      reset: function reset(eventOrValues) {
        if (isSyntheticEvent(eventOrValues)) {
          // it's a React SyntheticEvent, call reset with no arguments
          form.reset();
        } else {
          form.reset(eventOrValues);
        }
      }
    }),
    handleSubmit: handleSubmit
  };
  addLazyFormState(renderProps, state);
  return /*#__PURE__*/react.createElement(ReactFinalFormContext.Provider, {
    value: form
  }, renderComponent((0,esm_extends/* default */.Z)({}, rest, {
    __versions: versions
  }), renderProps, "ReactFinalForm"));
}

function useForm(componentName) {
  var form = react.useContext(ReactFinalFormContext);

  if (!form) {
    throw new Error((componentName || "useForm") + " must be used inside of a <Form> component");
  }

  return form;
}

function useFormState(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      onChange = _ref.onChange,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all$1 : _ref$subscription;

  var form = useForm("useFormState");
  var firstRender = React.useRef(true);
  var onChangeRef = React.useRef(onChange);
  onChangeRef.current = onChange; // synchronously register and unregister to query field state for our subscription on first render

  var _React$useState = React.useState(function () {
    var initialState = {};
    form.subscribe(function (state) {
      initialState = state;
    }, subscription)();

    if (onChange) {
      onChange(initialState);
    }

    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  React.useEffect(function () {
    return form.subscribe(function (newState) {
      if (firstRender.current) {
        firstRender.current = false;
      } else {
        setState(newState);

        if (onChangeRef.current) {
          onChangeRef.current(newState);
        }
      }
    }, subscription);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  var lazyState = {};
  addLazyFormState(lazyState, state);
  return lazyState;
}

var _excluded$1 = (/* unused pure expression or super */ null && (["onChange", "subscription"]));

function FormSpy(_ref) {
  var onChange = _ref.onChange,
      subscription = _ref.subscription,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var reactFinalForm = useForm("FormSpy");
  var state = useFormState({
    onChange: onChange,
    subscription: subscription
  });

  if (onChange) {
    return null;
  }

  var renderProps = {
    form: _extends({}, reactFinalForm, {
      reset: function reset(eventOrValues) {
        if (isSyntheticEvent(eventOrValues)) {
          // it's a React SyntheticEvent, call reset with no arguments
          reactFinalForm.reset();
        } else {
          reactFinalForm.reset(eventOrValues);
        }
      }
    })
  };
  return renderComponent(_extends({}, rest, renderProps), state, "FormSpy");
}

var isReactNative = typeof window !== "undefined" && window.navigator && window.navigator.product && window.navigator.product === "ReactNative";

var getSelectedValues = function getSelectedValues(options) {
  var result = [];

  if (options) {
    for (var index = 0; index < options.length; index++) {
      var option = options[index];

      if (option.selected) {
        result.push(option.value);
      }
    }
  }

  return result;
};

var getValue = function getValue(event, currentValue, valueProp, isReactNative) {
  if (!isReactNative && event.nativeEvent && event.nativeEvent.text !== undefined) {
    return event.nativeEvent.text;
  }

  if (isReactNative && event.nativeEvent) {
    return event.nativeEvent.text;
  }

  var detypedEvent = event;
  var _detypedEvent$target = detypedEvent.target,
      type = _detypedEvent$target.type,
      value = _detypedEvent$target.value,
      checked = _detypedEvent$target.checked;

  switch (type) {
    case "checkbox":
      if (valueProp !== undefined) {
        // we are maintaining an array, not just a boolean
        if (checked) {
          // add value to current array value
          return Array.isArray(currentValue) ? currentValue.concat(valueProp) : [valueProp];
        } else {
          // remove value from current array value
          if (!Array.isArray(currentValue)) {
            return currentValue;
          }

          var index = currentValue.indexOf(valueProp);

          if (index < 0) {
            return currentValue;
          } else {
            return currentValue.slice(0, index).concat(currentValue.slice(index + 1));
          }
        }
      } else {
        // it's just a boolean
        return !!checked;
      }

    case "select-multiple":
      return getSelectedValues(event.target.options);

    default:
      return value;
  }
};

/**
 * Creates a callback, even with closures, that will be
 * instance === for the lifetime of the component, always
 * calling the most recent version of the function and its
 * closures.
 */

function useConstantCallback(callback) {
  var ref = react.useRef(callback);
  react.useEffect(function () {
    ref.current = callback;
  });
  return react.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(null, args);
  }, []);
}

var react_final_form_es_all = fieldSubscriptionItems.reduce(function (result, key) {
  result[key] = true;
  return result;
}, {});

var defaultFormat = function defaultFormat(value, name) {
  return value === undefined ? "" : value;
};

var defaultParse = function defaultParse(value, name) {
  return value === "" ? undefined : value;
};

var defaultIsEqual = function defaultIsEqual(a, b) {
  return a === b;
};

function useField(name, config) {
  if (config === void 0) {
    config = {};
  }

  var _config = config,
      afterSubmit = _config.afterSubmit,
      allowNull = _config.allowNull,
      component = _config.component,
      data = _config.data,
      defaultValue = _config.defaultValue,
      _config$format = _config.format,
      format = _config$format === void 0 ? defaultFormat : _config$format,
      formatOnBlur = _config.formatOnBlur,
      initialValue = _config.initialValue,
      multiple = _config.multiple,
      _config$parse = _config.parse,
      parse = _config$parse === void 0 ? defaultParse : _config$parse,
      _config$subscription = _config.subscription,
      subscription = _config$subscription === void 0 ? react_final_form_es_all : _config$subscription,
      type = _config.type,
      validateFields = _config.validateFields,
      _value = _config.value;
  var form = useForm("useField");
  var configRef = useLatest(config);

  var register = function register(callback, silent) {
    return (// avoid using `state` const in any closures created inside `register`
      // because they would refer `state` from current execution context
      // whereas actual `state` would defined in the subsequent `useField` hook
      // execution
      // (that would be caused by `setState` call performed in `register` callback)
      form.registerField(name, callback, subscription, {
        afterSubmit: afterSubmit,
        beforeSubmit: function beforeSubmit() {
          var _configRef$current = configRef.current,
              beforeSubmit = _configRef$current.beforeSubmit,
              formatOnBlur = _configRef$current.formatOnBlur,
              _configRef$current$fo = _configRef$current.format,
              format = _configRef$current$fo === void 0 ? defaultFormat : _configRef$current$fo;

          if (formatOnBlur) {
            var _ref = form.getFieldState(name),
                value = _ref.value;

            var formatted = format(value, name);

            if (formatted !== value) {
              form.change(name, formatted);
            }
          }

          return beforeSubmit && beforeSubmit();
        },
        data: data,
        defaultValue: defaultValue,
        getValidator: function getValidator() {
          return configRef.current.validate;
        },
        initialValue: initialValue,
        isEqual: function isEqual(a, b) {
          return (configRef.current.isEqual || defaultIsEqual)(a, b);
        },
        silent: silent,
        validateFields: validateFields
      })
    );
  };

  var firstRender = react.useRef(true); // synchronously register and unregister to query field state for our subscription on first render

  var _React$useState = react.useState(function () {
    var initialState = {}; // temporarily disable destroyOnUnregister

    // temporarily disable destroyOnUnregister
    var destroyOnUnregister = form.destroyOnUnregister;
    form.destroyOnUnregister = false;
    register(function (state) {
      initialState = state;
    }, true)(); // return destroyOnUnregister to its original value

    // return destroyOnUnregister to its original value
    form.destroyOnUnregister = destroyOnUnregister;
    return initialState;
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  react.useEffect(function () {
    return register(function (state) {
      if (firstRender.current) {
        firstRender.current = false;
      } else {
        setState(state);
      }
    }, false);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [name, data, defaultValue, // If we want to allow inline fat-arrow field-level validation functions, we
  // cannot reregister field every time validate function !==.
  // validate,
  initialValue // The validateFields array is often passed as validateFields={[]}, creating
  // a !== new array every time. If it needs to be changed, a rerender/reregister
  // can be forced by changing the key prop
  // validateFields
  ]);
  var meta = {};
  addLazyFieldMetaState(meta, state);
  var input = {
    name: name,

    get value() {
      var value = state.value;

      if (formatOnBlur) {
        if (component === "input") {
          value = defaultFormat(value);
        }
      } else {
        value = format(value, name);
      }

      if (value === null && !allowNull) {
        value = "";
      }

      if (type === "checkbox" || type === "radio") {
        return _value;
      } else if (component === "select" && multiple) {
        return value || [];
      }

      return value;
    },

    get checked() {
      var value = state.value;

      if (type === "checkbox") {
        value = format(value, name);

        if (_value === undefined) {
          return !!value;
        } else {
          return !!(Array.isArray(value) && ~value.indexOf(_value));
        }
      } else if (type === "radio") {
        return format(value, name) === _value;
      }

      return undefined;
    },

    onBlur: useConstantCallback(function (event) {
      state.blur();

      if (formatOnBlur) {
        /**
         * Here we must fetch the value directly from Final Form because we cannot
         * trust that our `state` closure has the most recent value. This is a problem
         * if-and-only-if the library consumer has called `onChange()` immediately
         * before calling `onBlur()`, but before the field has had a chance to receive
         * the value update from Final Form.
         */
        var fieldState = form.getFieldState(state.name);
        state.change(format(fieldState.value, state.name));
      }
    }),
    onChange: useConstantCallback(function (event) {
      // istanbul ignore next
      if (false) { var _value2, unknown, targetType; }

      var value = event && event.target ? getValue(event, state.value, _value, isReactNative) : event;
      state.change(parse(value, name));
    }),
    onFocus: useConstantCallback(function (event) {
      return state.focus();
    })
  };

  if (multiple) {
    input.multiple = multiple;
  }

  if (type !== undefined) {
    input.type = type;
  }

  var renderProps = {
    input: input,
    meta: meta
  }; // assign to force Flow check

  return renderProps;
}

var _excluded = ["afterSubmit", "allowNull", "beforeSubmit", "children", "component", "data", "defaultValue", "format", "formatOnBlur", "initialValue", "isEqual", "multiple", "name", "parse", "subscription", "type", "validate", "validateFields", "value"];
var Field = /*#__PURE__*/react.forwardRef(function Field(_ref, ref) {
  var afterSubmit = _ref.afterSubmit,
      allowNull = _ref.allowNull,
      beforeSubmit = _ref.beforeSubmit,
      children = _ref.children,
      component = _ref.component,
      data = _ref.data,
      defaultValue = _ref.defaultValue,
      format = _ref.format,
      formatOnBlur = _ref.formatOnBlur,
      initialValue = _ref.initialValue,
      isEqual = _ref.isEqual,
      multiple = _ref.multiple,
      name = _ref.name,
      parse = _ref.parse,
      subscription = _ref.subscription,
      type = _ref.type,
      validate = _ref.validate,
      validateFields = _ref.validateFields,
      value = _ref.value,
      rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, _excluded);

  var field = useField(name, {
    afterSubmit: afterSubmit,
    allowNull: allowNull,
    beforeSubmit: beforeSubmit,
    children: children,
    component: component,
    data: data,
    defaultValue: defaultValue,
    format: format,
    formatOnBlur: formatOnBlur,
    initialValue: initialValue,
    isEqual: isEqual,
    multiple: multiple,
    parse: parse,
    subscription: subscription,
    type: type,
    validate: validate,
    validateFields: validateFields,
    value: value
  });

  if (typeof children === "function") {
    return children((0,esm_extends/* default */.Z)({}, field, rest));
  }

  if (typeof component === "string") {
    // ignore meta, combine input with any other props
    return /*#__PURE__*/react.createElement(component, (0,esm_extends/* default */.Z)({}, field.input, {
      children: children,
      ref: ref
    }, rest));
  }

  if (!name) {
    throw new Error("prop name cannot be undefined in <Field> component");
  }

  return renderComponent((0,esm_extends/* default */.Z)({
    children: children,
    component: component,
    ref: ref
  }, rest), field, "Field(" + name + ")");
});

function withTypes() {
  return {
    Form: ReactFinalForm,
    FormSpy: FormSpy
  };
}



;// CONCATENATED MODULE: ./node_modules/@consent-manager/interface-default/dist/form-e08b69fd.esm.js














var Integration = function Integration(_ref) {
  var styles = _ref.styles,
      _ref$Switch = _ref.Switch,
      Switch$1 = _ref$Switch === void 0 ? interface_chunk_8903abaa_esm.S : _ref$Switch,
      id = _ref.id,
      category = _ref.category,
      title = _ref.title,
      description = _ref.description,
      privacyPolicyUrl = _ref.privacyPolicyUrl,
      color = _ref.color,
      contrastColor = _ref.contrastColor,
      Icon = _ref.Icon;
  return react.createElement(react.Fragment, null, react.createElement(Field, {
    className: (0,clsx_m["default"])(styles.integrationFieldTrigger),
    name: id,
    component: Switch$1,
    type: "checkbox",
    styles: styles
  }, react.createElement("h2", {
    className: (0,clsx_m["default"])(styles.integrationFieldCategory)
  }, react.createElement(index_bca06175_esm.T, {
    id: "consent-manager.integration." + id + ".category",
    fallbackId: "consent-manager.integration.default.category",
    props: {
      category: category
    }
  })), react.createElement("div", {
    className: (0,clsx_m["default"])(styles.integrationFieldCompany)
  }, react.createElement(index_bca06175_esm.T, {
    id: "consent-manager.integration." + id + ".company",
    fallbackId: "consent-manager.integration.default.company",
    props: {
      IntegrationLabel: function IntegrationLabel$1() {
        return react.createElement(index_bca06175_esm.I, {
          styles: styles,
          integration: {
            id: id,
            category: category,
            title: title,
            description: description,
            privacyPolicyUrl: privacyPolicyUrl,
            color: color,
            contrastColor: contrastColor,
            Icon: Icon
          }
        });
      }
    }
  }))), react.createElement("div", {
    className: (0,clsx_m["default"])(styles.integrationFieldDetails)
  }, react.createElement(index_bca06175_esm.T, {
    id: "consent-manager.integration." + id + ".description",
    fallbackId: "consent-manager.integration.default.description",
    props: {
      description: description,
      PrivacyPolicyLink: function PrivacyPolicyLink() {
        return react.createElement(index_bca06175_esm.T, {
          id: "consent-manager.integration." + id + ".privacy-policy",
          fallbackId: "consent-manager.integration.default.privacy-policy",
          props: {
            Link: function Link(_ref2) {
              var children = _ref2.children;
              return (// eslint-disable-next-line jsx-a11y/anchor-has-content
                react.createElement("a", {
                  href: privacyPolicyUrl,
                  rel: "noreferrer",
                  target: "_blank"
                }, children)
              );
            },
            title: title
          }
        });
      }
    }
  })));
};

var ConsentForm = function ConsentForm(_ref) {
  var integrations = _ref.integrations,
      initialValues = _ref.initialValues,
      onSubmit = _ref.onSubmit,
      CloseIcon = _ref.CloseIcon,
      ToggleIcon = _ref.ToggleIcon,
      styles = _ref.styles,
      Switch = _ref.Switch,
      Button = _ref.Button;

  var _useContext = (0,react.useContext)(index_bca06175_esm.a),
      setFormVisible = _useContext.setFormVisible;

  var onSubmitCb = (0,react.useCallback)(function (values) {
    var enabled = [];

    for (var _i = 0, _Object$entries = Object.entries(values); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _Object$entries[_i],
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];

      if (value) {
        enabled.push(key);
      }
    }

    setFormVisible(false);
    onSubmit({
      enabled: enabled
    });
  }, [onSubmit, setFormVisible]);
  var initialState = (0,react.useMemo)(function () {
    var initialState = {};

    for (var _iterator = (0,index_bca06175_esm.c)(integrations), _step; !(_step = _iterator()).done;) {
      var integration = _step.value;
      initialState[integration.id] = initialValues.enabled.includes(integration.id);
    }

    return initialState;
  }, [integrations, initialValues]);
  var onClose = (0,react.useCallback)(function () {
    return setFormVisible(false);
  }, [setFormVisible]);
  return react.createElement(react.Fragment, null, react.createElement(ReactFinalForm, {
    onSubmit: onSubmitCb,
    initialValues: initialState,
    render: function render(_ref2) {
      var handleSubmit = _ref2.handleSubmit,
          form = _ref2.form;
      var controls = react.createElement("div", {
        className: (0,clsx_m["default"])(styles.formControls)
      }, react.createElement(Button, {
        type: "button",
        onClick: form.reset
      }, react.createElement(index_bca06175_esm.T, {
        id: "consent-manager.form.reset"
      })), react.createElement(Button, {
        type: "button",
        onClick: function onClick() {
          return form.batch(function () {
            for (var _i2 = 0, _Object$keys = Object.keys(initialState); _i2 < _Object$keys.length; _i2++) {
              var id = _Object$keys[_i2];
              form.change(id, false);
            }
          });
        }
      }, react.createElement(index_bca06175_esm.T, {
        id: "consent-manager.form.disable-all"
      })), react.createElement(Button, {
        type: "button",
        onClick: function onClick() {
          return form.batch(function () {
            for (var _i3 = 0, _Object$keys2 = Object.keys(initialState); _i3 < _Object$keys2.length; _i3++) {
              var id = _Object$keys2[_i3];
              form.change(id, true);
            }
          });
        }
      }, react.createElement(index_bca06175_esm.T, {
        id: "consent-manager.form.enable-all"
      })), react.createElement(Button, {
        type: "submit",
        "data-button-style": "primary"
      }, react.createElement(index_bca06175_esm.T, {
        id: "consent-manager.form.save"
      })));
      return react.createElement("form", {
        onSubmit: handleSubmit
      }, react.createElement("div", {
        className: (0,clsx_m["default"])(styles.formIntro)
      }, react.createElement("div", {
        className: (0,clsx_m["default"])(styles.formContent)
      }, react.createElement("h1", {
        className: (0,clsx_m["default"])(styles.formTitle)
      }, react.createElement(ToggleIcon, {
        className: (0,clsx_m["default"])(styles.icon, styles.formIcon)
      }), react.createElement(index_bca06175_esm.T, {
        id: "consent-manager.form.headline"
      })), react.createElement(index_bca06175_esm.T, {
        id: "consent-manager.form.description"
      }))), controls, react.createElement("div", {
        className: (0,clsx_m["default"])(styles.formIntegrations)
      }, react.createElement("div", {
        className: (0,clsx_m["default"])(styles.formIntegrationsList)
      }, integrations.map(function (integration) {
        return react.createElement(Integration, Object.assign({
          styles: styles,
          key: integration.id,
          Switch: Switch
        }, integration));
      }))), controls);
    }
  }), react.createElement(index_bca06175_esm.T, {
    id: "consent-manager.close",
    render: function render(_ref3) {
      var message = _ref3.message;
      return react.createElement("button", {
        className: (0,clsx_m["default"])(styles.buttonReset, styles.buttonClose, styles.formButtonClose),
        onClick: onClose,
        title: message
      }, react.createElement(CloseIcon, {
        className: (0,clsx_m["default"])(styles.buttonCloseIcon)
      }));
    }
  }));
};

/* harmony default export */ const form_e08b69fd_esm = (ConsentForm);
//# sourceMappingURL=form-e08b69fd.esm.js.map


/***/ })

};
;