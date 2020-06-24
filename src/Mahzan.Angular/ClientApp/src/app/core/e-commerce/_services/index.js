"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Services
var customers_service_fake_1 = require("./customers.service.fake"); // You have to comment this, when your real back-end is done
Object.defineProperty(exports, "CustomersService", { enumerable: true, get: function () { return customers_service_fake_1.CustomersService; } });
// export { CustomersService } from './customers.service'; // You have to uncomment this, when your real back-end is done
var products_service_fake_1 = require("./products.service.fake"); // You have to comment this, when your real back-end is done
Object.defineProperty(exports, "ProductsService", { enumerable: true, get: function () { return products_service_fake_1.ProductsService; } });
// export { ProductsService } from './products.service'; // You have to uncomment this, when your real back-end is done
var product_remarks_service_fake_1 = require("./product-remarks.service.fake"); // You have to comment this, when your real back-end is done
Object.defineProperty(exports, "ProductRemarksService", { enumerable: true, get: function () { return product_remarks_service_fake_1.ProductRemarksService; } });
// export { ProductRemarksService }
// from './product-remarks.service'; // You have to uncomment this, when your real back-end is done
var product_specifications_service_fake_1 = require("./product-specifications.service.fake"); // You have to comment this, when your real back-end is done
Object.defineProperty(exports, "ProductSpecificationsService", { enumerable: true, get: function () { return product_specifications_service_fake_1.ProductSpecificationsService; } });
// export { ProductSpecificationsService }
// from './product-specifications.service'; // You have to uncomment this, when your real back-end is done
//# sourceMappingURL=index.js.map