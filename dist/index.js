module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
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
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(104);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IDPCommunicationErrorException = {
    type: "structure",
    required: [],
    members: {
        message: {
            shape: {
                type: "string"
            }
        }
    },
    exceptionType: "IDPCommunicationErrorException",
    exceptionCode: "IDPCommunicationError"
};
//# sourceMappingURL=IDPCommunicationErrorException.js.map

/***/ }),

/***/ 8:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCallerIdentityOutput = {
    type: "structure",
    required: [],
    members: {
        UserId: {
            shape: {
                type: "string"
            }
        },
        Account: {
            shape: {
                type: "string"
            }
        },
        Arn: {
            shape: {
                type: "string",
                min: 20
            }
        }
    }
};
//# sourceMappingURL=GetCallerIdentityOutput.js.map

/***/ }),

/***/ 12:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buffer_1 = __webpack_require__(293);
var is_array_buffer_1 = __webpack_require__(820);
function fromArrayBuffer(input, offset, length) {
    if (offset === void 0) { offset = 0; }
    if (length === void 0) { length = input.byteLength - offset; }
    if (!is_array_buffer_1.isArrayBuffer(input)) {
        throw new Error("argument passed to fromArrayBuffer was not an ArrayBuffer");
    }
    if (typeof buffer_1.Buffer.from === "function" && buffer_1.Buffer.from !== Uint8Array.from) {
        return buffer_1.Buffer.from(input, offset, length);
    }
    // Any version of node that supports the optional offset and length
    // parameters, which were added in Node 6.0.0, will support Buffer.from and
    // have already returned. Throw if offset is not 0 or if length differs from
    // the underlying buffer's length.
    if (offset !== 0 || length !== input.byteLength) {
        throw new Error("Unable to convert TypedArray to Buffer in Node " + process.version);
    }
    return new buffer_1.Buffer(input);
}
exports.fromArrayBuffer = fromArrayBuffer;
function fromString(input, encoding) {
    if (typeof input !== "string") {
        throw new Error("argument passed to fromString was not a string");
    }
    if (typeof buffer_1.Buffer.from === "function" && buffer_1.Buffer.from !== Uint8Array.from) {
        return buffer_1.Buffer.from(input, encoding);
    }
    return new buffer_1.Buffer(input, encoding);
}
exports.fromString = fromString;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 26:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCallerIdentityInput = {
    type: "structure",
    required: [],
    members: {}
};
//# sourceMappingURL=GetCallerIdentityInput.js.map

/***/ }),

/***/ 33:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DecodeAuthorizationMessageInput_1 = __webpack_require__(365);
const DecodeAuthorizationMessageOutput_1 = __webpack_require__(350);
const InvalidAuthorizationMessageException_1 = __webpack_require__(876);
const ServiceMetadata_1 = __webpack_require__(683);
exports.DecodeAuthorizationMessage = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: "DecodeAuthorizationMessage",
    http: {
        method: "POST",
        requestUri: "/"
    },
    input: {
        shape: DecodeAuthorizationMessageInput_1.DecodeAuthorizationMessageInput
    },
    output: {
        shape: DecodeAuthorizationMessageOutput_1.DecodeAuthorizationMessageOutput,
        resultWrapper: "DecodeAuthorizationMessageResult"
    },
    errors: [
        {
            shape: InvalidAuthorizationMessageException_1.InvalidAuthorizationMessageException
        }
    ]
};
//# sourceMappingURL=DecodeAuthorizationMessage.js.map

/***/ }),

/***/ 40:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
function signingMiddleware(signer) {
    var _this = this;
    return function (next) { return function (args) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var _a, _b, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = next;
                    _b = [{}, args];
                    _c = {};
                    return [4 /*yield*/, signer.sign(args.request)];
                case 1: return [2 /*return*/, _a.apply(void 0, [tslib_1.__assign.apply(void 0, _b.concat([(_c.request = _d.sent(), _c)]))])];
            }
        });
    }); }; };
}
exports.signingMiddleware = signingMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBT0EsU0FBZ0IsaUJBQWlCLENBSS9CLE1BQXFCO0lBSnZCLGlCQWNDO0lBVEMsT0FBTyxVQUNMLElBQTRDLElBQ0QsT0FBQSxVQUMzQyxJQUE2Qzs7Ozs7b0JBRTdDLEtBQUEsSUFBSSxDQUFBOzhCQUNDLElBQUk7O29CQUNFLHFCQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFBO3dCQUYxQyxzQkFBQSw2REFFRSxVQUFPLEdBQUUsU0FBK0IsVUFDeEMsRUFBQTs7O1NBQUEsRUFOeUMsQ0FNekMsQ0FBQztBQUNQLENBQUM7QUFkRCw4Q0FjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEZpbmFsaXplSGFuZGxlcixcbiAgRmluYWxpemVIYW5kbGVyQXJndW1lbnRzLFxuICBGaW5hbGl6ZU1pZGRsZXdhcmUsXG4gIFJlcXVlc3RTaWduZXJcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduaW5nTWlkZGxld2FyZTxcbiAgSW5wdXQgZXh0ZW5kcyBvYmplY3QsXG4gIE91dHB1dCBleHRlbmRzIG9iamVjdCxcbiAgU3RyZWFtID0gVWludDhBcnJheVxuPihzaWduZXI6IFJlcXVlc3RTaWduZXIpOiBGaW5hbGl6ZU1pZGRsZXdhcmU8SW5wdXQsIE91dHB1dCwgU3RyZWFtPiB7XG4gIHJldHVybiAoXG4gICAgbmV4dDogRmluYWxpemVIYW5kbGVyPElucHV0LCBPdXRwdXQsIFN0cmVhbT5cbiAgKTogRmluYWxpemVIYW5kbGVyPElucHV0LCBPdXRwdXQsIFN0cmVhbT4gPT4gYXN5bmMgKFxuICAgIGFyZ3M6IEZpbmFsaXplSGFuZGxlckFyZ3VtZW50czxJbnB1dCwgU3RyZWFtPlxuICApOiBQcm9taXNlPE91dHB1dD4gPT5cbiAgICBuZXh0KHtcbiAgICAgIC4uLmFyZ3MsXG4gICAgICByZXF1ZXN0OiBhd2FpdCBzaWduZXIuc2lnbihhcmdzLnJlcXVlc3QpXG4gICAgfSk7XG59XG4iXX0=

/***/ }),

/***/ 41:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const collector_1 = __webpack_require__(368);
exports.streamCollector = function streamCollector(stream) {
    return new Promise((resolve, reject) => {
        const collector = new collector_1.Collector();
        stream.pipe(collector);
        stream.on("error", err => {
            // if the source errors, the destination stream needs to manually end
            collector.end();
            reject(err);
        });
        collector.on("error", reject);
        collector.on("finish", function () {
            const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
            resolve(bytes);
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyQ0FBd0M7QUFFM0IsUUFBQSxlQUFlLEdBQThCLFNBQVMsZUFBZSxDQUNoRixNQUFNO0lBRU4sT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNyQyxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLHFFQUFxRTtZQUNyRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QixTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tIFwic3RyZWFtXCI7XG5pbXBvcnQgeyBTdHJlYW1Db2xsZWN0b3IgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IENvbGxlY3RvciB9IGZyb20gXCIuL2NvbGxlY3RvclwiO1xuXG5leHBvcnQgY29uc3Qgc3RyZWFtQ29sbGVjdG9yOiBTdHJlYW1Db2xsZWN0b3I8UmVhZGFibGU+ID0gZnVuY3Rpb24gc3RyZWFtQ29sbGVjdG9yKFxuICBzdHJlYW1cbik6IFByb21pc2U8VWludDhBcnJheT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGNvbGxlY3RvciA9IG5ldyBDb2xsZWN0b3IoKTtcbiAgICBzdHJlYW0ucGlwZShjb2xsZWN0b3IpO1xuICAgIHN0cmVhbS5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICAvLyBpZiB0aGUgc291cmNlIGVycm9ycywgdGhlIGRlc3RpbmF0aW9uIHN0cmVhbSBuZWVkcyB0byBtYW51YWxseSBlbmRcbiAgICAgIGNvbGxlY3Rvci5lbmQoKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH0pO1xuICAgIGNvbGxlY3Rvci5vbihcImVycm9yXCIsIHJlamVjdCk7XG4gICAgY29sbGVjdG9yLm9uKFwiZmluaXNoXCIsIGZ1bmN0aW9uKHRoaXM6IENvbGxlY3Rvcikge1xuICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShCdWZmZXIuY29uY2F0KHRoaXMuYnVmZmVyZWRCeXRlcykpO1xuICAgICAgcmVzb2x2ZShieXRlcyk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiJdfQ==

/***/ }),

/***/ 46:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isImdsCredentials(arg) {
    return (Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.AccessKeyId === "string" &&
        typeof arg.SecretAccessKey === "string" &&
        typeof arg.Token === "string" &&
        typeof arg.Expiration === "string");
}
exports.isImdsCredentials = isImdsCredentials;
function fromImdsCredentials(creds) {
    return {
        accessKeyId: creds.AccessKeyId,
        secretAccessKey: creds.SecretAccessKey,
        sessionToken: creds.Token,
        expiration: Math.floor(new Date(creds.Expiration).valueOf() / 1000)
    };
}
exports.fromImdsCredentials = fromImdsCredentials;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1kc0NyZWRlbnRpYWxzLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicmVtb3RlUHJvdmlkZXIvSW1kc0NyZWRlbnRpYWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EsU0FBZ0IsaUJBQWlCLENBQUMsR0FBUTtJQUN4QyxPQUFPLENBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNaLE9BQU8sR0FBRyxLQUFLLFFBQVE7UUFDdkIsT0FBTyxHQUFHLENBQUMsV0FBVyxLQUFLLFFBQVE7UUFDbkMsT0FBTyxHQUFHLENBQUMsZUFBZSxLQUFLLFFBQVE7UUFDdkMsT0FBTyxHQUFHLENBQUMsS0FBSyxLQUFLLFFBQVE7UUFDN0IsT0FBTyxHQUFHLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FDbkMsQ0FBQztBQUNKLENBQUM7QUFURCw4Q0FTQztBQUVELFNBQWdCLG1CQUFtQixDQUFDLEtBQXNCO0lBQ3hELE9BQU87UUFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7UUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1FBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsS0FBSztRQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO0tBQ3BFLENBQUM7QUFDSixDQUFDO0FBUEQsa0RBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVkZW50aWFscyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEltZHNDcmVkZW50aWFscyB7XG4gIEFjY2Vzc0tleUlkOiBzdHJpbmc7XG4gIFNlY3JldEFjY2Vzc0tleTogc3RyaW5nO1xuICBUb2tlbjogc3RyaW5nO1xuICBFeHBpcmF0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ltZHNDcmVkZW50aWFscyhhcmc6IGFueSk6IGFyZyBpcyBJbWRzQ3JlZGVudGlhbHMge1xuICByZXR1cm4gKFxuICAgIEJvb2xlYW4oYXJnKSAmJlxuICAgIHR5cGVvZiBhcmcgPT09IFwib2JqZWN0XCIgJiZcbiAgICB0eXBlb2YgYXJnLkFjY2Vzc0tleUlkID09PSBcInN0cmluZ1wiICYmXG4gICAgdHlwZW9mIGFyZy5TZWNyZXRBY2Nlc3NLZXkgPT09IFwic3RyaW5nXCIgJiZcbiAgICB0eXBlb2YgYXJnLlRva2VuID09PSBcInN0cmluZ1wiICYmXG4gICAgdHlwZW9mIGFyZy5FeHBpcmF0aW9uID09PSBcInN0cmluZ1wiXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSW1kc0NyZWRlbnRpYWxzKGNyZWRzOiBJbWRzQ3JlZGVudGlhbHMpOiBDcmVkZW50aWFscyB7XG4gIHJldHVybiB7XG4gICAgYWNjZXNzS2V5SWQ6IGNyZWRzLkFjY2Vzc0tleUlkLFxuICAgIHNlY3JldEFjY2Vzc0tleTogY3JlZHMuU2VjcmV0QWNjZXNzS2V5LFxuICAgIHNlc3Npb25Ub2tlbjogY3JlZHMuVG9rZW4sXG4gICAgZXhwaXJhdGlvbjogTWF0aC5mbG9vcihuZXcgRGF0ZShjcmVkcy5FeHBpcmF0aW9uKS52YWx1ZU9mKCkgLyAxMDAwKVxuICB9O1xufVxuIl19

/***/ }),

/***/ 66:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _policyDescriptorListType_1 = __webpack_require__(740);
exports.AssumeRoleWithWebIdentityInput = {
    type: "structure",
    required: ["RoleArn", "RoleSessionName", "WebIdentityToken"],
    members: {
        RoleArn: {
            shape: {
                type: "string",
                min: 20
            }
        },
        RoleSessionName: {
            shape: {
                type: "string",
                min: 2
            }
        },
        WebIdentityToken: {
            shape: {
                type: "string",
                min: 4
            }
        },
        ProviderId: {
            shape: {
                type: "string",
                min: 4
            }
        },
        PolicyArns: {
            shape: _policyDescriptorListType_1._policyDescriptorListType
        },
        Policy: {
            shape: {
                type: "string",
                min: 1
            }
        },
        DurationSeconds: {
            shape: {
                type: "integer",
                min: 900
            }
        }
    }
};
//# sourceMappingURL=AssumeRoleWithWebIdentityInput.js.map

/***/ }),

/***/ 69:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(909);
const is_array_buffer_1 = __webpack_require__(820);
const util_hex_encoding_1 = __webpack_require__(853);
/**
 * @internal
 */
async function getPayloadHash({ headers, body }, hashConstructor) {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === constants_1.SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" ||
        ArrayBuffer.isView(body) ||
        is_array_buffer_1.isArrayBuffer(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update(body);
        return util_hex_encoding_1.toHex(await hashCtor.digest());
    }
    // As any defined body that is not a string or binary data is a stream, this
    // body is unsignable. Attempt to send the request with an unsigned payload,
    // which may or may not be accepted by the service.
    return constants_1.UNSIGNED_PAYLOAD;
}
exports.getPayloadHash = getPayloadHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UGF5bG9hZEhhc2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0UGF5bG9hZEhhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBOEQ7QUFFOUQsOERBQXlEO0FBQ3pELGtFQUFtRDtBQUVuRDs7R0FFRztBQUNJLEtBQUssVUFBVSxjQUFjLENBQ2xDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBb0IsRUFDbkMsZUFBZ0M7SUFFaEMsS0FBSyxNQUFNLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQzdDLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLHlCQUFhLEVBQUU7WUFDOUMsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUI7S0FDRjtJQUVELElBQUksSUFBSSxJQUFJLFNBQVMsRUFBRTtRQUNyQixPQUFPLGtFQUFrRSxDQUFDO0tBQzNFO1NBQU0sSUFDTCxPQUFPLElBQUksS0FBSyxRQUFRO1FBQ3hCLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3hCLCtCQUFhLENBQUMsSUFBSSxDQUFDLEVBQ25CO1FBQ0EsTUFBTSxRQUFRLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUN2QyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLE9BQU8seUJBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsNEVBQTRFO0lBQzVFLDRFQUE0RTtJQUM1RSxtREFBbUQ7SUFDbkQsT0FBTyw0QkFBZ0IsQ0FBQztBQUMxQixDQUFDO0FBMUJELHdDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNIQTI1Nl9IRUFERVIsIFVOU0lHTkVEX1BBWUxPQUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEhhc2hDb25zdHJ1Y3RvciwgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IGlzQXJyYXlCdWZmZXIgfSBmcm9tIFwiQGF3cy1zZGsvaXMtYXJyYXktYnVmZmVyXCI7XG5pbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bG9hZEhhc2goXG4gIHsgaGVhZGVycywgYm9keSB9OiBIdHRwUmVxdWVzdDxhbnk+LFxuICBoYXNoQ29uc3RydWN0b3I6IEhhc2hDb25zdHJ1Y3RvclxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7XG4gICAgaWYgKGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKSA9PT0gU0hBMjU2X0hFQURFUikge1xuICAgICAgcmV0dXJuIGhlYWRlcnNbaGVhZGVyTmFtZV07XG4gICAgfVxuICB9XG5cbiAgaWYgKGJvZHkgPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFwiZTNiMGM0NDI5OGZjMWMxNDlhZmJmNGM4OTk2ZmI5MjQyN2FlNDFlNDY0OWI5MzRjYTQ5NTk5MWI3ODUyYjg1NVwiO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiIHx8XG4gICAgQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpIHx8XG4gICAgaXNBcnJheUJ1ZmZlcihib2R5KVxuICApIHtcbiAgICBjb25zdCBoYXNoQ3RvciA9IG5ldyBoYXNoQ29uc3RydWN0b3IoKTtcbiAgICBoYXNoQ3Rvci51cGRhdGUoYm9keSk7XG4gICAgcmV0dXJuIHRvSGV4KGF3YWl0IGhhc2hDdG9yLmRpZ2VzdCgpKTtcbiAgfVxuXG4gIC8vIEFzIGFueSBkZWZpbmVkIGJvZHkgdGhhdCBpcyBub3QgYSBzdHJpbmcgb3IgYmluYXJ5IGRhdGEgaXMgYSBzdHJlYW0sIHRoaXNcbiAgLy8gYm9keSBpcyB1bnNpZ25hYmxlLiBBdHRlbXB0IHRvIHNlbmQgdGhlIHJlcXVlc3Qgd2l0aCBhbiB1bnNpZ25lZCBwYXlsb2FkLFxuICAvLyB3aGljaCBtYXkgb3IgbWF5IG5vdCBiZSBhY2NlcHRlZCBieSB0aGUgc2VydmljZS5cbiAgcmV0dXJuIFVOU0lHTkVEX1BBWUxPQUQ7XG59XG4iXX0=

/***/ }),

/***/ 72:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __aws_sdk_middleware_stack = __webpack_require__(475);
const AssumeRoleWithSAML_1 = __webpack_require__(619);
class AssumeRoleWithSAMLCommand {
    constructor(input) {
        this.input = input;
        this.model = AssumeRoleWithSAML_1.AssumeRoleWithSAML;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: this.model
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}
exports.AssumeRoleWithSAMLCommand = AssumeRoleWithSAMLCommand;
//# sourceMappingURL=AssumeRoleWithSAMLCommand.js.map

/***/ }),

/***/ 73:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __aws_sdk_middleware_stack = __webpack_require__(475);
const GetSessionToken_1 = __webpack_require__(612);
class GetSessionTokenCommand {
    constructor(input) {
        this.input = input;
        this.model = GetSessionToken_1.GetSessionToken;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: this.model
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}
exports.GetSessionTokenCommand = GetSessionTokenCommand;
//# sourceMappingURL=GetSessionTokenCommand.js.map

/***/ }),

/***/ 76:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var property_provider_1 = __webpack_require__(855);
var protocol_timestamp_1 = __webpack_require__(557);
exports.ENV_KEY = "AWS_ACCESS_KEY_ID";
exports.ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
exports.ENV_SESSION = "AWS_SESSION_TOKEN";
exports.ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
/**
 * Source AWS credentials from known environment variables. If either the
 * `AWS_ACCESS_KEY_ID` or `AWS_SECRET_ACCESS_KEY` environment variable is not
 * set in this process, the provider will return a rejected promise.
 */
function fromEnv() {
    return function () {
        var accessKeyId = process.env[exports.ENV_KEY];
        var secretAccessKey = process.env[exports.ENV_SECRET];
        var expiry = process.env[exports.ENV_EXPIRATION];
        if (accessKeyId && secretAccessKey) {
            return Promise.resolve({
                accessKeyId: accessKeyId,
                secretAccessKey: secretAccessKey,
                sessionToken: process.env[exports.ENV_SESSION],
                expiration: expiry ? protocol_timestamp_1.epoch(expiry) : undefined
            });
        }
        return Promise.reject(new property_provider_1.ProviderError("Unable to find environment variable credentials."));
    };
}
exports.fromEnv = fromEnv;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 78:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function setSocketTimeout(request, reject, timeoutInMs) {
    if (timeoutInMs === void 0) { timeoutInMs = 0; }
    request.setTimeout(timeoutInMs, function () {
        // abort the request to destroy it
        this.abort();
        var timeoutError = new Error("Connection timed out after " + timeoutInMs + " ms");
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
    });
}
exports.setSocketTimeout = setSocketTimeout;
//# sourceMappingURL=set-socket-timeout.js.map

/***/ }),

/***/ 82:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(413);
function isClockSkewError(error) {
    return error.name in constants_1.CLOCK_SKEW_ERROR_CODES;
}
exports.isClockSkewError = isClockSkewError;
function isStillProcessingError(error) {
    return error.name in constants_1.STILL_PROCESSING_ERROR_CODES;
}
exports.isStillProcessingError = isStillProcessingError;
function isThrottlingError(error) {
    return error.name in constants_1.THROTTLING_ERROR_CODES;
}
exports.isThrottlingError = isThrottlingError;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 85:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
function headerDefault(headerBag) {
    return function (next) {
        return function (args) {
            var e_1, _a;
            var headers = tslib_1.__assign({}, args.request.headers);
            try {
                for (var _b = tslib_1.__values(Object.keys(headerBag)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name = _c.value;
                    if (!(name in headers)) {
                        headers[name] = headerBag[name];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return next(tslib_1.__assign({}, args, { request: tslib_1.__assign({}, args.request, { headers: headers }) }));
        };
    };
}
exports.headerDefault = headerDefault;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 87:
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 89:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isArrayBuffer(arg) {
    return ((typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
        Object.prototype.toString.call(arg) === "[object ArrayBuffer]");
}
exports.isArrayBuffer = isArrayBuffer;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 95:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var escape_uri_1 = __webpack_require__(105);
function escapeUriPath(uri) {
    var e_1, _a;
    var parts = [];
    try {
        for (var _b = tslib_1.__values(uri.split("/")), _c = _b.next(); !_c.done; _c = _b.next()) {
            var sub = _c.value;
            parts.push(escape_uri_1.escapeUri(sub));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return parts.join("/");
}
exports.escapeUriPath = escapeUriPath;
//# sourceMappingURL=escape-uri-path.js.map

/***/ }),

/***/ 104:
/***/ (function(__unusedmodule, __unusedexports, __webpack_require__) {

const core = __webpack_require__(470);
const { STSClient, AssumeRoleCommand } = __webpack_require__(283);

async function run() {
  const region = core.getInput('region');
  const RoleArn = core.getInput('role_arn');
  const RoleSessionName = core.getInput('role_session_name');
  const DurationSeconds = core.getInput('duration_seconds');

  let clientParams = {};
  let cmd = `aws`;
  if (region) {
    clientParams = { ...clientParams, region };
    cmd += ` --region ${region}`;
  }

  let assumeRoleParams = { RoleArn, RoleSessionName };
  cmd += ` sts assume-role --role-arn ${RoleArn} --role-session-name ${RoleSessionName}`;
  if (DurationSeconds) {
    assumeRoleParams = { ...assumeRoleParams, DurationSeconds };
    cmd += ` --duration-seconds ${DurationSeconds}`;
  }

  try {
    const client = new STSClient(clientParams);
    const command = new AssumeRoleCommand(assumeRoleParams);
    const result = await client.send(command);
    console.log(`[command]${cmd}`);
    console.log(`::add-mask::${result.Credentials.AccessKeyId}`);
    console.log(`::add-mask::${result.Credentials.SecretAccessKey}`);
    console.log(`::add-mask::${result.Credentials.SessionToken}`);
    console.log(`::set-env name=AWS_ACCESS_KEY_ID::${result.Credentials.AccessKeyId}`);
    console.log(`::set-env name=AWS_SECRET_ACCESS_KEY::${result.Credentials.SecretAccessKey}`);
    console.log(`::set-env name=AWS_SESSION_TOKEN::${result.Credentials.SessionToken}`);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();


/***/ }),

/***/ 105:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function escapeUri(uri) {
    var output = encodeURIComponent(uri);
    // AWS percent-encodes some extra non-standard characters in a URI
    output = output.replace(/[!'()*]/g, hexEncode);
    return output;
}
exports.escapeUri = escapeUri;
function hexEncode(c) {
    return "%" + c
        .charCodeAt(0)
        .toString(16)
        .toUpperCase();
}
//# sourceMappingURL=escape-uri.js.map

/***/ }),

/***/ 115:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var constants_1 = __webpack_require__(763);
var delayDecider_1 = __webpack_require__(723);
var retryDecider_1 = __webpack_require__(630);
var service_error_classification_1 = __webpack_require__(82);
function retryMiddleware(maxRetries, retryDecider, delayDecider) {
    if (retryDecider === void 0) { retryDecider = retryDecider_1.defaultRetryDecider(); }
    if (delayDecider === void 0) { delayDecider = delayDecider_1.defaultDelayDecider; }
    return function (next) {
        return function retry(args) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var retries, totalDelay, _loop_1, state_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            retries = 0;
                            totalDelay = 0;
                            _loop_1 = function () {
                                var result, err_1, delay_1;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 5]);
                                            return [4 /*yield*/, next(args)];
                                        case 1:
                                            result = _a.sent();
                                            result.$metadata.retries = retries;
                                            result.$metadata.totalRetryDelay = totalDelay;
                                            return [2 /*return*/, { value: result }];
                                        case 2:
                                            err_1 = _a.sent();
                                            if (!(retries < maxRetries && retryDecider(err_1))) return [3 /*break*/, 4];
                                            delay_1 = delayDecider(service_error_classification_1.isThrottlingError(err_1)
                                                ? constants_1.THROTTLING_RETRY_DELAY_BASE
                                                : constants_1.DEFAULT_RETRY_DELAY_BASE, retries++);
                                            totalDelay += delay_1;
                                            return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, delay_1); })];
                                        case 3:
                                            _a.sent();
                                            return [2 /*return*/, "continue"];
                                        case 4:
                                            if (!err_1.$metadata) {
                                                err_1.$metadata = {};
                                            }
                                            err_1.$metadata.retries = retries;
                                            err_1.$metadata.totalRetryDelay = totalDelay;
                                            throw err_1;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            };
                            _a.label = 1;
                        case 1:
                            if (false) {}
                            return [5 /*yield**/, _loop_1()];
                        case 2:
                            state_1 = _a.sent();
                            if (typeof state_1 === "object")
                                return [2 /*return*/, state_1.value];
                            return [3 /*break*/, 1];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
    };
}
exports.retryMiddleware = retryMiddleware;
//# sourceMappingURL=retryMiddleware.js.map

/***/ }),

/***/ 116:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _Credentials_1 = __webpack_require__(799);
const _AssumedRoleUser_1 = __webpack_require__(330);
exports.AssumeRoleWithWebIdentityOutput = {
    type: "structure",
    required: [],
    members: {
        Credentials: {
            shape: _Credentials_1._Credentials
        },
        SubjectFromWebIdentityToken: {
            shape: {
                type: "string",
                min: 6
            }
        },
        AssumedRoleUser: {
            shape: _AssumedRoleUser_1._AssumedRoleUser
        },
        PackedPolicySize: {
            shape: {
                type: "integer"
            }
        },
        Provider: {
            shape: {
                type: "string"
            }
        },
        Audience: {
            shape: {
                type: "string"
            }
        }
    }
};
//# sourceMappingURL=AssumeRoleWithWebIdentityOutput.js.map

/***/ }),

/***/ 123:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(909);
/**
 * @internal
 */
function getCanonicalQuery({ query = {} }) {
    const keys = [];
    const serialized = {};
    for (let key of Object.keys(query).sort()) {
        if (key.toLowerCase() === constants_1.SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .sort()
                .reduce((encoded, value) => encoded.concat([
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
            ]), [])
                .join("&");
        }
    }
    return keys
        .map(key => serialized[key])
        .filter(serialized => serialized) // omit any falsy values
        .join("&");
}
exports.getCanonicalQuery = getCanonicalQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q2Fub25pY2FsUXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0Q2Fub25pY2FsUXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBK0M7QUFHL0M7O0dBRUc7QUFDSCxTQUFnQixpQkFBaUIsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQW9CO0lBQ2hFLE1BQU0sSUFBSSxHQUFrQixFQUFFLENBQUM7SUFDL0IsTUFBTSxVQUFVLEdBQThCLEVBQUUsQ0FBQztJQUNqRCxLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDekMsSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssNEJBQWdCLEVBQUU7WUFDMUMsU0FBUztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxrQkFBa0IsQ0FDaEUsS0FBSyxDQUNOLEVBQUUsQ0FBQztTQUNMO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9CLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLO2lCQUNwQixLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUNSLElBQUksRUFBRTtpQkFDTixNQUFNLENBQ0wsQ0FBQyxPQUFzQixFQUFFLEtBQWEsRUFBRSxFQUFFLENBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ2IsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBRTthQUMxRCxDQUFDLEVBQ0osRUFBRSxDQUNIO2lCQUNBLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLElBQUk7U0FDUixHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsd0JBQXdCO1NBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUM7QUFqQ0QsOENBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0lHTkFUVVJFX0hFQURFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhbm9uaWNhbFF1ZXJ5KHsgcXVlcnkgPSB7fSB9OiBIdHRwUmVxdWVzdDxhbnk+KTogc3RyaW5nIHtcbiAgY29uc3Qga2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBjb25zdCBzZXJpYWxpemVkOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkuc29ydCgpKSB7XG4gICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSBTSUdOQVRVUkVfSEVBREVSKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2goa2V5KTtcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W2tleV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICB2YWx1ZVxuICAgICAgKX1gO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHZhbHVlXG4gICAgICAgIC5zbGljZSgwKVxuICAgICAgICAuc29ydCgpXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgKGVuY29kZWQ6IEFycmF5PHN0cmluZz4sIHZhbHVlOiBzdHJpbmcpID0+XG4gICAgICAgICAgICBlbmNvZGVkLmNvbmNhdChbXG4gICAgICAgICAgICAgIGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSl9YFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgW11cbiAgICAgICAgKVxuICAgICAgICAuam9pbihcIiZcIik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGtleXNcbiAgICAubWFwKGtleSA9PiBzZXJpYWxpemVkW2tleV0pXG4gICAgLmZpbHRlcihzZXJpYWxpemVkID0+IHNlcmlhbGl6ZWQpIC8vIG9taXQgYW55IGZhbHN5IHZhbHVlc1xuICAgIC5qb2luKFwiJlwiKTtcbn1cbiJdfQ==

/***/ }),

/***/ 129:
/***/ (function(module) {

module.exports = require("child_process");

/***/ }),

/***/ 135:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var util_uri_escape_1 = __webpack_require__(515);
function buildQueryString(query) {
    var e_1, _a;
    var parts = [];
    try {
        for (var _b = tslib_1.__values(Object.keys(query).sort()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = query[key];
            key = util_uri_escape_1.escapeUri(key);
            if (Array.isArray(value)) {
                for (var i = 0, iLen = value.length; i < iLen; i++) {
                    parts.push(key + "=" + util_uri_escape_1.escapeUri(value[i]));
                }
            }
            else {
                var qsEntry = key;
                if (value || typeof value === "string") {
                    qsEntry += "=" + util_uri_escape_1.escapeUri(value);
                }
                parts.push(qsEntry);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return parts.join("&");
}
exports.buildQueryString = buildQueryString;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 143:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MalformedPolicyDocumentException = {
    type: "structure",
    required: [],
    members: {
        message: {
            shape: {
                type: "string"
            }
        }
    },
    exceptionType: "MalformedPolicyDocumentException",
    exceptionCode: "MalformedPolicyDocument"
};
//# sourceMappingURL=MalformedPolicyDocumentException.js.map

/***/ }),

/***/ 144:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cloneRequest_1 = __webpack_require__(379);
/**
 * @internal
 */
function moveHeadersToQuery(request) {
    const { headers, query = {} } = cloneRequest_1.cloneRequest(request);
    for (let name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.substr(0, 6) === "x-amz-") {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return Object.assign({}, request, { headers,
        query });
}
exports.moveHeadersToQuery = moveHeadersToQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZUhlYWRlcnNUb1F1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vdmVIZWFkZXJzVG9RdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUE4QztBQUc5Qzs7R0FFRztBQUNILFNBQWdCLGtCQUFrQixDQUNoQyxPQUFnQztJQUVoQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssR0FBRyxFQUF1QixFQUFFLEdBQUcsMkJBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRSxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7S0FDRjtJQUVELHlCQUNLLE9BQU8sSUFDVixPQUFPO1FBQ1AsS0FBSyxJQUNMO0FBQ0osQ0FBQztBQWpCRCxnREFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZVJlcXVlc3QgfSBmcm9tIFwiLi9jbG9uZVJlcXVlc3RcIjtcbmltcG9ydCB7IEh0dHBSZXF1ZXN0LCBRdWVyeVBhcmFtZXRlckJhZyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gbW92ZUhlYWRlcnNUb1F1ZXJ5PFN0cmVhbVR5cGU+KFxuICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxTdHJlYW1UeXBlPlxuKTogSHR0cFJlcXVlc3Q8U3RyZWFtVHlwZT4gJiB7IHF1ZXJ5OiBRdWVyeVBhcmFtZXRlckJhZyB9IHtcbiAgY29uc3QgeyBoZWFkZXJzLCBxdWVyeSA9IHt9IGFzIFF1ZXJ5UGFyYW1ldGVyQmFnIH0gPSBjbG9uZVJlcXVlc3QocmVxdWVzdCk7XG4gIGZvciAobGV0IG5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICBjb25zdCBsbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG5hbWUuc3Vic3RyKDAsIDYpID09PSBcIngtYW16LVwiKSB7XG4gICAgICBxdWVyeVtuYW1lXSA9IGhlYWRlcnNbbmFtZV07XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnJlcXVlc3QsXG4gICAgaGVhZGVycyxcbiAgICBxdWVyeVxuICB9O1xufVxuIl19

/***/ }),

/***/ 145:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function setConnectionTimeout(request, reject, timeoutInMs) {
    if (timeoutInMs === void 0) { timeoutInMs = 0; }
    if (!timeoutInMs) {
        return;
    }
    request.on("socket", function (socket) {
        var _this = this;
        if (socket.connecting) {
            // Throw a connecting timeout error unless a connection is made within x time
            var timeoutId_1 = setTimeout(function () {
                // abort the request to destroy it
                _this.abort();
                var timeoutError = new Error("Socket timed out without establishing a connection within " + timeoutInMs + " ms");
                timeoutError.name = "TimeoutError";
                reject(timeoutError);
            }, timeoutInMs);
            // if the connection was established, cancel the timeout
            socket.on("connect", function () {
                clearTimeout(timeoutId_1);
            });
        }
    });
}
exports.setConnectionTimeout = setConnectionTimeout;
//# sourceMappingURL=set-connection-timeout.js.map

/***/ }),

/***/ 154:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
const credentialDerivation_1 = __webpack_require__(392);
const getCanonicalHeaders_1 = __webpack_require__(841);
const getCanonicalQuery_1 = __webpack_require__(123);
const getPayloadHash_1 = __webpack_require__(69);
const prepareRequest_1 = __webpack_require__(793);
const moveHeadersToQuery_1 = __webpack_require__(144);
const constants_1 = __webpack_require__(909);
const protocol_timestamp_1 = __webpack_require__(557);
const util_hex_encoding_1 = __webpack_require__(853);
const hasHeader_1 = __webpack_require__(393);
class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        // default to true if applyChecksum isn't set
        this.applyChecksum =
            typeof applyChecksum === "boolean" ? applyChecksum : true;
        if (typeof region === "string") {
            const promisified = Promise.resolve(region);
            this.regionProvider = () => promisified;
        }
        else {
            this.regionProvider = region;
        }
        if (typeof credentials === "object") {
            const promisified = Promise.resolve(credentials);
            this.credentialProvider = () => promisified;
        }
        else {
            this.credentialProvider = credentials;
        }
    }
    async presignRequest(originalRequest, expiration, options = {}) {
        const [region, credentials] = await Promise.all([
            this.regionProvider(),
            this.credentialProvider()
        ]);
        const { signingDate = new Date(), unsignableHeaders, signableHeaders } = options;
        const { longDate, shortDate } = formatDate(signingDate);
        const ttl = getTtl(signingDate, expiration);
        if (ttl > constants_1.MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" +
                " must have an expiration date less than one week in" +
                " the future");
        }
        const scope = credentialDerivation_1.createScope(shortDate, region, this.service);
        const request = moveHeadersToQuery_1.moveHeadersToQuery(prepareRequest_1.prepareRequest(originalRequest));
        if (credentials.sessionToken) {
            request.query[constants_1.TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[constants_1.ALGORITHM_QUERY_PARAM] = constants_1.ALGORITHM_IDENTIFIER;
        request.query[constants_1.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[constants_1.AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[constants_1.EXPIRES_QUERY_PARAM] = ttl.toString(10);
        const canonicalHeaders = getCanonicalHeaders_1.getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[constants_1.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[constants_1.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash_1.getPayloadHash(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, _a = {}) {
        var { signingDate = new Date() } = _a, options = tslib_1.__rest(_a, ["signingDate"]);
        const [region, credentials] = await Promise.all([
            this.regionProvider(),
            this.credentialProvider()
        ]);
        if (typeof toSign === "string") {
            return this.signString(toSign, signingDate, region, credentials);
        }
        else {
            const { unsignableHeaders, signableHeaders } = options;
            return this.signRequest(toSign, signingDate, region, credentials, unsignableHeaders, signableHeaders);
        }
    }
    async signString(stringToSign, signingDate, region, credentials) {
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate));
        hash.update(stringToSign);
        return util_hex_encoding_1.toHex(await hash.digest());
    }
    async signRequest(originalRequest, signingDate, region, credentials, unsignableHeaders, signableHeaders) {
        const request = prepareRequest_1.prepareRequest(originalRequest);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = credentialDerivation_1.createScope(shortDate, region, this.service);
        request.headers[constants_1.AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[constants_1.TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash_1.getPayloadHash(request, this.sha256);
        if (!hasHeader_1.hasHeader(constants_1.SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[constants_1.SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders_1.getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[constants_1.AUTH_HEADER] =
            `${constants_1.ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery_1.getCanonicalQuery(request)}
${sortedHeaders.map(name => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update(canonicalRequest);
        const hashedRequest = await hash.digest();
        return `${constants_1.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${util_hex_encoding_1.toHex(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const doubleEncoded = encodeURIComponent(path.replace(/^\//, ""));
            return `/${doubleEncoded.replace(/%2F/g, "/")}`;
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update(stringToSign);
        return util_hex_encoding_1.toHex(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate) {
        return credentialDerivation_1.getSigningKey(this.sha256, credentials, shortDate, region, this.service);
    }
}
exports.SignatureV4 = SignatureV4;
function formatDate(now) {
    const longDate = protocol_timestamp_1.iso8601(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.substr(0, 8)
    };
}
function getCanonicalHeaderList(headers) {
    return Object.keys(headers)
        .sort()
        .join(";");
}
function getTtl(start, expiration) {
    return Math.floor((protocol_timestamp_1.toDate(expiration).valueOf() - protocol_timestamp_1.toDate(start).valueOf()) / 1000);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnbmF0dXJlVjQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvU2lnbmF0dXJlVjQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUVBQW9FO0FBQ3BFLCtEQUE0RDtBQUM1RCwyREFBd0Q7QUFDeEQscURBQWtEO0FBQ2xELHFEQUFrRDtBQUNsRCw2REFBMEQ7QUFDMUQsMkNBY3FCO0FBY3JCLG9FQUE4RDtBQUM5RCxrRUFBbUQ7QUFDbkQsMkNBQXdDO0FBa0R4QyxNQUFhLFdBQVc7SUFTdEIsWUFBWSxFQUNWLGFBQWEsRUFDYixXQUFXLEVBQ1gsTUFBTSxFQUNOLE9BQU8sRUFDUCxNQUFNLEVBQ04sYUFBYSxHQUFHLElBQUksRUFDb0I7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsNkNBQTZDO1FBQzdDLElBQUksQ0FBQyxhQUFhO1lBQ2hCLE9BQU8sYUFBYSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFNUQsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDOUIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztTQUN6QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7U0FDOUI7UUFFRCxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRTtZQUNuQyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7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Q0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FDaEUsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTY29wZSwgZ2V0U2lnbmluZ0tleSB9IGZyb20gXCIuL2NyZWRlbnRpYWxEZXJpdmF0aW9uXCI7XG5pbXBvcnQgeyBnZXRDYW5vbmljYWxIZWFkZXJzIH0gZnJvbSBcIi4vZ2V0Q2Fub25pY2FsSGVhZGVyc1wiO1xuaW1wb3J0IHsgZ2V0Q2Fub25pY2FsUXVlcnkgfSBmcm9tIFwiLi9nZXRDYW5vbmljYWxRdWVyeVwiO1xuaW1wb3J0IHsgZ2V0UGF5bG9hZEhhc2ggfSBmcm9tIFwiLi9nZXRQYXlsb2FkSGFzaFwiO1xuaW1wb3J0IHsgcHJlcGFyZVJlcXVlc3QgfSBmcm9tIFwiLi9wcmVwYXJlUmVxdWVzdFwiO1xuaW1wb3J0IHsgbW92ZUhlYWRlcnNUb1F1ZXJ5IH0gZnJvbSBcIi4vbW92ZUhlYWRlcnNUb1F1ZXJ5XCI7XG5pbXBvcnQge1xuICBBTEdPUklUSE1fSURFTlRJRklFUixcbiAgQUxHT1JJVEhNX1FVRVJZX1BBUkFNLFxuICBBTVpfREFURV9IRUFERVIsXG4gIEFNWl9EQVRFX1FVRVJZX1BBUkFNLFxuICBBVVRIX0hFQURFUixcbiAgQ1JFREVOVElBTF9RVUVSWV9QQVJBTSxcbiAgRVhQSVJFU19RVUVSWV9QQVJBTSxcbiAgTUFYX1BSRVNJR05FRF9UVEwsXG4gIFNIQTI1Nl9IRUFERVIsXG4gIFNJR05BVFVSRV9RVUVSWV9QQVJBTSxcbiAgU0lHTkVEX0hFQURFUlNfUVVFUllfUEFSQU0sXG4gIFRPS0VOX0hFQURFUixcbiAgVE9LRU5fUVVFUllfUEFSQU1cbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICBDcmVkZW50aWFscyxcbiAgRGF0ZUlucHV0LFxuICBIYXNoQ29uc3RydWN0b3IsXG4gIEhlYWRlckJhZyxcbiAgSHR0cFJlcXVlc3QsXG4gIFByb3ZpZGVyLFxuICBSZXF1ZXN0UHJlc2lnbmVyLFxuICBSZXF1ZXN0U2lnbmVyLFxuICBSZXF1ZXN0U2lnbmluZ0FyZ3VtZW50cyxcbiAgU2lnbmluZ0FyZ3VtZW50cyxcbiAgU3RyaW5nU2lnbmVyXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgaXNvODYwMSwgdG9EYXRlIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLXRpbWVzdGFtcFwiO1xuaW1wb3J0IHsgdG9IZXggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmdcIjtcbmltcG9ydCB7IGhhc0hlYWRlciB9IGZyb20gXCIuL2hhc0hlYWRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hdHVyZVY0SW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgc2VydmljZSBzaWduaW5nIG5hbWUuXG4gICAqL1xuICBzZXJ2aWNlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSByZWdpb24gbmFtZSBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlXG4gICAqIHJlc29sdmVkIHdpdGggdGhlIHJlZ2lvbiBuYW1lLlxuICAgKi9cbiAgcmVnaW9uOiBzdHJpbmcgfCBQcm92aWRlcjxzdHJpbmc+O1xuXG4gIC8qKlxuICAgKiBUaGUgY3JlZGVudGlhbHMgd2l0aCB3aGljaCB0aGUgcmVxdWVzdCBzaG91bGQgYmUgc2lnbmVkIG9yIGEgZnVuY3Rpb25cbiAgICogdGhhdCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmUgcmVzb2x2ZWQgd2l0aCBjcmVkZW50aWFscy5cbiAgICovXG4gIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyB8IFByb3ZpZGVyPENyZWRlbnRpYWxzPjtcblxuICAvKipcbiAgICogQSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBmb3IgYSBoYXNoIG9iamVjdCB0aGF0IHdpbGwgY2FsY3VsYXRlIFNIQS0yNTYgSE1BQ1xuICAgKiBjaGVja3N1bXMuXG4gICAqL1xuICBzaGEyNTY/OiBIYXNoQ29uc3RydWN0b3I7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gdXJpLWVzY2FwZSB0aGUgcmVxdWVzdCBVUkkgcGF0aCBhcyBwYXJ0IG9mIGNvbXB1dGluZyB0aGVcbiAgICogY2Fub25pY2FsIHJlcXVlc3Qgc3RyaW5nLiBUaGlzIGlzIHJlcXVpcmVkIGZvciBldmVyeSBBV1Mgc2VydmljZSwgZXhjZXB0XG4gICAqIEFtYXpvbiBTMywgYXMgb2YgbGF0ZSAyMDE3LlxuICAgKlxuICAgKiBAZGVmYXVsdCBbdHJ1ZV1cbiAgICovXG4gIHVyaUVzY2FwZVBhdGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGNhbGN1bGF0ZSBhIGNoZWNrc3VtIG9mIHRoZSByZXF1ZXN0IGJvZHkgYW5kIGluY2x1ZGUgaXQgYXNcbiAgICogZWl0aGVyIGEgcmVxdWVzdCBoZWFkZXIgKHdoZW4gc2lnbmluZykgb3IgYXMgYSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyXG4gICAqICh3aGVuIHByZXNpZ25pbmcpLiBUaGlzIGlzIHJlcXVpcmVkIGZvciBBV1MgR2xhY2llciBhbmQgQW1hem9uIFMzIGFuZCBvcHRpb25hbCBmb3JcbiAgICogZXZlcnkgb3RoZXIgQVdTIHNlcnZpY2UgYXMgb2YgbGF0ZSAyMDE3LlxuICAgKlxuICAgKiBAZGVmYXVsdCBbdHJ1ZV1cbiAgICovXG4gIGFwcGx5Q2hlY2tzdW0/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25hdHVyZVY0Q3J5cHRvSW5pdCB7XG4gIHNoYTI1NjogSGFzaENvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlVjRcbiAgaW1wbGVtZW50cyBSZXF1ZXN0UHJlc2lnbmVyLCBSZXF1ZXN0U2lnbmVyLCBTdHJpbmdTaWduZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHNlcnZpY2U6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSByZWdpb25Qcm92aWRlcjogUHJvdmlkZXI8c3RyaW5nPjtcbiAgcHJpdmF0ZSByZWFkb25seSBjcmVkZW50aWFsUHJvdmlkZXI6IFByb3ZpZGVyPENyZWRlbnRpYWxzPjtcbiAgcHJpdmF0ZSByZWFkb25seSBzaGEyNTY6IEhhc2hDb25zdHJ1Y3RvcjtcbiAgcHJpdmF0ZSByZWFkb25seSB1cmlFc2NhcGVQYXRoOiBib29sZWFuO1xuICBwcml2YXRlIHJlYWRvbmx5IGFwcGx5Q2hlY2tzdW06IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGFwcGx5Q2hlY2tzdW0sXG4gICAgY3JlZGVudGlhbHMsXG4gICAgcmVnaW9uLFxuICAgIHNlcnZpY2UsXG4gICAgc2hhMjU2LFxuICAgIHVyaUVzY2FwZVBhdGggPSB0cnVlXG4gIH06IFNpZ25hdHVyZVY0SW5pdCAmIFNpZ25hdHVyZVY0Q3J5cHRvSW5pdCkge1xuICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgdGhpcy5zaGEyNTYgPSBzaGEyNTY7XG4gICAgdGhpcy51cmlFc2NhcGVQYXRoID0gdXJpRXNjYXBlUGF0aDtcbiAgICAvLyBkZWZhdWx0IHRvIHRydWUgaWYgYXBwbHlDaGVja3N1bSBpc24ndCBzZXRcbiAgICB0aGlzLmFwcGx5Q2hlY2tzdW0gPVxuICAgICAgdHlwZW9mIGFwcGx5Q2hlY2tzdW0gPT09IFwiYm9vbGVhblwiID8gYXBwbHlDaGVja3N1bSA6IHRydWU7XG5cbiAgICBpZiAodHlwZW9mIHJlZ2lvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgcHJvbWlzaWZpZWQgPSBQcm9taXNlLnJlc29sdmUocmVnaW9uKTtcbiAgICAgIHRoaXMucmVnaW9uUHJvdmlkZXIgPSAoKSA9PiBwcm9taXNpZmllZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWdpb25Qcm92aWRlciA9IHJlZ2lvbjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNyZWRlbnRpYWxzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBjb25zdCBwcm9taXNpZmllZCA9IFByb21pc2UucmVzb2x2ZShjcmVkZW50aWFscyk7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxQcm92aWRlciA9ICgpID0+IHByb21pc2lmaWVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxQcm92aWRlciA9IGNyZWRlbnRpYWxzO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwcmVzaWduUmVxdWVzdDxTdHJlYW1UeXBlPihcbiAgICBvcmlnaW5hbFJlcXVlc3Q6IEh0dHBSZXF1ZXN0PFN0cmVhbVR5cGU+LFxuICAgIGV4cGlyYXRpb246IERhdGVJbnB1dCxcbiAgICBvcHRpb25zOiBSZXF1ZXN0U2lnbmluZ0FyZ3VtZW50cyA9IHt9XG4gICk6IFByb21pc2U8SHR0cFJlcXVlc3Q8U3RyZWFtVHlwZT4+IHtcbiAgICBjb25zdCBbcmVnaW9uLCBjcmVkZW50aWFsc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnJlZ2lvblByb3ZpZGVyKCksXG4gICAgICB0aGlzLmNyZWRlbnRpYWxQcm92aWRlcigpXG4gICAgXSk7XG5cbiAgICBjb25zdCB7XG4gICAgICBzaWduaW5nRGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICB1bnNpZ25hYmxlSGVhZGVycyxcbiAgICAgIHNpZ25hYmxlSGVhZGVyc1xuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgY29uc3QgeyBsb25nRGF0ZSwgc2hvcnREYXRlIH0gPSBmb3JtYXREYXRlKHNpZ25pbmdEYXRlKTtcbiAgICBjb25zdCB0dGwgPSBnZXRUdGwoc2lnbmluZ0RhdGUsIGV4cGlyYXRpb24pO1xuICAgIGlmICh0dGwgPiBNQVhfUFJFU0lHTkVEX1RUTCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICBcIlNpZ25hdHVyZSB2ZXJzaW9uIDQgcHJlc2lnbmVkIFVSTHNcIiArXG4gICAgICAgICAgXCIgbXVzdCBoYXZlIGFuIGV4cGlyYXRpb24gZGF0ZSBsZXNzIHRoYW4gb25lIHdlZWsgaW5cIiArXG4gICAgICAgICAgXCIgdGhlIGZ1dHVyZVwiXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHNjb3BlID0gY3JlYXRlU2NvcGUoc2hvcnREYXRlLCByZWdpb24sIHRoaXMuc2VydmljZSk7XG4gICAgY29uc3QgcmVxdWVzdCA9IG1vdmVIZWFkZXJzVG9RdWVyeShwcmVwYXJlUmVxdWVzdChvcmlnaW5hbFJlcXVlc3QpKTtcblxuICAgIGlmIChjcmVkZW50aWFscy5zZXNzaW9uVG9rZW4pIHtcbiAgICAgIHJlcXVlc3QucXVlcnlbVE9LRU5fUVVFUllfUEFSQU1dID0gY3JlZGVudGlhbHMuc2Vzc2lvblRva2VuO1xuICAgIH1cbiAgICByZXF1ZXN0LnF1ZXJ5W0FMR09SSVRITV9RVUVSWV9QQVJBTV0gPSBBTEdPUklUSE1fSURFTlRJRklFUjtcbiAgICByZXF1ZXN0LnF1ZXJ5W1xuICAgICAgQ1JFREVOVElBTF9RVUVSWV9QQVJBTVxuICAgIF0gPSBgJHtjcmVkZW50aWFscy5hY2Nlc3NLZXlJZH0vJHtzY29wZX1gO1xuICAgIHJlcXVlc3QucXVlcnlbQU1aX0RBVEVfUVVFUllfUEFSQU1dID0gbG9uZ0RhdGU7XG4gICAgcmVxdWVzdC5xdWVyeVtFWFBJUkVTX1FVRVJZX1BBUkFNXSA9IHR0bC50b1N0cmluZygxMCk7XG5cbiAgICBjb25zdCBjYW5vbmljYWxIZWFkZXJzID0gZ2V0Q2Fub25pY2FsSGVhZGVycyhcbiAgICAgIHJlcXVlc3QsXG4gICAgICB1bnNpZ25hYmxlSGVhZGVycyxcbiAgICAgIHNpZ25hYmxlSGVhZGVyc1xuICAgICk7XG4gICAgcmVxdWVzdC5xdWVyeVtTSUdORURfSEVBREVSU19RVUVSWV9QQVJBTV0gPSBnZXRDYW5vbmljYWxIZWFkZXJMaXN0KFxuICAgICAgY2Fub25pY2FsSGVhZGVyc1xuICAgICk7XG5cbiAgICByZXF1ZXN0LnF1ZXJ5W1NJR05BVFVSRV9RVUVSWV9QQVJBTV0gPSBhd2FpdCB0aGlzLmdldFNpZ25hdHVyZShcbiAgICAgIGxvbmdEYXRlLFxuICAgICAgc2NvcGUsXG4gICAgICB0aGlzLmdldFNpZ25pbmdLZXkoY3JlZGVudGlhbHMsIHJlZ2lvbiwgc2hvcnREYXRlKSxcbiAgICAgIHRoaXMuY3JlYXRlQ2Fub25pY2FsUmVxdWVzdChcbiAgICAgICAgcmVxdWVzdCxcbiAgICAgICAgY2Fub25pY2FsSGVhZGVycyxcbiAgICAgICAgYXdhaXQgZ2V0UGF5bG9hZEhhc2gob3JpZ2luYWxSZXF1ZXN0LCB0aGlzLnNoYTI1NilcbiAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cblxuICBwdWJsaWMgc2lnbihcbiAgICBzdHJpbmdUb1NpZ246IHN0cmluZyxcbiAgICBvcHRpb25zPzogU2lnbmluZ0FyZ3VtZW50c1xuICApOiBQcm9taXNlPHN0cmluZz47XG4gIHB1YmxpYyBzaWduPFN0cmVhbVR5cGU+KFxuICAgIHJlcXVlc3RUb1NpZ246IEh0dHBSZXF1ZXN0PFN0cmVhbVR5cGU+LFxuICAgIG9wdGlvbnM/OiBSZXF1ZXN0U2lnbmluZ0FyZ3VtZW50c1xuICApOiBQcm9taXNlPEh0dHBSZXF1ZXN0PFN0cmVhbVR5cGU+PjtcbiAgcHVibGljIGFzeW5jIHNpZ248VCBleHRlbmRzIHN0cmluZyB8IEh0dHBSZXF1ZXN0PGFueT4+KFxuICAgIHRvU2lnbjogVCxcbiAgICB7XG4gICAgICBzaWduaW5nRGF0ZSA9IG5ldyBEYXRlKCksXG4gICAgICAuLi5vcHRpb25zXG4gICAgfTogUmVxdWVzdFNpZ25pbmdBcmd1bWVudHMgfCBTaWduaW5nQXJndW1lbnRzID0ge31cbiAgKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3QgW3JlZ2lvbiwgY3JlZGVudGlhbHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5yZWdpb25Qcm92aWRlcigpLFxuICAgICAgdGhpcy5jcmVkZW50aWFsUHJvdmlkZXIoKVxuICAgIF0pO1xuXG4gICAgaWYgKHR5cGVvZiB0b1NpZ24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNpZ25TdHJpbmcoXG4gICAgICAgIHRvU2lnbixcbiAgICAgICAgc2lnbmluZ0RhdGUsXG4gICAgICAgIHJlZ2lvbixcbiAgICAgICAgY3JlZGVudGlhbHNcbiAgICAgICkgYXMgUHJvbWlzZTxUPjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qge1xuICAgICAgICB1bnNpZ25hYmxlSGVhZGVycyxcbiAgICAgICAgc2lnbmFibGVIZWFkZXJzXG4gICAgICB9ID0gb3B0aW9ucyBhcyBSZXF1ZXN0U2lnbmluZ0FyZ3VtZW50cztcblxuICAgICAgcmV0dXJuIHRoaXMuc2lnblJlcXVlc3QoXG4gICAgICAgIHRvU2lnbiBhcyBIdHRwUmVxdWVzdDxhbnk+LFxuICAgICAgICBzaWduaW5nRGF0ZSxcbiAgICAgICAgcmVnaW9uLFxuICAgICAgICBjcmVkZW50aWFscyxcbiAgICAgICAgdW5zaWduYWJsZUhlYWRlcnMsXG4gICAgICAgIHNpZ25hYmxlSGVhZGVyc1xuICAgICAgKSBhcyBQcm9taXNlPFQ+O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2lnblN0cmluZyhcbiAgICBzdHJpbmdUb1NpZ246IHN0cmluZyxcbiAgICBzaWduaW5nRGF0ZTogRGF0ZUlucHV0LFxuICAgIHJlZ2lvbjogc3RyaW5nLFxuICAgIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFsc1xuICApOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHsgc2hvcnREYXRlIH0gPSBmb3JtYXREYXRlKHNpZ25pbmdEYXRlKTtcblxuICAgIGNvbnN0IGhhc2ggPSBuZXcgdGhpcy5zaGEyNTYoXG4gICAgICBhd2FpdCB0aGlzLmdldFNpZ25pbmdLZXkoY3JlZGVudGlhbHMsIHJlZ2lvbiwgc2hvcnREYXRlKVxuICAgICk7XG4gICAgaGFzaC51cGRhdGUoc3RyaW5nVG9TaWduKTtcbiAgICByZXR1cm4gdG9IZXgoYXdhaXQgaGFzaC5kaWdlc3QoKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNpZ25SZXF1ZXN0KFxuICAgIG9yaWdpbmFsUmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBzaWduaW5nRGF0ZTogRGF0ZUlucHV0LFxuICAgIHJlZ2lvbjogc3RyaW5nLFxuICAgIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyxcbiAgICB1bnNpZ25hYmxlSGVhZGVycz86IFNldDxzdHJpbmc+LFxuICAgIHNpZ25hYmxlSGVhZGVycz86IFNldDxzdHJpbmc+XG4gICk6IFByb21pc2U8SHR0cFJlcXVlc3Q8YW55Pj4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBwcmVwYXJlUmVxdWVzdChvcmlnaW5hbFJlcXVlc3QpO1xuICAgIGNvbnN0IHsgbG9uZ0RhdGUsIHNob3J0RGF0ZSB9ID0gZm9ybWF0RGF0ZShzaWduaW5nRGF0ZSk7XG4gICAgY29uc3Qgc2NvcGUgPSBjcmVhdGVTY29wZShzaG9ydERhdGUsIHJlZ2lvbiwgdGhpcy5zZXJ2aWNlKTtcblxuICAgIHJlcXVlc3QuaGVhZGVyc1tBTVpfREFURV9IRUFERVJdID0gbG9uZ0RhdGU7XG4gICAgaWYgKGNyZWRlbnRpYWxzLnNlc3Npb25Ub2tlbikge1xuICAgICAgcmVxdWVzdC5oZWFkZXJzW1RPS0VOX0hFQURFUl0gPSBjcmVkZW50aWFscy5zZXNzaW9uVG9rZW47XG4gICAgfVxuXG4gICAgY29uc3QgcGF5bG9hZEhhc2ggPSBhd2FpdCBnZXRQYXlsb2FkSGFzaChyZXF1ZXN0LCB0aGlzLnNoYTI1Nik7XG4gICAgaWYgKCFoYXNIZWFkZXIoU0hBMjU2X0hFQURFUiwgcmVxdWVzdC5oZWFkZXJzKSAmJiB0aGlzLmFwcGx5Q2hlY2tzdW0pIHtcbiAgICAgIHJlcXVlc3QuaGVhZGVyc1tTSEEyNTZfSEVBREVSXSA9IHBheWxvYWRIYXNoO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbm9uaWNhbEhlYWRlcnMgPSBnZXRDYW5vbmljYWxIZWFkZXJzKFxuICAgICAgcmVxdWVzdCxcbiAgICAgIHVuc2lnbmFibGVIZWFkZXJzLFxuICAgICAgc2lnbmFibGVIZWFkZXJzXG4gICAgKTtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCB0aGlzLmdldFNpZ25hdHVyZShcbiAgICAgIGxvbmdEYXRlLFxuICAgICAgc2NvcGUsXG4gICAgICB0aGlzLmdldFNpZ25pbmdLZXkoY3JlZGVudGlhbHMsIHJlZ2lvbiwgc2hvcnREYXRlKSxcbiAgICAgIHRoaXMuY3JlYXRlQ2Fub25pY2FsUmVxdWVzdChyZXF1ZXN0LCBjYW5vbmljYWxIZWFkZXJzLCBwYXlsb2FkSGFzaClcbiAgICApO1xuXG4gICAgcmVxdWVzdC5oZWFkZXJzW0FVVEhfSEVBREVSXSA9XG4gICAgICBgJHtBTEdPUklUSE1fSURFTlRJRklFUn0gYCArXG4gICAgICBgQ3JlZGVudGlhbD0ke2NyZWRlbnRpYWxzLmFjY2Vzc0tleUlkfS8ke3Njb3BlfSwgYCArXG4gICAgICBgU2lnbmVkSGVhZGVycz0ke2dldENhbm9uaWNhbEhlYWRlckxpc3QoY2Fub25pY2FsSGVhZGVycyl9LCBgICtcbiAgICAgIGBTaWduYXR1cmU9JHtzaWduYXR1cmV9YDtcblxuICAgIHJldHVybiByZXF1ZXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDYW5vbmljYWxSZXF1ZXN0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgY2Fub25pY2FsSGVhZGVyczogSGVhZGVyQmFnLFxuICAgIHBheWxvYWRIYXNoOiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBzb3J0ZWRIZWFkZXJzID0gT2JqZWN0LmtleXMoY2Fub25pY2FsSGVhZGVycykuc29ydCgpO1xuICAgIHJldHVybiBgJHtyZXF1ZXN0Lm1ldGhvZH1cbiR7dGhpcy5nZXRDYW5vbmljYWxQYXRoKHJlcXVlc3QpfVxuJHtnZXRDYW5vbmljYWxRdWVyeShyZXF1ZXN0KX1cbiR7c29ydGVkSGVhZGVycy5tYXAobmFtZSA9PiBgJHtuYW1lfToke2Nhbm9uaWNhbEhlYWRlcnNbbmFtZV19YCkuam9pbihcIlxcblwiKX1cblxuJHtzb3J0ZWRIZWFkZXJzLmpvaW4oXCI7XCIpfVxuJHtwYXlsb2FkSGFzaH1gO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGVTdHJpbmdUb1NpZ24oXG4gICAgbG9uZ0RhdGU6IHN0cmluZyxcbiAgICBjcmVkZW50aWFsU2NvcGU6IHN0cmluZyxcbiAgICBjYW5vbmljYWxSZXF1ZXN0OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBoYXNoID0gbmV3IHRoaXMuc2hhMjU2KCk7XG4gICAgaGFzaC51cGRhdGUoY2Fub25pY2FsUmVxdWVzdCk7XG4gICAgY29uc3QgaGFzaGVkUmVxdWVzdCA9IGF3YWl0IGhhc2guZGlnZXN0KCk7XG5cbiAgICByZXR1cm4gYCR7QUxHT1JJVEhNX0lERU5USUZJRVJ9XG4ke2xvbmdEYXRlfVxuJHtjcmVkZW50aWFsU2NvcGV9XG4ke3RvSGV4KGhhc2hlZFJlcXVlc3QpfWA7XG4gIH1cblxuICBwcml2YXRlIGdldENhbm9uaWNhbFBhdGgoeyBwYXRoIH06IEh0dHBSZXF1ZXN0PGFueT4pOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnVyaUVzY2FwZVBhdGgpIHtcbiAgICAgIGNvbnN0IGRvdWJsZUVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQocGF0aC5yZXBsYWNlKC9eXFwvLywgXCJcIikpO1xuICAgICAgcmV0dXJuIGAvJHtkb3VibGVFbmNvZGVkLnJlcGxhY2UoLyUyRi9nLCBcIi9cIil9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gcGF0aDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0U2lnbmF0dXJlKFxuICAgIGxvbmdEYXRlOiBzdHJpbmcsXG4gICAgY3JlZGVudGlhbFNjb3BlOiBzdHJpbmcsXG4gICAga2V5UHJvbWlzZTogUHJvbWlzZTxVaW50OEFycmF5PixcbiAgICBjYW5vbmljYWxSZXF1ZXN0OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCBzdHJpbmdUb1NpZ24gPSBhd2FpdCB0aGlzLmNyZWF0ZVN0cmluZ1RvU2lnbihcbiAgICAgIGxvbmdEYXRlLFxuICAgICAgY3JlZGVudGlhbFNjb3BlLFxuICAgICAgY2Fub25pY2FsUmVxdWVzdFxuICAgICk7XG5cbiAgICBjb25zdCBoYXNoID0gbmV3IHRoaXMuc2hhMjU2KGF3YWl0IGtleVByb21pc2UpO1xuICAgIGhhc2gudXBkYXRlKHN0cmluZ1RvU2lnbik7XG4gICAgcmV0dXJuIHRvSGV4KGF3YWl0IGhhc2guZGlnZXN0KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaWduaW5nS2V5KFxuICAgIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyxcbiAgICByZWdpb246IHN0cmluZyxcbiAgICBzaG9ydERhdGU6IHN0cmluZ1xuICApOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcbiAgICByZXR1cm4gZ2V0U2lnbmluZ0tleShcbiAgICAgIHRoaXMuc2hhMjU2LFxuICAgICAgY3JlZGVudGlhbHMsXG4gICAgICBzaG9ydERhdGUsXG4gICAgICByZWdpb24sXG4gICAgICB0aGlzLnNlcnZpY2VcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUobm93OiBEYXRlSW5wdXQpOiB7IGxvbmdEYXRlOiBzdHJpbmc7IHNob3J0RGF0ZTogc3RyaW5nIH0ge1xuICBjb25zdCBsb25nRGF0ZSA9IGlzbzg2MDEobm93KS5yZXBsYWNlKC9bXFwtOl0vZywgXCJcIik7XG4gIHJldHVybiB7XG4gICAgbG9uZ0RhdGUsXG4gICAgc2hvcnREYXRlOiBsb25nRGF0ZS5zdWJzdHIoMCwgOClcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2Fub25pY2FsSGVhZGVyTGlzdChoZWFkZXJzOiBvYmplY3QpOiBzdHJpbmcge1xuICByZXR1cm4gT2JqZWN0LmtleXMoaGVhZGVycylcbiAgICAuc29ydCgpXG4gICAgLmpvaW4oXCI7XCIpO1xufVxuXG5mdW5jdGlvbiBnZXRUdGwoc3RhcnQ6IERhdGVJbnB1dCwgZXhwaXJhdGlvbjogRGF0ZUlucHV0KTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoXG4gICAgKHRvRGF0ZShleHBpcmF0aW9uKS52YWx1ZU9mKCkgLSB0b0RhdGUoc3RhcnQpLnZhbHVlT2YoKSkgLyAxMDAwXG4gICk7XG59XG4iXX0=

/***/ }),

/***/ 177:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __aws_sdk_middleware_stack = __webpack_require__(475);
const AssumeRole_1 = __webpack_require__(364);
class AssumeRoleCommand {
    constructor(input) {
        this.input = input;
        this.model = AssumeRole_1.AssumeRole;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: this.model
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}
exports.AssumeRoleCommand = AssumeRoleCommand;
//# sourceMappingURL=AssumeRoleCommand.js.map

/***/ }),

/***/ 199:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isArrayBuffer(arg) {
    return ((typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
        Object.prototype.toString.call(arg) === "[object ArrayBuffer]");
}
exports.isArrayBuffer = isArrayBuffer;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 210:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buffer_1 = __webpack_require__(293);
var http_1 = __webpack_require__(605);
var property_provider_1 = __webpack_require__(855);
/**
 * @internal
 */
function httpGet(options) {
    return new Promise(function (resolve, reject) {
        var request = http_1.get(options);
        request.on("error", function (err) {
            reject(new property_provider_1.ProviderError("Unable to connect to instance metadata service"));
        });
        request.on("response", function (res) {
            var _a = res.statusCode, statusCode = _a === void 0 ? 400 : _a;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(new property_provider_1.ProviderError("Error response received from instance metadata service"));
            }
            var chunks = [];
            res.on("data", function (chunk) {
                chunks.push(chunk);
            });
            res.on("end", function () {
                resolve(buffer_1.Buffer.concat(chunks));
            });
        });
    });
}
exports.httpGet = httpGet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cEdldC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInJlbW90ZVByb3ZpZGVyL2h0dHBHZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBZ0M7QUFDaEMsNkJBQTREO0FBQzVELGdFQUEyRDtBQUUzRDs7R0FFRztBQUNILFNBQWdCLE9BQU8sQ0FBQyxPQUFnQztJQUN0RCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDakMsSUFBTSxPQUFPLEdBQUcsVUFBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUEsR0FBRztZQUNyQixNQUFNLENBQ0osSUFBSSxpQ0FBYSxDQUFDLGdEQUFnRCxDQUFDLENBQ3BFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQUMsR0FBb0I7WUFDbEMsSUFBQSxtQkFBZ0IsRUFBaEIscUNBQWdCLENBQVM7WUFDakMsSUFBSSxVQUFVLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUU7Z0JBQ3pDLE1BQU0sQ0FDSixJQUFJLGlDQUFhLENBQ2Ysd0RBQXdELENBQ3pELENBQ0YsQ0FBQzthQUNIO1lBRUQsSUFBTSxNQUFNLEdBQWtCLEVBQUUsQ0FBQztZQUNqQyxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFBLEtBQUs7Z0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBZSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtnQkFDWixPQUFPLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUE1QkQsMEJBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlclwiO1xuaW1wb3J0IHsgZ2V0LCBJbmNvbWluZ01lc3NhZ2UsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCB7IFByb3ZpZGVyRXJyb3IgfSBmcm9tIFwiQGF3cy1zZGsvcHJvcGVydHktcHJvdmlkZXJcIjtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGh0dHBHZXQob3B0aW9uczogUmVxdWVzdE9wdGlvbnMgfCBzdHJpbmcpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBnZXQob3B0aW9ucyk7XG4gICAgcmVxdWVzdC5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgICByZWplY3QoXG4gICAgICAgIG5ldyBQcm92aWRlckVycm9yKFwiVW5hYmxlIHRvIGNvbm5lY3QgdG8gaW5zdGFuY2UgbWV0YWRhdGEgc2VydmljZVwiKVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJlcXVlc3Qub24oXCJyZXNwb25zZVwiLCAocmVzOiBJbmNvbWluZ01lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSA9IDQwMCB9ID0gcmVzO1xuICAgICAgaWYgKHN0YXR1c0NvZGUgPCAyMDAgfHwgMzAwIDw9IHN0YXR1c0NvZGUpIHtcbiAgICAgICAgcmVqZWN0KFxuICAgICAgICAgIG5ldyBQcm92aWRlckVycm9yKFxuICAgICAgICAgICAgXCJFcnJvciByZXNwb25zZSByZWNlaXZlZCBmcm9tIGluc3RhbmNlIG1ldGFkYXRhIHNlcnZpY2VcIlxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2h1bmtzOiBBcnJheTxCdWZmZXI+ID0gW107XG4gICAgICByZXMub24oXCJkYXRhXCIsIGNodW5rID0+IHtcbiAgICAgICAgY2h1bmtzLnB1c2goY2h1bmsgYXMgQnVmZmVyKTtcbiAgICAgIH0pO1xuICAgICAgcmVzLm9uKFwiZW5kXCIsICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShCdWZmZXIuY29uY2F0KGNodW5rcykpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuIl19

/***/ }),

/***/ 211:
/***/ (function(module) {

module.exports = require("https");

/***/ }),

/***/ 224:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ERR_RESP_SHAPE = {
    shape: {
        type: "structure",
        required: [],
        members: {
            Error: {
                shape: {
                    type: "structure",
                    required: [],
                    members: {
                        Code: { shape: { type: "string" } },
                        Message: { shape: { type: "string" } }
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 249:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
function resolveConfiguration(providedConfiguration, configurationDefinition, middlewareStack) {
    var e_1, _a;
    var out = {};
    var applicators = [];
    try {
        // Iterate over the definitions own keys, using getOwnPropertyNames to
        // guarantee insertion order is preserved.
        // @see https://www.ecma-international.org/ecma-262/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-ownpropertykeys
        for (var _b = tslib_1.__values(Object.getOwnPropertyNames(configurationDefinition)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var property = _c.value;
            var _d = configurationDefinition[property], required = _d.required, defaultValue = _d.defaultValue, defaultProvider = _d.defaultProvider, normalize = _d.normalize, apply = _d.apply;
            var input = providedConfiguration[property];
            if (input === undefined) {
                if (defaultValue !== undefined) {
                    input = defaultValue;
                }
                else if (defaultProvider) {
                    input = defaultProvider(out);
                }
                else if (required) {
                    throw new Error("No input provided for required configuration parameter: " + property);
                }
            }
            else if (normalize) {
                input = normalize(input, out);
            }
            out[property] = input;
            if (apply) {
                applicators.push(apply);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    applicators.forEach(function (func) { return func(out, middlewareStack); });
    return out;
}
exports.resolveConfiguration = resolveConfiguration;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 252:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function initServiceException(error, option) {
    var name = option.name, $metadata = option.$metadata, rawException = option.rawException, message = option.message, operationName = option.operationName;
    var serviceException = error;
    serviceException.name = name || (operationName || "") + "Error";
    serviceException.message =
        message ||
            (rawException
                ? rawException.message || rawException.Message || ""
                : error.message);
    serviceException.details = rawException || {};
    serviceException.$metadata = $metadata;
    return serviceException;
}
exports.initServiceException = initServiceException;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 253:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccessKeyInfoOutput = {
    type: "structure",
    required: [],
    members: {
        Account: {
            shape: {
                type: "string"
            }
        }
    }
};
//# sourceMappingURL=GetAccessKeyInfoOutput.js.map

/***/ }),

/***/ 259:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var property_provider_1 = __webpack_require__(855);
exports.ENV_REGION = "AWS_REGION";
function fromEnv(_a) {
    var _this = this;
    var _b = (_a === void 0 ? {} : _a).environmentVariableName, environmentVariableName = _b === void 0 ? exports.ENV_REGION : _b;
    return function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var envRegion;
        return tslib_1.__generator(this, function (_a) {
            envRegion = process.env[environmentVariableName];
            if (envRegion) {
                return [2 /*return*/, envRegion];
            }
            throw new property_provider_1.ProviderError("No value defined for the " + environmentVariableName + " environment variable");
        });
    }); };
}
exports.fromEnv = fromEnv;
//# sourceMappingURL=fromEnv.js.map

/***/ }),

/***/ 272:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var os_1 = __webpack_require__(87);
var path_1 = __webpack_require__(622);
var fs_1 = __webpack_require__(747);
exports.ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
exports.ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
var swallowError = function () { return ({}); };
function loadSharedConfigFiles(init) {
    if (init === void 0) { init = {}; }
    var _a = init.filepath, filepath = _a === void 0 ? process.env[exports.ENV_CREDENTIALS_PATH] ||
        path_1.join(getHomeDir(), ".aws", "credentials") : _a, _b = init.configFilepath, configFilepath = _b === void 0 ? process.env[exports.ENV_CONFIG_PATH] ||
        path_1.join(getHomeDir(), ".aws", "config") : _b;
    return Promise.all([
        slurpFile(configFilepath)
            .then(parseIni)
            .then(normalizeConfigFile)
            .catch(swallowError),
        slurpFile(filepath)
            .then(parseIni)
            .catch(swallowError)
    ]).then(function (parsedFiles) {
        var configFile = parsedFiles[0], credentialsFile = parsedFiles[1];
        return {
            configFile: configFile,
            credentialsFile: credentialsFile
        };
    });
}
exports.loadSharedConfigFiles = loadSharedConfigFiles;
var profileKeyRegex = /^profile\s(["'])?([^\1]+)\1$/;
function normalizeConfigFile(data) {
    var map = {};
    for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
        var key = _a[_i];
        var matches = void 0;
        if (key === "default") {
            map.default = data.default;
        }
        else if ((matches = profileKeyRegex.exec(key))) {
            var _1 = matches[0], _2 = matches[1], normalizedKey = matches[2];
            if (normalizedKey) {
                map[normalizedKey] = data[key];
            }
        }
    }
    return map;
}
function parseIni(iniData) {
    var map = {};
    var currentSection;
    for (var _i = 0, _a = iniData.split(/\r?\n/); _i < _a.length; _i++) {
        var line = _a[_i];
        line = line.split(/(^|\s)[;#]/)[0]; // remove comments
        var section = line.match(/^\s*\[([^\[\]]+)]\s*$/);
        if (section) {
            currentSection = section[1];
        }
        else if (currentSection) {
            var item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
            if (item) {
                map[currentSection] = map[currentSection] || {};
                map[currentSection][item[1]] = item[2];
            }
        }
    }
    return map;
}
function slurpFile(path) {
    return new Promise(function (resolve, reject) {
        fs_1.readFile(path, "utf8", function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
function getHomeDir() {
    var _a = process.env, HOME = _a.HOME, USERPROFILE = _a.USERPROFILE, HOMEPATH = _a.HOMEPATH, _b = _a.HOMEDRIVE, HOMEDRIVE = _b === void 0 ? "C:" + path_1.sep : _b;
    if (HOME)
        return HOME;
    if (USERPROFILE)
        return USERPROFILE;
    if (HOMEPATH)
        return "" + HOMEDRIVE + HOMEPATH;
    return os_1.homedir();
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 277:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
function parseQueryString(querystring) {
    var e_1, _a;
    var query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        try {
            for (var _b = tslib_1.__values(querystring.split("&")), _c = _b.next(); !_c.done; _c = _b.next()) {
                var pair = _c.value;
                var _d = tslib_1.__read(pair.split("="), 2), key = _d[0], _e = _d[1], value = _e === void 0 ? null : _e;
                key = decodeURIComponent(key);
                if (value) {
                    value = decodeURIComponent(value);
                }
                if (!(key in query)) {
                    query[key] = value;
                }
                else if (Array.isArray(query[key])) {
                    query[key].push(value);
                }
                else {
                    query[key] = [query[key], value];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return query;
}
exports.parseQueryString = parseQueryString;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 283:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(687), exports);
tslib_1.__exportStar(__webpack_require__(729), exports);
tslib_1.__exportStar(__webpack_require__(791), exports);
tslib_1.__exportStar(__webpack_require__(177), exports);
tslib_1.__exportStar(__webpack_require__(72), exports);
tslib_1.__exportStar(__webpack_require__(991), exports);
tslib_1.__exportStar(__webpack_require__(840), exports);
tslib_1.__exportStar(__webpack_require__(442), exports);
tslib_1.__exportStar(__webpack_require__(696), exports);
tslib_1.__exportStar(__webpack_require__(711), exports);
tslib_1.__exportStar(__webpack_require__(73), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 289:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
/**
 * An error representing a failure of an individual credential provider.
 *
 * This error class has special meaning to the {@link chain} method. If a
 * provider in the chain is rejected with an error, the chain will only proceed
 * to the next provider if the value of the `tryNextLink` property on the error
 * is truthy. This allows individual providers to halt the chain and also
 * ensures the chain will stop if an entirely unexpected error is encountered.
 */
var ProviderError = /** @class */ (function (_super) {
    tslib_1.__extends(ProviderError, _super);
    function ProviderError(message, tryNextLink) {
        if (tryNextLink === void 0) { tryNextLink = true; }
        var _this = _super.call(this, message) || this;
        _this.tryNextLink = tryNextLink;
        return _this;
    }
    return ProviderError;
}(Error));
exports.ProviderError = ProviderError;
//# sourceMappingURL=ProviderError.js.map

/***/ }),

/***/ 291:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_buffer_from_1 = __webpack_require__(12);
/**
 * Converts a base-64 encoded string to a Uint8Array of bytes using Node.JS's
 * `buffer` module.
 *
 * @param input The base-64 encoded string
 */
function fromBase64(input) {
    const buffer = util_buffer_from_1.fromString(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
}
exports.fromBase64 = fromBase64;
/**
 * Converts a Uint8Array of binary data to a base-64 encoded string using
 * Node.JS's `buffer` module.
 *
 * @param input The binary data to encode
 */
function toBase64(input) {
    return util_buffer_from_1.fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("base64");
}
exports.toBase64 = toBase64;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 293:
/***/ (function(module) {

module.exports = require("buffer");

/***/ }),

/***/ 296:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(392), exports);
tslib_1.__exportStar(__webpack_require__(154), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUVBQXVDO0FBQ3ZDLHdEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2NyZWRlbnRpYWxEZXJpdmF0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9TaWduYXR1cmVWNFwiO1xuIl19

/***/ }),

/***/ 305:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _policyDescriptorListType_1 = __webpack_require__(740);
exports.AssumeRoleInput = {
    type: "structure",
    required: ["RoleArn", "RoleSessionName"],
    members: {
        RoleArn: {
            shape: {
                type: "string",
                min: 20
            }
        },
        RoleSessionName: {
            shape: {
                type: "string",
                min: 2
            }
        },
        PolicyArns: {
            shape: _policyDescriptorListType_1._policyDescriptorListType
        },
        Policy: {
            shape: {
                type: "string",
                min: 1
            }
        },
        DurationSeconds: {
            shape: {
                type: "integer",
                min: 900
            }
        },
        ExternalId: {
            shape: {
                type: "string",
                min: 2
            }
        },
        SerialNumber: {
            shape: {
                type: "string",
                min: 9
            }
        },
        TokenCode: {
            shape: {
                type: "string",
                min: 6
            }
        }
    }
};
//# sourceMappingURL=AssumeRoleInput.js.map

/***/ }),

/***/ 306:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._FederatedUser = {
    type: "structure",
    required: ["FederatedUserId", "Arn"],
    members: {
        FederatedUserId: {
            shape: {
                type: "string",
                min: 2
            }
        },
        Arn: {
            shape: {
                type: "string",
                min: 20
            }
        }
    }
};
//# sourceMappingURL=_FederatedUser.js.map

/***/ }),

/***/ 317:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GetCallerIdentityInput_1 = __webpack_require__(26);
const GetCallerIdentityOutput_1 = __webpack_require__(8);
const ServiceMetadata_1 = __webpack_require__(683);
exports.GetCallerIdentity = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: "GetCallerIdentity",
    http: {
        method: "POST",
        requestUri: "/"
    },
    input: {
        shape: GetCallerIdentityInput_1.GetCallerIdentityInput
    },
    output: {
        shape: GetCallerIdentityOutput_1.GetCallerIdentityOutput,
        resultWrapper: "GetCallerIdentityResult"
    },
    errors: []
};
//# sourceMappingURL=GetCallerIdentity.js.map

/***/ }),

/***/ 330:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._AssumedRoleUser = {
    type: "structure",
    required: ["AssumedRoleId", "Arn"],
    members: {
        AssumedRoleId: {
            shape: {
                type: "string",
                min: 2
            }
        },
        Arn: {
            shape: {
                type: "string",
                min: 20
            }
        }
    }
};
//# sourceMappingURL=_AssumedRoleUser.js.map

/***/ }),

/***/ 332:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var protocol_timestamp_1 = __webpack_require__(420);
var pixl_xml_1 = __webpack_require__(880);
var XmlBodyParser = /** @class */ (function () {
    function XmlBodyParser(base64Decoder) {
        this.base64Decoder = base64Decoder;
    }
    XmlBodyParser.prototype.parse = function (member, input) {
        var _a;
        var xmlObj = pixl_xml_1.parse(input, {
            preserveAttributes: true
        });
        var wrappedShape = member.shape;
        if (member.resultWrapper) {
            wrappedShape = {
                type: "structure",
                required: [],
                members: (_a = {},
                    _a[member.resultWrapper] = {
                        shape: member.shape
                    },
                    _a)
            };
        }
        var data = this.unmarshall(wrappedShape, xmlObj);
        if (member.resultWrapper) {
            data = data[member.resultWrapper];
        }
        //standard query
        if (xmlObj.ResponseMetadata && xmlObj.ResponseMetadata.RequestId) {
            data.$metadata = {
                requestId: xmlObj.ResponseMetadata.RequestId
            };
        }
        //ec2 query
        if (xmlObj.RequestId) {
            data.$metadata = {
                requestId: xmlObj.RequestId
            };
        }
        //SDB query
        if (xmlObj.RequestID) {
            data.$metadata = {
                requestId: xmlObj.RequestID
            };
        }
        return data;
    };
    XmlBodyParser.prototype.unmarshall = function (shape, xmlObj) {
        if (shape.type === "structure") {
            return this.parseStructure(shape, xmlObj);
        }
        else if (shape.type === "list") {
            return this.parseList(shape, xmlObj);
        }
        else if (shape.type === "map") {
            return this.parseMap(shape, xmlObj);
        }
        else if (shape.type === "timestamp") {
            return this.parseTimeStamp(shape, xmlObj);
        }
        else if (shape.type === "blob") {
            return typeof xmlObj === "string"
                ? this.base64Decoder(xmlObj)
                : undefined;
        }
        else if (shape.type === "boolean") {
            if (!xmlObj)
                return undefined;
            return xmlObj === "true";
        }
        else if (shape.type === "float" || shape.type === "integer") {
            if (!xmlObj) {
                return undefined;
            }
            var num = Number(xmlObj);
            return isFinite(num) ? num : undefined;
        }
        else if (shape.type === "string") {
            if (xmlObj === "") {
                return xmlObj;
            }
            return xmlObj ? xmlObj.toString() : undefined;
        }
        else {
            throw new Error(shape.type + " can not be parsed");
        }
    };
    XmlBodyParser.prototype.parseStructure = function (shape, xmlObj) {
        var e_1, _a;
        if (xmlObj === undefined) {
            return undefined;
        }
        var obj = {};
        try {
            for (var _b = tslib_1.__values(Object.keys(shape.members)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var memberName = _c.value;
                var member = shape.members[memberName];
                var xmlKey = this.mapToXMLKey(member, memberName);
                var subXmlObj = xmlObj;
                if (member.xmlAttribute) {
                    subXmlObj = xmlObj["_Attribs"];
                }
                obj[memberName] = this.unmarshall(member.shape, subXmlObj[xmlKey]);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return obj;
    };
    XmlBodyParser.prototype.mapToXMLKey = function (member, name) {
        var keyName = member.locationName || name, membershape = member.shape;
        if (membershape.type === "list") {
            keyName = membershape.flattened
                ? membershape.member.locationName || keyName
                : keyName;
        }
        return keyName;
    };
    XmlBodyParser.prototype.parseList = function (shape, xmlObj) {
        var e_2, _a;
        var list = [], xmlList = xmlObj;
        if (!xmlObj || Object.keys(xmlObj).length === 0) {
            return list;
        }
        if (!Array.isArray(xmlObj)) {
            var key = shape.member.locationName || "member";
            xmlList = shape.flattened ? xmlObj : xmlObj[key];
            if (!xmlList || Object.keys(xmlList).length === 0) {
                return list;
            }
            if (!Array.isArray(xmlList)) {
                xmlList = [xmlList];
            }
        }
        try {
            for (var xmlList_1 = tslib_1.__values(xmlList), xmlList_1_1 = xmlList_1.next(); !xmlList_1_1.done; xmlList_1_1 = xmlList_1.next()) {
                var xmlObjEntry = xmlList_1_1.value;
                list.push(this.unmarshall(shape.member.shape, xmlObjEntry));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (xmlList_1_1 && !xmlList_1_1.done && (_a = xmlList_1.return)) _a.call(xmlList_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return list;
    };
    XmlBodyParser.prototype.parseMap = function (shape, xmlObj) {
        var e_3, _a;
        var obj = {}, mapEntryList = xmlObj;
        if (!shape.flattened) {
            mapEntryList = xmlObj["entry"];
        }
        if (!mapEntryList || Object.keys(mapEntryList).length === 0) {
            return {};
        }
        if (!Array.isArray(mapEntryList)) {
            mapEntryList = [mapEntryList];
        }
        try {
            for (var mapEntryList_1 = tslib_1.__values(mapEntryList), mapEntryList_1_1 = mapEntryList_1.next(); !mapEntryList_1_1.done; mapEntryList_1_1 = mapEntryList_1.next()) {
                var mapEntry = mapEntryList_1_1.value;
                var keyName = shape.key.locationName || "key";
                var valueName = shape.value.locationName || "value";
                obj[mapEntry[keyName]] = this.unmarshall(shape.value.shape, mapEntry[valueName]);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (mapEntryList_1_1 && !mapEntryList_1_1.done && (_a = mapEntryList_1.return)) _a.call(mapEntryList_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return obj;
    };
    XmlBodyParser.prototype.parseTimeStamp = function (shape, xmlObj) {
        if (!xmlObj) {
            return undefined;
        }
        var date = protocol_timestamp_1.toDate(xmlObj);
        if (date.toString() === "Invalid Date") {
            return undefined;
        }
        return date;
    };
    return XmlBodyParser;
}());
exports.XmlBodyParser = XmlBodyParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0VBQXFEO0FBQ3JELCtDQUF3RTtBQTZCeEU7SUFDRSx1QkFBNkIsYUFBc0I7UUFBdEIsa0JBQWEsR0FBYixhQUFhLENBQVM7SUFBRyxDQUFDO0lBRWhELDZCQUFLLEdBQVosVUFBeUIsTUFBYyxFQUFFLEtBQWE7O1FBQ3BELElBQUksTUFBTSxHQUFtQixnQkFBUyxDQUFDLEtBQUssRUFBRTtZQUM1QyxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQztRQUNILElBQUksWUFBWSxHQUF1QixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3BELElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUN4QixZQUFZLEdBQUc7Z0JBQ2IsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE9BQU87b0JBQ0wsR0FBQyxNQUFNLENBQUMsYUFBYSxJQUFHO3dCQUN0QixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7cUJBQ3BCO3VCQUNGO2FBQ0YsQ0FBQztTQUNIO1FBQ0QsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0QsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFO1lBQ3hCLElBQUksR0FBSSxJQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsZ0JBQWdCO1FBQ2hCLElBQUksTUFBTSxDQUFDLGdCQUFnQixJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDL0QsSUFBWSxDQUFDLFNBQVMsR0FBRztnQkFDeEIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO2FBQzdDLENBQUM7U0FDSDtRQUNELFdBQVc7UUFDWCxJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7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MENBQUEsb0VBQUU7Z0JBQTlCLElBQUksUUFBUSx5QkFBQTtnQkFDZixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUM7Z0JBQzlDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQztnQkFDcEQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQ3RDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUNqQixRQUFRLENBQUMsU0FBUyxDQUFDLENBQ3BCLENBQUM7YUFDSDs7Ozs7Ozs7O1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU8sc0NBQWMsR0FBdEIsVUFDRSxLQUFnQixFQUNoQixNQUFXO1FBRVgsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxJQUFJLEdBQUcsMkJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxjQUFjLEVBQUU7WUFDdEMsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFyS0QsSUFxS0M7QUFyS1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiQGF3cy1zZGsvcHJvdG9jb2wtdGltZXN0YW1wXCI7XG5pbXBvcnQgeyBwYXJzZSBhcyBwaXhsUGFyc2UsIFhNTFBhcnNlT3V0cHV0IH0gZnJvbSBcIi4uL3ZlbmRvci9waXhsLXhtbFwiO1xuaW1wb3J0IHtcbiAgQm9keVBhcnNlcixcbiAgRGVjb2RlcixcbiAgTWVtYmVyLFxuICBTaGFwZSxcbiAgU3RydWN0dXJlLFxuICBMaXN0LFxuICBNYXAsXG4gIEJvb2xlYW4sXG4gIEJsb2IsXG4gIFRpbWVzdGFtcCxcbiAgU2VyaWFsaXphdGlvbk1vZGVsXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG50eXBlIFNjYWxhciA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBudWxsO1xuXG5pbnRlcmZhY2UgT2JqZWN0VHlwZSB7XG4gIFtrZXk6IHN0cmluZ106IE9iamVjdFR5cGUgfCBTY2FsYXIgfCBPYmplY3RUeXBlQXJyYXk7XG59XG5cbmludGVyZmFjZSBQYXJzZWRSZXNwb25zZSBleHRlbmRzIFhNTFBhcnNlT3V0cHV0IHtcbiAgUmVzcG9uc2VNZXRhZGF0YTogeyBSZXF1ZXN0SWQ6IHN0cmluZyB9O1xuICBSZXF1ZXN0SWQ/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBPYmplY3RUeXBlQXJyYXlcbiAgZXh0ZW5kcyBBcnJheTxPYmplY3RUeXBlIHwgU2NhbGFyIHwgT2JqZWN0VHlwZUFycmF5PiB7fVxuXG5leHBvcnQgY2xhc3MgWG1sQm9keVBhcnNlciBpbXBsZW1lbnRzIEJvZHlQYXJzZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGJhc2U2NERlY29kZXI6IERlY29kZXIpIHt9XG5cbiAgcHVibGljIHBhcnNlPE91dHB1dFR5cGU+KG1lbWJlcjogTWVtYmVyLCBpbnB1dDogc3RyaW5nKTogT3V0cHV0VHlwZSB7XG4gICAgbGV0IHhtbE9iaiA9IDxQYXJzZWRSZXNwb25zZT5waXhsUGFyc2UoaW5wdXQsIHtcbiAgICAgIHByZXNlcnZlQXR0cmlidXRlczogdHJ1ZVxuICAgIH0pO1xuICAgIGxldCB3cmFwcGVkU2hhcGU6IFNlcmlhbGl6YXRpb25Nb2RlbCA9IG1lbWJlci5zaGFwZTtcbiAgICBpZiAobWVtYmVyLnJlc3VsdFdyYXBwZXIpIHtcbiAgICAgIHdyYXBwZWRTaGFwZSA9IHtcbiAgICAgICAgdHlwZTogXCJzdHJ1Y3R1cmVcIixcbiAgICAgICAgcmVxdWlyZWQ6IFtdLFxuICAgICAgICBtZW1iZXJzOiB7XG4gICAgICAgICAgW21lbWJlci5yZXN1bHRXcmFwcGVyXToge1xuICAgICAgICAgICAgc2hhcGU6IG1lbWJlci5zaGFwZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgbGV0IGRhdGE6IE91dHB1dFR5cGUgPSB0aGlzLnVubWFyc2hhbGwod3JhcHBlZFNoYXBlLCB4bWxPYmopO1xuICAgIGlmIChtZW1iZXIucmVzdWx0V3JhcHBlcikge1xuICAgICAgZGF0YSA9IChkYXRhIGFzIGFueSlbbWVtYmVyLnJlc3VsdFdyYXBwZXJdO1xuICAgIH1cbiAgICAvL3N0YW5kYXJkIHF1ZXJ5XG4gICAgaWYgKHhtbE9iai5SZXNwb25zZU1ldGFkYXRhICYmIHhtbE9iai5SZXNwb25zZU1ldGFkYXRhLlJlcXVlc3RJZCkge1xuICAgICAgKGRhdGEgYXMgYW55KS4kbWV0YWRhdGEgPSB7XG4gICAgICAgIHJlcXVlc3RJZDogeG1sT2JqLlJlc3BvbnNlTWV0YWRhdGEuUmVxdWVzdElkXG4gICAgICB9O1xuICAgIH1cbiAgICAvL2VjMiBxdWVyeVxuICAgIGlmICh4bWxPYmouUmVxdWVzdElkKSB7XG4gICAgICAoZGF0YSBhcyBhbnkpLiRtZXRhZGF0YSA9IHtcbiAgICAgICAgcmVxdWVzdElkOiB4bWxPYmouUmVxdWVzdElkXG4gICAgICB9O1xuICAgIH1cbiAgICAvL1NEQiBxdWVyeVxuICAgIGlmICh4bWxPYmouUmVxdWVzdElEKSB7XG4gICAgICAoZGF0YSBhcyBhbnkpLiRtZXRhZGF0YSA9IHtcbiAgICAgICAgcmVxdWVzdElkOiB4bWxPYmouUmVxdWVzdElEXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZGF0YSBhcyBPdXRwdXRUeXBlO1xuICB9XG5cbiAgcHJpdmF0ZSB1bm1hcnNoYWxsKHNoYXBlOiBTZXJpYWxpemF0aW9uTW9kZWwsIHhtbE9iajogYW55KTogYW55IHtcbiAgICBpZiAoc2hhcGUudHlwZSA9PT0gXCJzdHJ1Y3R1cmVcIikge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VTdHJ1Y3R1cmUoc2hhcGUsIHhtbE9iaik7XG4gICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSBcImxpc3RcIikge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VMaXN0KHNoYXBlLCB4bWxPYmopO1xuICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gXCJtYXBcIikge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VNYXAoc2hhcGUsIHhtbE9iaik7XG4gICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSBcInRpbWVzdGFtcFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVRpbWVTdGFtcChzaGFwZSwgeG1sT2JqKTtcbiAgICB9IGVsc2UgaWYgKHNoYXBlLnR5cGUgPT09IFwiYmxvYlwiKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHhtbE9iaiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICA/IHRoaXMuYmFzZTY0RGVjb2Rlcih4bWxPYmopXG4gICAgICAgIDogdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIGlmICgheG1sT2JqKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHhtbE9iaiA9PT0gXCJ0cnVlXCI7XG4gICAgfSBlbHNlIGlmIChzaGFwZS50eXBlID09PSBcImZsb2F0XCIgfHwgc2hhcGUudHlwZSA9PT0gXCJpbnRlZ2VyXCIpIHtcbiAgICAgIGlmICgheG1sT2JqKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCBudW0gPSBOdW1iZXIoeG1sT2JqKTtcbiAgICAgIHJldHVybiBpc0Zpbml0ZShudW0pID8gbnVtIDogdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAoc2hhcGUudHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKHhtbE9iaiA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm4geG1sT2JqO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHhtbE9iaiA/IHhtbE9iai50b1N0cmluZygpIDogdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7KHNoYXBlIGFzIGFueSkudHlwZX0gY2FuIG5vdCBiZSBwYXJzZWRgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHBhcnNlU3RydWN0dXJlKFxuICAgIHNoYXBlOiBTdHJ1Y3R1cmUsXG4gICAgeG1sT2JqOiBhbnlcbiAgKTogT2JqZWN0VHlwZSB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKHhtbE9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBsZXQgb2JqOiBPYmplY3RUeXBlID0ge307XG4gICAgZm9yIChjb25zdCBtZW1iZXJOYW1lIG9mIE9iamVjdC5rZXlzKHNoYXBlLm1lbWJlcnMpKSB7XG4gICAgICBjb25zdCBtZW1iZXI6IE1lbWJlciA9IHNoYXBlLm1lbWJlcnNbbWVtYmVyTmFtZV07XG4gICAgICBjb25zdCB4bWxLZXkgPSB0aGlzLm1hcFRvWE1MS2V5KG1lbWJlciwgbWVtYmVyTmFtZSk7XG4gICAgICBsZXQgc3ViWG1sT2JqID0geG1sT2JqO1xuICAgICAgaWYgKG1lbWJlci54bWxBdHRyaWJ1dGUpIHtcbiAgICAgICAgc3ViWG1sT2JqID0geG1sT2JqW1wiX0F0dHJpYnNcIl07XG4gICAgICB9XG4gICAgICBvYmpbbWVtYmVyTmFtZV0gPSB0aGlzLnVubWFyc2hhbGwobWVtYmVyLnNoYXBlLCBzdWJYbWxPYmpbeG1sS2V5XSk7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBwcml2YXRlIG1hcFRvWE1MS2V5KG1lbWJlcjogTWVtYmVyLCBuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCBrZXlOYW1lID0gbWVtYmVyLmxvY2F0aW9uTmFtZSB8fCBuYW1lLFxuICAgICAgbWVtYmVyc2hhcGUgPSBtZW1iZXIuc2hhcGU7XG4gICAgaWYgKG1lbWJlcnNoYXBlLnR5cGUgPT09IFwibGlzdFwiKSB7XG4gICAgICBrZXlOYW1lID0gbWVtYmVyc2hhcGUuZmxhdHRlbmVkXG4gICAgICAgID8gbWVtYmVyc2hhcGUubWVtYmVyLmxvY2F0aW9uTmFtZSB8fCBrZXlOYW1lXG4gICAgICAgIDoga2V5TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIGtleU5hbWU7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlTGlzdChzaGFwZTogTGlzdCwgeG1sT2JqOiBhbnkpOiBPYmplY3RUeXBlQXJyYXkge1xuICAgIGxldCBsaXN0OiBPYmplY3RUeXBlW10gPSBbXSxcbiAgICAgIHhtbExpc3QgPSB4bWxPYmo7XG4gICAgaWYgKCF4bWxPYmogfHwgT2JqZWN0LmtleXMoeG1sT2JqKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoeG1sT2JqKSkge1xuICAgICAgY29uc3Qga2V5ID0gc2hhcGUubWVtYmVyLmxvY2F0aW9uTmFtZSB8fCBcIm1lbWJlclwiO1xuICAgICAgeG1sTGlzdCA9IHNoYXBlLmZsYXR0ZW5lZCA/IHhtbE9iaiA6IHhtbE9ialtrZXldO1xuICAgICAgaWYgKCF4bWxMaXN0IHx8IE9iamVjdC5rZXlzKHhtbExpc3QpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICAgIH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh4bWxMaXN0KSkge1xuICAgICAgICB4bWxMaXN0ID0gW3htbExpc3RdO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCB4bWxPYmpFbnRyeSBvZiB4bWxMaXN0KSB7XG4gICAgICBsaXN0LnB1c2godGhpcy51bm1hcnNoYWxsKHNoYXBlLm1lbWJlci5zaGFwZSwgeG1sT2JqRW50cnkpKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBwcml2YXRlIHBhcnNlTWFwKHNoYXBlOiBNYXAsIHhtbE9iajogYW55KTogT2JqZWN0VHlwZSB7XG4gICAgbGV0IG9iajogT2JqZWN0VHlwZSA9IHt9LFxuICAgICAgbWFwRW50cnlMaXN0ID0geG1sT2JqO1xuICAgIGlmICghc2hhcGUuZmxhdHRlbmVkKSB7XG4gICAgICBtYXBFbnRyeUxpc3QgPSB4bWxPYmpbXCJlbnRyeVwiXTtcbiAgICB9XG4gICAgaWYgKCFtYXBFbnRyeUxpc3QgfHwgT2JqZWN0LmtleXMobWFwRW50cnlMaXN0KS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1hcEVudHJ5TGlzdCkpIHtcbiAgICAgIG1hcEVudHJ5TGlzdCA9IFttYXBFbnRyeUxpc3RdO1xuICAgIH1cbiAgICBmb3IgKGxldCBtYXBFbnRyeSBvZiBtYXBFbnRyeUxpc3QpIHtcbiAgICAgIGxldCBrZXlOYW1lID0gc2hhcGUua2V5LmxvY2F0aW9uTmFtZSB8fCBcImtleVwiO1xuICAgICAgbGV0IHZhbHVlTmFtZSA9IHNoYXBlLnZhbHVlLmxvY2F0aW9uTmFtZSB8fCBcInZhbHVlXCI7XG4gICAgICBvYmpbbWFwRW50cnlba2V5TmFtZV1dID0gdGhpcy51bm1hcnNoYWxsKFxuICAgICAgICBzaGFwZS52YWx1ZS5zaGFwZSxcbiAgICAgICAgbWFwRW50cnlbdmFsdWVOYW1lXVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHByaXZhdGUgcGFyc2VUaW1lU3RhbXAoXG4gICAgc2hhcGU6IFRpbWVzdGFtcCxcbiAgICB4bWxPYmo6IGFueVxuICApOiBEYXRlIHwgdW5kZWZpbmVkIHwgbnVsbCB7XG4gICAgaWYgKCF4bWxPYmopIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGxldCBkYXRlID0gdG9EYXRlKHhtbE9iaik7XG4gICAgaWYgKGRhdGUudG9TdHJpbmcoKSA9PT0gXCJJbnZhbGlkIERhdGVcIikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 338:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function fromStatic(staticValue) {
    var promisified = Promise.resolve(staticValue);
    return function () { return promisified; };
}
exports.fromStatic = fromStatic;
//# sourceMappingURL=fromStatic.js.map

/***/ }),

/***/ 346:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function memoize(provider, isExpired, requiresRefresh) {
    if (isExpired === undefined) {
        // This is a static memoization; no need to incorporate refreshing
        var result_1 = provider();
        return function () { return result_1; };
    }
    var result = provider();
    var isConstant = false;
    return function () {
        if (isConstant) {
            return result;
        }
        return result.then(function (resolved) {
            if (requiresRefresh && !requiresRefresh(resolved)) {
                isConstant = true;
                return resolved;
            }
            if (isExpired(resolved)) {
                return (result = provider());
            }
            return resolved;
        });
    };
}
exports.memoize = memoize;
//# sourceMappingURL=memoize.js.map

/***/ }),

/***/ 350:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodeAuthorizationMessageOutput = {
    type: "structure",
    required: [],
    members: {
        DecodedMessage: {
            shape: {
                type: "string"
            }
        }
    }
};
//# sourceMappingURL=DecodeAuthorizationMessageOutput.js.map

/***/ }),

/***/ 351:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var REQUEST_ID_HEADER = "x-amz-request-id";
var REQUEST_ID_ALT_HEADER = "x-amzn-requestid";
var EXTENDED_REQUEST_ID_HEADER = "x-amz-id-2";
var CF_ID_HEADER = "x-amz-cf-id";
function extractMetadata(httpResponse) {
    var httpHeaders = Object.keys(httpResponse.headers).reduce(function (lowercase, headerName) {
        lowercase[headerName.toLowerCase()] = httpResponse.headers[headerName];
        return lowercase;
    }, {});
    return {
        httpHeaders: httpHeaders,
        httpStatusCode: httpResponse.statusCode,
        requestId: httpHeaders[REQUEST_ID_HEADER] || httpHeaders[REQUEST_ID_ALT_HEADER],
        extendedRequestId: httpHeaders[EXTENDED_REQUEST_ID_HEADER],
        cfId: httpHeaders[CF_ID_HEADER]
    };
}
exports.extractMetadata = extractMetadata;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 364:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AssumeRoleInput_1 = __webpack_require__(305);
const AssumeRoleOutput_1 = __webpack_require__(539);
const MalformedPolicyDocumentException_1 = __webpack_require__(143);
const PackedPolicyTooLargeException_1 = __webpack_require__(664);
const RegionDisabledException_1 = __webpack_require__(690);
const ServiceMetadata_1 = __webpack_require__(683);
exports.AssumeRole = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: "AssumeRole",
    http: {
        method: "POST",
        requestUri: "/"
    },
    input: {
        shape: AssumeRoleInput_1.AssumeRoleInput
    },
    output: {
        shape: AssumeRoleOutput_1.AssumeRoleOutput,
        resultWrapper: "AssumeRoleResult"
    },
    errors: [
        {
            shape: MalformedPolicyDocumentException_1.MalformedPolicyDocumentException
        },
        {
            shape: PackedPolicyTooLargeException_1.PackedPolicyTooLargeException
        },
        {
            shape: RegionDisabledException_1.RegionDisabledException
        }
    ]
};
//# sourceMappingURL=AssumeRole.js.map

/***/ }),

/***/ 365:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DecodeAuthorizationMessageInput = {
    type: "structure",
    required: ["EncodedMessage"],
    members: {
        EncodedMessage: {
            shape: {
                type: "string",
                min: 1
            }
        }
    }
};
//# sourceMappingURL=DecodeAuthorizationMessageInput.js.map

/***/ }),

/***/ 368:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = __webpack_require__(794);
class Collector extends stream_1.Writable {
    constructor() {
        super(...arguments);
        this.bufferedBytes = [];
    }
    _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    }
}
exports.Collector = Collector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbGxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFrQztBQUNsQyxNQUFhLFNBQVUsU0FBUSxpQkFBUTtJQUF2Qzs7UUFDa0Isa0JBQWEsR0FBYSxFQUFFLENBQUM7SUFLL0MsQ0FBQztJQUpDLE1BQU0sQ0FBQyxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxRQUErQjtRQUNyRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixRQUFRLEVBQUUsQ0FBQztJQUNiLENBQUM7Q0FDRjtBQU5ELDhCQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV3JpdGFibGUgfSBmcm9tIFwic3RyZWFtXCI7XG5leHBvcnQgY2xhc3MgQ29sbGVjdG9yIGV4dGVuZHMgV3JpdGFibGUge1xuICBwdWJsaWMgcmVhZG9ubHkgYnVmZmVyZWRCeXRlczogQnVmZmVyW10gPSBbXTtcbiAgX3dyaXRlKGNodW5rOiBCdWZmZXIsIGVuY29kaW5nOiBzdHJpbmcsIGNhbGxiYWNrOiAoZXJyPzogRXJyb3IpID0+IHZvaWQpIHtcbiAgICB0aGlzLmJ1ZmZlcmVkQnl0ZXMucHVzaChjaHVuayk7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ 379:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(422);
/**
 * @internal
 */
function cloneRequest(_a) {
    var { headers, query } = _a, rest = tslib_1.__rest(_a, ["headers", "query"]);
    return Object.assign({}, rest, { headers: Object.assign({}, headers), query: query ? cloneQuery(query) : undefined });
}
exports.cloneRequest = cloneRequest;
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return Object.assign({}, carry, { [paramName]: Array.isArray(param) ? [...param] : param });
    }, {});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvbmVSZXF1ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Nsb25lUmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTs7R0FFRztBQUNILFNBQWdCLFlBQVksQ0FBYSxFQUlmO1FBSmUsRUFDdkMsT0FBTyxFQUNQLEtBQUssT0FFbUIsRUFEeEIsK0NBQU87SUFFUCx5QkFDSyxJQUFJLElBQ1AsT0FBTyxvQkFBTyxPQUFPLEdBQ3JCLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUM1QztBQUNKLENBQUM7QUFWRCxvQ0FVQztBQUVELFNBQVMsVUFBVSxDQUFDLEtBQXdCO0lBQzFDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQzlCLENBQUMsS0FBd0IsRUFBRSxTQUFpQixFQUFFLEVBQUU7UUFDOUMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLHlCQUNLLEtBQUssSUFDUixDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUN0RDtJQUNKLENBQUMsRUFDRCxFQUFFLENBQ0gsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCwgUXVlcnlQYXJhbWV0ZXJCYWcgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lUmVxdWVzdDxTdHJlYW1UeXBlPih7XG4gIGhlYWRlcnMsXG4gIHF1ZXJ5LFxuICAuLi5yZXN0XG59OiBIdHRwUmVxdWVzdDxTdHJlYW1UeXBlPik6IEh0dHBSZXF1ZXN0PFN0cmVhbVR5cGU+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5yZXN0LFxuICAgIGhlYWRlcnM6IHsgLi4uaGVhZGVycyB9LFxuICAgIHF1ZXJ5OiBxdWVyeSA/IGNsb25lUXVlcnkocXVlcnkpIDogdW5kZWZpbmVkXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsb25lUXVlcnkocXVlcnk6IFF1ZXJ5UGFyYW1ldGVyQmFnKTogUXVlcnlQYXJhbWV0ZXJCYWcge1xuICByZXR1cm4gT2JqZWN0LmtleXMocXVlcnkpLnJlZHVjZShcbiAgICAoY2Fycnk6IFF1ZXJ5UGFyYW1ldGVyQmFnLCBwYXJhbU5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcGFyYW0gPSBxdWVyeVtwYXJhbU5hbWVdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY2FycnksXG4gICAgICAgIFtwYXJhbU5hbWVdOiBBcnJheS5pc0FycmF5KHBhcmFtKSA/IFsuLi5wYXJhbV0gOiBwYXJhbVxuICAgICAgfTtcbiAgICB9LFxuICAgIHt9XG4gICk7XG59XG4iXX0=

/***/ }),

/***/ 381:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpiredTokenException = {
    type: "structure",
    required: [],
    members: {
        message: {
            shape: {
                type: "string"
            }
        }
    },
    exceptionType: "ExpiredTokenException",
    exceptionCode: "ExpiredTokenException"
};
//# sourceMappingURL=ExpiredTokenException.js.map

/***/ }),

/***/ 382:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GetFederationTokenInput_1 = __webpack_require__(490);
const GetFederationTokenOutput_1 = __webpack_require__(930);
const MalformedPolicyDocumentException_1 = __webpack_require__(143);
const PackedPolicyTooLargeException_1 = __webpack_require__(664);
const RegionDisabledException_1 = __webpack_require__(690);
const ServiceMetadata_1 = __webpack_require__(683);
exports.GetFederationToken = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: "GetFederationToken",
    http: {
        method: "POST",
        requestUri: "/"
    },
    input: {
        shape: GetFederationTokenInput_1.GetFederationTokenInput
    },
    output: {
        shape: GetFederationTokenOutput_1.GetFederationTokenOutput,
        resultWrapper: "GetFederationTokenResult"
    },
    errors: [
        {
            shape: MalformedPolicyDocumentException_1.MalformedPolicyDocumentException
        },
        {
            shape: PackedPolicyTooLargeException_1.PackedPolicyTooLargeException
        },
        {
            shape: RegionDisabledException_1.RegionDisabledException
        }
    ]
};
//# sourceMappingURL=GetFederationToken.js.map

/***/ }),

/***/ 385:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var property_provider_1 = __webpack_require__(855);
var shared_ini_file_loader_1 = __webpack_require__(272);
var DEFAULT_PROFILE = "default";
exports.ENV_PROFILE = "AWS_PROFILE";
function fromSharedConfigFiles(init) {
    if (init === void 0) { init = {}; }
    return function () {
        var _a = init.loadedConfig, loadedConfig = _a === void 0 ? shared_ini_file_loader_1.loadSharedConfigFiles(init) : _a, _b = init.profile, profile = _b === void 0 ? process.env[exports.ENV_PROFILE] || DEFAULT_PROFILE : _b;
        return loadedConfig.then(function (_a) {
            var e_1, _b;
            var configFile = _a.configFile, credentialsFile = _a.credentialsFile;
            try {
                for (var _c = tslib_1.__values([credentialsFile, configFile]), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var file = _d.value;
                    var region = (file[profile] || {}).region;
                    if (typeof region === "string") {
                        return region;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            throw new property_provider_1.ProviderError("No region found for profile " + profile + " in SDK configuration files");
        });
    };
}
exports.fromSharedConfigFiles = fromSharedConfigFiles;
//# sourceMappingURL=fromSharedConfigFiles.js.map

/***/ }),

/***/ 392:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(909);
const signingKeyCache = {};
const cacheQueue = [];
/**
 * Create a string describing the scope of credentials used to sign a request.
 *
 * @param shortDate The current calendar date in the form YYYYMMDD.
 * @param region    The AWS region in which the service resides.
 * @param service   The service to which the signed request is being sent.
 */
function createScope(shortDate, region, service) {
    return `${shortDate}/${region}/${service}/${constants_1.KEY_TYPE_IDENTIFIER}`;
}
exports.createScope = createScope;
/**
 * Derive a signing key from its composite parts
 *
 * @param sha256Constructor A constructor function that can instantiate SHA-256
 *                          hash objects.
 * @param credentials       The credentials with which the request will be
 *                          signed.
 * @param shortDate         The current calendar date in the form YYYYMMDD.
 * @param region            The AWS region in which the service resides.
 * @param service           The service to which the signed request is being
 *                          sent.
 */
function getSigningKey(sha256Constructor, credentials, shortDate, region, service) {
    const cacheKey = `${shortDate}:${region}:${service}:` +
        `${credentials.accessKeyId}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > constants_1.MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    return (signingKeyCache[cacheKey] = new Promise((resolve, reject) => {
        let keyPromise = Promise.resolve(`AWS4${credentials.secretAccessKey}`);
        for (let signable of [shortDate, region, service, constants_1.KEY_TYPE_IDENTIFIER]) {
            keyPromise = keyPromise.then(intermediateKey => hmac(sha256Constructor, intermediateKey, signable));
            keyPromise.catch(() => { });
        }
        keyPromise.then(resolve, reason => {
            delete signingKeyCache[cacheKey];
            reject(reason);
        });
    }));
}
exports.getSigningKey = getSigningKey;
/**
 * @internal
 */
function clearCredentialCache() {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach(cacheKey => {
        delete signingKeyCache[cacheKey];
    });
}
exports.clearCredentialCache = clearCredentialCache;
function hmac(ctor, secret, data) {
    const hash = new ctor(secret);
    hash.update(data);
    return hash.digest();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlZGVudGlhbERlcml2YXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY3JlZGVudGlhbERlcml2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBa0U7QUFFbEUsTUFBTSxlQUFlLEdBQTJDLEVBQUUsQ0FBQztBQUNuRSxNQUFNLFVBQVUsR0FBa0IsRUFBRSxDQUFDO0FBRXJDOzs7Ozs7R0FNRztBQUNILFNBQWdCLFdBQVcsQ0FDekIsU0FBaUIsRUFDakIsTUFBYyxFQUNkLE9BQWU7SUFFZixPQUFPLEdBQUcsU0FBUyxJQUFJLE1BQU0sSUFBSSxPQUFPLElBQUksK0JBQW1CLEVBQUUsQ0FBQztBQUNwRSxDQUFDO0FBTkQsa0NBTUM7QUFFRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILFNBQWdCLGFBQWEsQ0FDM0IsaUJBQWtDLEVBQ2xDLFdBQXdCLEVBQ3hCLFNBQWlCLEVBQ2pCLE1BQWMsRUFDZCxPQUFlO0lBRWYsTUFBTSxRQUFRLEdBQ1osR0FBRyxTQUFTLElBQUksTUFBTSxJQUFJLE9BQU8sR0FBRztRQUNwQyxHQUFHLFdBQVcsQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNELElBQUksUUFBUSxJQUFJLGVBQWUsRUFBRTtRQUMvQixPQUFPLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNsQztJQUVELFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsT0FBTyxVQUFVLENBQUMsTUFBTSxHQUFHLDBCQUFjLEVBQUU7UUFDekMsT0FBTyxlQUFlLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBWSxDQUFDLENBQUM7S0FDdEQ7SUFFRCxPQUFPLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ2xFLElBQUksVUFBVSxHQUF3QixPQUFPLENBQUMsT0FBTyxDQUNuRCxPQUFPLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FDckMsQ0FBQztRQUVGLEtBQUssSUFBSSxRQUFRLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSwrQkFBbUIsQ0FBQyxFQUFFO1lBQ3RFLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFhLGVBQWUsQ0FBQyxFQUFFLENBQ3pELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQ25ELENBQUM7WUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBRUEsVUFBa0MsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3pELE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDO0FBcENELHNDQW9DQztBQUVEOztHQUVHO0FBQ0gsU0FBZ0Isb0JBQW9CO0lBQ2xDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzlDLE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUxELG9EQUtDO0FBRUQsU0FBUyxJQUFJLENBQ1gsSUFBcUIsRUFDckIsTUFBa0IsRUFDbEIsSUFBZ0I7SUFFaEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN2QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlZGVudGlhbHMsIEhhc2hDb25zdHJ1Y3RvciwgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgS0VZX1RZUEVfSURFTlRJRklFUiwgTUFYX0NBQ0hFX1NJWkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3Qgc2lnbmluZ0tleUNhY2hlOiB7IFtrZXk6IHN0cmluZ106IFByb21pc2U8VWludDhBcnJheT4gfSA9IHt9O1xuY29uc3QgY2FjaGVRdWV1ZTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4vKipcbiAqIENyZWF0ZSBhIHN0cmluZyBkZXNjcmliaW5nIHRoZSBzY29wZSBvZiBjcmVkZW50aWFscyB1c2VkIHRvIHNpZ24gYSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSBzaG9ydERhdGUgVGhlIGN1cnJlbnQgY2FsZW5kYXIgZGF0ZSBpbiB0aGUgZm9ybSBZWVlZTU1ERC5cbiAqIEBwYXJhbSByZWdpb24gICAgVGhlIEFXUyByZWdpb24gaW4gd2hpY2ggdGhlIHNlcnZpY2UgcmVzaWRlcy5cbiAqIEBwYXJhbSBzZXJ2aWNlICAgVGhlIHNlcnZpY2UgdG8gd2hpY2ggdGhlIHNpZ25lZCByZXF1ZXN0IGlzIGJlaW5nIHNlbnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTY29wZShcbiAgc2hvcnREYXRlOiBzdHJpbmcsXG4gIHJlZ2lvbjogc3RyaW5nLFxuICBzZXJ2aWNlOiBzdHJpbmdcbik6IHN0cmluZyB7XG4gIHJldHVybiBgJHtzaG9ydERhdGV9LyR7cmVnaW9ufS8ke3NlcnZpY2V9LyR7S0VZX1RZUEVfSURFTlRJRklFUn1gO1xufVxuXG4vKipcbiAqIERlcml2ZSBhIHNpZ25pbmcga2V5IGZyb20gaXRzIGNvbXBvc2l0ZSBwYXJ0c1xuICpcbiAqIEBwYXJhbSBzaGEyNTZDb25zdHJ1Y3RvciBBIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHRoYXQgY2FuIGluc3RhbnRpYXRlIFNIQS0yNTZcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNoIG9iamVjdHMuXG4gKiBAcGFyYW0gY3JlZGVudGlhbHMgICAgICAgVGhlIGNyZWRlbnRpYWxzIHdpdGggd2hpY2ggdGhlIHJlcXVlc3Qgd2lsbCBiZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25lZC5cbiAqIEBwYXJhbSBzaG9ydERhdGUgICAgICAgICBUaGUgY3VycmVudCBjYWxlbmRhciBkYXRlIGluIHRoZSBmb3JtIFlZWVlNTURELlxuICogQHBhcmFtIHJlZ2lvbiAgICAgICAgICAgIFRoZSBBV1MgcmVnaW9uIGluIHdoaWNoIHRoZSBzZXJ2aWNlIHJlc2lkZXMuXG4gKiBAcGFyYW0gc2VydmljZSAgICAgICAgICAgVGhlIHNlcnZpY2UgdG8gd2hpY2ggdGhlIHNpZ25lZCByZXF1ZXN0IGlzIGJlaW5nXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNpZ25pbmdLZXkoXG4gIHNoYTI1NkNvbnN0cnVjdG9yOiBIYXNoQ29uc3RydWN0b3IsXG4gIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscyxcbiAgc2hvcnREYXRlOiBzdHJpbmcsXG4gIHJlZ2lvbjogc3RyaW5nLFxuICBzZXJ2aWNlOiBzdHJpbmdcbik6IFByb21pc2U8VWludDhBcnJheT4ge1xuICBjb25zdCBjYWNoZUtleSA9XG4gICAgYCR7c2hvcnREYXRlfToke3JlZ2lvbn06JHtzZXJ2aWNlfTpgICtcbiAgICBgJHtjcmVkZW50aWFscy5hY2Nlc3NLZXlJZH06JHtjcmVkZW50aWFscy5zZXNzaW9uVG9rZW59YDtcbiAgaWYgKGNhY2hlS2V5IGluIHNpZ25pbmdLZXlDYWNoZSkge1xuICAgIHJldHVybiBzaWduaW5nS2V5Q2FjaGVbY2FjaGVLZXldO1xuICB9XG5cbiAgY2FjaGVRdWV1ZS5wdXNoKGNhY2hlS2V5KTtcbiAgd2hpbGUgKGNhY2hlUXVldWUubGVuZ3RoID4gTUFYX0NBQ0hFX1NJWkUpIHtcbiAgICBkZWxldGUgc2lnbmluZ0tleUNhY2hlW2NhY2hlUXVldWUuc2hpZnQoKSBhcyBzdHJpbmddO1xuICB9XG5cbiAgcmV0dXJuIChzaWduaW5nS2V5Q2FjaGVbY2FjaGVLZXldID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBrZXlQcm9taXNlOiBQcm9taXNlPFNvdXJjZURhdGE+ID0gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgYEFXUzQke2NyZWRlbnRpYWxzLnNlY3JldEFjY2Vzc0tleX1gXG4gICAgKTtcblxuICAgIGZvciAobGV0IHNpZ25hYmxlIG9mIFtzaG9ydERhdGUsIHJlZ2lvbiwgc2VydmljZSwgS0VZX1RZUEVfSURFTlRJRklFUl0pIHtcbiAgICAgIGtleVByb21pc2UgPSBrZXlQcm9taXNlLnRoZW48VWludDhBcnJheT4oaW50ZXJtZWRpYXRlS2V5ID0+XG4gICAgICAgIGhtYWMoc2hhMjU2Q29uc3RydWN0b3IsIGludGVybWVkaWF0ZUtleSwgc2lnbmFibGUpXG4gICAgICApO1xuICAgICAga2V5UHJvbWlzZS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfVxuXG4gICAgKGtleVByb21pc2UgYXMgUHJvbWlzZTxVaW50OEFycmF5PikudGhlbihyZXNvbHZlLCByZWFzb24gPT4ge1xuICAgICAgZGVsZXRlIHNpZ25pbmdLZXlDYWNoZVtjYWNoZUtleV07XG4gICAgICByZWplY3QocmVhc29uKTtcbiAgICB9KTtcbiAgfSkpO1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJDcmVkZW50aWFsQ2FjaGUoKTogdm9pZCB7XG4gIGNhY2hlUXVldWUubGVuZ3RoID0gMDtcbiAgT2JqZWN0LmtleXMoc2lnbmluZ0tleUNhY2hlKS5mb3JFYWNoKGNhY2hlS2V5ID0+IHtcbiAgICBkZWxldGUgc2lnbmluZ0tleUNhY2hlW2NhY2hlS2V5XTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhtYWMoXG4gIGN0b3I6IEhhc2hDb25zdHJ1Y3RvcixcbiAgc2VjcmV0OiBTb3VyY2VEYXRhLFxuICBkYXRhOiBTb3VyY2VEYXRhXG4pOiBQcm9taXNlPFVpbnQ4QXJyYXk+IHtcbiAgY29uc3QgaGFzaCA9IG5ldyBjdG9yKHNlY3JldCk7XG4gIGhhc2gudXBkYXRlKGRhdGEpO1xuICByZXR1cm4gaGFzaC5kaWdlc3QoKTtcbn1cbiJdfQ==

/***/ }),

/***/ 393:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hasHeader(soughtHeader, headers) {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
}
exports.hasHeader = hasHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2hhc0hlYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQWdCLFNBQVMsQ0FBQyxZQUFvQixFQUFFLE9BQWtCO0lBQ2hFLFlBQVksR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUMsS0FBSyxNQUFNLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQzdDLElBQUksWUFBWSxLQUFLLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFURCw4QkFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlckJhZyB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFzSGVhZGVyKHNvdWdodEhlYWRlcjogc3RyaW5nLCBoZWFkZXJzOiBIZWFkZXJCYWcpOiBib29sZWFuIHtcbiAgc291Z2h0SGVhZGVyID0gc291Z2h0SGVhZGVyLnRvTG93ZXJDYXNlKCk7XG4gIGZvciAoY29uc3QgaGVhZGVyTmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKSkge1xuICAgIGlmIChzb3VnaHRIZWFkZXIgPT09IGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl19

/***/ }),

/***/ 400:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = __webpack_require__(794);
function writeRequestBody(httpRequest, request) {
    var expect = request.headers["Expect"] || request.headers["expect"];
    if (expect === "100-continue") {
        httpRequest.on("continue", function () {
            writeBody(httpRequest, request.body);
        });
    }
    else {
        writeBody(httpRequest, request.body);
    }
}
exports.writeRequestBody = writeRequestBody;
function writeBody(httpRequest, body) {
    if (body instanceof stream_1.Readable) {
        // pipe automatically handles end
        body.pipe(httpRequest);
    }
    else if (body) {
        httpRequest.end(body);
    }
    else {
        httpRequest.end();
    }
}
//# sourceMappingURL=write-request-body.js.map

/***/ }),

/***/ 413:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Errors encountered when the client clock and server clock cannot agree on the
 * current time.
 *
 * These errors are retryable, assuming the SDK has enabled clock skew
 * correction.
 */
exports.CLOCK_SKEW_ERROR_CODES = {
    AuthFailure: true,
    InvalidSignatureException: true,
    RequestExpired: true,
    RequestInTheFuture: true,
    RequestTimeTooSkewed: true,
    SignatureDoesNotMatch: true
};
/**
 * Errors encountered when the state presumed by an operation is not yet ready.
 */
exports.STILL_PROCESSING_ERROR_CODES = {
    PriorRequestNotComplete: true
};
/**
 * Errors that indicate the SDK is being throttled.
 *
 * These errors are always retryable.
 */
exports.THROTTLING_ERROR_CODES = {
    BandwidthLimitExceeded: true,
    ProvisionedThroughputExceededException: true,
    RequestLimitExceeded: true,
    RequestThrottled: true,
    RequestThrottledException: true,
    SlowDown: true,
    ThrottledException: true,
    Throttling: true,
    ThrottlingException: true,
    TooManyRequestsException: true
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 415:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
function contentLengthMiddleware(bodyLengthCalculator) {
    var _this = this;
    return function (next) { return function (args) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var request, body, headers, length;
        return tslib_1.__generator(this, function (_a) {
            request = tslib_1.__assign({}, args.request);
            body = request.body, headers = request.headers;
            if (body &&
                Object.keys(headers)
                    .map(function (str) { return str.toLowerCase(); })
                    .indexOf("content-length") === -1) {
                length = bodyLengthCalculator(body);
                if (length !== undefined) {
                    request.headers = tslib_1.__assign({}, request.headers, { "Content-Length": String(length) });
                }
            }
            return [2 /*return*/, next(tslib_1.__assign({}, args, { request: request }))];
        });
    }); }; };
}
exports.contentLengthMiddleware = contentLengthMiddleware;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 417:
/***/ (function(module) {

module.exports = require("crypto");

/***/ }),

/***/ 420:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function iso8601(time) {
    return toDate(time)
        .toISOString()
        .replace(/\.\d{3}Z$/, "Z");
}
exports.iso8601 = iso8601;
function rfc822(time) {
    return toDate(time).toUTCString();
}
exports.rfc822 = rfc822;
function epoch(time) {
    return Math.floor(toDate(time).valueOf() / 1000);
}
exports.epoch = epoch;
function toDate(time) {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
}
exports.toDate = toDate;
function formatTimestamp(time, format) {
    switch (format) {
        case "iso8601":
            return iso8601(time);
        case "rfc822":
            return rfc822(time);
        case "unixTimestamp":
            return epoch(time);
        default:
            throw new Error("Invalid TimestampFormat: " + format);
    }
}
exports.formatTimestamp = formatTimestamp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 422:
/***/ (function(module) {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function (exports) { factory(createExporter(root, createExporter(exports))); });
    }
    else if ( true && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
    }
    else {
        factory(createExporter(root));
    }
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    __extends = function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function (m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    };

    __values = function (o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result["default"] = mod;
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
});


/***/ }),

/***/ 427:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function coreHandler(httpHandler, responseParser) {
    return function (_a) {
        var model = _a.model;
        return function (_a) {
            var request = _a.request, abortSignal = _a.input.$abortSignal;
            return httpHandler
                .handle(request, { abortSignal: abortSignal })
                .then(function (response) { return responseParser.parse(model, response); });
        };
    };
}
exports.coreHandler = coreHandler;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 428:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var RemoteProviderInit_1 = __webpack_require__(466);
var httpGet_1 = __webpack_require__(210);
var ImdsCredentials_1 = __webpack_require__(46);
var retry_1 = __webpack_require__(737);
var property_provider_1 = __webpack_require__(855);
/**
 * Creates a credential provider that will source credentials from the EC2
 * Instance Metadata Service
 */
function fromInstanceMetadata(init) {
    var _this = this;
    if (init === void 0) { init = {}; }
    var _a = RemoteProviderInit_1.providerConfigFromInit(init), timeout = _a.timeout, maxRetries = _a.maxRetries;
    return function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var profile;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, retry_1.retry(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, requestFromEc2Imds(timeout)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); }, maxRetries)];
                case 1:
                    profile = (_a.sent()).trim();
                    return [2 /*return*/, retry_1.retry(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var credsResponse, _a, _b;
                            return tslib_1.__generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        _b = (_a = JSON).parse;
                                        return [4 /*yield*/, requestFromEc2Imds(timeout, profile)];
                                    case 1:
                                        credsResponse = _b.apply(_a, [_c.sent()]);
                                        if (!ImdsCredentials_1.isImdsCredentials(credsResponse)) {
                                            throw new property_provider_1.ProviderError("Invalid response received from instance metadata service.");
                                        }
                                        return [2 /*return*/, ImdsCredentials_1.fromImdsCredentials(credsResponse)];
                                }
                            });
                        }); }, maxRetries)];
            }
        });
    }); };
}
exports.fromInstanceMetadata = fromInstanceMetadata;
var IMDS_IP = "169.254.169.254";
var IMDS_PATH = "latest/meta-data/iam/security-credentials";
function requestFromEc2Imds(timeout, path) {
    return httpGet_1.httpGet({
        host: IMDS_IP,
        path: "/" + IMDS_PATH + "/" + (path ? path : ""),
        timeout: timeout
    }).then(function (buffer) { return buffer.toString(); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbUluc3RhbmNlTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJmcm9tSW5zdGFuY2VNZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwRUFHNkM7QUFDN0Msb0RBQW1EO0FBQ25ELG9FQUcwQztBQUMxQyxnREFBK0M7QUFDL0MsZ0VBQTJEO0FBRTNEOzs7R0FHRztBQUNILFNBQWdCLG9CQUFvQixDQUNsQyxJQUE2QjtJQUQvQixpQkF5QkM7SUF4QkMscUJBQUEsRUFBQSxTQUE2QjtJQUV2QixJQUFBLHNEQUFzRCxFQUFwRCxvQkFBTyxFQUFFLDBCQUEyQyxDQUFDO0lBQzdELE9BQU87Ozs7O3dCQUVILHFCQUFNLGFBQUssQ0FDVDs7b0NBQVkscUJBQU0sa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUE7b0NBQWpDLHNCQUFBLFNBQWlDLEVBQUE7OzZCQUFBLEVBQzdDLFVBQVUsQ0FDWCxFQUFBOztvQkFKRyxPQUFPLEdBQUcsQ0FDZCxTQUdDLENBQ0YsQ0FBQyxJQUFJLEVBQUU7b0JBRVIsc0JBQU8sYUFBSyxDQUFDOzs7Ozt3Q0FDVyxLQUFBLENBQUEsS0FBQSxJQUFJLENBQUEsQ0FBQyxLQUFLLENBQUE7d0NBQzlCLHFCQUFNLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBQTs7d0NBRHRDLGFBQWEsR0FBRyxjQUNwQixTQUEwQyxFQUMzQzt3Q0FDRCxJQUFJLENBQUMsbUNBQWlCLENBQUMsYUFBYSxDQUFDLEVBQUU7NENBQ3JDLE1BQU0sSUFBSSxpQ0FBYSxDQUNyQiwyREFBMkQsQ0FDNUQsQ0FBQzt5Q0FDSDt3Q0FFRCxzQkFBTyxxQ0FBbUIsQ0FBQyxhQUFhLENBQUMsRUFBQzs7OzZCQUMzQyxFQUFFLFVBQVUsQ0FBQyxFQUFDOzs7U0FDaEIsQ0FBQztBQUNKLENBQUM7QUF6QkQsb0RBeUJDO0FBRUQsSUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUM7QUFDbEMsSUFBTSxTQUFTLEdBQUcsMkNBQTJDLENBQUM7QUFFOUQsU0FBUyxrQkFBa0IsQ0FBQyxPQUFlLEVBQUUsSUFBYTtJQUN4RCxPQUFPLGlCQUFPLENBQUM7UUFDYixJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxNQUFJLFNBQVMsVUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFFO1FBQ3pDLE9BQU8sU0FBQTtLQUNSLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlZGVudGlhbFByb3ZpZGVyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQge1xuICBSZW1vdGVQcm92aWRlckluaXQsXG4gIHByb3ZpZGVyQ29uZmlnRnJvbUluaXRcbn0gZnJvbSBcIi4vcmVtb3RlUHJvdmlkZXIvUmVtb3RlUHJvdmlkZXJJbml0XCI7XG5pbXBvcnQgeyBodHRwR2V0IH0gZnJvbSBcIi4vcmVtb3RlUHJvdmlkZXIvaHR0cEdldFwiO1xuaW1wb3J0IHtcbiAgZnJvbUltZHNDcmVkZW50aWFscyxcbiAgaXNJbWRzQ3JlZGVudGlhbHNcbn0gZnJvbSBcIi4vcmVtb3RlUHJvdmlkZXIvSW1kc0NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyByZXRyeSB9IGZyb20gXCIuL3JlbW90ZVByb3ZpZGVyL3JldHJ5XCI7XG5pbXBvcnQgeyBQcm92aWRlckVycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNyZWRlbnRpYWwgcHJvdmlkZXIgdGhhdCB3aWxsIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tIHRoZSBFQzJcbiAqIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21JbnN0YW5jZU1ldGFkYXRhKFxuICBpbml0OiBSZW1vdGVQcm92aWRlckluaXQgPSB7fVxuKTogQ3JlZGVudGlhbFByb3ZpZGVyIHtcbiAgY29uc3QgeyB0aW1lb3V0LCBtYXhSZXRyaWVzIH0gPSBwcm92aWRlckNvbmZpZ0Zyb21Jbml0KGluaXQpO1xuICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2ZpbGUgPSAoXG4gICAgICBhd2FpdCByZXRyeTxzdHJpbmc+KFxuICAgICAgICBhc3luYyAoKSA9PiBhd2FpdCByZXF1ZXN0RnJvbUVjMkltZHModGltZW91dCksXG4gICAgICAgIG1heFJldHJpZXNcbiAgICAgIClcbiAgICApLnRyaW0oKTtcblxuICAgIHJldHVybiByZXRyeShhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjcmVkc1Jlc3BvbnNlID0gSlNPTi5wYXJzZShcbiAgICAgICAgYXdhaXQgcmVxdWVzdEZyb21FYzJJbWRzKHRpbWVvdXQsIHByb2ZpbGUpXG4gICAgICApO1xuICAgICAgaWYgKCFpc0ltZHNDcmVkZW50aWFscyhjcmVkc1Jlc3BvbnNlKSkge1xuICAgICAgICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihcbiAgICAgICAgICBcIkludmFsaWQgcmVzcG9uc2UgcmVjZWl2ZWQgZnJvbSBpbnN0YW5jZSBtZXRhZGF0YSBzZXJ2aWNlLlwiXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmcm9tSW1kc0NyZWRlbnRpYWxzKGNyZWRzUmVzcG9uc2UpO1xuICAgIH0sIG1heFJldHJpZXMpO1xuICB9O1xufVxuXG5jb25zdCBJTURTX0lQID0gXCIxNjkuMjU0LjE2OS4yNTRcIjtcbmNvbnN0IElNRFNfUEFUSCA9IFwibGF0ZXN0L21ldGEtZGF0YS9pYW0vc2VjdXJpdHktY3JlZGVudGlhbHNcIjtcblxuZnVuY3Rpb24gcmVxdWVzdEZyb21FYzJJbWRzKHRpbWVvdXQ6IG51bWJlciwgcGF0aD86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIHJldHVybiBodHRwR2V0KHtcbiAgICBob3N0OiBJTURTX0lQLFxuICAgIHBhdGg6IGAvJHtJTURTX1BBVEh9LyR7cGF0aCA/IHBhdGggOiBcIlwifWAsXG4gICAgdGltZW91dFxuICB9KS50aGVuKGJ1ZmZlciA9PiBidWZmZXIudG9TdHJpbmcoKSk7XG59XG4iXX0=

/***/ }),

/***/ 431:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const os = __webpack_require__(87);
/**
 * Commands
 *
 * Command Format:
 *   ##[name key=value;key=value]message
 *
 * Examples:
 *   ##[warning]This is the user warning message
 *   ##[set-secret name=mypassword]definitelyNotAPassword!
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        // safely append the val - avoid blowing up when attempting to
                        // call .replace() if message is not a string for some reason
                        cmdStr += `${key}=${escape(`${val || ''}`)},`;
                    }
                }
            }
        }
        cmdStr += CMD_STRING;
        // safely append the message - avoid blowing up when attempting to
        // call .replace() if message is not a string for some reason
        const message = `${this.message || ''}`;
        cmdStr += escapeData(message);
        return cmdStr;
    }
}
function escapeData(s) {
    return s.replace(/\r/g, '%0D').replace(/\n/g, '%0A');
}
function escape(s) {
    return s
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/]/g, '%5D')
        .replace(/;/g, '%3B');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 441:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccessKeyInfoInput = {
    type: "structure",
    required: ["AccessKeyId"],
    members: {
        AccessKeyId: {
            shape: {
                type: "string",
                min: 16
            }
        }
    }
};
//# sourceMappingURL=GetAccessKeyInfoInput.js.map

/***/ }),

/***/ 442:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __aws_sdk_middleware_stack = __webpack_require__(475);
const GetAccessKeyInfo_1 = __webpack_require__(945);
class GetAccessKeyInfoCommand {
    constructor(input) {
        this.input = input;
        this.model = GetAccessKeyInfo_1.GetAccessKeyInfo;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: this.model
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}
exports.GetAccessKeyInfoCommand = GetAccessKeyInfoCommand;
//# sourceMappingURL=GetAccessKeyInfoCommand.js.map

/***/ }),

/***/ 458:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(621), exports);
tslib_1.__exportStar(__webpack_require__(259), exports);
tslib_1.__exportStar(__webpack_require__(385), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 463:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var protocol_timestamp_1 = __webpack_require__(588);
var is_array_buffer_1 = __webpack_require__(89);
var is_iterable_1 = __webpack_require__(815);
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder(base64Encoder, utf8Decoder, protocol) {
        this.base64Encoder = base64Encoder;
        this.utf8Decoder = utf8Decoder;
        this.isEC2Query =
            protocol !== undefined && protocol.toLowerCase() === "ec2";
    }
    QueryBuilder.prototype.build = function (_a) {
        var operation = _a.operation, input = _a.input;
        var inputMember = operation.input;
        if (inputMember.shape.type !== "structure") {
            throw new Error("The shape rule must be a structure.");
        }
        return this.serializeStructure("", input, inputMember.shape);
    };
    QueryBuilder.prototype.serialize = function (prefix, input, member) {
        var shape = member.shape;
        if (shape.type === "structure") {
            return this.serializeStructure(prefix, input, shape);
        }
        else if (shape.type === "list") {
            return this.serializeList(prefix, input, shape);
        }
        else if (shape.type === "map") {
            return this.serializeMap(prefix, input, shape);
        }
        else if (shape.type === "blob") {
            return this.serializeBlob(prefix, input, shape);
        }
        else if (shape.type === "timestamp") {
            return this.serializeTimestamp(prefix, input, member);
        }
        else if (shape.type === "string") {
            if (["undefined", "null"].indexOf(typeof input) > -1) {
                throw new Error("expect " + shape.type + " type here.");
            }
            return prefix + "=" + encodeURIComponent(input.toString());
        }
        else if (shape.type === "boolean") {
            return prefix + "=" + Boolean(input);
        }
        else if (shape.type === "float" || shape.type === "integer") {
            if (typeof input === "number" ||
                (typeof input === "string" &&
                    input.length > 0 &&
                    isFinite(Number(input)))) {
                return prefix + "=" + input;
            }
            else {
                throw new Error("expect " + shape.type + " type here.");
            }
        }
        else {
            throw new Error("cannot parse type " + shape.type + ".");
        }
    };
    QueryBuilder.prototype.serializeStructure = function (prefix, input, shape) {
        var e_1, _a;
        var serialized = [];
        if (typeof input !== "object" || input === null) {
            throw new Error("Unable to serialize value of type " + typeof input + " as a" + " structure");
        }
        try {
            for (var _b = tslib_1.__values(Object.keys(input).sort()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (!(key in shape.members)) {
                    continue;
                }
                var _d = shape.members[key], _e = _d.locationName, locationName = _e === void 0 ? key : _e, queryName = _d.queryName;
                var name = queryName || this.capitalizeFirstChar(locationName);
                var suffix = prefix.length !== 0 ? prefix + "." + name : name;
                serialized.push(this.serialize(suffix, input[key], shape.members[key]));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return serialized.join("&");
    };
    QueryBuilder.prototype.serializeList = function (prefix, input, shape) {
        var e_2, _a;
        var serialized = [];
        if (!Array.isArray(input) && !is_iterable_1.isIterable(input)) {
            throw new Error("Unable to serialize value that is neither an array nor an" +
                " iterable as a list");
        }
        var _b = shape.member.locationName, locationName = _b === void 0 ? "member" : _b;
        var listIndex = 0;
        try {
            for (var input_1 = tslib_1.__values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
                var listItem = input_1_1.value;
                var subPrefix = prefix;
                if (this.isEC2Query) {
                    //do nothing when it's ec2
                }
                else if (shape.flattened) {
                    if (shape.member.locationName) {
                        var parts = subPrefix.split(".");
                        parts.pop();
                        parts.push(locationName);
                        subPrefix = parts.join(".");
                    }
                }
                else {
                    subPrefix += "." + locationName;
                }
                subPrefix += "." + (listIndex + 1);
                serialized.push(this.serialize(subPrefix, listItem, shape.member));
                listIndex += 1;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (input_1_1 && !input_1_1.done && (_a = input_1.return)) _a.call(input_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (listIndex === 0) {
            //empty list
            return prefix + "=";
        }
        return serialized.join("&");
    };
    QueryBuilder.prototype.serializeMapEntry = function (prefix, entryCount, key, value, shape) {
        var serializeEntry = [];
        var subPrefix = prefix + (shape.flattened ? "" : ".entry");
        subPrefix += "." + entryCount;
        var keySubPrefix = subPrefix + "." + (shape.key.locationName ? shape.key.locationName : "key");
        var valueSubPrefix = subPrefix + "." + (shape.value.locationName ? shape.value.locationName : "value");
        serializeEntry.push(this.serialize(keySubPrefix, key, shape.key));
        serializeEntry.push(this.serialize(valueSubPrefix, value, shape.value));
        return serializeEntry.join("&");
    };
    QueryBuilder.prototype.serializeMap = function (prefix, input, shape) {
        var e_3, _a, e_4, _b;
        var serialized = [];
        if (is_iterable_1.isIterable(input)) {
            var entryCount = 1;
            try {
                for (var input_2 = tslib_1.__values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
                    var _c = tslib_1.__read(input_2_1.value, 2), key = _c[0], value = _c[1];
                    serialized.push(this.serializeMapEntry(prefix, entryCount, key, value, shape));
                    entryCount += 1;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (input_2_1 && !input_2_1.done && (_a = input_2.return)) _a.call(input_2);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        else {
            if (typeof input !== "object" || input === null) {
                throw new Error("Unable to serialize value that is neither a [key, value]" +
                    " iterable nor an object as a map");
            }
            var entryCount = 1;
            try {
                for (var _d = tslib_1.__values(Object.keys(input)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    serialized.push(this.serializeMapEntry(prefix, entryCount, key, input[key], shape));
                    entryCount += 1;
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        return serialized.join("&");
    };
    QueryBuilder.prototype.serializeBlob = function (prefix, input, shape) {
        if (typeof input === "string") {
            input = this.utf8Decoder(input);
        }
        else if (ArrayBuffer.isView(input)) {
            input = new Uint8Array(input.buffer, input.byteOffset, input.byteLength);
        }
        else if (is_array_buffer_1.isArrayBuffer(input)) {
            input = new Uint8Array(input);
        }
        else {
            throw new Error("Unable to serialize value that is neither a string nor an" +
                " ArrayBuffer nor an ArrayBufferView as a blob");
        }
        return prefix + "=" + this.base64Encoder(input);
    };
    QueryBuilder.prototype.serializeTimestamp = function (prefix, input, member) {
        var shape = member.shape;
        if (["number", "string"].indexOf(typeof input) > -1 ||
            Object.prototype.toString.call(input) === "[object Date]") {
            return prefix + "=" + encodeURIComponent(String(protocol_timestamp_1.formatTimestamp(input, member.timestampFormat || shape.timestampFormat || "iso8601")));
        }
        throw new Error("Unable to serialize value that is neither a string nor a" +
            " number nor a Date object as a timestamp");
    };
    QueryBuilder.prototype.capitalizeFirstChar = function (name) {
        if (this.isEC2Query) {
            return name[0].toUpperCase() + name.slice(1);
        }
        return name;
    };
    return QueryBuilder;
}());
exports.QueryBuilder = QueryBuilder;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 466:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_TIMEOUT = 1000;
exports.DEFAULT_MAX_RETRIES = 0;
function providerConfigFromInit(init) {
    var _a = init.timeout, timeout = _a === void 0 ? exports.DEFAULT_TIMEOUT : _a, _b = init.maxRetries, maxRetries = _b === void 0 ? exports.DEFAULT_MAX_RETRIES : _b;
    return { maxRetries: maxRetries, timeout: timeout };
}
exports.providerConfigFromInit = providerConfigFromInit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVtb3RlUHJvdmlkZXJJbml0LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsicmVtb3RlUHJvdmlkZXIvUmVtb3RlUHJvdmlkZXJJbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0FBZ0JyQyxTQUFnQixzQkFBc0IsQ0FDcEMsSUFBd0I7SUFFaEIsSUFBQSxpQkFBeUIsRUFBekIsc0RBQXlCLEVBQUUsb0JBQWdDLEVBQWhDLDZEQUFnQyxDQUFVO0lBRTdFLE9BQU8sRUFBRSxVQUFVLFlBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO0FBQ2pDLENBQUM7QUFORCx3REFNQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBERUZBVUxUX1RJTUVPVVQgPSAxMDAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfTUFYX1JFVFJJRVMgPSAwO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlbW90ZVByb3ZpZGVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIFRoZSBjb25uZWN0aW9uIHRpbWVvdXQgKGluIG1pbGxpc2Vjb25kcylcbiAgICovXG4gIHRpbWVvdXQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbWVzIHRoZSBIVFRQIGNvbm5lY3Rpb24gc2hvdWxkIGJlIHJldHJpZWRcbiAgICovXG4gIG1heFJldHJpZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgUmVtb3RlUHJvdmlkZXJJbml0ID0gUGFydGlhbDxSZW1vdGVQcm92aWRlckNvbmZpZz47XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlckNvbmZpZ0Zyb21Jbml0KFxuICBpbml0OiBSZW1vdGVQcm92aWRlckluaXRcbik6IFJlbW90ZVByb3ZpZGVyQ29uZmlnIHtcbiAgY29uc3QgeyB0aW1lb3V0ID0gREVGQVVMVF9USU1FT1VULCBtYXhSZXRyaWVzID0gREVGQVVMVF9NQVhfUkVUUklFUyB9ID0gaW5pdDtcblxuICByZXR1cm4geyBtYXhSZXRyaWVzLCB0aW1lb3V0IH07XG59XG4iXX0=

/***/ }),

/***/ 470:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __webpack_require__(431);
const os = __webpack_require__(87);
const path = __webpack_require__(622);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable
 */
function exportVariable(name, val) {
    process.env[name] = val;
    command_1.issueCommand('set-env', { name }, val);
}
exports.exportVariable = exportVariable;
/**
 * exports the variable and registers a secret which will get masked from logs
 * @param name the name of the variable to set
 * @param val value of the secret
 */
function exportSecret(name, val) {
    exportVariable(name, val);
    // the runner will error with not implemented
    // leaving the function but raising the error earlier
    command_1.issueCommand('set-secret', {}, val);
    throw new Error('Not implemented.');
}
exports.exportSecret = exportSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    command_1.issueCommand('add-path', {}, inputPath);
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store
 */
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message
 */
function error(message) {
    command_1.issue('error', message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message
 */
function warning(message) {
    command_1.issue('warning', message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 475:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var MiddlewareStack = /** @class */ (function () {
    function MiddlewareStack() {
        this.entries = [];
        this.sorted = true;
    }
    MiddlewareStack.prototype.add = function (middleware, options) {
        if (options === void 0) { options = {}; }
        var _a = options.step, step = _a === void 0 ? "initialize" : _a, _b = options.priority, priority = _b === void 0 ? 0 : _b, tags = options.tags;
        this.sorted = false;
        this.entries.push({
            middleware: middleware,
            priority: priority,
            step: step,
            tags: tags
        });
    };
    MiddlewareStack.prototype.clone = function () {
        var _a;
        var clone = new MiddlewareStack();
        (_a = clone.entries).push.apply(_a, this.entries);
        clone.sorted = this.sorted;
        return clone;
    };
    MiddlewareStack.prototype.concat = function (from) {
        var _a;
        var clone = new MiddlewareStack();
        (_a = clone.entries).push.apply(_a, this.entries.concat(from.entries));
        clone.sorted = false;
        return clone;
    };
    MiddlewareStack.prototype.remove = function (toRemove) {
        var length = this.entries.length;
        if (typeof toRemove === "string") {
            this.removeByTag(toRemove);
        }
        else {
            this.removeByIdentity(toRemove);
        }
        return this.entries.length < length;
    };
    MiddlewareStack.prototype.filter = function (callbackfn) {
        var filtered = new MiddlewareStack();
        for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
            var entry = _a[_i];
            var options = {
                step: entry.step,
                priority: entry.priority,
                tags: tslib_1.__assign({}, entry.tags)
            };
            if (callbackfn(options)) {
                filtered.entries.push(entry);
            }
        }
        filtered.sorted = this.sorted;
        return filtered;
    };
    MiddlewareStack.prototype.resolve = function (handler, context) {
        if (!this.sorted) {
            this.sort();
        }
        for (var _i = 0, _a = this.entries; _i < _a.length; _i++) {
            var middleware = _a[_i].middleware;
            handler = middleware(handler, context);
        }
        return handler;
    };
    MiddlewareStack.prototype.removeByIdentity = function (toRemove) {
        for (var i = this.entries.length - 1; i >= 0; i--) {
            if (this.entries[i].middleware === toRemove) {
                this.entries.splice(i, 1);
            }
        }
    };
    MiddlewareStack.prototype.removeByTag = function (toRemove) {
        for (var i = this.entries.length - 1; i >= 0; i--) {
            var tags = this.entries[i].tags;
            if (tags && toRemove in tags) {
                this.entries.splice(i, 1);
            }
        }
    };
    MiddlewareStack.prototype.sort = function () {
        this.entries.sort(function (a, b) {
            var stepWeight = stepWeights[a.step] - stepWeights[b.step];
            return stepWeight || a.priority - b.priority;
        });
        this.sorted = true;
    };
    return MiddlewareStack;
}());
exports.MiddlewareStack = MiddlewareStack;
var stepWeights = {
    initialize: 4,
    serialize: 3,
    build: 2,
    finalize: 1
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBK0JBO0lBQUE7UUFLbUIsWUFBTyxHQUFtRCxFQUFFLENBQUM7UUFDdEUsV0FBTSxHQUFZLElBQUksQ0FBQztJQTZIakMsQ0FBQztJQXZHQyw2QkFBRyxHQUFILFVBQ0UsVUFBcUMsRUFDckMsT0FBNEI7UUFBNUIsd0JBQUEsRUFBQSxZQUE0QjtRQUVwQixJQUFBLGlCQUFtQixFQUFuQix3Q0FBbUIsRUFBRSxxQkFBWSxFQUFaLGlDQUFZLEVBQUUsbUJBQUksQ0FBYTtRQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNoQixVQUFVLFlBQUE7WUFDVixRQUFRLFVBQUE7WUFDUixJQUFJLE1BQUE7WUFDSixJQUFJLE1BQUE7U0FDTCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0JBQUssR0FBTDs7UUFDRSxJQUFNLEtBQUssR0FBRyxJQUFJLGVBQWUsRUFBeUIsQ0FBQztRQUMzRCxDQUFBLEtBQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQSxDQUFDLElBQUksV0FBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ3BDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQ0UsSUFBb0Q7O1FBRXBELElBQU0sS0FBSyxHQUFHLElBQUksZUFBZSxFQUFpQyxDQUFDO1FBQ25FLENBQUEsS0FBQSxLQUFLLENBQUMsT0FBTyxDQUFBLENBQUMsSUFBSSxXQUFLLElBQUksQ0FBQyxPQUFlLFFBQUssSUFBSSxDQUFDLE9BQU8sR0FBRTtRQUM5RCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNyQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxnQ0FBTSxHQUFOLFVBQU8sUUFBNEM7UUFDekMsSUFBQSw0QkFBTSxDQUFrQjtRQUNoQyxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakM7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QyxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUNFLFVBQXVEO1FBRXZELElBQU0sUUFBUSxHQUFHLElBQUksZUFBZSxFQUF5QixDQUFDO1FBQzlELEtBQW9CLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVksRUFBRTtZQUE3QixJQUFNLEtBQUssU0FBQTtZQUNkLElBQU0sT0FBTyxHQUFtQjtnQkFDOUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUNoQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7Z0JBQ3hCLElBQUksdUJBQ0MsS0FBSyxDQUFDLElBQUksQ0FDZDthQUNGLENBQUM7WUFDRixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDdkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7U0FDRjtRQUNELFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM5QixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUNFLE9BQXVELEVBQ3ZELE9BQWdDO1FBRWhDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO1FBRUQsS0FBNkIsVUFBWSxFQUFaLEtBQUEsSUFBSSxDQUFDLE9BQU8sRUFBWixjQUFZLEVBQVosSUFBWSxFQUFFO1lBQTlCLElBQUEsOEJBQVU7WUFDckIsT0FBTyxHQUFHLFVBQVUsQ0FDbEIsT0FBcUMsRUFDckMsT0FBTyxDQUNELENBQUM7U0FDVjtRQUVELE9BQU8sT0FBeUMsQ0FBQztJQUNuRCxDQUFDO0lBRU8sMENBQWdCLEdBQXhCLFVBQXlCLFFBQW1DO1FBQzFELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxRQUFRLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMzQjtTQUNGO0lBQ0gsQ0FBQztJQUVPLHFDQUFXLEdBQW5CLFVBQW9CLFFBQWdCO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsSUFBQSwyQkFBSSxDQUFxQjtZQUNqQyxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDM0I7U0FDRjtJQUNILENBQUM7SUFFTyw4QkFBSSxHQUFaO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNyQixJQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0QsT0FBTyxVQUFVLElBQUksQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQW5JRCxJQW1JQztBQW5JWSwwQ0FBZTtBQXFJNUIsSUFBTSxXQUFXLEdBQUc7SUFDbEIsVUFBVSxFQUFFLENBQUM7SUFDYixTQUFTLEVBQUUsQ0FBQztJQUNaLEtBQUssRUFBRSxDQUFDO0lBQ1IsUUFBUSxFQUFFLENBQUM7Q0FDWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQnVpbGRIYW5kbGVyT3B0aW9ucyxcbiAgRmluYWxpemVIYW5kbGVyLFxuICBGaW5hbGl6ZUhhbmRsZXJPcHRpb25zLFxuICBGaW5hbGl6ZU1pZGRsZXdhcmUsXG4gIEhhbmRsZXIsXG4gIEhhbmRsZXJFeGVjdXRpb25Db250ZXh0LFxuICBIYW5kbGVyT3B0aW9ucyxcbiAgTWlkZGxld2FyZSxcbiAgTWlkZGxld2FyZVN0YWNrIGFzIElNaWRkbGV3YXJlU3RhY2ssXG4gIFNlcmlhbGl6ZUhhbmRsZXJPcHRpb25zLFxuICBTdGVwXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5pbnRlcmZhY2UgSGFuZGxlckxpc3RFbnRyeTxcbiAgSW5wdXQgZXh0ZW5kcyBvYmplY3QsXG4gIE91dHB1dCBleHRlbmRzIG9iamVjdCxcbiAgU3RyZWFtXG4+IHtcbiAgc3RlcDogU3RlcDtcbiAgcHJpb3JpdHk6IG51bWJlcjtcbiAgbWlkZGxld2FyZTogTWlkZGxld2FyZTxJbnB1dCwgT3V0cHV0PjtcbiAgdGFncz86IHsgW3RhZzogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWlkZGxld2FyZVN0YWNrPFxuICBJbnB1dCBleHRlbmRzIG9iamVjdCxcbiAgT3V0cHV0IGV4dGVuZHMgb2JqZWN0LFxuICBTdHJlYW0gPSBVaW50OEFycmF5XG4+IGV4dGVuZHMgSU1pZGRsZXdhcmVTdGFjazxJbnB1dCwgT3V0cHV0LCBTdHJlYW0+IHt9XG5cbmV4cG9ydCBjbGFzcyBNaWRkbGV3YXJlU3RhY2s8XG4gIElucHV0IGV4dGVuZHMgb2JqZWN0LFxuICBPdXRwdXQgZXh0ZW5kcyBvYmplY3QsXG4gIFN0cmVhbSA9IFVpbnQ4QXJyYXlcbj4ge1xuICBwcml2YXRlIHJlYWRvbmx5IGVudHJpZXM6IEFycmF5PEhhbmRsZXJMaXN0RW50cnk8SW5wdXQsIE91dHB1dCwgU3RyZWFtPj4gPSBbXTtcbiAgcHJpdmF0ZSBzb3J0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGFkZChcbiAgICBtaWRkbGV3YXJlOiBNaWRkbGV3YXJlPElucHV0LCBPdXRwdXQ+LFxuICAgIG9wdGlvbnM/OiBIYW5kbGVyT3B0aW9ucyAmIHsgc3RlcD86IFwiaW5pdGlhbGl6ZVwiIH1cbiAgKTogdm9pZDtcblxuICBhZGQoXG4gICAgbWlkZGxld2FyZTogTWlkZGxld2FyZTxJbnB1dCwgT3V0cHV0PixcbiAgICBvcHRpb25zOiBTZXJpYWxpemVIYW5kbGVyT3B0aW9uc1xuICApOiB2b2lkO1xuXG4gIGFkZChcbiAgICBtaWRkbGV3YXJlOiBGaW5hbGl6ZU1pZGRsZXdhcmU8SW5wdXQsIE91dHB1dCwgU3RyZWFtPixcbiAgICBvcHRpb25zOiBCdWlsZEhhbmRsZXJPcHRpb25zXG4gICk6IHZvaWQ7XG5cbiAgYWRkKFxuICAgIG1pZGRsZXdhcmU6IEZpbmFsaXplTWlkZGxld2FyZTxJbnB1dCwgT3V0cHV0LCBTdHJlYW0+LFxuICAgIG9wdGlvbnM6IEZpbmFsaXplSGFuZGxlck9wdGlvbnNcbiAgKTogdm9pZDtcblxuICBhZGQoXG4gICAgbWlkZGxld2FyZTogTWlkZGxld2FyZTxJbnB1dCwgT3V0cHV0PixcbiAgICBvcHRpb25zOiBIYW5kbGVyT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHsgc3RlcCA9IFwiaW5pdGlhbGl6ZVwiLCBwcmlvcml0eSA9IDAsIHRhZ3MgfSA9IG9wdGlvbnM7XG4gICAgdGhpcy5zb3J0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmVudHJpZXMucHVzaCh7XG4gICAgICBtaWRkbGV3YXJlLFxuICAgICAgcHJpb3JpdHksXG4gICAgICBzdGVwLFxuICAgICAgdGFnc1xuICAgIH0pO1xuICB9XG5cbiAgY2xvbmUoKTogSU1pZGRsZXdhcmVTdGFjazxJbnB1dCwgT3V0cHV0LCBTdHJlYW0+IHtcbiAgICBjb25zdCBjbG9uZSA9IG5ldyBNaWRkbGV3YXJlU3RhY2s8SW5wdXQsIE91dHB1dCwgU3RyZWFtPigpO1xuICAgIGNsb25lLmVudHJpZXMucHVzaCguLi50aGlzLmVudHJpZXMpO1xuICAgIGNsb25lLnNvcnRlZCA9IHRoaXMuc29ydGVkO1xuICAgIHJldHVybiBjbG9uZTtcbiAgfVxuXG4gIGNvbmNhdDxJbnB1dFR5cGUgZXh0ZW5kcyBJbnB1dCwgT3V0cHV0VHlwZSBleHRlbmRzIE91dHB1dD4oXG4gICAgZnJvbTogTWlkZGxld2FyZVN0YWNrPElucHV0VHlwZSwgT3V0cHV0VHlwZSwgU3RyZWFtPlxuICApOiBNaWRkbGV3YXJlU3RhY2s8SW5wdXRUeXBlLCBPdXRwdXRUeXBlLCBTdHJlYW0+IHtcbiAgICBjb25zdCBjbG9uZSA9IG5ldyBNaWRkbGV3YXJlU3RhY2s8SW5wdXRUeXBlLCBPdXRwdXRUeXBlLCBTdHJlYW0+KCk7XG4gICAgY2xvbmUuZW50cmllcy5wdXNoKC4uLih0aGlzLmVudHJpZXMgYXMgYW55KSwgLi4uZnJvbS5lbnRyaWVzKTtcbiAgICBjbG9uZS5zb3J0ZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gY2xvbmU7XG4gIH1cblxuICByZW1vdmUodG9SZW1vdmU6IE1pZGRsZXdhcmU8SW5wdXQsIE91dHB1dD4gfCBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcy5lbnRyaWVzO1xuICAgIGlmICh0eXBlb2YgdG9SZW1vdmUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHRoaXMucmVtb3ZlQnlUYWcodG9SZW1vdmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUJ5SWRlbnRpdHkodG9SZW1vdmUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVudHJpZXMubGVuZ3RoIDwgbGVuZ3RoO1xuICB9XG5cbiAgZmlsdGVyKFxuICAgIGNhbGxiYWNrZm46IChoYW5kbGVyT3B0aW9uczogSGFuZGxlck9wdGlvbnMpID0+IGJvb2xlYW5cbiAgKTogTWlkZGxld2FyZVN0YWNrPElucHV0LCBPdXRwdXQsIFN0cmVhbT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkID0gbmV3IE1pZGRsZXdhcmVTdGFjazxJbnB1dCwgT3V0cHV0LCBTdHJlYW0+KCk7XG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IEhhbmRsZXJPcHRpb25zID0ge1xuICAgICAgICBzdGVwOiBlbnRyeS5zdGVwLFxuICAgICAgICBwcmlvcml0eTogZW50cnkucHJpb3JpdHksXG4gICAgICAgIHRhZ3M6IHtcbiAgICAgICAgICAuLi5lbnRyeS50YWdzXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoY2FsbGJhY2tmbihvcHRpb25zKSkge1xuICAgICAgICBmaWx0ZXJlZC5lbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmaWx0ZXJlZC5zb3J0ZWQgPSB0aGlzLnNvcnRlZDtcbiAgICByZXR1cm4gZmlsdGVyZWQ7XG4gIH1cblxuICByZXNvbHZlPElucHV0VHlwZSBleHRlbmRzIElucHV0LCBPdXRwdXRUeXBlIGV4dGVuZHMgT3V0cHV0PihcbiAgICBoYW5kbGVyOiBGaW5hbGl6ZUhhbmRsZXI8SW5wdXRUeXBlLCBPdXRwdXRUeXBlLCBTdHJlYW0+LFxuICAgIGNvbnRleHQ6IEhhbmRsZXJFeGVjdXRpb25Db250ZXh0XG4gICk6IEhhbmRsZXI8SW5wdXRUeXBlLCBPdXRwdXRUeXBlPiB7XG4gICAgaWYgKCF0aGlzLnNvcnRlZCkge1xuICAgICAgdGhpcy5zb3J0KCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB7IG1pZGRsZXdhcmUgfSBvZiB0aGlzLmVudHJpZXMpIHtcbiAgICAgIGhhbmRsZXIgPSBtaWRkbGV3YXJlKFxuICAgICAgICBoYW5kbGVyIGFzIEhhbmRsZXI8SW5wdXQsIE91dHB1dFR5cGU+LFxuICAgICAgICBjb250ZXh0XG4gICAgICApIGFzIGFueTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFuZGxlciBhcyBIYW5kbGVyPElucHV0VHlwZSwgT3V0cHV0VHlwZT47XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUJ5SWRlbnRpdHkodG9SZW1vdmU6IE1pZGRsZXdhcmU8SW5wdXQsIE91dHB1dD4pIHtcbiAgICBmb3IgKGxldCBpID0gdGhpcy5lbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAodGhpcy5lbnRyaWVzW2ldLm1pZGRsZXdhcmUgPT09IHRvUmVtb3ZlKSB7XG4gICAgICAgIHRoaXMuZW50cmllcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVCeVRhZyh0b1JlbW92ZTogc3RyaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuZW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgeyB0YWdzIH0gPSB0aGlzLmVudHJpZXNbaV07XG4gICAgICBpZiAodGFncyAmJiB0b1JlbW92ZSBpbiB0YWdzKSB7XG4gICAgICAgIHRoaXMuZW50cmllcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzb3J0KCk6IHZvaWQge1xuICAgIHRoaXMuZW50cmllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBjb25zdCBzdGVwV2VpZ2h0ID0gc3RlcFdlaWdodHNbYS5zdGVwXSAtIHN0ZXBXZWlnaHRzW2Iuc3RlcF07XG4gICAgICByZXR1cm4gc3RlcFdlaWdodCB8fCBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcbiAgICB9KTtcbiAgICB0aGlzLnNvcnRlZCA9IHRydWU7XG4gIH1cbn1cblxuY29uc3Qgc3RlcFdlaWdodHMgPSB7XG4gIGluaXRpYWxpemU6IDQsXG4gIHNlcmlhbGl6ZTogMyxcbiAgYnVpbGQ6IDIsXG4gIGZpbmFsaXplOiAxXG59O1xuIl19

/***/ }),

/***/ 484:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var is_array_buffer_1 = __webpack_require__(199);
var response_metadata_extractor_1 = __webpack_require__(351);
var QueryParser = /** @class */ (function () {
    function QueryParser(bodyParser, parseServiceException, streamCollector, utf8Encoder) {
        this.bodyParser = bodyParser;
        this.parseServiceException = parseServiceException;
        this.streamCollector = streamCollector;
        this.utf8Encoder = utf8Encoder;
    }
    QueryParser.prototype.parse = function (operation, input) {
        var _this = this;
        return this.resolveBodyString(input)
            .then(function (body) {
            if (input.statusCode > 299) {
                throw _this.parseServiceException(operation, tslib_1.__assign({}, input, { body: body }), _this.bodyParser);
            }
            return _this.bodyParser.parse(operation.output, body);
        })
            .then(function (parsedBody) {
            var responseMetadata = response_metadata_extractor_1.extractMetadata(input);
            _this.updateMetadata(parsedBody, responseMetadata);
            return parsedBody;
        });
    };
    QueryParser.prototype.resolveBodyString = function (input) {
        var _this = this;
        var _a = input.body, body = _a === void 0 ? "" : _a;
        if (typeof body === "string") {
            return Promise.resolve(body);
        }
        var bufferPromise;
        if (ArrayBuffer.isView(body)) {
            bufferPromise = Promise.resolve(new Uint8Array(body.buffer, body.byteLength, body.byteOffset));
        }
        else if (is_array_buffer_1.isArrayBuffer(body)) {
            bufferPromise = Promise.resolve(new Uint8Array(body, 0, body.byteLength));
        }
        else {
            bufferPromise = this.streamCollector(body);
        }
        return bufferPromise.then(function (buffer) { return _this.utf8Encoder(buffer); });
    };
    QueryParser.prototype.updateMetadata = function (parsedObj, responseMetadata) {
        var bodyMetadata = parsedObj.$metadata;
        if (bodyMetadata && bodyMetadata.requestId) {
            responseMetadata.requestId = bodyMetadata.requestId;
        }
        parsedObj.$metadata = responseMetadata;
    };
    return QueryParser;
}());
exports.QueryParser = QueryParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnlQYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvUXVlcnlQYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNERBQXlEO0FBQ3pELG9GQUF1RTtBQWF2RTtJQUNFLHFCQUNtQixVQUFzQixFQUN0QixxQkFBNkMsRUFDN0MsZUFBNEMsRUFDNUMsV0FBb0I7UUFIcEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXdCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUE2QjtRQUM1QyxnQkFBVyxHQUFYLFdBQVcsQ0FBUztJQUNwQyxDQUFDO0lBRUosMkJBQUssR0FBTCxVQUNFLFNBQXlCLEVBQ3pCLEtBQStCO1FBRmpDLGlCQXVCQztRQW5CQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNSLElBQUksS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7Z0JBQzFCLE1BQU0sS0FBSSxDQUFDLHFCQUFxQixDQUM5QixTQUFTLHVCQUNKLEtBQUssSUFBRSxJQUFJLE1BQUEsS0FDaEIsS0FBSSxDQUFDLFVBQVUsQ0FDaEIsQ0FBQzthQUNIO1lBQ0QsT0FBTyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FDMUIsU0FBUyxDQUFDLE1BQU0sRUFDaEIsSUFBSSxDQUNMLENBQUM7UUFDSixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxVQUFVO1lBQ2QsSUFBSSxnQkFBZ0IsR0FBRyw2Q0FBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDbEQsT0FBTyxVQUF3QixDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHVDQUFpQixHQUF6QixVQUEwQixLQUErQjtRQUF6RCxpQkFnQkM7UUFmUyxJQUFBLGVBQVMsRUFBVCw4QkFBUyxDQUFXO1FBQzVCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksYUFBa0MsQ0FBQztRQUN2QyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsYUFBYSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQzdCLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzlELENBQUM7U0FDSDthQUFNLElBQUksK0JBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixhQUFhLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU8sb0NBQWMsR0FBdEIsVUFDRSxTQUFrQyxFQUNsQyxnQkFBa0M7UUFFbEMsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUN2QyxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQzFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO1NBQ3JEO1FBQ0QsU0FBUyxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztJQUN6QyxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBN0RELElBNkRDO0FBN0RZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNBcnJheUJ1ZmZlciB9IGZyb20gXCJAYXdzLXNkay9pcy1hcnJheS1idWZmZXJcIjtcbmltcG9ydCB7IGV4dHJhY3RNZXRhZGF0YSB9IGZyb20gXCJAYXdzLXNkay9yZXNwb25zZS1tZXRhZGF0YS1leHRyYWN0b3JcIjtcbmltcG9ydCB7XG4gIEJvZHlQYXJzZXIsXG4gIEVuY29kZXIsXG4gIEh0dHBSZXNwb25zZSxcbiAgTWV0YWRhdGFCZWFyZXIsXG4gIE9wZXJhdGlvbk1vZGVsLFxuICBSZXNwb25zZVBhcnNlcixcbiAgU3RyZWFtQ29sbGVjdG9yLFxuICBSZXNwb25zZU1ldGFkYXRhLFxuICBTZXJ2aWNlRXhjZXB0aW9uUGFyc2VyXG59IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgUXVlcnlQYXJzZXI8U3RyZWFtVHlwZT4gaW1wbGVtZW50cyBSZXNwb25zZVBhcnNlcjxTdHJlYW1UeXBlPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgYm9keVBhcnNlcjogQm9keVBhcnNlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBhcnNlU2VydmljZUV4Y2VwdGlvbjogU2VydmljZUV4Y2VwdGlvblBhcnNlcixcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0cmVhbUNvbGxlY3RvcjogU3RyZWFtQ29sbGVjdG9yPFN0cmVhbVR5cGU+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXRmOEVuY29kZXI6IEVuY29kZXJcbiAgKSB7fVxuXG4gIHBhcnNlPE91dHB1dFR5cGUgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlcj4oXG4gICAgb3BlcmF0aW9uOiBPcGVyYXRpb25Nb2RlbCxcbiAgICBpbnB1dDogSHR0cFJlc3BvbnNlPFN0cmVhbVR5cGU+XG4gICk6IFByb21pc2U8T3V0cHV0VHlwZT4ge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVCb2R5U3RyaW5nKGlucHV0KVxuICAgICAgLnRoZW4oYm9keSA9PiB7XG4gICAgICAgIGlmIChpbnB1dC5zdGF0dXNDb2RlID4gMjk5KSB7XG4gICAgICAgICAgdGhyb3cgdGhpcy5wYXJzZVNlcnZpY2VFeGNlcHRpb24oXG4gICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICB7IC4uLmlucHV0LCBib2R5IH0sXG4gICAgICAgICAgICB0aGlzLmJvZHlQYXJzZXJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmJvZHlQYXJzZXIucGFyc2U8UGFydGlhbDxPdXRwdXRUeXBlPj4oXG4gICAgICAgICAgb3BlcmF0aW9uLm91dHB1dCxcbiAgICAgICAgICBib2R5XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICAgLnRoZW4ocGFyc2VkQm9keSA9PiB7XG4gICAgICAgIGxldCByZXNwb25zZU1ldGFkYXRhID0gZXh0cmFjdE1ldGFkYXRhKGlucHV0KTtcbiAgICAgICAgdGhpcy51cGRhdGVNZXRhZGF0YShwYXJzZWRCb2R5LCByZXNwb25zZU1ldGFkYXRhKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlZEJvZHkgYXMgT3V0cHV0VHlwZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlQm9keVN0cmluZyhpbnB1dDogSHR0cFJlc3BvbnNlPFN0cmVhbVR5cGU+KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBjb25zdCB7IGJvZHkgPSBcIlwiIH0gPSBpbnB1dDtcbiAgICBpZiAodHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYm9keSk7XG4gICAgfVxuICAgIGxldCBidWZmZXJQcm9taXNlOiBQcm9taXNlPFVpbnQ4QXJyYXk+O1xuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoYm9keSkpIHtcbiAgICAgIGJ1ZmZlclByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoXG4gICAgICAgIG5ldyBVaW50OEFycmF5KGJvZHkuYnVmZmVyLCBib2R5LmJ5dGVMZW5ndGgsIGJvZHkuYnl0ZU9mZnNldClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5QnVmZmVyKGJvZHkpKSB7XG4gICAgICBidWZmZXJQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKG5ldyBVaW50OEFycmF5KGJvZHksIDAsIGJvZHkuYnl0ZUxlbmd0aCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidWZmZXJQcm9taXNlID0gdGhpcy5zdHJlYW1Db2xsZWN0b3IoYm9keSk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXJQcm9taXNlLnRoZW4oYnVmZmVyID0+IHRoaXMudXRmOEVuY29kZXIoYnVmZmVyKSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZU1ldGFkYXRhKFxuICAgIHBhcnNlZE9iajogUGFydGlhbDxNZXRhZGF0YUJlYXJlcj4sXG4gICAgcmVzcG9uc2VNZXRhZGF0YTogUmVzcG9uc2VNZXRhZGF0YVxuICApOiB2b2lkIHtcbiAgICBsZXQgYm9keU1ldGFkYXRhID0gcGFyc2VkT2JqLiRtZXRhZGF0YTtcbiAgICBpZiAoYm9keU1ldGFkYXRhICYmIGJvZHlNZXRhZGF0YS5yZXF1ZXN0SWQpIHtcbiAgICAgIHJlc3BvbnNlTWV0YWRhdGEucmVxdWVzdElkID0gYm9keU1ldGFkYXRhLnJlcXVlc3RJZDtcbiAgICB9XG4gICAgcGFyc2VkT2JqLiRtZXRhZGF0YSA9IHJlc3BvbnNlTWV0YWRhdGE7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 490:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _policyDescriptorListType_1 = __webpack_require__(740);
exports.GetFederationTokenInput = {
    type: "structure",
    required: ["Name"],
    members: {
        Name: {
            shape: {
                type: "string",
                min: 2
            }
        },
        Policy: {
            shape: {
                type: "string",
                min: 1
            }
        },
        PolicyArns: {
            shape: _policyDescriptorListType_1._policyDescriptorListType
        },
        DurationSeconds: {
            shape: {
                type: "integer",
                min: 900
            }
        }
    }
};
//# sourceMappingURL=GetFederationTokenInput.js.map

/***/ }),

/***/ 501:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(484), exports);
tslib_1.__exportStar(__webpack_require__(635), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQThCO0FBQzlCLDREQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL1F1ZXJ5UGFyc2VyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9RdWVyeVNlcmlhbGl6ZXJcIjtcbiJdfQ==

/***/ }),

/***/ 515:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(105), exports);
tslib_1.__exportStar(__webpack_require__(95), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 539:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _Credentials_1 = __webpack_require__(799);
const _AssumedRoleUser_1 = __webpack_require__(330);
exports.AssumeRoleOutput = {
    type: "structure",
    required: [],
    members: {
        Credentials: {
            shape: _Credentials_1._Credentials
        },
        AssumedRoleUser: {
            shape: _AssumedRoleUser_1._AssumedRoleUser
        },
        PackedPolicySize: {
            shape: {
                type: "integer"
            }
        }
    }
};
//# sourceMappingURL=AssumeRoleOutput.js.map

/***/ }),

/***/ 544:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = __webpack_require__(293);
const util_buffer_from_1 = __webpack_require__(12);
const crypto_1 = __webpack_require__(417);
class Hash {
    constructor(algorithmIdentifier, secret) {
        this.hash = secret
            ? crypto_1.createHmac(algorithmIdentifier, castSourceData(secret))
            : crypto_1.createHash(algorithmIdentifier);
    }
    update(toHash, encoding) {
        this.hash.update(castSourceData(toHash, encoding));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
}
exports.Hash = Hash;
function castSourceData(toCast, encoding) {
    if (buffer_1.Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return util_buffer_from_1.fromString(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return util_buffer_from_1.fromArrayBuffer(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return util_buffer_from_1.fromArrayBuffer(toCast);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 557:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function iso8601(time) {
    return toDate(time)
        .toISOString()
        .replace(/\.\d{3}Z$/, "Z");
}
exports.iso8601 = iso8601;
function rfc822(time) {
    return toDate(time).toUTCString();
}
exports.rfc822 = rfc822;
function epoch(time) {
    return Math.floor(toDate(time).valueOf() / 1000);
}
exports.epoch = epoch;
function toDate(time) {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
}
exports.toDate = toDate;
function formatTimestamp(time, format) {
    switch (format) {
        case "iso8601":
            return iso8601(time);
        case "rfc822":
            return rfc822(time);
        case "unixTimestamp":
            return epoch(time);
        default:
            throw new Error("Invalid TimestampFormat: " + format);
    }
}
exports.formatTimestamp = formatTimestamp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 560:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __webpack_require__(747);
function calculateBodyLength(body) {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.from(body).length;
    }
    else if (typeof body.byteLength === "number") {
        // handles Uint8Array, ArrayBuffer, Buffer, and ArrayBufferView
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.path === "string") {
        // handles fs readable streams
        return fs_1.lstatSync(body.path).size;
    }
}
exports.calculateBodyLength = calculateBodyLength;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 581:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const process = __webpack_require__(765);
function defaultUserAgent(packageName, packageVersion) {
    let engine = `${process.platform}/${process.version}`;
    if (process.env.AWS_EXECUTION_ENV) {
        engine += ` exec-env/${process.env.AWS_EXECUTION_ENV}`;
    }
    return `aws-sdk-nodejs-v3-${packageName}/${packageVersion} ${engine}`;
}
exports.defaultUserAgent = defaultUserAgent;
function appendToUserAgent(request, userAgentPartial) {
    request.headers["User-Agent"] += ` ${userAgentPartial}`;
}
exports.appendToUserAgent = appendToUserAgent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFHbkMsU0FBZ0IsZ0JBQWdCLENBQzlCLFdBQW1CLEVBQ25CLGNBQXNCO0lBRXRCLElBQUksTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdEQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFO1FBQ2pDLE1BQU0sSUFBSSxhQUFhLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUN4RDtJQUNELE9BQU8scUJBQXFCLFdBQVcsSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFLENBQUM7QUFDeEUsQ0FBQztBQVRELDRDQVNDO0FBRUQsU0FBZ0IsaUJBQWlCLENBQy9CLE9BQW9CLEVBQ3BCLGdCQUF3QjtJQUV4QixPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztBQUMxRCxDQUFDO0FBTEQsOENBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwcm9jZXNzIGZyb20gXCJwcm9jZXNzXCI7XG5pbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFVzZXJBZ2VudChcbiAgcGFja2FnZU5hbWU6IHN0cmluZyxcbiAgcGFja2FnZVZlcnNpb246IHN0cmluZ1xuKTogc3RyaW5nIHtcbiAgbGV0IGVuZ2luZSA9IGAke3Byb2Nlc3MucGxhdGZvcm19LyR7cHJvY2Vzcy52ZXJzaW9ufWA7XG4gIGlmIChwcm9jZXNzLmVudi5BV1NfRVhFQ1VUSU9OX0VOVikge1xuICAgIGVuZ2luZSArPSBgIGV4ZWMtZW52LyR7cHJvY2Vzcy5lbnYuQVdTX0VYRUNVVElPTl9FTlZ9YDtcbiAgfVxuICByZXR1cm4gYGF3cy1zZGstbm9kZWpzLXYzLSR7cGFja2FnZU5hbWV9LyR7cGFja2FnZVZlcnNpb259ICR7ZW5naW5lfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb1VzZXJBZ2VudChcbiAgcmVxdWVzdDogSHR0cFJlcXVlc3QsXG4gIHVzZXJBZ2VudFBhcnRpYWw6IHN0cmluZ1xuKTogdm9pZCB7XG4gIHJlcXVlc3QuaGVhZGVyc1tcIlVzZXItQWdlbnRcIl0gKz0gYCAke3VzZXJBZ2VudFBhcnRpYWx9YDtcbn1cbiJdfQ==

/***/ }),

/***/ 588:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function iso8601(time) {
    return toDate(time)
        .toISOString()
        .replace(/\.\d{3}Z$/, "Z");
}
exports.iso8601 = iso8601;
function rfc822(time) {
    return toDate(time).toUTCString();
}
exports.rfc822 = rfc822;
function epoch(time) {
    return Math.floor(toDate(time).valueOf() / 1000);
}
exports.epoch = epoch;
function toDate(time) {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
}
exports.toDate = toDate;
function formatTimestamp(time, format) {
    switch (format) {
        case "iso8601":
            return iso8601(time);
        case "rfc822":
            return rfc822(time);
        case "unixTimestamp":
            return epoch(time);
        default:
            throw new Error("Invalid TimestampFormat: " + format);
    }
}
exports.formatTimestamp = formatTimestamp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 591:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSessionTokenInput = {
    type: "structure",
    required: [],
    members: {
        DurationSeconds: {
            shape: {
                type: "integer",
                min: 900
            }
        },
        SerialNumber: {
            shape: {
                type: "string",
                min: 9
            }
        },
        TokenCode: {
            shape: {
                type: "string",
                min: 6
            }
        }
    }
};
//# sourceMappingURL=GetSessionTokenInput.js.map

/***/ }),

/***/ 601:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var https = __webpack_require__(211);
var http = __webpack_require__(605);
var querystring_builder_1 = __webpack_require__(135);
var set_connection_timeout_1 = __webpack_require__(145);
var set_socket_timeout_1 = __webpack_require__(78);
var write_request_body_1 = __webpack_require__(400);
var NodeHttpHandler = /** @class */ (function () {
    function NodeHttpHandler(httpOptions) {
        if (httpOptions === void 0) { httpOptions = {}; }
        this.httpOptions = httpOptions;
        var keepAlive = httpOptions.keepAlive;
        this.httpAgent = new http.Agent({ keepAlive: keepAlive });
        this.httpsAgent = new https.Agent({ keepAlive: keepAlive });
    }
    NodeHttpHandler.prototype.destroy = function () {
        this.httpAgent.destroy();
        this.httpsAgent.destroy();
    };
    NodeHttpHandler.prototype.handle = function (request, options) {
        var _this = this;
        // determine which http(s) client to use
        var isSSL = request.protocol === "https:";
        var httpClient = isSSL ? https : http;
        var path = request.path;
        if (request.query) {
            var queryString = querystring_builder_1.buildQueryString(request.query);
            if (queryString) {
                path += "?" + queryString;
            }
        }
        var nodeHttpsOptions = {
            headers: request.headers,
            host: request.hostname,
            method: request.method,
            path: path,
            port: request.port,
            agent: isSSL ? this.httpsAgent : this.httpAgent
        };
        return new Promise(function (resolve, reject) {
            var abortSignal = options && options.abortSignal;
            var _a = _this.httpOptions, connectionTimeout = _a.connectionTimeout, socketTimeout = _a.socketTimeout;
            // if the request was already aborted, prevent doing extra work
            if (abortSignal && abortSignal.aborted) {
                var abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            // create the http request
            var req = httpClient.request(nodeHttpsOptions, function (res) {
                var e_1, _a;
                var httpHeaders = res.headers;
                var transformedHeaders = {};
                try {
                    for (var _b = tslib_1.__values(Object.keys(httpHeaders)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var name = _c.value;
                        var headerValues = httpHeaders[name];
                        transformedHeaders[name] = Array.isArray(headerValues)
                            ? headerValues.join(",")
                            : headerValues;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                var httpResponse = {
                    statusCode: res.statusCode || -1,
                    headers: transformedHeaders,
                    body: res
                };
                resolve(httpResponse);
            });
            req.on("error", reject);
            // wire-up any timeout logic
            set_connection_timeout_1.setConnectionTimeout(req, reject, connectionTimeout);
            set_socket_timeout_1.setSocketTimeout(req, reject, socketTimeout);
            // wire-up abort logic
            if (abortSignal) {
                abortSignal.onabort = function () {
                    // ensure request is destroyed
                    req.abort();
                    var abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            write_request_body_1.writeRequestBody(req, request);
        });
    };
    return NodeHttpHandler;
}());
exports.NodeHttpHandler = NodeHttpHandler;
//# sourceMappingURL=node-http-handler.js.map

/***/ }),

/***/ 605:
/***/ (function(module) {

module.exports = require("http");

/***/ }),

/***/ 612:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GetSessionTokenInput_1 = __webpack_require__(591);
const GetSessionTokenOutput_1 = __webpack_require__(997);
const RegionDisabledException_1 = __webpack_require__(690);
const ServiceMetadata_1 = __webpack_require__(683);
exports.GetSessionToken = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: "GetSessionToken",
    http: {
        method: "POST",
        requestUri: "/"
    },
    input: {
        shape: GetSessionTokenInput_1.GetSessionTokenInput
    },
    output: {
        shape: GetSessionTokenOutput_1.GetSessionTokenOutput,
        resultWrapper: "GetSessionTokenResult"
    },
    errors: [
        {
            shape: RegionDisabledException_1.RegionDisabledException
        }
    ]
};
//# sourceMappingURL=GetSessionToken.js.map

/***/ }),

/***/ 619:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AssumeRoleWithSAMLInput_1 = __webpack_require__(922);
const AssumeRoleWithSAMLOutput_1 = __webpack_require__(926);
const MalformedPolicyDocumentException_1 = __webpack_require__(143);
const PackedPolicyTooLargeException_1 = __webpack_require__(664);
const IDPRejectedClaimException_1 = __webpack_require__(668);
const InvalidIdentityTokenException_1 = __webpack_require__(649);
const ExpiredTokenException_1 = __webpack_require__(381);
const RegionDisabledException_1 = __webpack_require__(690);
const ServiceMetadata_1 = __webpack_require__(683);
exports.AssumeRoleWithSAML = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: "AssumeRoleWithSAML",
    http: {
        method: "POST",
        requestUri: "/"
    },
    input: {
        shape: AssumeRoleWithSAMLInput_1.AssumeRoleWithSAMLInput
    },
    output: {
        shape: AssumeRoleWithSAMLOutput_1.AssumeRoleWithSAMLOutput,
        resultWrapper: "AssumeRoleWithSAMLResult"
    },
    errors: [
        {
            shape: MalformedPolicyDocumentException_1.MalformedPolicyDocumentException
        },
        {
            shape: PackedPolicyTooLargeException_1.PackedPolicyTooLargeException
        },
        {
            shape: IDPRejectedClaimException_1.IDPRejectedClaimException
        },
        {
            shape: InvalidIdentityTokenException_1.InvalidIdentityTokenException
        },
        {
            shape: ExpiredTokenException_1.ExpiredTokenException
        },
        {
            shape: RegionDisabledException_1.RegionDisabledException
        }
    ]
};
//# sourceMappingURL=AssumeRoleWithSAML.js.map

/***/ }),

/***/ 621:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fromEnv_1 = __webpack_require__(259);
var fromSharedConfigFiles_1 = __webpack_require__(385);
var property_provider_1 = __webpack_require__(855);
function defaultProvider(configuration) {
    if (configuration === void 0) { configuration = {}; }
    return property_provider_1.memoize(property_provider_1.chain(fromEnv_1.fromEnv(configuration), fromSharedConfigFiles_1.fromSharedConfigFiles(configuration)));
}
exports.defaultProvider = defaultProvider;
//# sourceMappingURL=defaultProvider.js.map

/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 630:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(763);
var service_error_classification_1 = __webpack_require__(82);
function defaultRetryDecider(retryClockSkewErrors) {
    if (retryClockSkewErrors === void 0) { retryClockSkewErrors = false; }
    return function (error) {
        if (!error) {
            return false;
        }
        if (error.connectionError) {
            return true;
        }
        if (hasMetadata(error) &&
            error.$metadata.httpStatusCode &&
            constants_1.RETRYABLE_STATUS_CODES.has(error.$metadata.httpStatusCode)) {
            return true;
        }
        return (service_error_classification_1.isStillProcessingError(error) ||
            service_error_classification_1.isThrottlingError(error) ||
            (retryClockSkewErrors && service_error_classification_1.isClockSkewError(error)));
    };
}
exports.defaultRetryDecider = defaultRetryDecider;
function hasMetadata(error) {
    return error && error.$metadata;
}
//# sourceMappingURL=retryDecider.js.map

/***/ }),

/***/ 635:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
/**
 * set up http request for services using query protocol including ec2 query
 */
var QuerySerializer = /** @class */ (function () {
    function QuerySerializer(endpoint, bodySerializer) {
        this.endpoint = endpoint;
        this.bodySerializer = bodySerializer;
    }
    QuerySerializer.prototype.serialize = function (operation, input) {
        var operationName = operation.name, apiVersion = operation.metadata.apiVersion;
        return tslib_1.__assign({}, this.endpoint, { headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            }, body: "Action=" + operationName + "&Version=" + apiVersion + "&" +
                this.bodySerializer.build({ operation: operation, input: input }), method: operation.http.method, path: operation.http.requestUri });
    };
    return QuerySerializer;
}());
exports.QuerySerializer = QuerySerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnlTZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1F1ZXJ5U2VyaWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRQTs7R0FFRztBQUNIO0lBRUUseUJBQ21CLFFBQXNCLEVBQ3RCLGNBQXNDO1FBRHRDLGFBQVEsR0FBUixRQUFRLENBQWM7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQXdCO0lBQ3RELENBQUM7SUFFSixtQ0FBUyxHQUFULFVBQVUsU0FBeUIsRUFBRSxLQUFVO1FBRTNDLElBQUEsOEJBQW1CLEVBQ1AsMENBQVUsQ0FDVjtRQUNkLDRCQUNLLElBQUksQ0FBQyxRQUFRLElBQ2hCLE9BQU8sRUFBRTtnQkFDUCxjQUFjLEVBQUUsa0RBQWtEO2FBQ25FLEVBQ0QsSUFBSSxFQUNGLFlBQVUsYUFBYSxpQkFBWSxVQUFVLE1BQUc7Z0JBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxXQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUNqRCxNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQzdCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFDL0I7SUFDSixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBFbmRwb2ludCxcbiAgUmVxdWVzdFNlcmlhbGl6ZXIsXG4gIE9wZXJhdGlvbk1vZGVsLFxuICBCb2R5U2VyaWFsaXplclxufSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuLyoqXG4gKiBzZXQgdXAgaHR0cCByZXF1ZXN0IGZvciBzZXJ2aWNlcyB1c2luZyBxdWVyeSBwcm90b2NvbCBpbmNsdWRpbmcgZWMyIHF1ZXJ5XG4gKi9cbmV4cG9ydCBjbGFzcyBRdWVyeVNlcmlhbGl6ZXI8U3RyZWFtVHlwZT5cbiAgaW1wbGVtZW50cyBSZXF1ZXN0U2VyaWFsaXplcjxTdHJlYW1UeXBlPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZW5kcG9pbnQ6IEh0dHBFbmRwb2ludCxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJvZHlTZXJpYWxpemVyOiBCb2R5U2VyaWFsaXplcjxzdHJpbmc+XG4gICkge31cblxuICBzZXJpYWxpemUob3BlcmF0aW9uOiBPcGVyYXRpb25Nb2RlbCwgaW5wdXQ6IGFueSk6IEh0dHBSZXF1ZXN0PG5ldmVyPiB7XG4gICAgY29uc3Qge1xuICAgICAgbmFtZTogb3BlcmF0aW9uTmFtZSxcbiAgICAgIG1ldGFkYXRhOiB7IGFwaVZlcnNpb24gfVxuICAgIH0gPSBvcGVyYXRpb247XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuZW5kcG9pbnQsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCJcbiAgICAgIH0sXG4gICAgICBib2R5OlxuICAgICAgICBgQWN0aW9uPSR7b3BlcmF0aW9uTmFtZX0mVmVyc2lvbj0ke2FwaVZlcnNpb259JmAgK1xuICAgICAgICB0aGlzLmJvZHlTZXJpYWxpemVyLmJ1aWxkKHsgb3BlcmF0aW9uLCBpbnB1dCB9KSxcbiAgICAgIG1ldGhvZDogb3BlcmF0aW9uLmh0dHAubWV0aG9kLFxuICAgICAgcGF0aDogb3BlcmF0aW9uLmh0dHAucmVxdWVzdFVyaVxuICAgIH07XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 649:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidIdentityTokenException = {
    type: "structure",
    required: [],
    members: {
        message: {
            shape: {
                type: "string"
            }
        }
    },
    exceptionType: "InvalidIdentityTokenException",
    exceptionCode: "InvalidIdentityToken"
};
//# sourceMappingURL=InvalidIdentityTokenException.js.map

/***/ }),

/***/ 653:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var property_provider_1 = __webpack_require__(855);
var child_process_1 = __webpack_require__(129);
var credential_provider_ini_1 = __webpack_require__(787);
var DEFAULT_PROFILE = "default";
exports.ENV_PROFILE = "AWS_PROFILE";
/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
function fromProcess(init) {
    if (init === void 0) { init = {}; }
    return function () {
        return credential_provider_ini_1.parseKnownFiles(init).then(function (profiles) {
            return resolveProcessCredentials(credential_provider_ini_1.getMasterProfileName(init), profiles, init);
        });
    };
}
exports.fromProcess = fromProcess;
function resolveProcessCredentials(profileName, profiles, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var profile, credentialProcess;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    profile = profiles[profileName];
                    if (!profiles[profileName]) return [3 /*break*/, 4];
                    credentialProcess = profile["credential_process"];
                    if (!(credentialProcess !== undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, execPromise(credentialProcess)
                            .then(function (processResult) {
                            var data;
                            try {
                                data = JSON.parse(processResult);
                            }
                            catch (_a) {
                                throw Error("Profile " + profileName + " credential_process returned invalid JSON.");
                            }
                            var version = data.Version, accessKeyId = data.AccessKeyId, secretAccessKey = data.SecretAccessKey, sessionToken = data.SessionToken, expiration = data.Expiration;
                            if (version !== 1) {
                                throw Error("Profile " + profileName + " credential_process did not return Version 1.");
                            }
                            if (accessKeyId === undefined || secretAccessKey === undefined) {
                                throw Error("Profile " + profileName + " credential_process returned invalid credentials.");
                            }
                            var expirationUnix;
                            if (expiration) {
                                var currentTime = new Date();
                                var expireTime = new Date(expiration);
                                if (expireTime < currentTime) {
                                    throw Error("Profile " + profileName + " credential_process returned expired credentials.");
                                }
                                expirationUnix = Math.floor(new Date(expiration).valueOf() / 1000);
                            }
                            return {
                                accessKeyId: accessKeyId,
                                secretAccessKey: secretAccessKey,
                                sessionToken: sessionToken,
                                expirationUnix: expirationUnix
                            };
                        })
                            .catch(function (error) {
                            throw new property_provider_1.ProviderError(error.message);
                        })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: throw new property_provider_1.ProviderError("Profile " + profileName + " did not contain credential_process.");
                case 3: return [3 /*break*/, 5];
                case 4: 
                // If the profile cannot be parsed or does not contain the default or
                // specified profile throw an error. This should be considered a terminal
                // resolution error if a profile has been specified by the user (whether via
                // a parameter, anenvironment variable, or another profile's `source_profile` key).
                throw new property_provider_1.ProviderError("Profile " + profileName + " could not be found in shared credentials file.");
                case 5: return [2 /*return*/];
            }
        });
    });
}
function execPromise(command) {
    return new Promise(function (resolve, reject) {
        child_process_1.exec(command, function (error, stdout, stderr) {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout.trim());
        });
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 662:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._PolicyDescriptorType = {
    type: "structure",
    required: [],
    members: {
        arn: {
            shape: {
                type: "string",
                min: 20
            }
        }
    }
};
//# sourceMappingURL=_PolicyDescriptorType.js.map

/***/ }),

/***/ 664:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PackedPolicyTooLargeException = {
    type: "structure",
    required: [],
    members: {
        message: {
            shape: {
                type: "string"
            }
        }
    },
    exceptionType: "PackedPolicyTooLargeException",
    exceptionCode: "PackedPolicyTooLarge"
};
//# sourceMappingURL=PackedPolicyTooLargeException.js.map

/***/ }),

/***/ 668:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IDPRejectedClaimException = {
    type: "structure",
    required: [],
    members: {
        message: {
            shape: {
                type: "string"
            }
        }
    },
    exceptionType: "IDPRejectedClaimException",
    exceptionCode: "IDPRejectedClaim"
};
//# sourceMappingURL=IDPRejectedClaimException.js.map

/***/ }),

/***/ 683:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceMetadata = {
    apiVersion: "2011-06-15",
    endpointPrefix: "sts",
    protocol: "query",
    serviceAbbreviation: "AWS STS",
    serviceFullName: "AWS Security Token Service",
    serviceId: "STS",
    signatureVersion: "v4",
    uid: "sts-2011-06-15",
    xmlNamespace: { uri: "https://sts.amazonaws.com/doc/2011-06-15/" }
};
exports.clientVersion = "0.1.0-preview.1";
//# sourceMappingURL=ServiceMetadata.js.map

/***/ }),

/***/ 686:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AssumeRoleWithWebIdentityInput_1 = __webpack_require__(66);
const AssumeRoleWithWebIdentityOutput_1 = __webpack_require__(116);
const MalformedPolicyDocumentException_1 = __webpack_require__(143);
const PackedPolicyTooLargeException_1 = __webpack_require__(664);
const IDPRejectedClaimException_1 = __webpack_require__(668);
const IDPCommunicationErrorException_1 = __webpack_require__(1);
const InvalidIdentityTokenException_1 = __webpack_require__(649);
const ExpiredTokenException_1 = __webpack_require__(381);
const RegionDisabledException_1 = __webpack_require__(690);
const ServiceMetadata_1 = __webpack_require__(683);
exports.AssumeRoleWithWebIdentity = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: "AssumeRoleWithWebIdentity",
    http: {
        method: "POST",
        requestUri: "/"
    },
    input: {
        shape: AssumeRoleWithWebIdentityInput_1.AssumeRoleWithWebIdentityInput
    },
    output: {
        shape: AssumeRoleWithWebIdentityOutput_1.AssumeRoleWithWebIdentityOutput,
        resultWrapper: "AssumeRoleWithWebIdentityResult"
    },
    errors: [
        {
            shape: MalformedPolicyDocumentException_1.MalformedPolicyDocumentException
        },
        {
            shape: PackedPolicyTooLargeException_1.PackedPolicyTooLargeException
        },
        {
            shape: IDPRejectedClaimException_1.IDPRejectedClaimException
        },
        {
            shape: IDPCommunicationErrorException_1.IDPCommunicationErrorException
        },
        {
            shape: InvalidIdentityTokenException_1.InvalidIdentityTokenException
        },
        {
            shape: ExpiredTokenException_1.ExpiredTokenException
        },
        {
            shape: RegionDisabledException_1.RegionDisabledException
        }
    ]
};
//# sourceMappingURL=AssumeRoleWithWebIdentity.js.map

/***/ }),

/***/ 687:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __aws_sdk_config_resolver = __webpack_require__(249);
const __aws_sdk_middleware_content_length = __webpack_require__(415);
const __aws_sdk_middleware_header_default = __webpack_require__(85);
const __aws_sdk_middleware_serializer = __webpack_require__(709);
const __aws_sdk_middleware_stack = __webpack_require__(475);
const __aws_sdk_retry_middleware = __webpack_require__(972);
const __aws_sdk_signing_middleware = __webpack_require__(40);
const __aws_sdk_util_user_agent_node = __webpack_require__(581);
const STSConfiguration_1 = __webpack_require__(729);
const ServiceMetadata_1 = __webpack_require__(683);
class STSClient {
    constructor(configuration) {
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
        this.config = __aws_sdk_config_resolver.resolveConfiguration(configuration, STSConfiguration_1.configurationProperties, this.middlewareStack);
        this.middlewareStack.add(__aws_sdk_middleware_serializer.serializerMiddleware(this.config.serializer), {
            step: "serialize",
            priority: 90,
            tags: { SERIALIZER: true }
        });
        this.middlewareStack.add(__aws_sdk_middleware_content_length.contentLengthMiddleware(this.config.bodyLengthChecker), {
            step: "build",
            priority: -80,
            tags: { SET_CONTENT_LENGTH: true }
        });
        if (this.config.maxRetries > 0) {
            this.middlewareStack.add(__aws_sdk_retry_middleware.retryMiddleware(this.config.maxRetries, this.config.retryDecider, this.config.delayDecider), {
                step: "finalize",
                priority: Infinity,
                tags: { RETRY: true }
            });
        }
        this.middlewareStack.add(__aws_sdk_signing_middleware.signingMiddleware(this.config.signer), {
            step: "finalize",
            priority: 0,
            tags: { SIGNATURE: true }
        });
        this.middlewareStack.add(__aws_sdk_middleware_header_default.headerDefault({
            "User-Agent": __aws_sdk_util_user_agent_node.defaultUserAgent(ServiceMetadata_1.ServiceMetadata.serviceId || ServiceMetadata_1.ServiceMetadata.endpointPrefix, ServiceMetadata_1.clientVersion)
        }), {
            step: "build",
            priority: 0,
            tags: { SET_USER_AGENT: true }
        });
    }
    destroy() {
        if (!this.config._user_injected_http_handler) {
            this.config.httpHandler.destroy();
        }
    }
    send(command, cb) {
        const handler = command.resolveMiddleware(this.middlewareStack, this.config);
        if (cb) {
            handler(command)
                .then((result) => cb(null, result), (err) => cb(err))
                .catch(
            // prevent any errors thrown in the callback from triggering an
            // unhandled promise rejection
            () => { });
        }
        else {
            return handler(command);
        }
    }
}
exports.STSClient = STSClient;
//# sourceMappingURL=STSClient.js.map

/***/ }),

/***/ 690:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionDisabledException = {
    type: "structure",
    required: [],
    members: {
        message: {
            shape: {
                type: "string"
            }
        }
    },
    exceptionType: "RegionDisabledException",
    exceptionCode: "RegionDisabledException"
};
//# sourceMappingURL=RegionDisabledException.js.map

/***/ }),

/***/ 696:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __aws_sdk_middleware_stack = __webpack_require__(475);
const GetCallerIdentity_1 = __webpack_require__(317);
class GetCallerIdentityCommand {
    constructor(input) {
        this.input = input;
        this.model = GetCallerIdentity_1.GetCallerIdentity;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: this.model
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}
exports.GetCallerIdentityCommand = GetCallerIdentityCommand;
//# sourceMappingURL=GetCallerIdentityCommand.js.map

/***/ }),

/***/ 709:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
function serializerMiddleware(requestSerializerProvider) {
    var _this = this;
    return function (next, _a) {
        var model = _a.model;
        return function (args) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var requestSerializer, request;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, requestSerializerProvider()];
                    case 1:
                        requestSerializer = _a.sent();
                        request = requestSerializer.serialize(model, args.input);
                        if (request.body && ["GET", "HEAD"].indexOf(request.method) >= 0) {
                            // remove body for GET/HEAD requests (fetch complains)
                            delete request.body;
                        }
                        return [2 /*return*/, next(tslib_1.__assign({}, args, { request: request }))];
                }
            });
        }); };
    };
}
exports.serializerMiddleware = serializerMiddleware;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 711:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __aws_sdk_middleware_stack = __webpack_require__(475);
const GetFederationToken_1 = __webpack_require__(382);
class GetFederationTokenCommand {
    constructor(input) {
        this.input = input;
        this.model = GetFederationToken_1.GetFederationToken;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: this.model
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}
exports.GetFederationTokenCommand = GetFederationTokenCommand;
//# sourceMappingURL=GetFederationTokenCommand.js.map

/***/ }),

/***/ 723:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(763);
/**
 * Calculate a capped, fully-jittered exponential backoff time.
 */
function defaultDelayDecider(delayBase, attempts) {
    return Math.floor(Math.min(constants_1.MAXIMUM_RETRY_DELAY, Math.random() * Math.pow(2, attempts) * delayBase));
}
exports.defaultDelayDecider = defaultDelayDecider;
//# sourceMappingURL=delayDecider.js.map

/***/ }),

/***/ 726:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const property_provider_1 = __webpack_require__(855);
const credential_provider_env_1 = __webpack_require__(76);
const credential_provider_imds_1 = __webpack_require__(879);
const credential_provider_ini_1 = __webpack_require__(787);
const credential_provider_process_1 = __webpack_require__(653);
exports.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
/**
 * Creates a credential provider that will attempt to find credentials from the
 * following sources (listed in order of precedence):
 *   * Environment variables exposed via `process.env`
 *   * Shared credentials and config ini files
 *   * The EC2/ECS Instance Metadata Service
 *
 * The default credential provider will invoke one provider at a time and only
 * continue to the next if no credentials have been located. For example, if
 * the process finds values defined via the `AWS_ACCESS_KEY_ID` and
 * `AWS_SECRET_ACCESS_KEY` environment variables, the files at
 * `~/.aws/credentials` and `~/.aws/config` will not be read, nor will any
 * messages be sent to the Instance Metadata Service.
 *
 * @param init                  Configuration that is passed to each individual
 *                              provider
 *
 * @see fromEnv                 The function used to source credentials from
 *                              environment variables
 * @see fromIni                 The function used to source credentials from INI
 *                              files
 * @see fromProcess             The functino used to sources credentials from
 *                              credential_process in INI files
 * @see fromInstanceMetadata    The function used to source credentials from the
 *                              EC2 Instance Metadata Service
 * @see fromContainerMetadata   The function used to source credentials from the
 *                              ECS Container Metadata Service
 */
function defaultProvider(init = {}) {
    const { profile = process.env[credential_provider_ini_1.ENV_PROFILE] } = init;
    const providerChain = profile
        ? credential_provider_ini_1.fromIni(init)
        : property_provider_1.chain(credential_provider_env_1.fromEnv(), credential_provider_ini_1.fromIni(init), credential_provider_process_1.fromProcess(init), remoteProvider(init));
    return property_provider_1.memoize(providerChain, credentials => credentials.expiration !== undefined &&
        credentials.expiration - getEpochTs() < 300, credentials => credentials.expiration !== undefined);
}
exports.defaultProvider = defaultProvider;
function getEpochTs() {
    return Math.floor(Date.now() / 1000);
}
function remoteProvider(init) {
    if (process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] || process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI]) {
        return credential_provider_imds_1.fromContainerMetadata(init);
    }
    if (process.env[exports.ENV_IMDS_DISABLED]) {
        return () => Promise.reject(new property_provider_1.ProviderError("EC2 Instance Metadata Service access disabled"));
    }
    return credential_provider_imds_1.fromInstanceMetadata(init);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBMkU7QUFDM0UsOEVBQTJEO0FBQzNELGdGQU0yQztBQUMzQyw4RUFJMEM7QUFDMUMsc0ZBRzhDO0FBR2pDLFFBQUEsaUJBQWlCLEdBQUcsMkJBQTJCLENBQUM7QUFFN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQUNILFNBQWdCLGVBQWUsQ0FDN0IsT0FBMkQsRUFBRTtJQUU3RCxNQUFNLEVBQUUsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQ3BELE1BQU0sYUFBYSxHQUFHLE9BQU87UUFDM0IsQ0FBQyxDQUFDLGlDQUFPLENBQUMsSUFBSSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLHlCQUFLLENBQUMsaUNBQU8sRUFBRSxFQUFFLGlDQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUseUNBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUU3RSxPQUFPLDJCQUFPLENBQ1osYUFBYSxFQUNiLFdBQVcsQ0FBQyxFQUFFLENBQ1osV0FBVyxDQUFDLFVBQVUsS0FBSyxTQUFTO1FBQ3BDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsVUFBVSxFQUFFLEdBQUcsR0FBRyxFQUM3QyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUNwRCxDQUFDO0FBQ0osQ0FBQztBQWZELDBDQWVDO0FBRUQsU0FBUyxVQUFVO0lBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLElBQXdCO0lBQzlDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBcUIsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQWlCLENBQUMsRUFBRTtRQUN4RSxPQUFPLGdEQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUFpQixDQUFDLEVBQUU7UUFDbEMsT0FBTyxHQUFHLEVBQUUsQ0FDVixPQUFPLENBQUMsTUFBTSxDQUNaLElBQUksaUNBQWEsQ0FBQywrQ0FBK0MsQ0FBQyxDQUNuRSxDQUFDO0tBQ0w7SUFFRCxPQUFPLCtDQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaGFpbiwgbWVtb2l6ZSwgUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAYXdzLXNkay9wcm9wZXJ0eS1wcm92aWRlclwiO1xuaW1wb3J0IHsgZnJvbUVudiB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWVudlwiO1xuaW1wb3J0IHtcbiAgRU5WX0NNRFNfRlVMTF9VUkksXG4gIEVOVl9DTURTX1JFTEFUSVZFX1VSSSxcbiAgZnJvbUNvbnRhaW5lck1ldGFkYXRhLFxuICBmcm9tSW5zdGFuY2VNZXRhZGF0YSxcbiAgUmVtb3RlUHJvdmlkZXJJbml0XG59IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWltZHNcIjtcbmltcG9ydCB7XG4gIEVOVl9QUk9GSUxFLFxuICBmcm9tSW5pLFxuICBGcm9tSW5pSW5pdFxufSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1pbmlcIjtcbmltcG9ydCB7XG4gIGZyb21Qcm9jZXNzLFxuICBGcm9tUHJvY2Vzc0luaXRcbn0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItcHJvY2Vzc1wiO1xuaW1wb3J0IHsgQ3JlZGVudGlhbFByb3ZpZGVyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBFTlZfSU1EU19ESVNBQkxFRCA9IFwiQVdTX0VDMl9NRVRBREFUQV9ESVNBQkxFRFwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjcmVkZW50aWFsIHByb3ZpZGVyIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGZpbmQgY3JlZGVudGlhbHMgZnJvbSB0aGVcbiAqIGZvbGxvd2luZyBzb3VyY2VzIChsaXN0ZWQgaW4gb3JkZXIgb2YgcHJlY2VkZW5jZSk6XG4gKiAgICogRW52aXJvbm1lbnQgdmFyaWFibGVzIGV4cG9zZWQgdmlhIGBwcm9jZXNzLmVudmBcbiAqICAgKiBTaGFyZWQgY3JlZGVudGlhbHMgYW5kIGNvbmZpZyBpbmkgZmlsZXNcbiAqICAgKiBUaGUgRUMyL0VDUyBJbnN0YW5jZSBNZXRhZGF0YSBTZXJ2aWNlXG4gKlxuICogVGhlIGRlZmF1bHQgY3JlZGVudGlhbCBwcm92aWRlciB3aWxsIGludm9rZSBvbmUgcHJvdmlkZXIgYXQgYSB0aW1lIGFuZCBvbmx5XG4gKiBjb250aW51ZSB0byB0aGUgbmV4dCBpZiBubyBjcmVkZW50aWFscyBoYXZlIGJlZW4gbG9jYXRlZC4gRm9yIGV4YW1wbGUsIGlmXG4gKiB0aGUgcHJvY2VzcyBmaW5kcyB2YWx1ZXMgZGVmaW5lZCB2aWEgdGhlIGBBV1NfQUNDRVNTX0tFWV9JRGAgYW5kXG4gKiBgQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZYCBlbnZpcm9ubWVudCB2YXJpYWJsZXMsIHRoZSBmaWxlcyBhdFxuICogYH4vLmF3cy9jcmVkZW50aWFsc2AgYW5kIGB+Ly5hd3MvY29uZmlnYCB3aWxsIG5vdCBiZSByZWFkLCBub3Igd2lsbCBhbnlcbiAqIG1lc3NhZ2VzIGJlIHNlbnQgdG8gdGhlIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2UuXG4gKlxuICogQHBhcmFtIGluaXQgICAgICAgICAgICAgICAgICBDb25maWd1cmF0aW9uIHRoYXQgaXMgcGFzc2VkIHRvIGVhY2ggaW5kaXZpZHVhbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlclxuICpcbiAqIEBzZWUgZnJvbUVudiAgICAgICAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb21cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gKiBAc2VlIGZyb21JbmkgICAgICAgICAgICAgICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tIElOSVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlc1xuICogQHNlZSBmcm9tUHJvY2VzcyAgICAgICAgICAgICBUaGUgZnVuY3Rpbm8gdXNlZCB0byBzb3VyY2VzIGNyZWRlbnRpYWxzIGZyb21cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbF9wcm9jZXNzIGluIElOSSBmaWxlc1xuICogQHNlZSBmcm9tSW5zdGFuY2VNZXRhZGF0YSAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRUMyIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2VcbiAqIEBzZWUgZnJvbUNvbnRhaW5lck1ldGFkYXRhICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb20gdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVDUyBDb250YWluZXIgTWV0YWRhdGEgU2VydmljZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdFByb3ZpZGVyKFxuICBpbml0OiBGcm9tSW5pSW5pdCAmIFJlbW90ZVByb3ZpZGVySW5pdCAmIEZyb21Qcm9jZXNzSW5pdCA9IHt9XG4pOiBDcmVkZW50aWFsUHJvdmlkZXIge1xuICBjb25zdCB7IHByb2ZpbGUgPSBwcm9jZXNzLmVudltFTlZfUFJPRklMRV0gfSA9IGluaXQ7XG4gIGNvbnN0IHByb3ZpZGVyQ2hhaW4gPSBwcm9maWxlXG4gICAgPyBmcm9tSW5pKGluaXQpXG4gICAgOiBjaGFpbihmcm9tRW52KCksIGZyb21JbmkoaW5pdCksIGZyb21Qcm9jZXNzKGluaXQpLCByZW1vdGVQcm92aWRlcihpbml0KSk7XG5cbiAgcmV0dXJuIG1lbW9pemUoXG4gICAgcHJvdmlkZXJDaGFpbixcbiAgICBjcmVkZW50aWFscyA9PlxuICAgICAgY3JlZGVudGlhbHMuZXhwaXJhdGlvbiAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBjcmVkZW50aWFscy5leHBpcmF0aW9uIC0gZ2V0RXBvY2hUcygpIDwgMzAwLFxuICAgIGNyZWRlbnRpYWxzID0+IGNyZWRlbnRpYWxzLmV4cGlyYXRpb24gIT09IHVuZGVmaW5lZFxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRFcG9jaFRzKCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG59XG5cbmZ1bmN0aW9uIHJlbW90ZVByb3ZpZGVyKGluaXQ6IFJlbW90ZVByb3ZpZGVySW5pdCk6IENyZWRlbnRpYWxQcm92aWRlciB7XG4gIGlmIChwcm9jZXNzLmVudltFTlZfQ01EU19SRUxBVElWRV9VUkldIHx8IHByb2Nlc3MuZW52W0VOVl9DTURTX0ZVTExfVVJJXSkge1xuICAgIHJldHVybiBmcm9tQ29udGFpbmVyTWV0YWRhdGEoaW5pdCk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnZbRU5WX0lNRFNfRElTQUJMRURdKSB7XG4gICAgcmV0dXJuICgpID0+XG4gICAgICBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IFByb3ZpZGVyRXJyb3IoXCJFQzIgSW5zdGFuY2UgTWV0YWRhdGEgU2VydmljZSBhY2Nlc3MgZGlzYWJsZWRcIilcbiAgICAgICk7XG4gIH1cblxuICByZXR1cm4gZnJvbUluc3RhbmNlTWV0YWRhdGEoaW5pdCk7XG59XG4iXX0=

/***/ }),

/***/ 729:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __aws_sdk_core_handler = __webpack_require__(427);
const __aws_sdk_credential_provider_node = __webpack_require__(726);
const __aws_sdk_hash_node = __webpack_require__(544);
const __aws_sdk_node_http_handler = __webpack_require__(898);
const __aws_sdk_protocol_query = __webpack_require__(501);
const __aws_sdk_query_builder = __webpack_require__(463);
const __aws_sdk_query_error_unmarshaller = __webpack_require__(866);
const __aws_sdk_region_provider = __webpack_require__(458);
const __aws_sdk_signature_v4 = __webpack_require__(296);
const __aws_sdk_stream_collector_node = __webpack_require__(41);
const __aws_sdk_url_parser_node = __webpack_require__(963);
const __aws_sdk_util_base64_node = __webpack_require__(291);
const __aws_sdk_util_body_length_node = __webpack_require__(560);
const __aws_sdk_util_utf8_node = __webpack_require__(837);
const __aws_sdk_xml_body_parser = __webpack_require__(332);
exports.configurationProperties = {
    profile: {},
    maxRedirects: {
        defaultValue: 10
    },
    maxRetries: {
        defaultValue: 3
    },
    region: {
        defaultProvider: __aws_sdk_region_provider.defaultProvider,
        normalize: (value) => {
            if (typeof value === "string") {
                const promisified = Promise.resolve(value);
                return () => promisified;
            }
            return value;
        }
    },
    sslEnabled: {
        defaultValue: true
    },
    urlParser: {
        defaultValue: __aws_sdk_url_parser_node.parseUrl
    },
    endpointProvider: {
        defaultValue: (sslEnabled, region) => ({
            protocol: sslEnabled ? "https:" : "http:",
            path: "/",
            hostname: `sts.${region}.amazonaws.com`
        })
    },
    endpoint: {
        defaultProvider: (configuration) => {
            const promisified = configuration
                .region()
                .then(region => configuration.endpointProvider(configuration.sslEnabled, region));
            return () => promisified;
        },
        normalize: (value, configuration) => {
            if (typeof value === "string") {
                const promisified = Promise.resolve(configuration.urlParser(value));
                return () => promisified;
            }
            else if (typeof value === "object") {
                const promisified = Promise.resolve(value);
                return () => promisified;
            }
            // Users are not required to supply an endpoint, so `value`
            // could be undefined. This function, however, will only be
            // invoked if `value` is defined, so the return will never
            // be undefined.
            return value;
        }
    },
    base64Decoder: {
        defaultValue: __aws_sdk_util_base64_node.fromBase64
    },
    base64Encoder: {
        defaultValue: __aws_sdk_util_base64_node.toBase64
    },
    utf8Decoder: {
        defaultValue: __aws_sdk_util_utf8_node.fromUtf8
    },
    utf8Encoder: {
        defaultValue: __aws_sdk_util_utf8_node.toUtf8
    },
    streamCollector: {
        defaultValue: __aws_sdk_stream_collector_node.streamCollector
    },
    serializer: {
        defaultProvider: (configuration) => {
            const promisified = configuration
                .endpoint()
                .then(endpoint => new __aws_sdk_protocol_query.QuerySerializer(endpoint, new __aws_sdk_query_builder.QueryBuilder(configuration.base64Encoder, configuration.utf8Decoder, "query")));
            return () => promisified;
        }
    },
    parser: {
        defaultProvider: (configuration) => new __aws_sdk_protocol_query.QueryParser(new __aws_sdk_xml_body_parser.XmlBodyParser(configuration.base64Decoder), __aws_sdk_query_error_unmarshaller.queryErrorUnmarshaller, configuration.streamCollector, configuration.utf8Encoder)
    },
    keepAlive: {
        defaultValue: true
    },
    _user_injected_http_handler: {
        defaultProvider: (configuration) => !configuration.httpHandler
    },
    httpHandler: {
        defaultProvider: (configuration) => new __aws_sdk_node_http_handler.NodeHttpHandler(configuration)
    },
    handler: {
        defaultProvider: (configuration) => __aws_sdk_core_handler.coreHandler(configuration.httpHandler, configuration.parser)
    },
    bodyLengthChecker: {
        defaultValue: __aws_sdk_util_body_length_node.calculateBodyLength
    },
    retryDecider: {},
    delayDecider: {},
    credentials: {
        defaultProvider: __aws_sdk_credential_provider_node.defaultProvider,
        normalize: (value) => {
            if (typeof value === "object") {
                const promisified = Promise.resolve(value);
                return () => promisified;
            }
            return value;
        }
    },
    sha256: {
        defaultValue: __aws_sdk_hash_node.Hash.bind(null, "sha256")
    },
    signingName: {
        defaultValue: "sts"
    },
    signer: {
        defaultProvider: (configuration) => new __aws_sdk_signature_v4.SignatureV4({
            credentials: configuration.credentials,
            region: configuration.region,
            service: configuration.signingName,
            sha256: configuration.sha256,
            uriEscapePath: true
        })
    }
};
//# sourceMappingURL=STSConfiguration.js.map

/***/ }),

/***/ 737:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal
 */
function retry(toRetry, maxRetries) {
    var promise = toRetry();
    for (var i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
    }
    return promise;
}
exports.retry = retry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cnkuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJyZW1vdGVQcm92aWRlci9yZXRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBOztHQUVHO0FBQ0gsU0FBZ0IsS0FBSyxDQUNuQixPQUE2QixFQUM3QixVQUFrQjtJQUVsQixJQUFJLE9BQU8sR0FBRyxPQUFPLEVBQUUsQ0FBQztJQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ25DLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQVZELHNCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBSZXRyeWFibGVQcm92aWRlcjxUPiB7XG4gICgpOiBQcm9taXNlPFQ+O1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV0cnk8VD4oXG4gIHRvUmV0cnk6IFJldHJ5YWJsZVByb3ZpZGVyPFQ+LFxuICBtYXhSZXRyaWVzOiBudW1iZXJcbik6IFByb21pc2U8VD4ge1xuICBsZXQgcHJvbWlzZSA9IHRvUmV0cnkoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXhSZXRyaWVzOyBpKyspIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS5jYXRjaCh0b1JldHJ5KTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufVxuIl19

/***/ }),

/***/ 740:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _PolicyDescriptorType_1 = __webpack_require__(662);
exports._policyDescriptorListType = {
    type: "list",
    member: {
        shape: _PolicyDescriptorType_1._PolicyDescriptorType
    }
};
//# sourceMappingURL=_policyDescriptorListType.js.map

/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 763:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The base number of milliseconds to use in calculating a suitable cool-down
 * time when a retryable error is encountered.
 */
exports.DEFAULT_RETRY_DELAY_BASE = 100;
/**
 * The maximum amount of time (in milliseconds) that will be used as a delay
 * between retry attempts.
 */
exports.MAXIMUM_RETRY_DELAY = 20 * 1000;
/**
 * HTTP status codes that indicate the operation may be retried.
 */
exports.RETRYABLE_STATUS_CODES = new Set();
[429, 500, 502, 503, 504, 509].forEach(function (code) {
    return exports.RETRYABLE_STATUS_CODES.add(code);
});
/**
 * The retry delay base (in milliseconds) to use when a throttling error is
 * encountered.
 */
exports.THROTTLING_RETRY_DELAY_BASE = 500;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 765:
/***/ (function(module) {

module.exports = require("process");

/***/ }),

/***/ 787:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var property_provider_1 = __webpack_require__(855);
var shared_ini_file_loader_1 = __webpack_require__(272);
var DEFAULT_PROFILE = "default";
exports.ENV_PROFILE = "AWS_PROFILE";
function isStaticCredsProfile(arg) {
    return (Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.aws_access_key_id === "string" &&
        typeof arg.aws_secret_access_key === "string" &&
        ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1);
}
function isAssumeRoleProfile(arg) {
    return (Boolean(arg) &&
        typeof arg === "object" &&
        typeof arg.role_arn === "string" &&
        typeof arg.source_profile === "string" &&
        ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
        ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
        ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1);
}
/**
 * Creates a credential provider that will read from ini files and supports
 * role assumption and multi-factor authentication.
 */
function fromIni(init) {
    if (init === void 0) { init = {}; }
    return function () {
        return parseKnownFiles(init).then(function (profiles) {
            return resolveProfileData(getMasterProfileName(init), profiles, init);
        });
    };
}
exports.fromIni = fromIni;
function getMasterProfileName(init) {
    return init.profile || process.env[exports.ENV_PROFILE] || DEFAULT_PROFILE;
}
exports.getMasterProfileName = getMasterProfileName;
function resolveProfileData(profileName, profiles, options, visitedProfiles) {
    if (visitedProfiles === void 0) { visitedProfiles = {}; }
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _a, data, ExternalId, mfa_serial, RoleArn, _b, RoleSessionName, source_profile, sourceCreds, params, _c, _d, _e;
        return tslib_1.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    data = profiles[profileName];
                    // If this is not the first profile visited, static credentials should be
                    // preferred over role assumption metadata. This special treatment of
                    // second and subsequent hops is to ensure compatibility with the AWS CLI.
                    if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
                        return [2 /*return*/, resolveStaticCredentials(data)];
                    }
                    if (!isAssumeRoleProfile(data)) return [3 /*break*/, 4];
                    ExternalId = data.external_id, mfa_serial = data.mfa_serial, RoleArn = data.role_arn, _b = data.role_session_name, RoleSessionName = _b === void 0 ? "aws-sdk-js-" + Date.now() : _b, source_profile = data.source_profile;
                    if (!options.roleAssumer) {
                        throw new property_provider_1.ProviderError("Profile " + profileName + " requires a role to be assumed, but no" +
                            " role assumption callback was provided.", false);
                    }
                    if (source_profile in visitedProfiles) {
                        throw new property_provider_1.ProviderError("Detected a cycle attempting to resolve credentials for profile" +
                            (" " + getMasterProfileName(options) + ". Profiles visited: ") +
                            Object.keys(visitedProfiles).join(", "), false);
                    }
                    sourceCreds = resolveProfileData(source_profile, profiles, options, tslib_1.__assign({}, visitedProfiles, (_a = {}, _a[source_profile] = true, _a)));
                    params = { RoleArn: RoleArn, RoleSessionName: RoleSessionName, ExternalId: ExternalId };
                    if (!mfa_serial) return [3 /*break*/, 2];
                    if (!options.mfaCodeProvider) {
                        throw new property_provider_1.ProviderError("Profile " + profileName + " requires multi-factor authentication," +
                            " but no MFA code callback was provided.", false);
                    }
                    params.SerialNumber = mfa_serial;
                    _c = params;
                    return [4 /*yield*/, options.mfaCodeProvider(mfa_serial)];
                case 1:
                    _c.TokenCode = _f.sent();
                    _f.label = 2;
                case 2:
                    _e = (_d = options).roleAssumer;
                    return [4 /*yield*/, sourceCreds];
                case 3: return [2 /*return*/, _e.apply(_d, [_f.sent(), params])];
                case 4:
                    // If no role assumption metadata is present, attempt to load static
                    // credentials from the selected profile.
                    if (isStaticCredsProfile(data)) {
                        return [2 /*return*/, resolveStaticCredentials(data)];
                    }
                    // If the profile cannot be parsed or contains neither static credentials
                    // nor role assumption metadata, throw an error. This should be considered a
                    // terminal resolution error if a profile has been specified by the user
                    // (whether via a parameter, an environment variable, or another profile's
                    // `source_profile` key).
                    throw new property_provider_1.ProviderError("Profile " + profileName + " could not be found or parsed in shared" +
                        " credentials file.");
            }
        });
    });
}
function parseKnownFiles(init) {
    var _a = init.loadedConfig, loadedConfig = _a === void 0 ? shared_ini_file_loader_1.loadSharedConfigFiles(init) : _a;
    return loadedConfig.then(function (parsedFiles) {
        var configFile = parsedFiles.configFile, credentialsFile = parsedFiles.credentialsFile;
        return tslib_1.__assign({}, configFile, credentialsFile);
    });
}
exports.parseKnownFiles = parseKnownFiles;
function resolveStaticCredentials(profile) {
    return Promise.resolve({
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 791:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const STSClient_1 = __webpack_require__(687);
const AssumeRoleCommand_1 = __webpack_require__(177);
const AssumeRoleWithSAMLCommand_1 = __webpack_require__(72);
const AssumeRoleWithWebIdentityCommand_1 = __webpack_require__(991);
const DecodeAuthorizationMessageCommand_1 = __webpack_require__(840);
const GetAccessKeyInfoCommand_1 = __webpack_require__(442);
const GetCallerIdentityCommand_1 = __webpack_require__(696);
const GetFederationTokenCommand_1 = __webpack_require__(711);
const GetSessionTokenCommand_1 = __webpack_require__(73);
class STS extends STSClient_1.STSClient {
    assumeRole(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new AssumeRoleCommand_1.AssumeRoleCommand(args);
        if (typeof cb === "function") {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    assumeRoleWithSAML(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new AssumeRoleWithSAMLCommand_1.AssumeRoleWithSAMLCommand(args);
        if (typeof cb === "function") {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    assumeRoleWithWebIdentity(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new AssumeRoleWithWebIdentityCommand_1.AssumeRoleWithWebIdentityCommand(args);
        if (typeof cb === "function") {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    decodeAuthorizationMessage(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new DecodeAuthorizationMessageCommand_1.DecodeAuthorizationMessageCommand(args);
        if (typeof cb === "function") {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getAccessKeyInfo(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetAccessKeyInfoCommand_1.GetAccessKeyInfoCommand(args);
        if (typeof cb === "function") {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getCallerIdentity(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetCallerIdentityCommand_1.GetCallerIdentityCommand(args);
        if (typeof cb === "function") {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getFederationToken(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetFederationTokenCommand_1.GetFederationTokenCommand(args);
        if (typeof cb === "function") {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
    getSessionToken(args, cb) {
        // create the appropriate command and pass it to .send
        const command = new GetSessionTokenCommand_1.GetSessionTokenCommand(args);
        if (typeof cb === "function") {
            this.send(command, cb);
        }
        else {
            return this.send(command);
        }
    }
}
exports.STS = STS;
//# sourceMappingURL=STS.js.map

/***/ }),

/***/ 793:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const cloneRequest_1 = __webpack_require__(379);
const constants_1 = __webpack_require__(909);
/**
 * @internal
 */
function prepareRequest(request) {
    // Create a clone of the request object that does not clone the body
    request = cloneRequest_1.cloneRequest(request);
    for (let headerName of Object.keys(request.headers)) {
        if (constants_1.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    if (!(constants_1.HOST_HEADER in request.headers)) {
        request.headers[constants_1.HOST_HEADER] = request.hostname;
    }
    return request;
}
exports.prepareRequest = prepareRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlcGFyZVJlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHJlcGFyZVJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpREFBOEM7QUFDOUMsMkNBQTZEO0FBRTdEOztHQUVHO0FBQ0gsU0FBZ0IsY0FBYyxDQUM1QixPQUFnQztJQUVoQyxvRUFBb0U7SUFDcEUsT0FBTyxHQUFHLDJCQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEMsS0FBSyxJQUFJLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNuRCxJQUFJLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUM1RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEM7S0FDRjtJQUVELElBQUksQ0FBQyxDQUFDLHVCQUFXLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3JDLE9BQU8sQ0FBQyxPQUFPLENBQUMsdUJBQVcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7S0FDakQ7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBakJELHdDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBjbG9uZVJlcXVlc3QgfSBmcm9tIFwiLi9jbG9uZVJlcXVlc3RcIjtcbmltcG9ydCB7IEdFTkVSQVRFRF9IRUFERVJTLCBIT1NUX0hFQURFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZVJlcXVlc3Q8U3RyZWFtVHlwZT4oXG4gIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PFN0cmVhbVR5cGU+XG4pOiBIdHRwUmVxdWVzdDxTdHJlYW1UeXBlPiB7XG4gIC8vIENyZWF0ZSBhIGNsb25lIG9mIHRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IGRvZXMgbm90IGNsb25lIHRoZSBib2R5XG4gIHJlcXVlc3QgPSBjbG9uZVJlcXVlc3QocmVxdWVzdCk7XG5cbiAgZm9yIChsZXQgaGVhZGVyTmFtZSBvZiBPYmplY3Qua2V5cyhyZXF1ZXN0LmhlYWRlcnMpKSB7XG4gICAgaWYgKEdFTkVSQVRFRF9IRUFERVJTLmluZGV4T2YoaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdC5oZWFkZXJzW2hlYWRlck5hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGlmICghKEhPU1RfSEVBREVSIGluIHJlcXVlc3QuaGVhZGVycykpIHtcbiAgICByZXF1ZXN0LmhlYWRlcnNbSE9TVF9IRUFERVJdID0gcmVxdWVzdC5ob3N0bmFtZTtcbiAgfVxuXG4gIHJldHVybiByZXF1ZXN0O1xufVxuIl19

/***/ }),

/***/ 794:
/***/ (function(module) {

module.exports = require("stream");

/***/ }),

/***/ 799:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports._Credentials = {
    type: "structure",
    required: ["AccessKeyId", "SecretAccessKey", "SessionToken", "Expiration"],
    members: {
        AccessKeyId: {
            shape: {
                type: "string",
                min: 16
            }
        },
        SecretAccessKey: {
            shape: {
                type: "string"
            }
        },
        SessionToken: {
            shape: {
                type: "string"
            }
        },
        Expiration: {
            shape: {
                type: "timestamp"
            }
        }
    }
};
//# sourceMappingURL=_Credentials.js.map

/***/ }),

/***/ 815:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isIterable(arg) {
    return (Boolean(arg) &&
        typeof Symbol !== "undefined" &&
        typeof arg[Symbol.iterator] === "function");
}
exports.isIterable = isIterable;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 820:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isArrayBuffer(arg) {
    return ((typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
        Object.prototype.toString.call(arg) === "[object ArrayBuffer]");
}
exports.isArrayBuffer = isArrayBuffer;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 835:
/***/ (function(module) {

module.exports = require("url");

/***/ }),

/***/ 837:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_buffer_from_1 = __webpack_require__(12);
function fromUtf8(input) {
    const buf = util_buffer_from_1.fromString(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
exports.fromUtf8 = fromUtf8;
function toUtf8(input) {
    return util_buffer_from_1.fromArrayBuffer(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
}
exports.toUtf8 = toUtf8;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 840:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __aws_sdk_middleware_stack = __webpack_require__(475);
const DecodeAuthorizationMessage_1 = __webpack_require__(33);
class DecodeAuthorizationMessageCommand {
    constructor(input) {
        this.input = input;
        this.model = DecodeAuthorizationMessage_1.DecodeAuthorizationMessage;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: this.model
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}
exports.DecodeAuthorizationMessageCommand = DecodeAuthorizationMessageCommand;
//# sourceMappingURL=DecodeAuthorizationMessageCommand.js.map

/***/ }),

/***/ 841:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(909);
/**
 * @internal
 */
function getCanonicalHeaders({ headers }, unsignableHeaders, signableHeaders) {
    const canonical = {};
    for (let headerName of Object.keys(headers).sort()) {
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in constants_1.ALWAYS_UNSIGNABLE_HEADERS ||
            (unsignableHeaders && unsignableHeaders.has(canonicalHeaderName)) ||
            constants_1.PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            constants_1.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders ||
                (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName]
            .trim()
            .replace(/\s+/g, " ");
    }
    return canonical;
}
exports.getCanonicalHeaders = getCanonicalHeaders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q2Fub25pY2FsSGVhZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9nZXRDYW5vbmljYWxIZWFkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBSXFCO0FBRXJCOztHQUVHO0FBQ0gsU0FBZ0IsbUJBQW1CLENBQ2pDLEVBQUUsT0FBTyxFQUFvQixFQUM3QixpQkFBK0IsRUFDL0IsZUFBNkI7SUFFN0IsTUFBTSxTQUFTLEdBQWMsRUFBRSxDQUFDO0lBQ2hDLEtBQUssSUFBSSxVQUFVLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNsRCxNQUFNLG1CQUFtQixHQUFHLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUNFLG1CQUFtQixJQUFJLHFDQUF5QjtZQUNoRCxDQUFDLGlCQUFpQixJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pFLGdDQUFvQixDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUM5Qyw4QkFBa0IsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFDNUM7WUFDQSxJQUNFLENBQUMsZUFBZTtnQkFDaEIsQ0FBQyxlQUFlLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFDOUQ7Z0JBQ0EsU0FBUzthQUNWO1NBQ0Y7UUFFRCxTQUFTLENBQUMsbUJBQW1CLENBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO2FBQ2pELElBQUksRUFBRTthQUNOLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDekI7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBNUJELGtEQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0LCBIZWFkZXJCYWcgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7XG4gIEFMV0FZU19VTlNJR05BQkxFX0hFQURFUlMsXG4gIFBST1hZX0hFQURFUl9QQVRURVJOLFxuICBTRUNfSEVBREVSX1BBVFRFUk5cbn0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYW5vbmljYWxIZWFkZXJzKFxuICB7IGhlYWRlcnMgfTogSHR0cFJlcXVlc3Q8YW55PixcbiAgdW5zaWduYWJsZUhlYWRlcnM/OiBTZXQ8c3RyaW5nPixcbiAgc2lnbmFibGVIZWFkZXJzPzogU2V0PHN0cmluZz5cbik6IEhlYWRlckJhZyB7XG4gIGNvbnN0IGNhbm9uaWNhbDogSGVhZGVyQmFnID0ge307XG4gIGZvciAobGV0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykuc29ydCgpKSB7XG4gICAgY29uc3QgY2Fub25pY2FsSGVhZGVyTmFtZSA9IGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoXG4gICAgICBjYW5vbmljYWxIZWFkZXJOYW1lIGluIEFMV0FZU19VTlNJR05BQkxFX0hFQURFUlMgfHxcbiAgICAgICh1bnNpZ25hYmxlSGVhZGVycyAmJiB1bnNpZ25hYmxlSGVhZGVycy5oYXMoY2Fub25pY2FsSGVhZGVyTmFtZSkpIHx8XG4gICAgICBQUk9YWV9IRUFERVJfUEFUVEVSTi50ZXN0KGNhbm9uaWNhbEhlYWRlck5hbWUpIHx8XG4gICAgICBTRUNfSEVBREVSX1BBVFRFUk4udGVzdChjYW5vbmljYWxIZWFkZXJOYW1lKVxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICAhc2lnbmFibGVIZWFkZXJzIHx8XG4gICAgICAgIChzaWduYWJsZUhlYWRlcnMgJiYgIXNpZ25hYmxlSGVhZGVycy5oYXMoY2Fub25pY2FsSGVhZGVyTmFtZSkpXG4gICAgICApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY2Fub25pY2FsW2Nhbm9uaWNhbEhlYWRlck5hbWVdID0gaGVhZGVyc1toZWFkZXJOYW1lXVxuICAgICAgLnRyaW0oKVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgXCIgXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbm9uaWNhbDtcbn1cbiJdfQ==

/***/ }),

/***/ 853:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (var i = 0; i < 256; i++) {
    var encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = "0" + encodedByte;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
/**
 * Converts a hexadecimal encoded string to a Uint8Array of bytes.
 *
 * @param encoded The hexadecimal encoded string
 */
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    var out = new Uint8Array(encoded.length / 2);
    for (var i = 0; i < encoded.length; i += 2) {
        var encodedByte = encoded.substr(i, 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error("Cannot decode unrecognized sequence " + encodedByte + " as hexadecimal");
        }
    }
    return out;
}
exports.fromHex = fromHex;
/**
 * Converts a Uint8Array of binary data to a hexadecimal encoded string.
 *
 * @param bytes The binary data to encode
 */
function toHex(bytes) {
    var out = "";
    for (var i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}
exports.toHex = toHex;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 855:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(914), exports);
tslib_1.__exportStar(__webpack_require__(338), exports);
tslib_1.__exportStar(__webpack_require__(346), exports);
tslib_1.__exportStar(__webpack_require__(289), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 866:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var constants_1 = __webpack_require__(224);
var response_metadata_extractor_1 = __webpack_require__(351);
var util_error_constructor_1 = __webpack_require__(252);
exports.queryErrorUnmarshaller = function (operation, input, errorBodyParser) {
    var e_1, _a;
    var body = input.body;
    var errors = operation.errors, operationName = operation.name;
    var _b = parseErrorCommonProperties(errorBodyParser, body), errorName = _b.name, errorMessage = _b.message, requestId = _b.requestId;
    var $metadata = tslib_1.__assign({}, response_metadata_extractor_1.extractMetadata(input), { requestId: requestId });
    if (!errorName) {
        return util_error_constructor_1.initServiceException(new Error(), {
            $metadata: $metadata,
            operationName: operationName
        });
    }
    try {
        //parse error properties from API other than name and message
        for (var errors_1 = tslib_1.__values(errors), errors_1_1 = errors_1.next(); !errors_1_1.done; errors_1_1 = errors_1.next()) {
            var errorShape = errors_1_1.value;
            var errorStructure = errorShape.shape;
            if (errorStructure.exceptionCode === errorName ||
                (!errorStructure.exceptionCode &&
                    errorStructure.exceptionType === errorName)) {
                var rawException = parseErrorOwnProperties(errorShape, body, errorBodyParser);
                return util_error_constructor_1.initServiceException(new Error(), {
                    $metadata: tslib_1.__assign({}, response_metadata_extractor_1.extractMetadata(input), { requestId: requestId }),
                    name: errorName,
                    message: errorMessage,
                    rawException: rawException,
                    operationName: operationName
                });
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (errors_1_1 && !errors_1_1.done && (_a = errors_1.return)) _a.call(errors_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    //parsable exception but not documented in API
    return util_error_constructor_1.initServiceException(new Error(), {
        $metadata: tslib_1.__assign({}, response_metadata_extractor_1.extractMetadata(input), { requestId: requestId }),
        name: errorName,
        message: errorMessage,
        operationName: operationName
    });
};
function parseErrorOwnProperties(errorShape, body, errorBodyParser) {
    if (!errorShape.shape.members) {
        return {};
    }
    var wrappedErrorShape = {
        shape: {
            type: "structure",
            required: [],
            members: {
                Error: errorShape
            }
        }
    };
    var rawException = errorBodyParser.parse(wrappedErrorShape, body);
    return rawException.Error;
}
function parseErrorCommonProperties(errorBodyParser, body) {
    var parsedErrorResponse = errorBodyParser.parse(constants_1.ERR_RESP_SHAPE, body);
    var requestId = parsedErrorResponse.$metadata
        ? parsedErrorResponse.$metadata.requestId
        : undefined;
    if (parsedErrorResponse.Error) {
        var _a = parsedErrorResponse.Error, _b = _a.Code, errorName = _b === void 0 ? undefined : _b, _c = _a.Message, errorMessage = _c === void 0 ? undefined : _c, requestId_1 = parsedErrorResponse.$metadata.requestId;
        return { name: errorName, message: errorMessage, requestId: requestId_1 };
    }
    return { name: undefined, message: undefined, requestId: requestId };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 876:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidAuthorizationMessageException = {
    type: "structure",
    required: [],
    members: {
        message: {
            shape: {
                type: "string"
            }
        }
    },
    exceptionType: "InvalidAuthorizationMessageException",
    exceptionCode: "InvalidAuthorizationMessageException"
};
//# sourceMappingURL=InvalidAuthorizationMessageException.js.map

/***/ }),

/***/ 879:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(987), exports);
tslib_1.__exportStar(__webpack_require__(428), exports);
tslib_1.__exportStar(__webpack_require__(466), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrRUFBd0M7QUFDeEMsaUVBQXVDO0FBQ3ZDLDhFQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2Zyb21Db250YWluZXJNZXRhZGF0YVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZnJvbUluc3RhbmNlTWV0YWRhdGFcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3JlbW90ZVByb3ZpZGVyL1JlbW90ZVByb3ZpZGVySW5pdFwiO1xuIl19

/***/ }),

/***/ 880:
/***/ (function(__unusedmodule, exports) {

/*
	JavaScript XML Library
	Plus a bunch of object utility functions
	
	Usage:
		var XML = require('pixl-xml');
		var myxmlstring = '<?xml version="1.0"?><Document>' + 
			'<Simple>Hello</Simple>' + 
			'<Node Key="Value">Content</Node>' + 
			'</Document>';
		
		var tree = XML.parse( myxmlstring, { preserveAttributes: true });
		console.log( tree );
		
		tree.Simple = "Hello2";
		tree.Node._Attribs.Key = "Value2";
		tree.Node._Data = "Content2";
		tree.New = "I added this";
		
		console.log( XML.stringify( tree, 'Document' ) );
	
	Copyright (c) 2004 - 2015 Joseph Huckaby
	Released under the MIT License
	This version is for Node.JS, converted in 2012.
*/

// var fs = require('fs');
// var util = require('util');

// var isArray = Array.isArray || util.isArray; // support for older Node.js
var isArray = Array.isArray;
var xml_header = '<?xml version="1.0"?>';
var sort_args = null;
var re_valid_tag_name = /^\w[\w\-\:\.]*$/;

var XML = (exports.XML = exports.Parser = function XML(args, opts) {
  // class constructor for XML parser class
  // pass in args hash or text to parse
  if (!args) args = "";
  if (isa_hash(args)) {
    for (var key in args) this[key] = args[key];
  } else this.text = args || "";

  // options may be 2nd argument as well
  if (opts) {
    for (var key in opts) this[key] = opts[key];
  }

  this.tree = {};
  this.errors = [];
  this.piNodeList = [];
  this.dtdNodeList = [];
  this.documentNodeName = "";

  if (this.lowerCase) {
    this.attribsKey = this.attribsKey.toLowerCase();
    this.dataKey = this.dataKey.toLowerCase();
  }

  this.patTag.lastIndex = 0;
  if (this.text) this.parse();
});

XML.prototype.preserveDocumentNode = false;
XML.prototype.preserveAttributes = false;
XML.prototype.preserveWhitespace = false;
XML.prototype.lowerCase = false;
XML.prototype.forceArrays = false;

XML.prototype.patTag = /([^<]*?)<([^>]+)>/g;
XML.prototype.patSpecialTag = /^\s*([\!\?])/;
XML.prototype.patPITag = /^\s*\?/;
XML.prototype.patCommentTag = /^\s*\!--/;
XML.prototype.patDTDTag = /^\s*\!DOCTYPE/;
XML.prototype.patCDATATag = /^\s*\!\s*\[\s*CDATA/;
XML.prototype.patStandardTag = /^\s*(\/?)([\w\-\:\.]+)\s*([\s\S]*)$/;
XML.prototype.patSelfClosing = /\/\s*$/;
XML.prototype.patAttrib = new RegExp(
  "([\\w\\-\\:\\.]+)\\s*=\\s*([\\\"\\'])([^\\2]*?)\\2",
  "g"
);
XML.prototype.patPINode = /^\s*\?\s*([\w\-\:]+)\s*(.*)$/;
XML.prototype.patEndComment = /--$/;
XML.prototype.patNextClose = /([^>]*?)>/g;
XML.prototype.patExternalDTDNode = new RegExp(
  '^\\s*\\!DOCTYPE\\s+([\\w\\-\\:]+)\\s+(SYSTEM|PUBLIC)\\s+\\"([^\\"]+)\\"'
);
XML.prototype.patInlineDTDNode = /^\s*\!DOCTYPE\s+([\w\-\:]+)\s+\[/;
XML.prototype.patEndDTD = /\]$/;
XML.prototype.patDTDNode = /^\s*\!DOCTYPE\s+([\w\-\:]+)\s+\[(.*)\]/;
XML.prototype.patEndCDATA = /\]\]$/;
XML.prototype.patCDATANode = /^\s*\!\s*\[\s*CDATA\s*\[([^]*)\]\]/;

XML.prototype.attribsKey = "_Attribs";
XML.prototype.dataKey = "_Data";

XML.prototype.parse = function(branch, name) {
  // parse text into XML tree, recurse for nested nodes
  if (!branch) branch = this.tree;
  if (!name) name = null;
  var foundClosing = false;
  var matches = null;

  // match each tag, plus preceding text
  while ((matches = this.patTag.exec(this.text))) {
    var before = matches[1];
    var tag = matches[2];

    // text leading up to tag = content of parent node
    if (before.match(/\S/)) {
      if (typeof branch[this.dataKey] != "undefined")
        branch[this.dataKey] += " ";
      else branch[this.dataKey] = "";
      branch[this.dataKey] += !this.preserveWhitespace
        ? trim(decode_entities(before))
        : decode_entities(before);
    }

    // parse based on tag type
    if (tag.match(this.patSpecialTag)) {
      // special tag
      if (tag.match(this.patPITag)) tag = this.parsePINode(tag);
      else if (tag.match(this.patCommentTag)) tag = this.parseCommentNode(tag);
      else if (tag.match(this.patDTDTag)) tag = this.parseDTDNode(tag);
      else if (tag.match(this.patCDATATag)) {
        tag = this.parseCDATANode(tag);
        if (typeof branch[this.dataKey] != "undefined")
          branch[this.dataKey] += " ";
        else branch[this.dataKey] = "";
        branch[this.dataKey] += !this.preserveWhitespace
          ? trim(decode_entities(tag))
          : decode_entities(tag);
      } // cdata
      else {
        this.throwParseError("Malformed special tag", tag);
        break;
      } // error

      if (tag == null) break;
      continue;
    } // special tag
    else {
      // Tag is standard, so parse name and attributes (if any)
      var matches = tag.match(this.patStandardTag);
      if (!matches) {
        this.throwParseError("Malformed tag", tag);
        break;
      }

      var closing = matches[1];
      var nodeName = this.lowerCase ? matches[2].toLowerCase() : matches[2];
      var attribsRaw = matches[3];

      // If this is a closing tag, make sure it matches its opening tag
      if (closing) {
        if (nodeName == (name || "")) {
          foundClosing = 1;
          break;
        } else {
          this.throwParseError(
            "Mismatched closing tag (expected </" + name + ">)",
            tag
          );
          break;
        }
      } // closing tag
      else {
        // Not a closing tag, so parse attributes into hash.  If tag
        // is self-closing, no recursive parsing is needed.
        var selfClosing = !!attribsRaw.match(this.patSelfClosing);
        var leaf = {};
        var attribs = leaf;

        // preserve attributes means they go into a sub-hash named "_Attribs"
        // the XML composer honors this for restoring the tree back into XML
        if (this.preserveAttributes) {
          leaf[this.attribsKey] = {};
          attribs = leaf[this.attribsKey];
        }

        // parse attributes
        this.patAttrib.lastIndex = 0;
        while ((matches = this.patAttrib.exec(attribsRaw))) {
          var key = this.lowerCase ? matches[1].toLowerCase() : matches[1];
          attribs[key] = decode_entities(matches[3]);
        } // foreach attrib

        // if no attribs found, but we created the _Attribs subhash, clean it up now
        if (this.preserveAttributes && !num_keys(attribs)) {
          delete leaf[this.attribsKey];
        }

        // Recurse for nested nodes
        if (!selfClosing) {
          this.parse(leaf, nodeName);
          if (this.error()) break;
        }

        // Compress into simple node if text only
        var num_leaf_keys = num_keys(leaf);
        if (typeof leaf[this.dataKey] != "undefined" && num_leaf_keys == 1) {
          leaf = leaf[this.dataKey];
        } else if (!num_leaf_keys) {
          leaf = "";
        }

        // Add leaf to parent branch
        if (typeof branch[nodeName] != "undefined") {
          if (isa_array(branch[nodeName])) {
            branch[nodeName].push(leaf);
          } else {
            var temp = branch[nodeName];
            branch[nodeName] = [temp, leaf];
          }
        } else if (this.forceArrays && branch != this.tree) {
          branch[nodeName] = [leaf];
        } else {
          branch[nodeName] = leaf;
        }

        if (this.error() || branch == this.tree) break;
      } // not closing
    } // standard tag
  } // main reg exp

  // Make sure we found the closing tag
  if (name && !foundClosing) {
    this.throwParseError(
      "Missing closing tag (expected </" + name + ">)",
      name
    );
  }

  // If we are the master node, finish parsing and setup our doc node
  if (branch == this.tree) {
    if (typeof this.tree[this.dataKey] != "undefined")
      delete this.tree[this.dataKey];

    if (num_keys(this.tree) > 1) {
      this.throwParseError(
        "Only one top-level node is allowed in document",
        first_key(this.tree)
      );
      return;
    }

    this.documentNodeName = first_key(this.tree);
    if (this.documentNodeName && !this.preserveDocumentNode) {
      this.tree = this.tree[this.documentNodeName];
    }
  }
};

XML.prototype.throwParseError = function(key, tag) {
  // log error and locate current line number in source XML document
  var parsedSource = this.text.substring(0, this.patTag.lastIndex);
  var eolMatch = parsedSource.match(/\n/g);
  var lineNum = (eolMatch ? eolMatch.length : 0) + 1;
  lineNum -= tag.match(/\n/) ? tag.match(/\n/g).length : 0;

  this.errors.push({
    type: "Parse",
    key: key,
    text: "<" + tag + ">",
    line: lineNum
  });

  // Throw actual error (must wrap parse in try/catch)
  throw new Error(this.getLastError());
};

XML.prototype.error = function() {
  // return number of errors
  return this.errors.length;
};

XML.prototype.getError = function(error) {
  // get formatted error
  var text = "";
  if (!error) return "";

  text = (error.type || "General") + " Error";
  if (error.code) text += " " + error.code;
  text += ": " + error.key;

  if (error.line) text += " on line " + error.line;
  if (error.text) text += ": " + error.text;

  return text;
};

XML.prototype.getLastError = function() {
  // Get most recently thrown error in plain text format
  if (!this.error()) return "";
  return this.getError(this.errors[this.errors.length - 1]);
};

XML.prototype.parsePINode = function(tag) {
  // Parse Processor Instruction Node, e.g. <?xml version="1.0"?>
  if (!tag.match(this.patPINode)) {
    this.throwParseError("Malformed processor instruction", tag);
    return null;
  }

  this.piNodeList.push(tag);
  return tag;
};

XML.prototype.parseCommentNode = function(tag) {
  // Parse Comment Node, e.g. <!-- hello -->
  var matches = null;
  this.patNextClose.lastIndex = this.patTag.lastIndex;

  while (!tag.match(this.patEndComment)) {
    if ((matches = this.patNextClose.exec(this.text))) {
      tag += ">" + matches[1];
    } else {
      this.throwParseError("Unclosed comment tag", tag);
      return null;
    }
  }

  this.patTag.lastIndex = this.patNextClose.lastIndex;
  return tag;
};

XML.prototype.parseDTDNode = function(tag) {
  // Parse Document Type Descriptor Node, e.g. <!DOCTYPE ... >
  var matches = null;

  if (tag.match(this.patExternalDTDNode)) {
    // tag is external, and thus self-closing
    this.dtdNodeList.push(tag);
  } else if (tag.match(this.patInlineDTDNode)) {
    // Tag is inline, so check for nested nodes.
    this.patNextClose.lastIndex = this.patTag.lastIndex;

    while (!tag.match(this.patEndDTD)) {
      if ((matches = this.patNextClose.exec(this.text))) {
        tag += ">" + matches[1];
      } else {
        this.throwParseError("Unclosed DTD tag", tag);
        return null;
      }
    }

    this.patTag.lastIndex = this.patNextClose.lastIndex;

    // Make sure complete tag is well-formed, and push onto DTD stack.
    if (tag.match(this.patDTDNode)) {
      this.dtdNodeList.push(tag);
    } else {
      this.throwParseError("Malformed DTD tag", tag);
      return null;
    }
  } else {
    this.throwParseError("Malformed DTD tag", tag);
    return null;
  }

  return tag;
};

XML.prototype.parseCDATANode = function(tag) {
  // Parse CDATA Node, e.g. <![CDATA[Brooks & Shields]]>
  var matches = null;
  this.patNextClose.lastIndex = this.patTag.lastIndex;

  while (!tag.match(this.patEndCDATA)) {
    if ((matches = this.patNextClose.exec(this.text))) {
      tag += ">" + matches[1];
    } else {
      this.throwParseError("Unclosed CDATA tag", tag);
      return null;
    }
  }

  this.patTag.lastIndex = this.patNextClose.lastIndex;

  if ((matches = tag.match(this.patCDATANode))) {
    return matches[1];
  } else {
    this.throwParseError("Malformed CDATA tag", tag);
    return null;
  }
};

XML.prototype.getTree = function() {
  // get reference to parsed XML tree
  return this.tree;
};

XML.prototype.compose = function(indent_string, eol) {
  // compose tree back into XML
  if (typeof eol == "undefined") eol = "\n";
  var tree = this.tree;
  if (this.preserveDocumentNode) tree = tree[this.documentNodeName];

  var raw = compose_xml(tree, this.documentNodeName, 0, indent_string, eol);
  var body = raw.replace(/^\s*\<\?.+?\?\>\s*/, "");
  var xml = "";

  if (this.piNodeList.length) {
    for (var idx = 0, len = this.piNodeList.length; idx < len; idx++) {
      xml += "<" + this.piNodeList[idx] + ">" + eol;
    }
  } else {
    xml += xml_header + eol;
  }

  if (this.dtdNodeList.length) {
    for (var idx = 0, len = this.dtdNodeList.length; idx < len; idx++) {
      xml += "<" + this.dtdNodeList[idx] + ">" + eol;
    }
  }

  xml += body;
  return xml;
};

//
// Static Utility Functions:
//

var parse_xml = (exports.parse = function parse_xml(text, opts) {
  // turn text into XML tree quickly
  if (!opts) opts = {};
  opts.text = text;
  var parser = new XML(opts);
  return parser.error() ? parser.getLastError() : parser.getTree();
});

var trim = (exports.trim = function trim(text) {
  // strip whitespace from beginning and end of string
  if (text == null) return "";

  if (text && text.replace) {
    text = text.replace(/^\s+/, "");
    text = text.replace(/\s+$/, "");
  }

  return text;
});

var encode_entities = (exports.encodeEntities = function encode_entities(text) {
  // Simple entitize exports.for = function for composing XML
  if (text == null) return "";

  if (text && text.replace) {
    text = text.replace(/\&/g, "&amp;"); // MUST BE FIRST
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");
  }

  return text;
});

var encode_attrib_entities = (exports.encodeAttribEntities = function encode_attrib_entities(
  text
) {
  // Simple entitize exports.for = function for composing XML attributes
  if (text == null) return "";

  if (text && text.replace) {
    text = text.replace(/\&/g, "&amp;"); // MUST BE FIRST
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");
    text = text.replace(/\"/g, "&quot;");
    text = text.replace(/\'/g, "&apos;");
  }

  return text;
});

var decode_entities = (exports.decodeEntities = function decode_entities(text) {
  // Decode XML entities into raw ASCII
  if (text == null) return "";

  if (text && text.replace && text.match(/\&/)) {
    text = text.replace(/\&lt\;/g, "<");
    text = text.replace(/\&gt\;/g, ">");
    text = text.replace(/\&quot\;/g, '"');
    text = text.replace(/\&apos\;/g, "'");
    text = text.replace(/\&amp\;/g, "&"); // MUST BE LAST
  }

  return text;
});

var compose_xml = (exports.stringify = function compose_xml(
  node,
  name,
  indent,
  indent_string,
  eol,
  sort
) {
  // Compose node into XML including attributes
  // Recurse for child nodes
  if (typeof indent_string == "undefined") indent_string = "\t";
  if (typeof eol == "undefined") eol = "\n";
  if (typeof sort == "undefined") sort = true;
  var xml = "";

  // If this is the root node, set the indent to 0
  // and setup the XML header (PI node)
  if (!indent) {
    indent = 0;
    xml = xml_header + eol;

    if (!name) {
      // no name provided, assume content is wrapped in it
      name = first_key(node);
      node = node[name];
    }
  }

  // Setup the indent text
  var indent_text = "";
  for (var k = 0; k < indent; k++) indent_text += indent_string;

  if (typeof node == "object" && node != null) {
    // node is object -- now see if it is an array or hash
    if (!node.length) {
      // what about zero-length array?
      // node is hash
      xml += indent_text + "<" + name;

      var num_keys = 0;
      var has_attribs = 0;
      for (var key in node) num_keys++; // there must be a better way...

      if (node["_Attribs"]) {
        has_attribs = 1;
        var sorted_keys = sort
          ? hash_keys_to_array(node["_Attribs"]).sort()
          : hash_keys_to_array(node["_Attribs"]);
        for (var idx = 0, len = sorted_keys.length; idx < len; idx++) {
          var key = sorted_keys[idx];
          xml +=
            " " +
            key +
            '="' +
            encode_attrib_entities(node["_Attribs"][key]) +
            '"';
        }
      } // has attribs

      if (num_keys > has_attribs) {
        // has child elements
        xml += ">";

        if (node["_Data"]) {
          // simple text child node
          xml += encode_entities(node["_Data"]) + "</" + name + ">" + eol;
        } // just text
        else {
          xml += eol;

          var sorted_keys = sort
            ? hash_keys_to_array(node).sort()
            : hash_keys_to_array(node);
          for (var idx = 0, len = sorted_keys.length; idx < len; idx++) {
            var key = sorted_keys[idx];
            if (key != "_Attribs" && key.match(re_valid_tag_name)) {
              // recurse for node, with incremented indent value
              xml += compose_xml(
                node[key],
                key,
                indent + 1,
                indent_string,
                eol,
                sort
              );
            } // not _Attribs key
          } // foreach key

          xml += indent_text + "</" + name + ">" + eol;
        } // real children
      } else {
        // no child elements, so self-close
        xml += "/>" + eol;
      }
    } // standard node
    else {
      // node is array
      for (var idx = 0; idx < node.length; idx++) {
        // recurse for node in array with same indent
        xml += compose_xml(node[idx], name, indent, indent_string, eol, sort);
      }
    } // array of nodes
  } // complex node
  else {
    // node is simple string
    xml +=
      indent_text +
      "<" +
      name +
      ">" +
      encode_entities(node) +
      "</" +
      name +
      ">" +
      eol;
  } // simple text node

  return xml;
});

var always_array = (exports.alwaysArray = function always_array(obj, key) {
  // if object is not array, return array containing object
  // if key is passed, work like XMLalwaysarray() instead
  if (key) {
    if (typeof obj[key] != "object" || typeof obj[key].length == "undefined") {
      var temp = obj[key];
      delete obj[key];
      obj[key] = new Array();
      obj[key][0] = temp;
    }
    return null;
  } else {
    if (typeof obj != "object" || typeof obj.length == "undefined") {
      return [obj];
    } else return obj;
  }
});

var hash_keys_to_array = (exports.hashKeysToArray = function hash_keys_to_array(
  hash
) {
  // convert hash keys to array (discard values)
  var array = [];
  for (var key in hash) array.push(key);
  return array;
});

var isa_array = (exports.isaArray = function isa_array(arg) {
  // determine if arg is an array or is array-like
  return isArray(arg);
});

var isa_hash = (exports.isaHash = function isa_hash(arg) {
  // determine if arg is a hash
  return !!arg && typeof arg == "object" && !isa_array(arg);
});

var first_key = (exports.firstKey = function first_key(hash) {
  // return first key from hash (unordered)
  for (var key in hash) return key;
  return null; // no keys in hash
});

var num_keys = (exports.numKeys = function num_keys(hash) {
  // count the number of keys in a hash
  var count = 0;
  for (var a in hash) count++;
  return count;
});


/***/ }),

/***/ 898:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(601), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 909:
/***/ (function(__unusedmodule, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
exports.CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
exports.AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
exports.SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
exports.EXPIRES_QUERY_PARAM = "X-Amz-Expires";
exports.SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
exports.TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
exports.AUTH_HEADER = "authorization";
exports.AMZ_DATE_HEADER = exports.AMZ_DATE_QUERY_PARAM.toLowerCase();
exports.DATE_HEADER = "date";
exports.GENERATED_HEADERS = [exports.AUTH_HEADER, exports.AMZ_DATE_HEADER, exports.DATE_HEADER];
exports.SIGNATURE_HEADER = exports.SIGNATURE_QUERY_PARAM.toLowerCase();
exports.SHA256_HEADER = "x-amz-content-sha256";
exports.TOKEN_HEADER = exports.TOKEN_QUERY_PARAM.toLowerCase();
exports.HOST_HEADER = "host";
exports.ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true
};
exports.PROXY_HEADER_PATTERN = /^proxy-/;
exports.SEC_HEADER_PATTERN = /^sec-/;
exports.UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
exports.ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
exports.UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
exports.MAX_CACHE_SIZE = 50;
exports.KEY_TYPE_IDENTIFIER = "aws4_request";
exports.MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEscUJBQXFCLEdBQUcsaUJBQWlCLENBQUM7QUFDMUMsUUFBQSxzQkFBc0IsR0FBRyxrQkFBa0IsQ0FBQztBQUM1QyxRQUFBLG9CQUFvQixHQUFHLFlBQVksQ0FBQztBQUNwQyxRQUFBLDBCQUEwQixHQUFHLHFCQUFxQixDQUFDO0FBQ25ELFFBQUEsbUJBQW1CLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLFFBQUEscUJBQXFCLEdBQUcsaUJBQWlCLENBQUM7QUFDMUMsUUFBQSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQztBQUUzQyxRQUFBLFdBQVcsR0FBRyxlQUFlLENBQUM7QUFDOUIsUUFBQSxlQUFlLEdBQUcsNEJBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDckQsUUFBQSxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFFBQUEsaUJBQWlCLEdBQUcsQ0FBQyxtQkFBVyxFQUFFLHVCQUFlLEVBQUUsbUJBQVcsQ0FBQyxDQUFDO0FBQ2hFLFFBQUEsZ0JBQWdCLEdBQUcsNkJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdkQsUUFBQSxhQUFhLEdBQUcsc0JBQXNCLENBQUM7QUFDdkMsUUFBQSxZQUFZLEdBQUcseUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDL0MsUUFBQSxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBRXJCLFFBQUEseUJBQXlCLEdBQUc7SUFDdkMsYUFBYSxFQUFFLElBQUk7SUFDbkIsZUFBZSxFQUFFLElBQUk7SUFDckIsVUFBVSxFQUFFLElBQUk7SUFDaEIsTUFBTSxFQUFFLElBQUk7SUFDWixJQUFJLEVBQUUsSUFBSTtJQUNWLFlBQVksRUFBRSxJQUFJO0lBQ2xCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLE1BQU0sRUFBRSxJQUFJO0lBQ1osT0FBTyxFQUFFLElBQUk7SUFDYixFQUFFLEVBQUUsSUFBSTtJQUNSLE9BQU8sRUFBRSxJQUFJO0lBQ2IsbUJBQW1CLEVBQUUsSUFBSTtJQUN6QixPQUFPLEVBQUUsSUFBSTtJQUNiLFlBQVksRUFBRSxJQUFJO0lBQ2xCLGlCQUFpQixFQUFFLElBQUk7Q0FDeEIsQ0FBQztBQUVXLFFBQUEsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO0FBRWpDLFFBQUEsa0JBQWtCLEdBQUcsT0FBTyxDQUFDO0FBRTdCLFFBQUEsbUJBQW1CLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFN0MsUUFBQSxvQkFBb0IsR0FBRyxrQkFBa0IsQ0FBQztBQUUxQyxRQUFBLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0FBRXRDLFFBQUEsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUNwQixRQUFBLG1CQUFtQixHQUFHLGNBQWMsQ0FBQztBQUVyQyxRQUFBLGlCQUFpQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBTEdPUklUSE1fUVVFUllfUEFSQU0gPSBcIlgtQW16LUFsZ29yaXRobVwiO1xuZXhwb3J0IGNvbnN0IENSRURFTlRJQUxfUVVFUllfUEFSQU0gPSBcIlgtQW16LUNyZWRlbnRpYWxcIjtcbmV4cG9ydCBjb25zdCBBTVpfREFURV9RVUVSWV9QQVJBTSA9IFwiWC1BbXotRGF0ZVwiO1xuZXhwb3J0IGNvbnN0IFNJR05FRF9IRUFERVJTX1FVRVJZX1BBUkFNID0gXCJYLUFtei1TaWduZWRIZWFkZXJzXCI7XG5leHBvcnQgY29uc3QgRVhQSVJFU19RVUVSWV9QQVJBTSA9IFwiWC1BbXotRXhwaXJlc1wiO1xuZXhwb3J0IGNvbnN0IFNJR05BVFVSRV9RVUVSWV9QQVJBTSA9IFwiWC1BbXotU2lnbmF0dXJlXCI7XG5leHBvcnQgY29uc3QgVE9LRU5fUVVFUllfUEFSQU0gPSBcIlgtQW16LVNlY3VyaXR5LVRva2VuXCI7XG5cbmV4cG9ydCBjb25zdCBBVVRIX0hFQURFUiA9IFwiYXV0aG9yaXphdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFNWl9EQVRFX0hFQURFUiA9IEFNWl9EQVRFX1FVRVJZX1BBUkFNLnRvTG93ZXJDYXNlKCk7XG5leHBvcnQgY29uc3QgREFURV9IRUFERVIgPSBcImRhdGVcIjtcbmV4cG9ydCBjb25zdCBHRU5FUkFURURfSEVBREVSUyA9IFtBVVRIX0hFQURFUiwgQU1aX0RBVEVfSEVBREVSLCBEQVRFX0hFQURFUl07XG5leHBvcnQgY29uc3QgU0lHTkFUVVJFX0hFQURFUiA9IFNJR05BVFVSRV9RVUVSWV9QQVJBTS50b0xvd2VyQ2FzZSgpO1xuZXhwb3J0IGNvbnN0IFNIQTI1Nl9IRUFERVIgPSBcIngtYW16LWNvbnRlbnQtc2hhMjU2XCI7XG5leHBvcnQgY29uc3QgVE9LRU5fSEVBREVSID0gVE9LRU5fUVVFUllfUEFSQU0udG9Mb3dlckNhc2UoKTtcbmV4cG9ydCBjb25zdCBIT1NUX0hFQURFUiA9IFwiaG9zdFwiO1xuXG5leHBvcnQgY29uc3QgQUxXQVlTX1VOU0lHTkFCTEVfSEVBREVSUyA9IHtcbiAgYXV0aG9yaXphdGlvbjogdHJ1ZSxcbiAgXCJjYWNoZS1jb250cm9sXCI6IHRydWUsXG4gIGNvbm5lY3Rpb246IHRydWUsXG4gIGV4cGVjdDogdHJ1ZSxcbiAgZnJvbTogdHJ1ZSxcbiAgXCJrZWVwLWFsaXZlXCI6IHRydWUsXG4gIFwibWF4LWZvcndhcmRzXCI6IHRydWUsXG4gIHByYWdtYTogdHJ1ZSxcbiAgcmVmZXJlcjogdHJ1ZSxcbiAgdGU6IHRydWUsXG4gIHRyYWlsZXI6IHRydWUsXG4gIFwidHJhbnNmZXItZW5jb2RpbmdcIjogdHJ1ZSxcbiAgdXBncmFkZTogdHJ1ZSxcbiAgXCJ1c2VyLWFnZW50XCI6IHRydWUsXG4gIFwieC1hbXpuLXRyYWNlLWlkXCI6IHRydWVcbn07XG5cbmV4cG9ydCBjb25zdCBQUk9YWV9IRUFERVJfUEFUVEVSTiA9IC9ecHJveHktLztcblxuZXhwb3J0IGNvbnN0IFNFQ19IRUFERVJfUEFUVEVSTiA9IC9ec2VjLS87XG5cbmV4cG9ydCBjb25zdCBVTlNJR05BQkxFX1BBVFRFUk5TID0gWy9ecHJveHktL2ksIC9ec2VjLS9pXTtcblxuZXhwb3J0IGNvbnN0IEFMR09SSVRITV9JREVOVElGSUVSID0gXCJBV1M0LUhNQUMtU0hBMjU2XCI7XG5cbmV4cG9ydCBjb25zdCBVTlNJR05FRF9QQVlMT0FEID0gXCJVTlNJR05FRC1QQVlMT0FEXCI7XG5cbmV4cG9ydCBjb25zdCBNQVhfQ0FDSEVfU0laRSA9IDUwO1xuZXhwb3J0IGNvbnN0IEtFWV9UWVBFX0lERU5USUZJRVIgPSBcImF3czRfcmVxdWVzdFwiO1xuXG5leHBvcnQgY29uc3QgTUFYX1BSRVNJR05FRF9UVEwgPSA2MCAqIDYwICogMjQgKiA3O1xuIl19

/***/ }),

/***/ 914:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var ProviderError_1 = __webpack_require__(289);
/**
 * Compose a single credential provider function from multiple credential
 * providers. The first provider in the argument list will always be invoked;
 * subsequent providers in the list will be invoked in the order in which the
 * were received if the preceding provider did not successfully resolve.
 *
 * If no providers were received or no provider resolves successfully, the
 * returned promise will be rejected.
 */
function chain() {
    var providers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        providers[_i] = arguments[_i];
    }
    return function () {
        var e_1, _a;
        var promise = Promise.reject(new ProviderError_1.ProviderError("No providers in chain"));
        var _loop_1 = function (provider) {
            promise = promise.catch(function (err) {
                if (err && err.tryNextLink) {
                    return provider();
                }
                throw err;
            });
        };
        try {
            for (var providers_1 = tslib_1.__values(providers), providers_1_1 = providers_1.next(); !providers_1_1.done; providers_1_1 = providers_1.next()) {
                var provider = providers_1_1.value;
                _loop_1(provider);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (providers_1_1 && !providers_1_1.done && (_a = providers_1.return)) _a.call(providers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return promise;
    };
}
exports.chain = chain;
//# sourceMappingURL=chain.js.map

/***/ }),

/***/ 922:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _policyDescriptorListType_1 = __webpack_require__(740);
exports.AssumeRoleWithSAMLInput = {
    type: "structure",
    required: ["RoleArn", "PrincipalArn", "SAMLAssertion"],
    members: {
        RoleArn: {
            shape: {
                type: "string",
                min: 20
            }
        },
        PrincipalArn: {
            shape: {
                type: "string",
                min: 20
            }
        },
        SAMLAssertion: {
            shape: {
                type: "string",
                min: 4
            }
        },
        PolicyArns: {
            shape: _policyDescriptorListType_1._policyDescriptorListType
        },
        Policy: {
            shape: {
                type: "string",
                min: 1
            }
        },
        DurationSeconds: {
            shape: {
                type: "integer",
                min: 900
            }
        }
    }
};
//# sourceMappingURL=AssumeRoleWithSAMLInput.js.map

/***/ }),

/***/ 926:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _Credentials_1 = __webpack_require__(799);
const _AssumedRoleUser_1 = __webpack_require__(330);
exports.AssumeRoleWithSAMLOutput = {
    type: "structure",
    required: [],
    members: {
        Credentials: {
            shape: _Credentials_1._Credentials
        },
        AssumedRoleUser: {
            shape: _AssumedRoleUser_1._AssumedRoleUser
        },
        PackedPolicySize: {
            shape: {
                type: "integer"
            }
        },
        Subject: {
            shape: {
                type: "string"
            }
        },
        SubjectType: {
            shape: {
                type: "string"
            }
        },
        Issuer: {
            shape: {
                type: "string"
            }
        },
        Audience: {
            shape: {
                type: "string"
            }
        },
        NameQualifier: {
            shape: {
                type: "string"
            }
        }
    }
};
//# sourceMappingURL=AssumeRoleWithSAMLOutput.js.map

/***/ }),

/***/ 930:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _Credentials_1 = __webpack_require__(799);
const _FederatedUser_1 = __webpack_require__(306);
exports.GetFederationTokenOutput = {
    type: "structure",
    required: [],
    members: {
        Credentials: {
            shape: _Credentials_1._Credentials
        },
        FederatedUser: {
            shape: _FederatedUser_1._FederatedUser
        },
        PackedPolicySize: {
            shape: {
                type: "integer"
            }
        }
    }
};
//# sourceMappingURL=GetFederationTokenOutput.js.map

/***/ }),

/***/ 945:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const GetAccessKeyInfoInput_1 = __webpack_require__(441);
const GetAccessKeyInfoOutput_1 = __webpack_require__(253);
const ServiceMetadata_1 = __webpack_require__(683);
exports.GetAccessKeyInfo = {
    metadata: ServiceMetadata_1.ServiceMetadata,
    name: "GetAccessKeyInfo",
    http: {
        method: "POST",
        requestUri: "/"
    },
    input: {
        shape: GetAccessKeyInfoInput_1.GetAccessKeyInfoInput
    },
    output: {
        shape: GetAccessKeyInfoOutput_1.GetAccessKeyInfoOutput,
        resultWrapper: "GetAccessKeyInfoResult"
    },
    errors: []
};
//# sourceMappingURL=GetAccessKeyInfo.js.map

/***/ }),

/***/ 963:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const querystring_parser_1 = __webpack_require__(277);
const url_1 = __webpack_require__(835);
exports.parseUrl = (url) => {
    const { hostname = "localhost", pathname = "/", port, protocol = "https:", search } = url_1.parse(url);
    let query;
    if (search) {
        query = querystring_parser_1.parseQueryString(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query
    };
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 972:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
tslib_1.__exportStar(__webpack_require__(723), exports);
tslib_1.__exportStar(__webpack_require__(630), exports);
tslib_1.__exportStar(__webpack_require__(115), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 987:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(422);
var RemoteProviderInit_1 = __webpack_require__(466);
var httpGet_1 = __webpack_require__(210);
var ImdsCredentials_1 = __webpack_require__(46);
var retry_1 = __webpack_require__(737);
var property_provider_1 = __webpack_require__(855);
var url_1 = __webpack_require__(835);
exports.ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
exports.ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
exports.ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
/**
 * Creates a credential provider that will source credentials from the ECS
 * Container Metadata Service
 */
function fromContainerMetadata(init) {
    var _this = this;
    if (init === void 0) { init = {}; }
    var _a = RemoteProviderInit_1.providerConfigFromInit(init), timeout = _a.timeout, maxRetries = _a.maxRetries;
    return function () {
        return getCmdsUri().then(function (url) {
            return retry_1.retry(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var credsResponse, _a, _b;
                return tslib_1.__generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = (_a = JSON).parse;
                            return [4 /*yield*/, requestFromEcsImds(timeout, url)];
                        case 1:
                            credsResponse = _b.apply(_a, [_c.sent()]);
                            if (!ImdsCredentials_1.isImdsCredentials(credsResponse)) {
                                throw new property_provider_1.ProviderError("Invalid response received from instance metadata service.");
                            }
                            return [2 /*return*/, ImdsCredentials_1.fromImdsCredentials(credsResponse)];
                    }
                });
            }); }, maxRetries);
        });
    };
}
exports.fromContainerMetadata = fromContainerMetadata;
function requestFromEcsImds(timeout, options) {
    if (process.env[exports.ENV_CMDS_AUTH_TOKEN]) {
        var _a = options.headers, headers = _a === void 0 ? {} : _a;
        headers.Authorization = process.env[exports.ENV_CMDS_AUTH_TOKEN];
        options.headers = headers;
    }
    return httpGet_1.httpGet(tslib_1.__assign({}, options, { timeout: timeout })).then(function (buffer) { return buffer.toString(); });
}
var CMDS_IP = "169.254.170.2";
var GREENGRASS_HOSTS = {
    localhost: true,
    "127.0.0.1": true
};
var GREENGRASS_PROTOCOLS = {
    "http:": true,
    "https:": true
};
function getCmdsUri() {
    if (process.env[exports.ENV_CMDS_RELATIVE_URI]) {
        return Promise.resolve({
            hostname: CMDS_IP,
            path: process.env[exports.ENV_CMDS_RELATIVE_URI]
        });
    }
    if (process.env[exports.ENV_CMDS_FULL_URI]) {
        var parsed = url_1.parse(process.env[exports.ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
            return Promise.reject(new property_provider_1.ProviderError(parsed.hostname + " is not a valid container metadata service hostname", false));
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
            return Promise.reject(new property_provider_1.ProviderError(parsed.protocol + " is not a valid container metadata service protocol", false));
        }
        return Promise.resolve(tslib_1.__assign({}, parsed, { port: parsed.port ? parseInt(parsed.port, 10) : undefined }));
    }
    return Promise.reject(new property_provider_1.ProviderError("The container metadata credential provider cannot be used unless" +
        (" the " + exports.ENV_CMDS_RELATIVE_URI + " or " + exports.ENV_CMDS_FULL_URI + " environment") +
        " variable is set", false));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbUNvbnRhaW5lck1ldGFkYXRhLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiZnJvbUNvbnRhaW5lck1ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBFQUc2QztBQUM3QyxvREFBbUQ7QUFDbkQsb0VBRzBDO0FBQzFDLGdEQUErQztBQUMvQyxnRUFBMkQ7QUFDM0QsMkJBQTRCO0FBR2YsUUFBQSxpQkFBaUIsR0FBRyxvQ0FBb0MsQ0FBQztBQUN6RCxRQUFBLHFCQUFxQixHQUFHLHdDQUF3QyxDQUFDO0FBQ2pFLFFBQUEsbUJBQW1CLEdBQUcsbUNBQW1DLENBQUM7QUFFdkU7OztHQUdHO0FBQ0gsU0FBZ0IscUJBQXFCLENBQ25DLElBQTZCO0lBRC9CLGlCQW9CQztJQW5CQyxxQkFBQSxFQUFBLFNBQTZCO0lBRXZCLElBQUEsc0RBQXNELEVBQXBELG9CQUFPLEVBQUUsMEJBQTJDLENBQUM7SUFDN0QsT0FBTztRQUNMLE9BQU8sVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUMxQixPQUFBLGFBQUssQ0FBQzs7Ozs7NEJBQ2tCLEtBQUEsQ0FBQSxLQUFBLElBQUksQ0FBQSxDQUFDLEtBQUssQ0FBQTs0QkFDOUIscUJBQU0sa0JBQWtCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFBOzs0QkFEbEMsYUFBYSxHQUFHLGNBQ3BCLFNBQXNDLEVBQ3ZDOzRCQUNELElBQUksQ0FBQyxtQ0FBaUIsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQ0FDckMsTUFBTSxJQUFJLGlDQUFhLENBQ3JCLDJEQUEyRCxDQUM1RCxDQUFDOzZCQUNIOzRCQUVELHNCQUFPLHFDQUFtQixDQUFDLGFBQWEsQ0FBQyxFQUFDOzs7aUJBQzNDLEVBQUUsVUFBVSxDQUFDO1FBWGQsQ0FXYyxDQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBcEJELHNEQW9CQztBQUVELFNBQVMsa0JBQWtCLENBQ3pCLE9BQWUsRUFDZixPQUF1QjtJQUV2QixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQW1CLENBQUMsRUFBRTtRQUM1QixJQUFBLG9CQUFZLEVBQVosaUNBQVksQ0FBYTtRQUNqQyxPQUFPLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQW1CLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUMzQjtJQUVELE9BQU8saUJBQU8sc0JBQ1QsT0FBTyxJQUNWLE9BQU8sU0FBQSxJQUNQLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELElBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUNoQyxJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsV0FBVyxFQUFFLElBQUk7Q0FDbEIsQ0FBQztBQUNGLElBQU0sb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsSUFBSTtDQUNmLENBQUM7QUFFRixTQUFTLFVBQVU7SUFDakIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUFxQixDQUFDLEVBQUU7UUFDdEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3JCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUFxQixDQUFDO1NBQ3pDLENBQUMsQ0FBQztLQUNKO0lBRUQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUFpQixDQUFDLEVBQUU7UUFDbEMsSUFBTSxNQUFNLEdBQUcsV0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQWlCLENBQUUsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLGdCQUFnQixDQUFDLEVBQUU7WUFDOUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUNuQixJQUFJLGlDQUFhLENBQ1osTUFBTSxDQUFDLFFBQVEsd0RBQXFELEVBQ3ZFLEtBQUssQ0FDTixDQUNGLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLG9CQUFvQixDQUFDLEVBQUU7WUFDbEUsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUNuQixJQUFJLGlDQUFhLENBQ1osTUFBTSxDQUFDLFFBQVEsd0RBQXFELEVBQ3ZFLEtBQUssQ0FDTixDQUNGLENBQUM7U0FDSDtRQUVELE9BQU8sT0FBTyxDQUFDLE9BQU8sc0JBQ2pCLE1BQU0sSUFDVCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFDekQsQ0FBQztLQUNKO0lBRUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUNuQixJQUFJLGlDQUFhLENBQ2Ysa0VBQWtFO1NBQ2hFLFVBQVEsNkJBQXFCLFlBQU8seUJBQWlCLGlCQUFjLENBQUE7UUFDbkUsa0JBQWtCLEVBQ3BCLEtBQUssQ0FDTixDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlZGVudGlhbFByb3ZpZGVyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQge1xuICBSZW1vdGVQcm92aWRlckluaXQsXG4gIHByb3ZpZGVyQ29uZmlnRnJvbUluaXRcbn0gZnJvbSBcIi4vcmVtb3RlUHJvdmlkZXIvUmVtb3RlUHJvdmlkZXJJbml0XCI7XG5pbXBvcnQgeyBodHRwR2V0IH0gZnJvbSBcIi4vcmVtb3RlUHJvdmlkZXIvaHR0cEdldFwiO1xuaW1wb3J0IHtcbiAgZnJvbUltZHNDcmVkZW50aWFscyxcbiAgaXNJbWRzQ3JlZGVudGlhbHNcbn0gZnJvbSBcIi4vcmVtb3RlUHJvdmlkZXIvSW1kc0NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgeyByZXRyeSB9IGZyb20gXCIuL3JlbW90ZVByb3ZpZGVyL3JldHJ5XCI7XG5pbXBvcnQgeyBQcm92aWRlckVycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcImh0dHBcIjtcblxuZXhwb3J0IGNvbnN0IEVOVl9DTURTX0ZVTExfVVJJID0gXCJBV1NfQ09OVEFJTkVSX0NSRURFTlRJQUxTX0ZVTExfVVJJXCI7XG5leHBvcnQgY29uc3QgRU5WX0NNRFNfUkVMQVRJVkVfVVJJID0gXCJBV1NfQ09OVEFJTkVSX0NSRURFTlRJQUxTX1JFTEFUSVZFX1VSSVwiO1xuZXhwb3J0IGNvbnN0IEVOVl9DTURTX0FVVEhfVE9LRU4gPSBcIkFXU19DT05UQUlORVJfQVVUSE9SSVpBVElPTl9UT0tFTlwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjcmVkZW50aWFsIHByb3ZpZGVyIHRoYXQgd2lsbCBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbSB0aGUgRUNTXG4gKiBDb250YWluZXIgTWV0YWRhdGEgU2VydmljZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUNvbnRhaW5lck1ldGFkYXRhKFxuICBpbml0OiBSZW1vdGVQcm92aWRlckluaXQgPSB7fVxuKTogQ3JlZGVudGlhbFByb3ZpZGVyIHtcbiAgY29uc3QgeyB0aW1lb3V0LCBtYXhSZXRyaWVzIH0gPSBwcm92aWRlckNvbmZpZ0Zyb21Jbml0KGluaXQpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHJldHVybiBnZXRDbWRzVXJpKCkudGhlbih1cmwgPT5cbiAgICAgIHJldHJ5KGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY3JlZHNSZXNwb25zZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgYXdhaXQgcmVxdWVzdEZyb21FY3NJbWRzKHRpbWVvdXQsIHVybClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFpc0ltZHNDcmVkZW50aWFscyhjcmVkc1Jlc3BvbnNlKSkge1xuICAgICAgICAgIHRocm93IG5ldyBQcm92aWRlckVycm9yKFxuICAgICAgICAgICAgXCJJbnZhbGlkIHJlc3BvbnNlIHJlY2VpdmVkIGZyb20gaW5zdGFuY2UgbWV0YWRhdGEgc2VydmljZS5cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnJvbUltZHNDcmVkZW50aWFscyhjcmVkc1Jlc3BvbnNlKTtcbiAgICAgIH0sIG1heFJldHJpZXMpXG4gICAgKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEZyb21FY3NJbWRzKFxuICB0aW1lb3V0OiBudW1iZXIsXG4gIG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBpZiAocHJvY2Vzcy5lbnZbRU5WX0NNRFNfQVVUSF9UT0tFTl0pIHtcbiAgICBjb25zdCB7IGhlYWRlcnMgPSB7fSB9ID0gb3B0aW9ucztcbiAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBwcm9jZXNzLmVudltFTlZfQ01EU19BVVRIX1RPS0VOXTtcbiAgICBvcHRpb25zLmhlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgcmV0dXJuIGh0dHBHZXQoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgdGltZW91dFxuICB9KS50aGVuKGJ1ZmZlciA9PiBidWZmZXIudG9TdHJpbmcoKSk7XG59XG5cbmNvbnN0IENNRFNfSVAgPSBcIjE2OS4yNTQuMTcwLjJcIjtcbmNvbnN0IEdSRUVOR1JBU1NfSE9TVFMgPSB7XG4gIGxvY2FsaG9zdDogdHJ1ZSxcbiAgXCIxMjcuMC4wLjFcIjogdHJ1ZVxufTtcbmNvbnN0IEdSRUVOR1JBU1NfUFJPVE9DT0xTID0ge1xuICBcImh0dHA6XCI6IHRydWUsXG4gIFwiaHR0cHM6XCI6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGdldENtZHNVcmkoKTogUHJvbWlzZTxSZXF1ZXN0T3B0aW9ucz4ge1xuICBpZiAocHJvY2Vzcy5lbnZbRU5WX0NNRFNfUkVMQVRJVkVfVVJJXSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgaG9zdG5hbWU6IENNRFNfSVAsXG4gICAgICBwYXRoOiBwcm9jZXNzLmVudltFTlZfQ01EU19SRUxBVElWRV9VUkldXG4gICAgfSk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnZbRU5WX0NNRFNfRlVMTF9VUkldKSB7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2UocHJvY2Vzcy5lbnZbRU5WX0NNRFNfRlVMTF9VUkldISk7XG4gICAgaWYgKCFwYXJzZWQuaG9zdG5hbWUgfHwgIShwYXJzZWQuaG9zdG5hbWUgaW4gR1JFRU5HUkFTU19IT1NUUykpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IFByb3ZpZGVyRXJyb3IoXG4gICAgICAgICAgYCR7cGFyc2VkLmhvc3RuYW1lfSBpcyBub3QgYSB2YWxpZCBjb250YWluZXIgbWV0YWRhdGEgc2VydmljZSBob3N0bmFtZWAsXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIXBhcnNlZC5wcm90b2NvbCB8fCAhKHBhcnNlZC5wcm90b2NvbCBpbiBHUkVFTkdSQVNTX1BST1RPQ09MUykpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IFByb3ZpZGVyRXJyb3IoXG4gICAgICAgICAgYCR7cGFyc2VkLnByb3RvY29sfSBpcyBub3QgYSB2YWxpZCBjb250YWluZXIgbWV0YWRhdGEgc2VydmljZSBwcm90b2NvbGAsXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIC4uLnBhcnNlZCxcbiAgICAgIHBvcnQ6IHBhcnNlZC5wb3J0ID8gcGFyc2VJbnQocGFyc2VkLnBvcnQsIDEwKSA6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgIG5ldyBQcm92aWRlckVycm9yKFxuICAgICAgXCJUaGUgY29udGFpbmVyIG1ldGFkYXRhIGNyZWRlbnRpYWwgcHJvdmlkZXIgY2Fubm90IGJlIHVzZWQgdW5sZXNzXCIgK1xuICAgICAgICBgIHRoZSAke0VOVl9DTURTX1JFTEFUSVZFX1VSSX0gb3IgJHtFTlZfQ01EU19GVUxMX1VSSX0gZW52aXJvbm1lbnRgICtcbiAgICAgICAgXCIgdmFyaWFibGUgaXMgc2V0XCIsXG4gICAgICBmYWxzZVxuICAgIClcbiAgKTtcbn1cbiJdfQ==

/***/ }),

/***/ 991:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const __aws_sdk_middleware_stack = __webpack_require__(475);
const AssumeRoleWithWebIdentity_1 = __webpack_require__(686);
class AssumeRoleWithWebIdentityCommand {
    constructor(input) {
        this.input = input;
        this.model = AssumeRoleWithWebIdentity_1.AssumeRoleWithWebIdentity;
        this.middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack();
    }
    resolveMiddleware(clientStack, configuration) {
        const { handler } = configuration;
        const stack = clientStack.concat(this.middlewareStack);
        const handlerExecutionContext = {
            logger: {},
            model: this.model
        };
        return stack.resolve(handler(handlerExecutionContext), handlerExecutionContext);
    }
}
exports.AssumeRoleWithWebIdentityCommand = AssumeRoleWithWebIdentityCommand;
//# sourceMappingURL=AssumeRoleWithWebIdentityCommand.js.map

/***/ }),

/***/ 997:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _Credentials_1 = __webpack_require__(799);
exports.GetSessionTokenOutput = {
    type: "structure",
    required: [],
    members: {
        Credentials: {
            shape: _Credentials_1._Credentials
        }
    }
};
//# sourceMappingURL=GetSessionTokenOutput.js.map

/***/ })

/******/ });