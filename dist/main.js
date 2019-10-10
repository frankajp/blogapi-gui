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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction login() {\r\n\r\n  var correo = document.getElementById(\"correo\").value;\r\n  var contrasena = document.getElementById(\"password\").value;\r\n\r\n\r\n  var data = {\r\n    username: correo,\r\n      email: correo,\r\n      password: contrasena\r\n\r\n  };\r\n\r\n  fetch(API_PATH + ' / login', {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      \"Content-Type \": \"aplication / json\"\r\n    }\r\n  })\r\n    .then(res => res.json())\r\n    .then(Respuesta => consola.log(Respuesta))\r\n    .catch(error => consola.log(error));\r\n}\r\nfunction registrar() {\r\n\r\n  var correo = document.getElementById(\"correo\").value;\r\n  var contrasena = document.getElementById(\"password\").value;\r\n  var nombre = document.getElementById(\"nombre\").value;\r\n\r\n\r\n  var data = {\r\n    name: nombre,\r\n    email: correo,\r\n    password: contrasena\r\n\r\n  };\r\n\r\n  fetch(API_PATH + '/register', {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: {\r\n      \"Content-Type \": \"aplication/json\"\r\n    }\r\n  })\r\n    .then(res => res.json())\r\n    .then(Respuesta => consola.log(Respuesta))\r\n    .catch(error => consola.log(error));\r\n}\r\nwindow.onload = function () {\r\n\r\n  document.getElementById(\"envios\").addEventListener('click', function () {\r\n    login();\r\n  });\r\n  document.getElementById(\"registro\").addEventListener('click', function () {\r\n    registrar();\r\n  });\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gbG9naW4oKSB7XHJcblxyXG4gIHZhciBjb3JyZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcnJlb1wiKS52YWx1ZTtcclxuICB2YXIgY29udHJhc2VuYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikudmFsdWU7XHJcblxyXG5cclxuICB2YXIgZGF0YSA9IHtcclxuICAgIHVzZXJuYW1lOiBjb3JyZW8sXHJcbiAgICAgIGVtYWlsOiBjb3JyZW8sXHJcbiAgICAgIHBhc3N3b3JkOiBjb250cmFzZW5hXHJcblxyXG4gIH07XHJcblxyXG4gIGZldGNoKEFQSV9QQVRIICsgJyAvIGxvZ2luJywge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGUgXCI6IFwiYXBsaWNhdGlvbiAvIGpzb25cIlxyXG4gICAgfVxyXG4gIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKFJlc3B1ZXN0YSA9PiBjb25zb2xhLmxvZyhSZXNwdWVzdGEpKVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGEubG9nKGVycm9yKSk7XHJcbn1cclxuZnVuY3Rpb24gcmVnaXN0cmFyKCkge1xyXG5cclxuICB2YXIgY29ycmVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3JyZW9cIikudmFsdWU7XHJcbiAgdmFyIGNvbnRyYXNlbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpLnZhbHVlO1xyXG4gIHZhciBub21icmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWJyZVwiKS52YWx1ZTtcclxuXHJcblxyXG4gIHZhciBkYXRhID0ge1xyXG4gICAgbmFtZTogbm9tYnJlLFxyXG4gICAgZW1haWw6IGNvcnJlbyxcclxuICAgIHBhc3N3b3JkOiBjb250cmFzZW5hXHJcblxyXG4gIH07XHJcblxyXG4gIGZldGNoKEFQSV9QQVRIICsgJy9yZWdpc3RlcicsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIFwiQ29udGVudC1UeXBlIFwiOiBcImFwbGljYXRpb24vanNvblwiXHJcbiAgICB9XHJcbiAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4oUmVzcHVlc3RhID0+IGNvbnNvbGEubG9nKFJlc3B1ZXN0YSkpXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sYS5sb2coZXJyb3IpKTtcclxufVxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVudmlvc1wiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGxvZ2luKCk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWdpc3Ryb1wiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJlZ2lzdHJhcigpO1xyXG4gIH0pO1xyXG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });