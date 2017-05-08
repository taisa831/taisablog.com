// Flux

var React =  require('react');
var ReactDom = require('react-dom');
var Fluxxor = require('fluxxor');

var constants = {
    UPDATE_COUNTER: "UPDATE_COUNTER",
};

// Store
var CounterStore = Fluxxor.createStore({
    initialize: function () {
        this.counter = 0;
        this.bindActions(
            constants.UPDATE_COUNTER, this.onUpdateCounter
        );
    },
    onUpdateCounter: function (payload) {
        this.counter = this.counter + payload.value;
        this.emit('change');
    },
    getState: function () {
        return {counter: this.counter};
    }
});

var actions = {
    plusCounter: function () {
        this.dispatch(constants.UPDATE_COUNTER, {value: 1});
    },
    minusCounter: function () {
        this.dispatch(constants.UPDATE_COUNTER, {value: -1})
    }
};

var FluxMixin = Fluxxor.FluxMixin(React),
    StoreWatchMixin = Fluxxor.StoreWatchMixin;

// View
var CounterApp = React.createClass({
    mixins: [ FluxMixin, StoreWatchMixin("CounterStore")],

    getStateFromFlux: function () {
        return this.getFlux()
            .store('CounterStore')
            .getState();
    },
    render: function () {
        return <Counter value={this.state.counter} />;
    }
});

var Counter = React.createClass({
    mixins: [FluxMixin],

    propTypes: {
        value: React.PropTypes.number.isRequired,
    },
    onClickPlus: function () {
        return this.getFlux().actions.plusCounter();
    },
    onClickMinus: function () {
        return this.getFlux().actions.minusCounter();
    },
    render: function () {
        return (
            <div>
                <span>count: {this.props.value}</span>
                <div>
                    <button onClick={this.onClickPlus}>+1</button>
                    <button onClick={this.onClickMinus}>-1</button>
                </div>
            </div>
        );
    }
});

var stores = { CounterStore: new CounterStore() };
var flux = new Fluxxor.Flux(stores, actions);

ReactDom.render(
    <CounterApp flux={flux} />,
    document.getElementById('app-container')
);

// not Flux
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// var CounterApp = React.createClass({
//     getInitialState: function() {
//         return { counter: 0};
//     },
//     handlePlus: function() {
//         this.setState({ counter: this.state.counter + 1});
//     },
//     handleMinus: function() {
//         this.setState({ counter: this.state.counter - 1});
//     },
//     render: function() {
//         return (
//             <div>
//                 <Counter value={this.state.counter}  onClickPlus={this.handlePlus()} onClickMinus={this.handleMinus()} />
//             </div>
//         );
//     }
// });
//
//
// var Counter = React.createClass({
//     propTypes: {
//         value: React.PropTypes.number.isRequired,
//         onClickPlus: React.PropTypes.func.isRequired,
//         onClickMinus: React.PropTypes.func.isRequired
//     },
//     render: function() {
//         return (
//             <div>
//                 <span>count: {this.props.value}</span>
//                 <div>
//                     <button onClick={this.props.onClickPlus}>
//                         +1
//                     </button>
//                     <button onClick={this.props.onClickMinus}>
//                         -1
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// });
//
// ReactDOM.render(
//     <CounterApp />,
//     document.getElementById('app-container')
// );
