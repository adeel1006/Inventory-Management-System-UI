import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded(props) {
  // Function to determine number of pages
  const pages = (d) => {
    let res = 0;
    if (d > 0 && d % 10 === 0) {
      return (res += d / 10);
    }
    if (d > 0 && d % 10 != 0) {
      return (res += parseInt(d / 10) + 1);
    }
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pages(props.data)}
        variant="outlined"
        shape="rounded"
        page={props.page}
        onChange={(event, value)=>{
          props.setPage(value)
        }}
      />
    </Stack>
  );
}
