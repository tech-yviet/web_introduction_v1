"use client";

import { FC, useEffect } from "react";
import { connect, ConnectedProps, dispatch, RootState } from "@/store";
import { doctorsA } from "@/store/modules/doctors";

const $DoctorsFeature: FC<PropsFromRedux> = () => {
  useEffect(() => {
    dispatch(doctorsA.init());

    return () => {
      dispatch(doctorsA.destroy());
    };
  }, []);

  return <div className="mt-[40px]">DoctorsFeature</div>;
};

interface OwnProps {}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    ...ownProps,
  };
};

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export const DoctorsFeature = connector($DoctorsFeature);
