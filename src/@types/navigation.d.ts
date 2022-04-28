type RootNavigationParamList = {
  Calendar: undefined;
  MissionRegister: undefined;
};

type RootStackParamList = {
  Main: RootNavigationParamList;
  SelectedDayModal: { day: Date; history: THistory };
  NewMissionModal: undefined;
  AvatarModal: undefined;
};
