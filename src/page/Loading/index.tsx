import { Spinner } from "@chakra-ui/react";
import { LoadingPage } from "./style";

const Loading = () => {
  return (
    <LoadingPage>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </LoadingPage>
  );
};

export default Loading;
