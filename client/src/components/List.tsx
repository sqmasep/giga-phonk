import { Grid } from "@mui/material";
import React from "react";

interface ListProps<T> {
  children: (item: T, i: number, arr: T[]) => React.ReactNode;
  of: T[];
  key?: string;
}

const GridList = <T,>({
  children,
  of,
  key,
  ...props
}: ListProps<T> & Omit<React.ComponentProps<typeof Grid>, "children">) => {
  return (
    <Grid container {...props}>
      {of.map((item, i, arr) => (
        <Grid item sm={12} md={6} lg={4} key={key || i}>
          {children(item, i, arr)}
        </Grid>
      ))}
    </Grid>
  );
};

export default GridList;
