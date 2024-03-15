/*
 * @Author: hibana2077 hibana2077@gmail.com
 * @Date: 2024-03-15 12:26:43
 * @LastEditors: hibana2077 hibana2077@gmail.com
 * @LastEditTime: 2024-03-15 12:27:27
 * @FilePath: \NTTU_AI_CUP\new_web\src\components\reactcp\UserPopOver.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button, User} from "@nextui-org/react";
import {UserTwitterCard} from "./UserTwitterCard";

export default function UserPopOver() {
  return (
    <Popover showArrow placement="bottom">
      <PopoverTrigger>
        <User   
          as="button"
          name="Zoe Lang"
          description="Product Designer"
          className="transition-transform"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
          }}
        />
      </PopoverTrigger>
      <PopoverContent className="p-1">
        <UserTwitterCard />
      </PopoverContent>
    </Popover>
  );
}
