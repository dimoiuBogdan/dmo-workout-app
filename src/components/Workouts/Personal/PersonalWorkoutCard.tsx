import { Menu } from "primereact/menu";
import React, { FC, ReactEventHandler, useRef } from "react";

type exerciseProps = {
  name?: string;
  sets?: number;
};

type PersonalWorkoutCardProps = {
  title?: string;
  performedNumber?: number;
  exercises?: exerciseProps[];
};

const PersonalWorkoutCard: FC<PersonalWorkoutCardProps> = ({
  title,
  exercises,
  performedNumber,
}) => {
  const menuOptions = [
    { label: "Edit", icon: "fa-solid fa-pen-to-square", command: () => {} },
    { label: "Delete", icon: "fa-solid fa-trash", command: () => {} },
  ];

  const menu = useRef<any>(null);

  return (
    <div className="shadow-md border-2 mb-5 px-4 py-2">
      <div className="items-center flex justify-between">
        <div className="text-xl tracking-wide font-medium">{title}</div>
        <i
          aria-controls="popup_menu"
          aria-haspopup
          onClick={(event) => {
            menu?.current?.toggle(event);
          }}
          className="fa-solid fa-ellipsis-vertical text-xl"
        ></i>
        <Menu ref={menu} id="popup_menu" popup model={menuOptions} />
      </div>
      <div className="mb-2 text-zinc-500 font-medium">
        Performed last 14 days : {performedNumber}
      </div>
      <div className="text-zinc-700">
        {exercises?.map((exercise, index) => {
          const { name, sets } = exercise;

          return (
            <div key={index} className="mb-0.5">
              <i className="fa-solid fa-arrow-right text-xs mr-1.5"></i>
              {name} - {sets} sets
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalWorkoutCard;
