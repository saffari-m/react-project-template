import { merge } from "@lib/lodash";
import { request } from "graphql-request";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import reducer, { actions } from "./reducer";
import useDeepCompareMemoize from "./useDeepCompareMemoize";
import { createInitialState, getGraphqlEndpointWithHash } from "./utils";

const DEFAULT_OPTIONS = {
  manual: false,
};

async function executeRequest(config, options, dispatch) {
  dispatch({ type: actions.IS_LOADING });

  try {
    const response = request(
      getGraphqlEndpointWithHash(config),
      config.query,
      config.variables
    )
      .then((response) => {
        response = options?.transformResponse?.(response) || response;
        
        options.onSuccess?.(response);

        dispatch({ type: actions.SUCCESS, payload: response });
      })
      .catch((err) => {
        options.onError?.(err);

        dispatch({ type: actions.ERROR, payload: err });
      });

    return response;
  } catch (err) {
    options.onError?.(err);

    dispatch({ type: actions.ERROR, payload: err });
  }
}

function useQuery(_config, _options) {
  const config = useMemo(() => _config, useDeepCompareMemoize(_config));
  const options = useMemo(
    () => ({ ...DEFAULT_OPTIONS, ..._options }),
    useDeepCompareMemoize(_options)
  );
  const [state, dispatch] = useReducer(reducer, createInitialState(options));

  useEffect(() => {
    if (!options.manual) {
      executeRequest(config, options, dispatch).catch(() => {});
    }
    // return () => cancelRequest;
  }, [config]);
  
  

  const mutate = useCallback((configOverride, optionsOverride) => {
    return executeRequest(
      merge({}, config, configOverride),
      {
        ...options,
        ...optionsOverride,
      },
      dispatch
    );
  }, []);

  return { ...state, mutate };
}

export default useQuery;
