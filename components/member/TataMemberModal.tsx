import { Box, Button, Dialog, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/assets/logo1.png";
import { fetchDataModal, labelModal } from "@/app/lib/staticData";

function TatagModal() {
  const [open, setOpen] = useState(true);
  return (
    <Box
      className="w-auto"
      onClick={() => {
        setOpen(false);
      }}
    >
      <Dialog
        className="flex justify-self-center overflow-hidden  max-h-screen "
        open={open}
      >
        <Box
          className="w-[515px] bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <Box className="flex justify-center -mt-0 m-15 flex-col">
            <Box className="flex flex-col items-center gap-5 mt-5">
              <Typography variant="h4"> Puller Index </Typography>
              <Image src={logo} alt="" height={200} width={200} />
              <Typography>Dranreb</Typography>
            </Box>
            <Box className="border-1 border-[#D9D9D9] w-full mt-5 "></Box>

            <Box className="flex gap-15 ">
              <Box className="flex flex-col gap-5 my-5 text-[#939393]  ">
                {labelModal.map((item, key) => (
                  <Typography key={key} variant="body2">
                    {item.label}:
                  </Typography>
                ))}
              </Box>
              {fetchDataModal.map((item, key) => (
                <Box key={key} className="flex flex-col gap-5 my-5 ">
                  <Typography variant="body2"> {item.weight}</Typography>
                  <Typography variant="body2"> {item.realname}</Typography>
                  <Typography variant="body2"> {item.club}</Typography>
                  <Typography variant="body2"> {item.technique}</Typography>
                  <Typography variant="body2"> {item.status}</Typography>
                  <Typography variant="body2"> {item.gender}</Typography>
                  <Typography variant="body2"> {item.batch}</Typography>
                </Box>
              ))}
            </Box>
            <Box className="border-1 border-[#D9D9D9] w-full  "></Box>
            <Box className="flex flex-col gap-2 my-2">
              <Box className=" text-[#939393]">
                <Typography variant="body2">Puller Milestones</Typography>
              </Box>
              <Typography variant="body2">Right Hand Champion</Typography>
              <Typography variant="body2">Left Hand Champion</Typography>
            </Box>
            <Box className="border-1 border-[#D9D9D9] w-full  "></Box>
            <Box className="flex flex-col gap-2 my-2">
              <Box className="text-[#939393]">
                <Typography variant="body2">Recent Matches</Typography>
              </Box>
              <Typography variant="body2">
                Clubwars 2 | Dranreb vs Devon Larratt
              </Typography>
              <Typography variant="body2">
                Clubwars 1 | Dranreb vs Michael Todd
              </Typography>
            </Box>
            <Box className="flex justify-center mt-3 ">
              <Box
                className="border-1 border-[#D9D9D9] w-40 flex flex-col p-3 items-center cursor-pointer "
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Typography variant="body2">View Matches</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}

export default TatagModal;
