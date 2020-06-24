"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Context
var _e_commerce_data_context_1 = require("./_server/_e-commerce.data-context");
Object.defineProperty(exports, "ECommerceDataContext", { enumerable: true, get: function () { return _e_commerce_data_context_1.ECommerceDataContext; } });
// Models and Consts
var customer_model_1 = require("./_models/customer.model");
Object.defineProperty(exports, "CustomerModel", { enumerable: true, get: function () { return customer_model_1.CustomerModel; } });
var product_remark_model_1 = require("./_models/product-remark.model");
Object.defineProperty(exports, "ProductRemarkModel", { enumerable: true, get: function () { return product_remark_model_1.ProductRemarkModel; } });
var product_specification_model_1 = require("./_models/product-specification.model");
Object.defineProperty(exports, "ProductSpecificationModel", { enumerable: true, get: function () { return product_specification_model_1.ProductSpecificationModel; } });
var product_model_1 = require("./_models/product.model");
Object.defineProperty(exports, "ProductModel", { enumerable: true, get: function () { return product_model_1.ProductModel; } });
var specification_dictionary_1 = require("./_consts/specification.dictionary");
Object.defineProperty(exports, "SPECIFICATIONS_DICTIONARY", { enumerable: true, get: function () { return specification_dictionary_1.SPECIFICATIONS_DICTIONARY; } });
// DataSources
var customers_datasource_1 = require("./_data-sources/customers.datasource");
Object.defineProperty(exports, "CustomersDataSource", { enumerable: true, get: function () { return customers_datasource_1.CustomersDataSource; } });
var product_remarks_datasource_1 = require("./_data-sources/product-remarks.datasource");
Object.defineProperty(exports, "ProductRemarksDataSource", { enumerable: true, get: function () { return product_remarks_datasource_1.ProductRemarksDataSource; } });
var product_specifications_datasource_1 = require("./_data-sources/product-specifications.datasource");
Object.defineProperty(exports, "ProductSpecificationsDataSource", { enumerable: true, get: function () { return product_specifications_datasource_1.ProductSpecificationsDataSource; } });
var products_datasource_1 = require("./_data-sources/products.datasource");
Object.defineProperty(exports, "ProductsDataSource", { enumerable: true, get: function () { return products_datasource_1.ProductsDataSource; } });
// Actions
// Customer Actions =>
var customer_actions_1 = require("./_actions/customer.actions");
Object.defineProperty(exports, "CustomerActionTypes", { enumerable: true, get: function () { return customer_actions_1.CustomerActionTypes; } });
Object.defineProperty(exports, "CustomerOnServerCreated", { enumerable: true, get: function () { return customer_actions_1.CustomerOnServerCreated; } });
Object.defineProperty(exports, "CustomerCreated", { enumerable: true, get: function () { return customer_actions_1.CustomerCreated; } });
Object.defineProperty(exports, "CustomerUpdated", { enumerable: true, get: function () { return customer_actions_1.CustomerUpdated; } });
Object.defineProperty(exports, "CustomersStatusUpdated", { enumerable: true, get: function () { return customer_actions_1.CustomersStatusUpdated; } });
Object.defineProperty(exports, "OneCustomerDeleted", { enumerable: true, get: function () { return customer_actions_1.OneCustomerDeleted; } });
Object.defineProperty(exports, "ManyCustomersDeleted", { enumerable: true, get: function () { return customer_actions_1.ManyCustomersDeleted; } });
Object.defineProperty(exports, "CustomersPageRequested", { enumerable: true, get: function () { return customer_actions_1.CustomersPageRequested; } });
Object.defineProperty(exports, "CustomersPageLoaded", { enumerable: true, get: function () { return customer_actions_1.CustomersPageLoaded; } });
Object.defineProperty(exports, "CustomersPageCancelled", { enumerable: true, get: function () { return customer_actions_1.CustomersPageCancelled; } });
Object.defineProperty(exports, "CustomersPageToggleLoading", { enumerable: true, get: function () { return customer_actions_1.CustomersPageToggleLoading; } });
// Product actions =>
var product_actions_1 = require("./_actions/product.actions");
Object.defineProperty(exports, "ProductActionTypes", { enumerable: true, get: function () { return product_actions_1.ProductActionTypes; } });
Object.defineProperty(exports, "ProductOnServerCreated", { enumerable: true, get: function () { return product_actions_1.ProductOnServerCreated; } });
Object.defineProperty(exports, "ProductCreated", { enumerable: true, get: function () { return product_actions_1.ProductCreated; } });
Object.defineProperty(exports, "ProductUpdated", { enumerable: true, get: function () { return product_actions_1.ProductUpdated; } });
Object.defineProperty(exports, "ProductsStatusUpdated", { enumerable: true, get: function () { return product_actions_1.ProductsStatusUpdated; } });
Object.defineProperty(exports, "OneProductDeleted", { enumerable: true, get: function () { return product_actions_1.OneProductDeleted; } });
Object.defineProperty(exports, "ManyProductsDeleted", { enumerable: true, get: function () { return product_actions_1.ManyProductsDeleted; } });
Object.defineProperty(exports, "ProductsPageRequested", { enumerable: true, get: function () { return product_actions_1.ProductsPageRequested; } });
Object.defineProperty(exports, "ProductsPageLoaded", { enumerable: true, get: function () { return product_actions_1.ProductsPageLoaded; } });
Object.defineProperty(exports, "ProductsPageCancelled", { enumerable: true, get: function () { return product_actions_1.ProductsPageCancelled; } });
Object.defineProperty(exports, "ProductsPageToggleLoading", { enumerable: true, get: function () { return product_actions_1.ProductsPageToggleLoading; } });
Object.defineProperty(exports, "ProductsActionToggleLoading", { enumerable: true, get: function () { return product_actions_1.ProductsActionToggleLoading; } });
// ProductRemark Actions =>
var product_remark_actions_1 = require("./_actions/product-remark.actions");
Object.defineProperty(exports, "ProductRemarkActionTypes", { enumerable: true, get: function () { return product_remark_actions_1.ProductRemarkActionTypes; } });
Object.defineProperty(exports, "ProductRemarkCreated", { enumerable: true, get: function () { return product_remark_actions_1.ProductRemarkCreated; } });
Object.defineProperty(exports, "ProductRemarkUpdated", { enumerable: true, get: function () { return product_remark_actions_1.ProductRemarkUpdated; } });
Object.defineProperty(exports, "ProductRemarkStoreUpdated", { enumerable: true, get: function () { return product_remark_actions_1.ProductRemarkStoreUpdated; } });
Object.defineProperty(exports, "OneProductRemarkDeleted", { enumerable: true, get: function () { return product_remark_actions_1.OneProductRemarkDeleted; } });
Object.defineProperty(exports, "ManyProductRemarksDeleted", { enumerable: true, get: function () { return product_remark_actions_1.ManyProductRemarksDeleted; } });
Object.defineProperty(exports, "ProductRemarksPageRequested", { enumerable: true, get: function () { return product_remark_actions_1.ProductRemarksPageRequested; } });
Object.defineProperty(exports, "ProductRemarksPageLoaded", { enumerable: true, get: function () { return product_remark_actions_1.ProductRemarksPageLoaded; } });
Object.defineProperty(exports, "ProductRemarksPageCancelled", { enumerable: true, get: function () { return product_remark_actions_1.ProductRemarksPageCancelled; } });
Object.defineProperty(exports, "ProductRemarksPageToggleLoading", { enumerable: true, get: function () { return product_remark_actions_1.ProductRemarksPageToggleLoading; } });
Object.defineProperty(exports, "ProductRemarkOnServerCreated", { enumerable: true, get: function () { return product_remark_actions_1.ProductRemarkOnServerCreated; } });
// ProductSpecification Actions =>
var product_specification_actions_1 = require("./_actions/product-specification.actions");
Object.defineProperty(exports, "ProductSpecificationActionTypes", { enumerable: true, get: function () { return product_specification_actions_1.ProductSpecificationActionTypes; } });
Object.defineProperty(exports, "ProductSpecificationCreated", { enumerable: true, get: function () { return product_specification_actions_1.ProductSpecificationCreated; } });
Object.defineProperty(exports, "ProductSpecificationUpdated", { enumerable: true, get: function () { return product_specification_actions_1.ProductSpecificationUpdated; } });
Object.defineProperty(exports, "OneProductSpecificationDeleted", { enumerable: true, get: function () { return product_specification_actions_1.OneProductSpecificationDeleted; } });
Object.defineProperty(exports, "ManyProductSpecificationsDeleted", { enumerable: true, get: function () { return product_specification_actions_1.ManyProductSpecificationsDeleted; } });
Object.defineProperty(exports, "ProductSpecificationsPageRequested", { enumerable: true, get: function () { return product_specification_actions_1.ProductSpecificationsPageRequested; } });
Object.defineProperty(exports, "ProductSpecificationsPageLoaded", { enumerable: true, get: function () { return product_specification_actions_1.ProductSpecificationsPageLoaded; } });
Object.defineProperty(exports, "ProductSpecificationsPageCancelled", { enumerable: true, get: function () { return product_specification_actions_1.ProductSpecificationsPageCancelled; } });
Object.defineProperty(exports, "ProductSpecificationsPageToggleLoading", { enumerable: true, get: function () { return product_specification_actions_1.ProductSpecificationsPageToggleLoading; } });
Object.defineProperty(exports, "ProductSpecificationOnServerCreated", { enumerable: true, get: function () { return product_specification_actions_1.ProductSpecificationOnServerCreated; } });
// Effects
var customer_effects_1 = require("./_effects/customer.effects");
Object.defineProperty(exports, "CustomerEffects", { enumerable: true, get: function () { return customer_effects_1.CustomerEffects; } });
var product_effects_1 = require("./_effects/product.effects");
Object.defineProperty(exports, "ProductEffects", { enumerable: true, get: function () { return product_effects_1.ProductEffects; } });
var product_remark_effects_1 = require("./_effects/product-remark.effects");
Object.defineProperty(exports, "ProductRemarkEffects", { enumerable: true, get: function () { return product_remark_effects_1.ProductRemarkEffects; } });
var product_specification_effects_1 = require("./_effects/product-specification.effects");
Object.defineProperty(exports, "ProductSpecificationEffects", { enumerable: true, get: function () { return product_specification_effects_1.ProductSpecificationEffects; } });
// Reducers
var customer_reducers_1 = require("./_reducers/customer.reducers");
Object.defineProperty(exports, "customersReducer", { enumerable: true, get: function () { return customer_reducers_1.customersReducer; } });
var product_reducers_1 = require("./_reducers/product.reducers");
Object.defineProperty(exports, "productsReducer", { enumerable: true, get: function () { return product_reducers_1.productsReducer; } });
var product_remark_reducers_1 = require("./_reducers/product-remark.reducers");
Object.defineProperty(exports, "productRemarksReducer", { enumerable: true, get: function () { return product_remark_reducers_1.productRemarksReducer; } });
var product_specification_reducers_1 = require("./_reducers/product-specification.reducers");
Object.defineProperty(exports, "productSpecificationsReducer", { enumerable: true, get: function () { return product_specification_reducers_1.productSpecificationsReducer; } });
// Selectors
// Customer selectors =>
var customer_selectors_1 = require("./_selectors/customer.selectors");
Object.defineProperty(exports, "selectCustomerById", { enumerable: true, get: function () { return customer_selectors_1.selectCustomerById; } });
Object.defineProperty(exports, "selectCustomersInStore", { enumerable: true, get: function () { return customer_selectors_1.selectCustomersInStore; } });
Object.defineProperty(exports, "selectCustomersPageLoading", { enumerable: true, get: function () { return customer_selectors_1.selectCustomersPageLoading; } });
Object.defineProperty(exports, "selectLastCreatedCustomerId", { enumerable: true, get: function () { return customer_selectors_1.selectLastCreatedCustomerId; } });
Object.defineProperty(exports, "selectCustomersActionLoading", { enumerable: true, get: function () { return customer_selectors_1.selectCustomersActionLoading; } });
Object.defineProperty(exports, "selectCustomersShowInitWaitingMessage", { enumerable: true, get: function () { return customer_selectors_1.selectCustomersShowInitWaitingMessage; } });
// Product selectors
var product_selectors_1 = require("./_selectors/product.selectors");
Object.defineProperty(exports, "selectProductById", { enumerable: true, get: function () { return product_selectors_1.selectProductById; } });
Object.defineProperty(exports, "selectProductsInStore", { enumerable: true, get: function () { return product_selectors_1.selectProductsInStore; } });
Object.defineProperty(exports, "selectProductsPageLoading", { enumerable: true, get: function () { return product_selectors_1.selectProductsPageLoading; } });
Object.defineProperty(exports, "selectProductsPageLastQuery", { enumerable: true, get: function () { return product_selectors_1.selectProductsPageLastQuery; } });
Object.defineProperty(exports, "selectLastCreatedProductId", { enumerable: true, get: function () { return product_selectors_1.selectLastCreatedProductId; } });
Object.defineProperty(exports, "selectHasProductsInStore", { enumerable: true, get: function () { return product_selectors_1.selectHasProductsInStore; } });
Object.defineProperty(exports, "selectProductsActionLoading", { enumerable: true, get: function () { return product_selectors_1.selectProductsActionLoading; } });
Object.defineProperty(exports, "selectProductsInitWaitingMessage", { enumerable: true, get: function () { return product_selectors_1.selectProductsInitWaitingMessage; } });
// ProductRemark selectors =>
var product_remark_selectors_1 = require("./_selectors/product-remark.selectors");
Object.defineProperty(exports, "selectProductRemarkById", { enumerable: true, get: function () { return product_remark_selectors_1.selectProductRemarkById; } });
Object.defineProperty(exports, "selectProductRemarksInStore", { enumerable: true, get: function () { return product_remark_selectors_1.selectProductRemarksInStore; } });
Object.defineProperty(exports, "selectProductRemarksPageLoading", { enumerable: true, get: function () { return product_remark_selectors_1.selectProductRemarksPageLoading; } });
Object.defineProperty(exports, "selectCurrentProductIdInStoreForProductRemarks", { enumerable: true, get: function () { return product_remark_selectors_1.selectCurrentProductIdInStoreForProductRemarks; } });
Object.defineProperty(exports, "selectLastCreatedProductRemarkId", { enumerable: true, get: function () { return product_remark_selectors_1.selectLastCreatedProductRemarkId; } });
Object.defineProperty(exports, "selectPRShowInitWaitingMessage", { enumerable: true, get: function () { return product_remark_selectors_1.selectPRShowInitWaitingMessage; } });
// ProductSpecification selectors =>
var product_specification_selectors_1 = require("./_selectors/product-specification.selectors");
Object.defineProperty(exports, "selectProductSpecificationById", { enumerable: true, get: function () { return product_specification_selectors_1.selectProductSpecificationById; } });
Object.defineProperty(exports, "selectProductSpecificationsInStore", { enumerable: true, get: function () { return product_specification_selectors_1.selectProductSpecificationsInStore; } });
Object.defineProperty(exports, "selectProductSpecificationsPageLoading", { enumerable: true, get: function () { return product_specification_selectors_1.selectProductSpecificationsPageLoading; } });
Object.defineProperty(exports, "selectCurrentProductIdInStoreForProductSpecs", { enumerable: true, get: function () { return product_specification_selectors_1.selectCurrentProductIdInStoreForProductSpecs; } });
Object.defineProperty(exports, "selectProductSpecificationsState", { enumerable: true, get: function () { return product_specification_selectors_1.selectProductSpecificationsState; } });
Object.defineProperty(exports, "selectLastCreatedProductSpecificationId", { enumerable: true, get: function () { return product_specification_selectors_1.selectLastCreatedProductSpecificationId; } });
Object.defineProperty(exports, "selectPSShowInitWaitingMessage", { enumerable: true, get: function () { return product_specification_selectors_1.selectPSShowInitWaitingMessage; } });
// Services
var _services_1 = require("./_services/");
Object.defineProperty(exports, "CustomersService", { enumerable: true, get: function () { return _services_1.CustomersService; } });
var _services_2 = require("./_services/");
Object.defineProperty(exports, "ProductsService", { enumerable: true, get: function () { return _services_2.ProductsService; } });
var _services_3 = require("./_services/");
Object.defineProperty(exports, "ProductRemarksService", { enumerable: true, get: function () { return _services_3.ProductRemarksService; } });
var _services_4 = require("./_services/");
Object.defineProperty(exports, "ProductSpecificationsService", { enumerable: true, get: function () { return _services_4.ProductSpecificationsService; } });
//# sourceMappingURL=index.js.map