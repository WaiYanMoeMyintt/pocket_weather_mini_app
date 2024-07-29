"use client";
import React, { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const AuthButton = () => {
  const { user } = useUser();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading spinner
  }

  return (
    <div>
      <Dropdown
        className="dropdown rounded-md shadow-md"
        arrowIcon={false}
        label={
          <button id="dropdownMenuIconButton" type="button">
            {!user ? (
              <Image
                id="dropdownMenuIconButton"
                src="/user.png"
                alt="user"
                width={100}
                height={80}
                className="rounded-full"
              />
            ) : (
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
        {!user ? (
          <Dropdown.Item className="drop_item">
            <SignInButton className="block px-4 py-2 text-white" />
          </Dropdown.Item>
        ) : (
          <>
            <Dropdown.Item className="drop_item">
              <p className="text-slate-300">{user?.fullName}</p>
            </Dropdown.Item>
            <Dropdown.Item className="drop_item">
              <SignOutButton className="block px-4 py-1 rounded-md shadow-md bg-slate-200 w-full text-sm hover:bg-red-500" />
            </Dropdown.Item>
          </>
        )}
      </Dropdown>
    </div>
  );
};

AuthButton.displayName = "AuthButton"; // Add display name

export default AuthButton;
