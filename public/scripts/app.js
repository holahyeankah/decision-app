'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indecision = function (_React$Component) {
    _inherits(Indecision, _React$Component);

    function Indecision(props) {
        _classCallCheck(this, Indecision);

        var _this = _possibleConstructorReturn(this, (Indecision.__proto__ || Object.getPrototypeOf(Indecision)).call(this, props));

        _this.state = {
            options: []
        };
        _this.handleAdd = _this.handleAdd.bind(_this);
        _this.handleRemove = _this.handleRemove.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleRemoveOne = _this.handleRemoveOne.bind(_this);
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
            console.log('wee');
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
            alert(option);
        }
    }, {
        key: 'handleAdd',
        value: function handleAdd(option) {
            if (!option) {
                return "field is empty";
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
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Action, { hasOption: this.state.options.length > 0, pick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, removeOption: this.handleRemoveOne, remove: this.handleRemove }),
                React.createElement(AddOptions, { handleAdd: this.handleAdd })
            );
        }
    }]);

    return Indecision;
}(React.Component);

;

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action(props) {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.pick, disabled: !this.props.hasOption
                    },
                    'What should i do'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            console.log(this.props);
            return React.createElement(
                'div',
                null,
                this.props.options.length === 0 && React.createElement(
                    'p',
                    null,
                    'Please select an option'
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.remove },
                    'Remove all'
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, list: option, removeOption: _this4.props.removeOption });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            var _this6 = this;

            return React.createElement(
                'div',
                null,
                this.props.list,
                React.createElement(
                    'button',
                    { onClick: function onClick(e) {
                            _this6.props.removeOption(_this6.props.list);
                        } },
                    'remove'
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOptions = function (_React$Component5) {
    _inherits(AddOptions, _React$Component5);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this7 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this7.state = {
            error: undefined
        };
        _this7.handleSubmit = _this7.handleSubmit.bind(_this7);
        return _this7;
    }

    _createClass(AddOptions, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAdd(option);
            this.setState({ error: error });
            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'add option'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(Indecision, null), document.getElementById('app'));
