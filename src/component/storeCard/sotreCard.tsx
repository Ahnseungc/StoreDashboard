import { FC } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Heading,
  Stack,
  Text,
  Badge,
  Highlight,
} from "@chakra-ui/react";
import {
  StoreListItemHighOrderLayout,
  StoreListItemLowderLayout,
} from "./styles";

interface StoreListItemProps {
  store: any;
  button: boolean;
  onOpen?: () => void;
}

const StoreCard: FC<StoreListItemProps> = ({ store, button, onOpen }) => {
  return (
    <>
      <Card>
        <CardBody>
          <Stack>
            <Heading size="md">
              {store.store} 매장{" "}
              {store.lowOrder === store.order && (
                <Badge colorScheme="red">
                  낮은 주문건수를 기록하고 있어요!
                </Badge>
              )}
              {store.highOrder === store.order && (
                <Badge colorScheme="blue">
                  <p>높은 주문건수를 기록하고 있어요!</p>
                </Badge>
              )}
            </Heading>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "0.5rem",
                marginTop: "0.5rem",
              }}
            >
              <Text fontWeight="bold">누적 주문 건수에요</Text>
              <h4>{store.order}건</h4>
            </div>

            <div style={{ display: "flex", width: "100%", gap: "0.5rem" }}>
              <Text fontWeight="bold">주문이 많은 시간대에요 </Text>
              <h4>
                {store.maxTime[0]}시 ~ {store.maxTime[1]}시
              </h4>
            </div>
            <div style={{ display: "flex", width: "100%", gap: "0.5rem" }}>
              <Text fontWeight="bold">주문이 많은 플랫폼이에요 </Text>
              <h4>{store.maxPlatform}</h4>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "0.5rem",
              }}
            >
              <Text fontWeight="bold">주문이 많은 메뉴에요 </Text>
              <h4
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "5rem",
                }}
              >
                {store.highOrderMenu}
              </h4>
            </div>
            {button && (
              <CardFooter padding="0" paddingTop="0.5rem">
                {/* <ButtonGroup spacing="1"> */}
                <Button variant="solid" colorScheme="blue" onClick={onOpen}>
                  상세보기
                </Button>
                {/* <Button variant="outline" colorScheme="blue" onClick={onOpen}>
                    주문 진행중
                  </Button> */}
                {/* </ButtonGroup> */}
              </CardFooter>
            )}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default StoreCard;
