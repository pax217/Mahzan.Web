"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
var crud_1 = require("../../_base/crud");
var Permission = /** @class */ (function (_super) {
    __extends(Permission, _super);
    function Permission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Permission.prototype.clear = function () {
        this.id = undefined;
        this.title = '';
        this.level = 1;
        this.parentId = undefined;
        this.isSelected = false;
        this.name = '';
        this._children = [];
    };
    return Permission;
}(crud_1.BaseModel));
exports.Permission = Permission;
//# sourceMappingURL=permission.model.js.map