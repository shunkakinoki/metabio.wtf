import type { ReactElement } from "react";

import { AppLayout } from "@/components/AppLayout";
import { ProfileEditScreen } from "@/components/ProfileEditScreen";

export const ProfileEdit = (): JSX.Element => {
  return <ProfileEditScreen />;
};

export default ProfileEdit;

ProfileEdit.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
