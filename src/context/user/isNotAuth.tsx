"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function isNotAuth(Component: any) {
  return function IsAuth(props: any) {
    const auth =
      typeof window !== "undefined" ? !!localStorage.getItem("token") : "";

    const router = useRouter();

    useEffect(() => {
      if (!auth) {
        router.push("/login");
        return;
      }
    }, [auth]);

    if (!auth) {
      return <main className="bg-[#FAFAFA] h-full"></main>;
    }

    return <Component {...props} />;
  };
}
