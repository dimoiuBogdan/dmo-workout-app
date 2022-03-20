import { Menu } from "primereact/menu";

const PersonalWorkoutCardMenu = () => {
  const menuOptions = [
    { label: "Edit", icon: "fa-solid fa-pen-to-square", command: () => {} },
    { label: "Delete", icon: "fa-solid fa-trash", command: () => {} },
  ];

  return (
    <div>
      <Menu model={menuOptions} />
    </div>
  );
};

export default PersonalWorkoutCardMenu;
