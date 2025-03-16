"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";

const Header = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between p-4">
      {user && (
        <h1 className="text-2xl font-bold">
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}

      {/* Breadcrumbs*/}
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Header;
