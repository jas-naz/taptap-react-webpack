/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
// import { Hello } from "./components/Hello";
var app_1 = __webpack_require__(3);
// ReactDOM.render(
//     <Hello compiler="TypeScript" framework="React" />,
//     document.getElementById("example")
// );
var reducer = function () {
};
// const store = createStore(reducer, {});
ReactDOM.render(React.createElement(app_1.App, { someDefaultValue: "Jason " }), document.getElementById("example"));
// https : //www.npmjs.com/package/react-touch
// https://www.npmjs.com/package/react-touch-events 


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ads_1 = __webpack_require__(4);
var stats_1 = __webpack_require__(5);
var levelmap_1 = __webpack_require__(6);
var levelinfo_1 = __webpack_require__(7);
var enemy_1 = __webpack_require__(8);
var enemystats_1 = __webpack_require__(9);
var skills_1 = __webpack_require__(10);
var coins = 8;
var App = (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        // const EnemyItem = ({...props}) => { return ( <Enemy {...props} /> )};
        // enemyClick(e) {
        //     e.preventDefault();
        //     console.log('The link was clicked.');
        // }
        // public enemyClick(event: any): void {
        //     this.setState({ ...this.state, coins: "5" });
        // }
        // public handleEnemyClick(event: any): void {
        _this.handleEnemyClick = function (e) {
            // You can access the prop you pass to the children 
            // because you already have it! 
            // Here you have it in state but it could also be
            //  in props, coming from another parent.
            // alert("The Child button text is: " + this.state.coins);
            // You can also access the target of the click here 
            // if you want to do some magic stuff
            // alert("The Child HTML is: " + event.target.outerHTML);
            // this.setState({ coins: "50" });
            // updateCoins();
            var coins = _this.state.coins + 1;
            //Calculate enemy
            var hpRemaining = _this.state.hpRemaining - _this.state.dps;
            if (hpRemaining < 0)
                hpRemaining = 0;
            _this.setState({
                coins: coins,
                hpRemaining: hpRemaining
            });
            console.log("Enemy CLICKED: "); //+ this.state.coins
        };
        _this.state = {
            someValue: _this.props.someDefaultValue,
            coins: App.defaultProps.coins,
            dps: 100,
            souls: 0,
            hdp: 0,
            hpTotal: 2000,
            hpRemaining: 2000
        };
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "TapTap ",
                this.state.someValue,
                "from React/Typescript"),
            React.createElement(ads_1.Ads, null),
            React.createElement(stats_1.Stats, { coins: this.state.coins, dps: this.state.dps, souls: this.state.souls, hdp: this.state.hdp }),
            React.createElement(levelmap_1.LevelMap, null),
            React.createElement(levelinfo_1.LevelInfo, null),
            React.createElement(enemy_1.Enemy, { coins: this.state.coins, onClick: this.handleEnemyClick }),
            React.createElement(enemystats_1.EnemyStats, { hpTotal: this.state.hpTotal, hpRemaining: this.state.hpRemaining }),
            React.createElement(skills_1.Skills, null)));
    };
    App.prototype.componentWillMount = function () {
        var coins;
        // if (coins > 50) {
        //     coins = '50';
        // } else if (coins < 25) {
        //     coins = '25';
        // } else {
        //     coins = '10';
        // }
        coins = this.state.coins;
        this.setState({ coins: coins });
    };
    App.prototype.updateCoins = function () {
        this.setState({ coins: 5 });
    };
    // defaultState = { data: null, error: null };
    App.defaultProps = {
        coins: 5
    };
    return App;
}(React.Component));
exports.App = App;
// App.defaultProps : IAppComponentProps = {
//     coins: "5"
// }


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
// TODO: show for n seconds, then enable x button
var Ads = (function (_super) {
    __extends(Ads, _super);
    function Ads() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ads.prototype.render = function () {
        return (React.createElement("div", { style: adsStyle }, "This is an AD..."));
    };
    return Ads;
}(React.Component));
exports.Ads = Ads;
var adsStyle = {
    width: "400px",
    height: "80px",
    margin: "auto",
    border: "solid 1px gray",
    cursor: "pointer"
};
// const mapState2Props = state => {
//   return {
//   };
// }
// export default connect(mapState2Props)(App);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Stats = (function (_super) {
    __extends(Stats, _super);
    function Stats(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            coins: _this.props.coins,
            dps: _this.props.dps,
            souls: _this.props.souls,
            hdp: _this.props.hdp
        };
        return _this;
    }
    Stats.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({
            coins: nextProps.coins,
            dps: nextProps.dps,
            souls: nextProps.souls,
            hdp: nextProps.hdp
        });
    };
    Stats.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("span", null,
                    "C ",
                    this.state.coins),
                React.createElement("span", null,
                    "D ",
                    this.state.dps)),
            React.createElement("div", null,
                React.createElement("span", null,
                    "S ",
                    this.state.souls),
                React.createElement("span", null,
                    "H ",
                    this.state.hdp))));
    };
    return Stats;
}(React.Component));
exports.Stats = Stats;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var LevelMap = (function (_super) {
    __extends(LevelMap, _super);
    function LevelMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelMap.prototype.render = function () {
        return (React.createElement("div", null, "Level Map"));
    };
    return LevelMap;
}(React.Component));
exports.LevelMap = LevelMap;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var LevelInfo = (function (_super) {
    __extends(LevelInfo, _super);
    function LevelInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelInfo.prototype.render = function () {
        return (React.createElement("div", null, "Level 1"));
    };
    return LevelInfo;
}(React.Component));
exports.LevelInfo = LevelInfo;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { coins: _this.props.coins };
        return _this;
    }
    // handleClick(evt: any, domNode: any): void {
    //     console.log("Enemy CLICKED:" + this.state.coins);
    //     this.setState({ coins: this.state.coins });
    //     hits += 1;
    // }
    Enemy.prototype.render = function () {
        return (React.createElement("div", { style: textStyle, onClick: this.props.onClick },
            "Enemy (hits ",
            this.props.coins,
            ")",
            React.createElement("div", { style: characterStyle }, "Character")));
    };
    return Enemy;
}(React.Component)); // <div style={ textStyle } onClick={this.handleClick.bind(this)}>
exports.Enemy = Enemy;
// export class Enemy = () => <div>Enemy</div>; onClick={ this.props.onClick }
var hits = 0;
var textStyle = {
    height: "155px",
    color: 'black',
    backgroundColor: "#efefef",
    userSelect: "none",
    cursor: "pointer"
};
var characterStyle = {
    width: "155px",
    height: "255px",
    border: "solid 1px black",
    margin: "auto"
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
;
var EnemyStats = (function (_super) {
    __extends(EnemyStats, _super);
    function EnemyStats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(props: IEnemyProps) {
    //     super(props);
    //     this.state = { hpTotal: this.props.hpTotal, hpRemaining: this.props.hpRemaining };
    // }
    EnemyStats.prototype.render = function () {
        var mergedStyles = __assign({}, hpbarStyle, { width: (this.props.hpRemaining / this.props.hpTotal) * 100 + "%" });
        return (React.createElement("div", { style: enemyStatsStyle },
            "Enemy Stats: ",
            this.props.hpRemaining,
            " hp",
            React.createElement("div", { style: hpbarBackgroundStyle },
                React.createElement("div", { style: __assign({}, hpbarStyle, { width: (this.props.hpRemaining / this.props.hpTotal) * 100 + "%" }) }))));
    };
    return EnemyStats;
}(React.Component));
exports.EnemyStats = EnemyStats;
var enemyStatsStyle = {
    margin: "auto",
    width: "200px"
};
var hpbarStyle = {
    height: "100%",
    backgroundColor: "red"
};
var hpbarBackgroundStyle = {
    height: "20px",
    backgroundColor: "black",
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Skills = (function (_super) {
    __extends(Skills, _super);
    function Skills() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skills.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null, "Skills pane"),
            React.createElement("div", { style: skillButtonStyle }, "Heroes"),
            React.createElement("div", { style: skillButtonStyle }, "Skills"),
            React.createElement("div", { style: skillButtonStyle }, "Gems"),
            React.createElement("div", { style: skillButtonStyle }, "Mercs"),
            React.createElement("div", { style: skillButtonStyle }, "Skill Button 5")));
    };
    return Skills;
}(React.Component));
exports.Skills = Skills;
var skillButtonStyle = {
    float: "left",
    width: "19.5%",
    backgroundColor: "#ababab",
    color: "white",
    border: "solid 1px white",
    cursor: "pointer"
};
// export default Skills;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map