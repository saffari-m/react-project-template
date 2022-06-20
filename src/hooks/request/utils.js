import { initialState } from "./reducer";
import { sha1 } from "@utils/crypto";

function createInitialState(options) {
  return {
    ...initialState,
    isLoading: !options.manual,
  };
}

function configToObject(config) {
  if (typeof config === "string") {
    return {
      url: config,
    };
  }

  return Object.assign({}, config);
}

const getGraphqlEndpointWithHash = (config) => {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_URL;
  return `${url}?queryId=${sha1(
    config.query.replace(/\s/g, "") + JSON.stringify(config.variable)
  )}`;
};

export { createInitialState, configToObject, getGraphqlEndpointWithHash };
