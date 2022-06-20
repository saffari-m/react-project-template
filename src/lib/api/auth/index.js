/*global process*/
/*eslint no-undef: "error"*/
import useAxios from "@hooks/request/useAxios";

const ShenasehApiList = {
  changeToken: () => {
    return useAxios(
      {
        url: `/shenaseh/api/${process.env.SHENASEH_VERSION}/token/change`,
        method: "post",
      },
      { manual: true }
    );
  },
};

export default ShenasehApiList;
