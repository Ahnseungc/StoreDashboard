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
import DrawerCom from "@component/drawer";
import { StoreListItemHighOrderLayout, StoreListItemLi } from "./styles";

interface StoreListItemProps {
  store: any;
}

const StoreListItem: FC<StoreListItemProps> = ({ store }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <StoreListItemLi>
        <StoreListItemHighOrderLayout>
          <p>높은 주문건수를 기록하고 있어요!</p>
        </StoreListItemHighOrderLayout>
        <StoreListItemHighOrderLayout>
          <p>낮은 주문건수를 기록하고 있어요!</p>
        </StoreListItemHighOrderLayout>
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
                <h4>{store.sum}건</h4>
              </div>
              <div style={{ display: "flex", width: "100%", gap: "0.5rem" }}>
                <Text>주문이 많은 시간대에요 </Text>
                <h4>17시 ~ 18시</h4>
              </div>
              <div style={{ display: "flex", width: "100%", gap: "0.5rem" }}>
                <Text>주문이 많은 플랫폼이에요 </Text>
                <h4>배달의 민족</h4>
              </div>
              <div style={{ display: "flex", width: "100%", gap: "0.5rem" }}>
                <Text>주문이 많은 메뉴에요 </Text>
                <h4>치킨</h4>
              </div>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue" onClick={onOpen}>
                상세보기
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </StoreListItemLi>
      {
        <DrawerCom
          isOpen={isOpen}
          onClose={onClose}
          size="full"
          heading="A매장"
        >
          <p>테스트</p>
        </DrawerCom>
      }
    </>
  );
};

export default StoreListItem;
