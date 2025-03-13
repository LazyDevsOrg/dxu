"use client";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

function Tatag() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <Box>
      <Box className="w-full">
        <Box className="flex flex-col items-center mt-10 gap-8 ">
          <Typography variant="h4">DELTA XI-UPSILON MEMBERS</Typography>
          <TextField
            className="w-[580] h-[47]"
            label="Type member name or club name"
          ></TextField>
        </Box>
      </Box>
      <Box className="w-full">
        <Box className="flex justify-end mr-65 mb-5">Total Members : 500 </Box>
      </Box>
      <Box className="w-full flex justify-center">
        <Card openModal={handleClick} />
        {showModal && <TatagModal />}
      </Box>
    </Box>
  );
}
export default Tatag;

import TatagModal from "./TataMemberModal";
import { fetchData, label } from "@/app/lib/staticData";

export const Card = ({ openModal }: any) => {
  return (
    <Box className="border-1 border-[#D9D9D9] -mt-0 m-10 h-[720px] w-[1400px] px-15 py-8 grid grid-cols-4 gap-4 cursor-pointer ">
      {fetchData.map((item, key) => (
        <Box
          onClick={openModal}
          key={key}
          className="border-none bg-[#F6F6F6] w-[273px] h-[320px] flex justify-center "
        >
          <Box className="flex flex-col mt-3 gap-4 items-center">
            <Image src={item.logo} alt="logo" width={80} height={80} />
            <Typography>{item.ign}</Typography>
            <Box className="border-1 border-[#D9D9D9] w-full "></Box>
            <Box className="flex gap-4">
              <Box className="flex flex-col gap-3 text-[#939393] ">
                {label.map((item, key) => (
                  <Typography key={key} variant="body2">
                    {item.label}:
                  </Typography>
                ))}
              </Box>
              <Box className="flex flex-col gap-3">
                <Typography variant="body2"> {item.weight}</Typography>
                <Typography variant="body2"> {item.realname}</Typography>
                <Typography variant="body2"> {item.club}</Typography>
                <Typography variant="body2"> {item.technique}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
