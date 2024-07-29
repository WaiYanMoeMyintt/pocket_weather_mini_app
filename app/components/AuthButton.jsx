"use client";
import React from "react";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import { SignInButton, SignIn, SignOutButton, useUser } from "@clerk/nextjs";
const AuthButton = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <Dropdown
      className="dropdown rounded-md shadow-md"
        arrowIcon={false}
        label={
          <button id="dropdownMenuIconButton" type="button">
            {!user && (
              <Image
                id="dropdownMenuIconButton"
                src="/user.png"
                alt="user"
                width={100}
                height={80}
               className="rounded-full"
              />
            )}
            {user && (
              <Image
                id="dropdownMenuIconButton"
                src={user?.imageUrl}
                alt="user"
                width={100}
                height={80}
                className="rounded-full"
              />
            )}
          </button>
        }
      >
        {!user && (
          <Dropdown.Item className="drop_item">
            <SignInButton className="block text-white px-4 py-2 " />
          </Dropdown.Item>
        )}
        

        {user && (
          <Dropdown.Item className="drop_item">
              <p className="text-slate-300">{user?.fullName}</p>
          </Dropdown.Item>
        )}
        {user && (
          <Dropdown.Item className="drop_item">
            <SignOutButton className="block px-4 py-1 rounded-md shadow-md bg-slate-200 w-full text-sm  hover:bg-gray-100" />
          </Dropdown.Item>
        )}
      </Dropdown>
    </div>
  );
};

export default AuthButton;
