"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metaReducers = exports.reducers = void 0;
// NGRX
var router_store_1 = require("@ngrx/router-store");
var ngrx_store_freeze_1 = require("ngrx-store-freeze");
var environment_1 = require("../../../environments/environment");
exports.reducers = { router: router_store_1.routerReducer };
exports.metaReducers = !environment_1.environment.production ? [ngrx_store_freeze_1.storeFreeze] : [];
//# sourceMappingURL=index.js.map