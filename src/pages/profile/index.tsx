import type { ReactElement } from "react";

import { AppLayout } from "@/components/AppLayout";
import { ProfileScreen } from "@/components/ProfileScreen";

export const Profile = (): JSX.Element => {
  return <ProfileScreen />;
};

export default Profile;

Profile.getLayout = (page: ReactElement) => {
  return <AppLayout>{page}</AppLayout>;
};
