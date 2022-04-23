type RootNavigationParamList = {
  Calendar: undefined;
  MissionRegister: undefined;
};

type RootStackParamList = {
  Main: RootNavigationParamList;
  SelectedDayModal: { day: Date; history: any[] };
  NewMissionModal: undefined;
  AvatarModal: undefined;
};
