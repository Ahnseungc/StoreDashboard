import { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Heading,
  Stack,
  Text,
  useDisclosure,
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
      {store.highOrder === store.order && (
        <StoreListItemHighOrderLayout>
          <p>높은 주문건수를 기록하고 있어요!</p>
        </StoreListItemHighOrderLayout>
      )}

      {store.lowOrder === store.order && (
        <StoreListItemLowderLayout>
          <p>낮은 주문건수를 기록하고 있어요!</p>
        </StoreListItemLowderLayout>
      )}
      <Card>
        <CardBody>
          <Stack>
            <Heading size="md">{store.store}</Heading>
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "0.5rem",
              }}
            >
              <Text>누적 주문 건수에요 </Text>
              <h4>{store.order}건</h4>
            </div>
            <div style={{ display: "flex", width: "100%", gap: "0.5rem" }}>
              <Text>주문이 많은 시간대에요 </Text>
              <h4>
                {store.maxTime[0]}시 ~ {store.maxTime[1]}시
              </h4>
            </div>
            <div style={{ display: "flex", width: "100%", gap: "0.5rem" }}>
              <Text>주문이 많은 플랫폼이에요 </Text>
              <h4>{store.maxPlatform}</h4>
            </div>
            {/* <div style={{ display: "flex", width: "100%", gap: "0.5rem" }}>
                <Text>주문이 많은 메뉴에요 </Text>
                <h4>치킨</h4>
              </div> */}
            {button && (
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue" onClick={onOpen}>
                    상세보기
                  </Button>
                  <Button variant="outline" colorScheme="blue" onClick={onOpen}>
                    주문 진행중
                  </Button>
                </ButtonGroup>
              </CardFooter>
            )}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default StoreCard;
