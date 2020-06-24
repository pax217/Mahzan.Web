"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allPermissionsLoaded = exports.selectAllPermissionsIds = exports.selectAllPermissions = exports.selectPermissionById = exports.selectPermissionsState = void 0;
// NGRX
var store_1 = require("@ngrx/store");
var fromPermissions = require("../_reducers/permission.reducers");
exports.selectPermissionsState = store_1.createFeatureSelector('permissions');
exports.selectPermissionById = function (permissionId) { return store_1.createSelector(exports.selectPermissionsState, function (ps) { return ps.entities[permissionId]; }); };
exports.selectAllPermissions = store_1.createSelector(exports.selectPermissionsState, fromPermissions.selectAll);
exports.selectAllPermissionsIds = store_1.createSelector(exports.selectPermissionsState, fromPermissions.selectIds);
exports.allPermissionsLoaded = store_1.createSelector(exports.selectPermissionsState, function (ps) { return ps._isAllPermissionsLoaded; });
//# sourceMappingURL=permission.selectors.js.map