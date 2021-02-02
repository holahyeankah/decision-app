'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Options = require('./Options');

var _Options2 = _interopRequireDefault(_Options);

var _Action = require('./Action');

var _Action2 = _interopRequireDefault(_Action);

var _AddOptions = require('./AddOptions');

var _AddOptions2 = _interopRequireDefault(_AddOptions);

var _OptionModal = require('./OptionModal');

var _OptionModal2 = _interopRequireDefault(_OptionModal);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_Component) {
    _inherits(Indecision, _Component);

    function Indecision(props) {
        _classCallCheck(this, Indecision);

        var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

        _this.state = {
            options: [],
            selectedOption: undefined
        };
        _this.handleAdd = _this.handleAdd.bind(_this);
        _this.handleRemove = _this.handleRemove.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleRemoveOne = _this.handleRemoveOne.bind(_this);
        _this.onModal = _this.onModal.bind(_this);
        return _this;
    }

    _createClass(Indecision, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            try {
                var data = localStorage.getItem('option');
                var base = JSON.parse(data);
                this.setState({ options: base });
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('option', json);
            }
        }
    }, {
        key: 'handleRemove',
        value: function handleRemove() {
            this.setState({ options: [] });
        }
    }, {
        key: 'handleRemoveOne',
        value: function handleRemoveOne(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var number = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[number];
            this.setState({ selectedOption: option });
        }
    }, {
        key: 'handleAdd',
        value: function handleAdd(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return "input already exist";
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: 'onModal',
        value: function onModal() {

            this.setState({ selectedOption: undefined });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(_Action2.default, { hasOption: this.state.options.length > 0, pick: this.handlePick }),
                    _react2.default.createElement(
                        'div',
                        { className: 'widget' },
                        _react2.default.createElement(_Options2.default, { options: this.state.options, removeOption: this.handleRemoveOne, remove: this.handleRemove }),
                        _react2.default.createElement(_AddOptions2.default, { handleAdd: this.handleAdd })
                    )
                ),
                _react2.default.createElement(_OptionModal2.default, { selectedOption: this.state.selectedOption, cancel: this.onModal })
            );
        }
    }]);

    return Indecision;
}(_react.Component);

exports.default = Indecision;
