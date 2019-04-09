const { doConnectApi } = require("./auth/doConnectApi");
const { endpointErrorMsg } = require("../global.config");

module.exports = {
  /**
   * @function MapCallApi
   * @description Wrapper to call MapCallApi from auth.
   *
   */
  MapCallApi: async ctx => {
    const response = await doConnectApi();
    if (JSON.parse(response).data === null) {
      ctx.body = endpointErrorMsg;
    } else {
      ctx.body = response;
    }
  }
};
