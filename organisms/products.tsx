"use client";
import useObserver from "@/app/utils/observer";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Foundant from "./foundant";
import PastaGoma from "./pastaGoma";
import PastaFlores from "./pastaFlores";

type Props = {};

export default function Products({}: Props) {
 
  return (
    <>
    <Foundant/>
    <PastaGoma/>
    <PastaFlores/>
    </>
  );
}
