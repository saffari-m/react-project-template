/*global process*/
/*eslint no-undef: "error"*/
import useAxios from "@hooks/request/useAxios";

const KafkaApiList = {
  collectData: () => {
    return useAxios(
      {
        url: `/broker/api/${process.env.BROKER_VERSION}/message/player`,
        method: "post",
      },
      { manual: true }
    );
  },
};

export default KafkaApiList;
