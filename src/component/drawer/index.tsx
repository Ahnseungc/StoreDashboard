import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FC } from "react";
import { useRef } from "react";
import { Outlet } from "react-router-dom";

interface DrawerComProps {
  isOpen: boolean;
  onClose: () => void;
  size: string;
  heading: string;
  children: ReactNode;
}

const DrawerCom: FC<DrawerComProps> = ({
  isOpen,
  onClose,
  size,
  heading,
  children,
}) => {
  const btnRef = useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{heading}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerCom;
