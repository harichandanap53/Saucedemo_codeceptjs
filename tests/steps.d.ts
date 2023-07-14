/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type loginPage = typeof import('./pages/login.js');
type additemtocartPage = typeof import('./pages/additemtocart.js');
type cartitemcheckoutPage = typeof import('./pages/cartitemcheckout.js');
type requestdemoPage = typeof import('./pages/requestdemo.js');
type logoutPage = typeof import('./pages/logout.js');
type MyHelper = import('./myhelper_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, additemtocartPage: additemtocartPage, cartitemcheckoutPage: cartitemcheckoutPage, requestdemoPage: requestdemoPage, logoutPage: logoutPage }
  interface Methods extends Playwright, REST, MyHelper, ApiDataFactory {}
  interface I extends ReturnType<steps_file>, WithTranslation<MyHelper>, WithTranslation<ApiDataFactory> {}
  namespace Translation {
    interface Actions {}
  }
}
