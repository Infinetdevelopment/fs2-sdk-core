'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var JSBI = _interopDefault(require('jsbi'));
var invariant = _interopDefault(require('tiny-invariant'));
var _Decimal = _interopDefault(require('decimal.js-light'));
var _Big = _interopDefault(require('big.js'));
var toFormat = _interopDefault(require('toformat'));
var bignumber = require('@ethersproject/bignumber');
var address = require('@ethersproject/address');

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

(function (ChainId) {
  ChainId[ChainId["MAINNET"] = 369] = "MAINNET";
  ChainId[ChainId["TESTNET"] = 943] = "TESTNET";
  ChainId[ChainId["ETHEREUM"] = 1] = "ETHEREUM";
  ChainId[ChainId["GOERLI"] = 5] = "GOERLI";
})(exports.ChainId || (exports.ChainId = {}));

var SUPPORTED_CHAINS = [exports.ChainId.MAINNET, exports.ChainId.TESTNET, exports.ChainId.ETHEREUM, exports.ChainId.GOERLI];

(function (NativeCurrencyName) {
  NativeCurrencyName["PULSECHAIN"] = "PLS";
  NativeCurrencyName["ETHER"] = "ETH";
})(exports.NativeCurrencyName || (exports.NativeCurrencyName = {}));

var _V2_FACTORY_ADDRESSES, _V2_ROUTER_ADDRESSES, _CHAIN_TO_ADDRESSES_M, _GOVERNANCE_ALPHA_V1_, _GOVERNANCE_BRAVO_ADD, _MERKLE_DISTRIBUTOR_A, _ARGENT_WALLET_DETECT, _SOCKS_CONTROLLER_ADD;
var DEFAULT_NETWORKS = [exports.ChainId.MAINNET, exports.ChainId.TESTNET, exports.ChainId.ETHEREUM, exports.ChainId.GOERLI];

function constructSameAddressMap(address, additionalNetworks) {
  if (additionalNetworks === void 0) {
    additionalNetworks = [];
  }

  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce(function (memo, chainId) {
    memo[chainId] = address;
    return memo;
  }, {});
}

var UNI_ADDRESSES = /*#__PURE__*/constructSameAddressMap('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984');
var UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = '0x8B799381ac40b838BBA4131ffB26197C432AFe78';
/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */

var V2_FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
var V2_FACTORY_ADDRESSES = (_V2_FACTORY_ADDRESSES = {}, _V2_FACTORY_ADDRESSES[exports.ChainId.MAINNET] = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', _V2_FACTORY_ADDRESSES[exports.ChainId.ETHEREUM] = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', _V2_FACTORY_ADDRESSES[exports.ChainId.GOERLI] = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', _V2_FACTORY_ADDRESSES[exports.ChainId.TESTNET] = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', _V2_FACTORY_ADDRESSES);
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */

var V2_ROUTER_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
var V2_ROUTER_ADDRESSES = (_V2_ROUTER_ADDRESSES = {}, _V2_ROUTER_ADDRESSES[exports.ChainId.MAINNET] = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', _V2_ROUTER_ADDRESSES[exports.ChainId.GOERLI] = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', _V2_ROUTER_ADDRESSES[exports.ChainId.ETHEREUM] = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', _V2_ROUTER_ADDRESSES[exports.ChainId.TESTNET] = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', _V2_ROUTER_ADDRESSES); // Networks that share most of the same addresses i.e. Mainnet, Goerli, Optimism, Arbitrum, Polygon

var DEFAULT_ADDRESSES = {
  v3CoreFactoryAddress: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
  multicallAddress: '0x1F98415757620B543A52E61c46B32eB19261F984',
  quoterAddress: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
  v3MigratorAddress: '0xA5644E29708357803b5A882D272c41cC0dF92B34',
  nonfungiblePositionManagerAddress: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'
};

var MAINNET_ADDRESSES = /*#__PURE__*/_extends({}, DEFAULT_ADDRESSES, {
  v1MixedRouteQuoterAddress: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E'
});

var GOERLI_ADDRESSES = /*#__PURE__*/_extends({}, DEFAULT_ADDRESSES, {
  v1MixedRouteQuoterAddress: '0xBa60b6e6fF25488308789E6e0A65D838be34194e'
});

var PULSECHAIN_ADDRESSES = /*#__PURE__*/_extends({}, DEFAULT_ADDRESSES, {
  v1MixedRouteQuoterAddress: '0x84E44095eeBfEC7793Cd7d5b57B7e401D7f1cA2E'
});

var CHAIN_TO_ADDRESSES_MAP = (_CHAIN_TO_ADDRESSES_M = {}, _CHAIN_TO_ADDRESSES_M[exports.ChainId.MAINNET] = PULSECHAIN_ADDRESSES, _CHAIN_TO_ADDRESSES_M[exports.ChainId.TESTNET] = PULSECHAIN_ADDRESSES, _CHAIN_TO_ADDRESSES_M[exports.ChainId.ETHEREUM] = MAINNET_ADDRESSES, _CHAIN_TO_ADDRESSES_M[exports.ChainId.GOERLI] = GOERLI_ADDRESSES, _CHAIN_TO_ADDRESSES_M);
/* V3 Contract Addresses */

var V3_CORE_FACTORY_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress;
  return memo;
}, {}));
var V3_MIGRATOR_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  var v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress;

  if (v3MigratorAddress) {
    memo[chainId] = v3MigratorAddress;
  }

  return memo;
}, {}));
var MULTICALL_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress;
  return memo;
}, {}));
/**
 * The oldest V0 governance address
 */

var GOVERNANCE_ALPHA_V0_ADDRESSES = /*#__PURE__*/constructSameAddressMap('0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F');
/**
 * The older V1 governance address
 */

var GOVERNANCE_ALPHA_V1_ADDRESSES = (_GOVERNANCE_ALPHA_V1_ = {}, _GOVERNANCE_ALPHA_V1_[exports.ChainId.MAINNET] = '0xC4e172459f1E7939D522503B81AFAaC1014CE6F6', _GOVERNANCE_ALPHA_V1_);
/**
 * The latest governor bravo that is currently admin of timelock
 */

var GOVERNANCE_BRAVO_ADDRESSES = (_GOVERNANCE_BRAVO_ADD = {}, _GOVERNANCE_BRAVO_ADD[exports.ChainId.MAINNET] = '0x408ED6354d4973f66138C91495F2f2FCbd8724C3', _GOVERNANCE_BRAVO_ADD);
var TIMELOCK_ADDRESSES = /*#__PURE__*/constructSameAddressMap('0x1a9C8182C09F50C8318d769245beA52c32BE35BC');
var MERKLE_DISTRIBUTOR_ADDRESS = (_MERKLE_DISTRIBUTOR_A = {}, _MERKLE_DISTRIBUTOR_A[exports.ChainId.MAINNET] = '0x090D4613473dEE047c3f2706764f49E0821D256e', _MERKLE_DISTRIBUTOR_A);
var ARGENT_WALLET_DETECTOR_ADDRESS = (_ARGENT_WALLET_DETECT = {}, _ARGENT_WALLET_DETECT[exports.ChainId.MAINNET] = '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8', _ARGENT_WALLET_DETECT);
var QUOTER_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress;
  return memo;
}, {}));
var NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  var nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress;

  if (nonfungiblePositionManagerAddress) {
    memo[chainId] = nonfungiblePositionManagerAddress;
  }

  return memo;
}, {}));
var ENS_REGISTRAR_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'));
var SOCKS_CONTROLLER_ADDRESSES = (_SOCKS_CONTROLLER_ADD = {}, _SOCKS_CONTROLLER_ADD[exports.ChainId.MAINNET] = '0x65770b5283117639760beA3F867b69b3697a91dd', _SOCKS_CONTROLLER_ADD);
var TICK_LENS_ADDRESSES = /*#__PURE__*/_extends({}, /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  var tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress;

  if (tickLensAddress) {
    memo[chainId] = tickLensAddress;
  }

  return memo;
}, {}));
var MIXED_ROUTE_QUOTER_V1_ADDRESSES = /*#__PURE__*/SUPPORTED_CHAINS.reduce(function (memo, chainId) {
  var v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress;

  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress;
  }

  return memo;
}, {});
var SWAP_ROUTER_02_ADDRESSES = function SWAP_ROUTER_02_ADDRESSES(chainId) {
  if (SUPPORTED_CHAINS.includes(chainId)) {
    var _CHAIN_TO_ADDRESSES_M2;

    var id = chainId;
    return (_CHAIN_TO_ADDRESSES_M2 = CHAIN_TO_ADDRESSES_MAP[id].swapRouter02Address) != null ? _CHAIN_TO_ADDRESSES_M2 : '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';
  }

  return '';
};

(function (TradeType) {
  TradeType[TradeType["EXACT_INPUT"] = 0] = "EXACT_INPUT";
  TradeType[TradeType["EXACT_OUTPUT"] = 1] = "EXACT_OUTPUT";
})(exports.TradeType || (exports.TradeType = {}));

(function (Rounding) {
  Rounding[Rounding["ROUND_DOWN"] = 0] = "ROUND_DOWN";
  Rounding[Rounding["ROUND_HALF_UP"] = 1] = "ROUND_HALF_UP";
  Rounding[Rounding["ROUND_UP"] = 2] = "ROUND_UP";
})(exports.Rounding || (exports.Rounding = {}));

var MaxUint256 = /*#__PURE__*/JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');

var _toSignificantRoundin, _toFixedRounding;
var Decimal = /*#__PURE__*/toFormat(_Decimal);
var Big = /*#__PURE__*/toFormat(_Big);
var toSignificantRounding = (_toSignificantRoundin = {}, _toSignificantRoundin[exports.Rounding.ROUND_DOWN] = Decimal.ROUND_DOWN, _toSignificantRoundin[exports.Rounding.ROUND_HALF_UP] = Decimal.ROUND_HALF_UP, _toSignificantRoundin[exports.Rounding.ROUND_UP] = Decimal.ROUND_UP, _toSignificantRoundin);
var toFixedRounding = (_toFixedRounding = {}, _toFixedRounding[exports.Rounding.ROUND_DOWN] = 0, _toFixedRounding[exports.Rounding.ROUND_HALF_UP] = 1, _toFixedRounding[exports.Rounding.ROUND_UP] = 3, _toFixedRounding);
var Fraction = /*#__PURE__*/function () {
  function Fraction(numerator, denominator) {
    if (denominator === void 0) {
      denominator = JSBI.BigInt(1);
    }

    this.numerator = JSBI.BigInt(numerator);
    this.denominator = JSBI.BigInt(denominator);
  }

  Fraction.tryParseFraction = function tryParseFraction(fractionish) {
    if (fractionish instanceof JSBI || typeof fractionish === 'number' || typeof fractionish === 'string') return new Fraction(fractionish);
    if ('numerator' in fractionish && 'denominator' in fractionish) return fractionish;
    throw new Error('Could not parse fraction');
  } // performs floor division
  ;

  var _proto = Fraction.prototype;

  _proto.invert = function invert() {
    return new Fraction(this.denominator, this.numerator);
  };

  _proto.add = function add(other) {
    var otherParsed = Fraction.tryParseFraction(other);

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.add(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.subtract = function subtract(other) {
    var otherParsed = Fraction.tryParseFraction(other);

    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator);
    }

    return new Fraction(JSBI.subtract(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator)), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.lessThan = function lessThan(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.lessThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.equalTo = function equalTo(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.equal(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.greaterThan = function greaterThan(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return JSBI.greaterThan(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(otherParsed.numerator, this.denominator));
  };

  _proto.multiply = function multiply(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.numerator), JSBI.multiply(this.denominator, otherParsed.denominator));
  };

  _proto.divide = function divide(other) {
    var otherParsed = Fraction.tryParseFraction(other);
    return new Fraction(JSBI.multiply(this.numerator, otherParsed.denominator), JSBI.multiply(this.denominator, otherParsed.numerator));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(significantDigits) ?  invariant(false, significantDigits + " is not an integer.")  : void 0;
    !(significantDigits > 0) ?  invariant(false, significantDigits + " is not positive.")  : void 0;
    Decimal.set({
      precision: significantDigits + 1,
      rounding: toSignificantRounding[rounding]
    });
    var quotient = new Decimal(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(significantDigits);
    return quotient.toFormat(quotient.decimalPlaces(), format);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_HALF_UP;
    }

    !Number.isInteger(decimalPlaces) ?  invariant(false, decimalPlaces + " is not an integer.")  : void 0;
    !(decimalPlaces >= 0) ?  invariant(false, decimalPlaces + " is negative.")  : void 0;
    Big.DP = decimalPlaces;
    Big.RM = toFixedRounding[rounding];
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format);
  }
  /**
   * Helper method for converting any super class back to a fraction
   */
  ;

  _createClass(Fraction, [{
    key: "quotient",
    get: function get() {
      return JSBI.divide(this.numerator, this.denominator);
    } // remainder after floor division

  }, {
    key: "remainder",
    get: function get() {
      return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator);
    }
  }, {
    key: "asFraction",
    get: function get() {
      return new Fraction(this.numerator, this.denominator);
    }
  }]);

  return Fraction;
}();

var Big$1 = /*#__PURE__*/toFormat(_Big);
var CurrencyAmount = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(CurrencyAmount, _Fraction);

  function CurrencyAmount(currency, numerator, denominator) {
    var _this;

    _this = _Fraction.call(this, numerator, denominator) || this;
    !JSBI.lessThanOrEqual(_this.quotient, MaxUint256) ?  invariant(false, 'AMOUNT')  : void 0;
    _this.currency = currency;
    _this.decimalScale = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(currency.decimals));
    return _this;
  }
  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */


  CurrencyAmount.fromRawAmount = function fromRawAmount(currency, rawAmount) {
    return new CurrencyAmount(currency, rawAmount);
  }
  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */
  ;

  CurrencyAmount.fromFractionalAmount = function fromFractionalAmount(currency, numerator, denominator) {
    return new CurrencyAmount(currency, numerator, denominator);
  };

  var _proto = CurrencyAmount.prototype;

  _proto.add = function add(other) {
    !this.currency.equals(other.currency) ?  invariant(false, 'CURRENCY')  : void 0;

    var added = _Fraction.prototype.add.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator);
  };

  _proto.subtract = function subtract(other) {
    !this.currency.equals(other.currency) ?  invariant(false, 'CURRENCY')  : void 0;

    var subtracted = _Fraction.prototype.subtract.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator);
  };

  _proto.multiply = function multiply(other) {
    var multiplied = _Fraction.prototype.multiply.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator);
  };

  _proto.divide = function divide(other) {
    var divided = _Fraction.prototype.divide.call(this, other);

    return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator);
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_DOWN;
    }

    return _Fraction.prototype.divide.call(this, this.decimalScale).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = this.currency.decimals;
    }

    if (rounding === void 0) {
      rounding = exports.Rounding.ROUND_DOWN;
    }

    !(decimalPlaces <= this.currency.decimals) ?  invariant(false, 'DECIMALS')  : void 0;
    return _Fraction.prototype.divide.call(this, this.decimalScale).toFixed(decimalPlaces, format, rounding);
  };

  _proto.toExact = function toExact(format) {
    if (format === void 0) {
      format = {
        groupSeparator: ''
      };
    }

    Big$1.DP = this.currency.decimals;
    return new Big$1(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format);
  };

  _createClass(CurrencyAmount, [{
    key: "wrapped",
    get: function get() {
      if (this.currency.isToken) return this;
      return CurrencyAmount.fromFractionalAmount(this.currency.wrapped, this.numerator, this.denominator);
    }
  }]);

  return CurrencyAmount;
}(Fraction);

var ONE_HUNDRED = /*#__PURE__*/new Fraction( /*#__PURE__*/JSBI.BigInt(100));
/**
 * Converts a fraction to a percent
 * @param fraction the fraction to convert
 */

function toPercent(fraction) {
  return new Percent(fraction.numerator, fraction.denominator);
}

var Percent = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Percent, _Fraction);

  function Percent() {
    var _this;

    _this = _Fraction.apply(this, arguments) || this;
    /**
     * This boolean prevents a fraction from being interpreted as a Percent
     */

    _this.isPercent = true;
    return _this;
  }

  var _proto = Percent.prototype;

  _proto.add = function add(other) {
    return toPercent(_Fraction.prototype.add.call(this, other));
  };

  _proto.subtract = function subtract(other) {
    return toPercent(_Fraction.prototype.subtract.call(this, other));
  };

  _proto.multiply = function multiply(other) {
    return toPercent(_Fraction.prototype.multiply.call(this, other));
  };

  _proto.divide = function divide(other) {
    return toPercent(_Fraction.prototype.divide.call(this, other));
  };

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 5;
    }

    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 2;
    }

    return _Fraction.prototype.multiply.call(this, ONE_HUNDRED).toFixed(decimalPlaces, format, rounding);
  };

  return Percent;
}(Fraction);

var Price = /*#__PURE__*/function (_Fraction) {
  _inheritsLoose(Price, _Fraction);

  /**
   * Construct a price, either with the base and quote currency amount, or the
   * @param args
   */
  function Price() {
    var _this;

    var baseCurrency, quoteCurrency, denominator, numerator;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 4) {
      baseCurrency = args[0];
      quoteCurrency = args[1];
      denominator = args[2];
      numerator = args[3];
    } else {
      var result = args[0].quoteAmount.divide(args[0].baseAmount);
      var _ref = [args[0].baseAmount.currency, args[0].quoteAmount.currency, result.denominator, result.numerator];
      baseCurrency = _ref[0];
      quoteCurrency = _ref[1];
      denominator = _ref[2];
      numerator = _ref[3];
    }

    _this = _Fraction.call(this, numerator, denominator) || this;
    _this.baseCurrency = baseCurrency;
    _this.quoteCurrency = quoteCurrency;
    _this.scalar = new Fraction(JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(baseCurrency.decimals)), JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(quoteCurrency.decimals)));
    return _this;
  }
  /**
   * Flip the price, switching the base and quote currency
   */


  var _proto = Price.prototype;

  _proto.invert = function invert() {
    return new Price(this.quoteCurrency, this.baseCurrency, this.numerator, this.denominator);
  }
  /**
   * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
   * @param other the other price
   */
  ;

  _proto.multiply = function multiply(other) {
    !this.quoteCurrency.equals(other.baseCurrency) ?  invariant(false, 'TOKEN')  : void 0;

    var fraction = _Fraction.prototype.multiply.call(this, other);

    return new Price(this.baseCurrency, other.quoteCurrency, fraction.denominator, fraction.numerator);
  }
  /**
   * Return the amount of quote currency corresponding to a given amount of the base currency
   * @param currencyAmount the amount of base currency to quote against the price
   */
  ;

  _proto.quote = function quote(currencyAmount) {
    !currencyAmount.currency.equals(this.baseCurrency) ?  invariant(false, 'TOKEN')  : void 0;

    var result = _Fraction.prototype.multiply.call(this, currencyAmount);

    return CurrencyAmount.fromFractionalAmount(this.quoteCurrency, result.numerator, result.denominator);
  }
  /**
   * Get the value scaled by decimals for formatting
   * @private
   */
  ;

  _proto.toSignificant = function toSignificant(significantDigits, format, rounding) {
    if (significantDigits === void 0) {
      significantDigits = 6;
    }

    return this.adjustedForDecimals.toSignificant(significantDigits, format, rounding);
  };

  _proto.toFixed = function toFixed(decimalPlaces, format, rounding) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 4;
    }

    return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding);
  };

  _createClass(Price, [{
    key: "adjustedForDecimals",
    get: function get() {
      return _Fraction.prototype.multiply.call(this, this.scalar);
    }
  }]);

  return Price;
}(Fraction);

/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */

var BaseCurrency =
/**
 * Constructs an instance of the base class `BaseCurrency`.
 * @param chainId the chain ID on which this currency resides
 * @param decimals decimals of the currency
 * @param symbol symbol of the currency
 * @param name of the currency
 */
function BaseCurrency(chainId, decimals, symbol, name) {
  !Number.isSafeInteger(chainId) ?  invariant(false, 'CHAIN_ID')  : void 0;
  !(decimals >= 0 && decimals < 255 && Number.isInteger(decimals)) ?  invariant(false, 'DECIMALS')  : void 0;
  this.chainId = chainId;
  this.decimals = decimals;
  this.symbol = symbol;
  this.name = name;
};

/**
 * Represents the native currency of the chain on which it resides, e.g.
 */

var NativeCurrency = /*#__PURE__*/function (_BaseCurrency) {
  _inheritsLoose(NativeCurrency, _BaseCurrency);

  function NativeCurrency() {
    var _this;

    _this = _BaseCurrency.apply(this, arguments) || this;
    _this.isNative = true;
    _this.isToken = false;
    return _this;
  }

  return NativeCurrency;
}(BaseCurrency);

/**
 * Validates an address and returns the parsed (checksummed) version of that address
 * @param address the unchecksummed hex address
 */

function validateAndParseAddress(address$1) {
  try {
    return address.getAddress(address$1);
  } catch (error) {
    throw new Error(address$1 + " is not a valid address.");
  }
} // Checks a string starts with 0x, is 42 characters long and contains only hex characters after 0x

var startsWith0xLen42HexRegex = /^0x[0-9a-fA-F]{40}$/;
/**
 * Checks if an address is valid by checking 0x prefix, length === 42 and hex encoding.
 * @param address the unchecksummed hex address
 */

function checkValidAddress(address) {
  if (startsWith0xLen42HexRegex.test(address)) {
    return address;
  }

  throw new Error(address + " is not a valid address.");
}

/**
 * Represents an ERC20 token with a unique address and some metadata.
 */

var Token = /*#__PURE__*/function (_BaseCurrency) {
  _inheritsLoose(Token, _BaseCurrency);

  /**
   *
   * @param chainId {@link BaseCurrency#chainId}
   * @param address The contract address on the chain on which this token lives
   * @param decimals {@link BaseCurrency#decimals}
   * @param symbol {@link BaseCurrency#symbol}
   * @param name {@link BaseCurrency#name}
   * @param bypassChecksum If true it only checks for length === 42, startsWith 0x and contains only hex characters
   * @param buyFeeBps Buy fee tax for FOT tokens, in basis points
   * @param sellFeeBps Sell fee tax for FOT tokens, in basis points
   */
  function Token(chainId, address, decimals, symbol, name, bypassChecksum, buyFeeBps, sellFeeBps) {
    var _this;

    _this = _BaseCurrency.call(this, chainId, decimals, symbol, name) || this;
    _this.isNative = false;
    _this.isToken = true;

    if (bypassChecksum) {
      _this.address = checkValidAddress(address);
    } else {
      _this.address = validateAndParseAddress(address);
    }

    if (buyFeeBps) {
      !buyFeeBps.gte(bignumber.BigNumber.from(0)) ?  invariant(false, 'NON-NEGATIVE FOT FEES')  : void 0;
    }

    if (sellFeeBps) {
      !sellFeeBps.gte(bignumber.BigNumber.from(0)) ?  invariant(false, 'NON-NEGATIVE FOT FEES')  : void 0;
    }

    _this.buyFeeBps = buyFeeBps;
    _this.sellFeeBps = sellFeeBps;
    return _this;
  }
  /**
   * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
   * @param other other token to compare
   */


  var _proto = Token.prototype;

  _proto.equals = function equals(other) {
    return other.isToken && this.chainId === other.chainId && this.address.toLowerCase() === other.address.toLowerCase();
  }
  /**
   * Returns true if the address of this token sorts before the address of the other token
   * @param other other token to compare
   * @throws if the tokens have the same address
   * @throws if the tokens are on different chains
   */
  ;

  _proto.sortsBefore = function sortsBefore(other) {
    !(this.chainId === other.chainId) ?  invariant(false, 'CHAIN_IDS')  : void 0;
    !(this.address.toLowerCase() !== other.address.toLowerCase()) ?  invariant(false, 'ADDRESSES')  : void 0;
    return this.address.toLowerCase() < other.address.toLowerCase();
  }
  /**
   * Return this token, which does not need to be wrapped
   */
  ;

  _createClass(Token, [{
    key: "wrapped",
    get: function get() {
      return this;
    }
  }]);

  return Token;
}(BaseCurrency);

/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */

var WETH9 = {
  1: /*#__PURE__*/new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, 'WETH', 'Wrapped Ether'),
  3: /*#__PURE__*/new Token(3, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
  4: /*#__PURE__*/new Token(4, '0xc778417E063141139Fce010982780140Aa0cD5Ab', 18, 'WETH', 'Wrapped Ether'),
  5: /*#__PURE__*/new Token(5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', 18, 'WETH', 'Wrapped Ether'),
  42: /*#__PURE__*/new Token(42, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', 18, 'WETH', 'Wrapped Ether'),
  10: /*#__PURE__*/new Token(10, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  69: /*#__PURE__*/new Token(69, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  11155420: /*#__PURE__*/new Token(11155420, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  42161: /*#__PURE__*/new Token(42161, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, 'WETH', 'Wrapped Ether'),
  421611: /*#__PURE__*/new Token(421611, '0xB47e6A5f8b33b3F17603C83a0535A9dcD7E32681', 18, 'WETH', 'Wrapped Ether'),
  421614: /*#__PURE__*/new Token(421614, '0x980B62Da83eFf3D4576C647993b0c1D7faf17c73', 18, 'WETH', 'Wrapped Ether'),
  8453: /*#__PURE__*/new Token(8453, '0x4200000000000000000000000000000000000006', 18, 'WETH', 'Wrapped Ether'),
  56: /*#__PURE__*/new Token(56, '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 18, 'WBNB', 'Wrapped BNB'),
  137: /*#__PURE__*/new Token(137, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', 18, 'WMATIC', 'Wrapped MATIC'),
  43114: /*#__PURE__*/new Token(43114, '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7', 18, 'WAVAX', 'Wrapped AVAX')
};

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */

var Ether = /*#__PURE__*/function (_NativeCurrency) {
  _inheritsLoose(Ether, _NativeCurrency);

  function Ether(chainId) {
    return _NativeCurrency.call(this, chainId, 18, 'ETH', 'Ether') || this;
  }

  Ether.onChain = function onChain(chainId) {
    var _this$_etherCache$cha;

    return (_this$_etherCache$cha = this._etherCache[chainId]) != null ? _this$_etherCache$cha : this._etherCache[chainId] = new Ether(chainId);
  };

  var _proto = Ether.prototype;

  _proto.equals = function equals(other) {
    return other.isNative && other.chainId === this.chainId;
  };

  _createClass(Ether, [{
    key: "wrapped",
    get: function get() {
      var weth9 = WETH9[this.chainId];
      !!!weth9 ?  invariant(false, 'WRAPPED')  : void 0;
      return weth9;
    }
  }]);

  return Ether;
}(NativeCurrency);
Ether._etherCache = {};

/**
 * Returns the percent difference between the mid price and the execution price, i.e. price impact.
 * @param midPrice mid price before the trade
 * @param inputAmount the input amount of the trade
 * @param outputAmount the output amount of the trade
 */

function computePriceImpact(midPrice, inputAmount, outputAmount) {
  var quotedOutputAmount = midPrice.quote(inputAmount); // calculate price impact := (exactQuote - outputAmount) / exactQuote

  var priceImpact = quotedOutputAmount.subtract(outputAmount).divide(quotedOutputAmount);
  return new Percent(priceImpact.numerator, priceImpact.denominator);
}

// `maxSize` by removing the last item

function sortedInsert(items, add, maxSize, comparator) {
  !(maxSize > 0) ?  invariant(false, 'MAX_SIZE_ZERO')  : void 0; // this is an invariant because the interface cannot return multiple removed items if items.length exceeds maxSize

  !(items.length <= maxSize) ?  invariant(false, 'ITEMS_SIZE')  : void 0; // short circuit first item add

  if (items.length === 0) {
    items.push(add);
    return null;
  } else {
    var isFull = items.length === maxSize; // short circuit if full and the additional item does not come before the last item

    if (isFull && comparator(items[items.length - 1], add) <= 0) {
      return add;
    }

    var lo = 0,
        hi = items.length;

    while (lo < hi) {
      var mid = lo + hi >>> 1;

      if (comparator(items[mid], add) <= 0) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }

    items.splice(lo, 0, add);
    return isFull ? items.pop() : null;
  }
}

var MAX_SAFE_INTEGER = /*#__PURE__*/JSBI.BigInt(Number.MAX_SAFE_INTEGER);
var ZERO = /*#__PURE__*/JSBI.BigInt(0);
var ONE = /*#__PURE__*/JSBI.BigInt(1);
var TWO = /*#__PURE__*/JSBI.BigInt(2);
/**
 * Computes floor(sqrt(value))
 * @param value the value for which to compute the square root, rounded down
 */

function sqrt(value) {
  !JSBI.greaterThanOrEqual(value, ZERO) ?  invariant(false, 'NEGATIVE')  : void 0; // rely on built in sqrt if possible

  if (JSBI.lessThan(value, MAX_SAFE_INTEGER)) {
    return JSBI.BigInt(Math.floor(Math.sqrt(JSBI.toNumber(value))));
  }

  var z;
  var x;
  z = value;
  x = JSBI.add(JSBI.divide(value, TWO), ONE);

  while (JSBI.lessThan(x, z)) {
    z = x;
    x = JSBI.divide(JSBI.add(JSBI.divide(value, x), x), TWO);
  }

  return z;
}

exports.ARGENT_WALLET_DETECTOR_ADDRESS = ARGENT_WALLET_DETECTOR_ADDRESS;
exports.CHAIN_TO_ADDRESSES_MAP = CHAIN_TO_ADDRESSES_MAP;
exports.CurrencyAmount = CurrencyAmount;
exports.ENS_REGISTRAR_ADDRESSES = ENS_REGISTRAR_ADDRESSES;
exports.Ether = Ether;
exports.Fraction = Fraction;
exports.GOVERNANCE_ALPHA_V0_ADDRESSES = GOVERNANCE_ALPHA_V0_ADDRESSES;
exports.GOVERNANCE_ALPHA_V1_ADDRESSES = GOVERNANCE_ALPHA_V1_ADDRESSES;
exports.GOVERNANCE_BRAVO_ADDRESSES = GOVERNANCE_BRAVO_ADDRESSES;
exports.MERKLE_DISTRIBUTOR_ADDRESS = MERKLE_DISTRIBUTOR_ADDRESS;
exports.MIXED_ROUTE_QUOTER_V1_ADDRESSES = MIXED_ROUTE_QUOTER_V1_ADDRESSES;
exports.MULTICALL_ADDRESSES = MULTICALL_ADDRESSES;
exports.MaxUint256 = MaxUint256;
exports.NONFUNGIBLE_POSITION_MANAGER_ADDRESSES = NONFUNGIBLE_POSITION_MANAGER_ADDRESSES;
exports.NativeCurrency = NativeCurrency;
exports.Percent = Percent;
exports.Price = Price;
exports.QUOTER_ADDRESSES = QUOTER_ADDRESSES;
exports.SOCKS_CONTROLLER_ADDRESSES = SOCKS_CONTROLLER_ADDRESSES;
exports.SUPPORTED_CHAINS = SUPPORTED_CHAINS;
exports.SWAP_ROUTER_02_ADDRESSES = SWAP_ROUTER_02_ADDRESSES;
exports.TICK_LENS_ADDRESSES = TICK_LENS_ADDRESSES;
exports.TIMELOCK_ADDRESSES = TIMELOCK_ADDRESSES;
exports.Token = Token;
exports.UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS;
exports.UNI_ADDRESSES = UNI_ADDRESSES;
exports.V2_FACTORY_ADDRESS = V2_FACTORY_ADDRESS;
exports.V2_FACTORY_ADDRESSES = V2_FACTORY_ADDRESSES;
exports.V2_ROUTER_ADDRESS = V2_ROUTER_ADDRESS;
exports.V2_ROUTER_ADDRESSES = V2_ROUTER_ADDRESSES;
exports.V3_CORE_FACTORY_ADDRESSES = V3_CORE_FACTORY_ADDRESSES;
exports.V3_MIGRATOR_ADDRESSES = V3_MIGRATOR_ADDRESSES;
exports.WETH9 = WETH9;
exports.computePriceImpact = computePriceImpact;
exports.sortedInsert = sortedInsert;
exports.sqrt = sqrt;
exports.validateAndParseAddress = validateAndParseAddress;
//# sourceMappingURL=sdk-core.cjs.development.js.map
