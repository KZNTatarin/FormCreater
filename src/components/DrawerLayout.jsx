import { Drawer } from "antd";

import InputsDrawer from "./InputsDrawer";
import TextareaDrawer from "./TextareaDrawer";
import QuestionDrawer from "./QuestionDrawer";

import {useFormStore} from "../store/store";

export default function DrawerLayout() {
  const { open, updateOpen, drawerType } = useFormStore();

  const onClose = () => {
    updateOpen(false)
  };

  const onOpen = () => {
    updateOpen(true);
  };
 
  return (
    <Drawer title="Настройки" onClose={onClose}  open={open}  setOpen={onOpen}>
      {drawerType === 'inputs' ? (
        <InputsDrawer />
      ) : drawerType === 'textarea' ? (
        <TextareaDrawer />
      ) : drawerType === 'questionnaire' ? (
        <QuestionDrawer />
      ) : null}
    </Drawer>
  );
}