import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
      <nav>
        <Link href="/">
            Home
        </Link>
        <Link href="/login">
            Login
        </Link>
      </nav>
    )
  }