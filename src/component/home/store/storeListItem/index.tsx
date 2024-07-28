import { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Heading,
} from "@chakra-ui/react";

interface StoreListItemProps {
  store: string;
}

const StoreListItem: FC<StoreListItemProps> = ({ store }) => {
  return (
    <li>
      <Card>
        <CardBody>
          <Heading size="md">{store}</Heading>
        </CardBody>
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              상세보기
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </li>
  );
};

export default StoreListItem;
