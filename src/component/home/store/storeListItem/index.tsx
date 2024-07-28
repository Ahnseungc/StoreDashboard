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

interface StoreListItemProps {
  store: string;
}

const StoreListItem: FC<StoreListItemProps> = ({ store }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <li>
        <Card>
          <CardBody>
            <Stack>
              <Heading size="md">{store}</Heading>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "0.5rem",
                }}
              >
                <Text>누적 주문 건수에요 </Text>
                <h4>4건</h4>
              </div>
              <div style={{ display: "flex", width: "100%", gap: "0.5rem" }}>
                <Text>주문이 잦은 시간대에요 </Text>
                <h4>17시 ~ 18시</h4>
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
      </li>
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
