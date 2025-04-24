"use client";

import { FC } from "react";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA, doctorsS } from "@/store/modules/doctors";
import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";

const $FilterMobileDrawer: FC<PropsFromRedux> = ({ isOpen }) => {
  const handleClose = () => {
    dispatch(doctorsA.closeFilterMobileDrawer());
  };

  return (
    <Drawer.Root open={isOpen} onOpenChange={handleClose} placement="bottom">
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content className="h-[95vh]">
            <Drawer.Header>
              <Drawer.Title>Chọn theo</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

interface OwnProps {}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const isOpen = doctorsS.selectFilterMobileDrawer(state);

  return {
    ...ownProps,
    isOpen,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export const FilterMobileDrawer = connector($FilterMobileDrawer);
