export const storage = {
  text:
    "## storage方法分装\n" +
    `    /**
      * 设置storage
      * @param name
      * @param value
      */
      export function setStorageItem(name, value) {
          if (value) {
          window.sessionStorage.setItem(name, JSON.stringify(value));
          }
      }
      // 设置LocalStorage
      export function setLocalStorage(name, value) {
          if (value) {
          window.localStorage.setItem(name, JSON.stringify(value));
          }
      }
      
      /**
      * 获取storage
      * @param name
      * @param value
      */
      export function getStorageItem(name) {
          let value = window.sessionStorage.getItem(name);
          return value == null?'':JSON.parse(value);
      }
      
      export function getDeviceId(name) {
          return window.localStorage.getItem('deviceId')
      }
      
      // 获取LocalStorage
      export function getLocalStorage(name) {
          let value = window.localStorage.getItem(name);
          return value == null?'':JSON.parse(value);
      }
      
      /**
      * 删除storage
      * @param name
      * @param value
      */
      export function delStorageItem(name) {
          window.sessionStorage.removeItem(name);
      }
      
      /**
      * 清空storage
      * @param name
      * @param value
      */
      export function clearStorage() {
          window.sessionStorage.clear();
      }
      /**
      * 获取cookie
      * @param name
      * @returns {*}
      */
     export function getCookie(name) {
       let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
       let arr = document.cookie.match(reg);
       if (arr) {
         return arr[2];
       } else {
         return null;
       }
     }
     /**
      * 设置cookie,增加到vue实例方便全局调用
      * @param c_name
      * @param value
      * @param expiredays
      */
     export function setCookie(name, value, expiredays) {
       var exdate = new Date();
       exdate.setDate(exdate.getDate() + expiredays);
       document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
     };
     
     /**
      * 删除cookie
      * @param name
      */
     export function delCookie(name) {
       var exp = new Date();
       exp.setTime(exp.getTime() - 1);
       var cval = getCookie(name);
       if (cval != null) { document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString(); }
     };
     
  `
};
