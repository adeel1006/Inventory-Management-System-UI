import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded(data) {
  // Function to determine number of pages
  const pages = () => {
    let res = 0;
    if (data > 0 && data % 10 === 0) {
      return (res += data / 10);
    }
    if (data > 0 && data % 10 != 0) {
      return (res += parseInt(data / 10) + 1);
    }
  };
  return (
    <Stack spacing={2}>
      <Pagination count={pages()} variant="outlined" shape="rounded" />
    </Stack>
  );
}
