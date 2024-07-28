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
} from "@chakra-ui/react";
import { SidebarNavUl } from "./styles";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();

  return (
    <>
      <Button ref={btnRef} colorScheme="blue" onClick={onOpen}>
        <RxHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>매장 관리</DrawerHeader>

          <DrawerBody>
            <nav>
              <SidebarNavUl>
                <li onClick={() => navigate("/")}>
                  <p>홈</p>
                </li>
                <li onClick={() => navigate("/day")}>
                  <p>일별 관리</p>
                </li>
                <li onClick={() => navigate("/store")}>
                  <p>매장별 관리</p>
                </li>
              </SidebarNavUl>
            </nav>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              닫기
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
