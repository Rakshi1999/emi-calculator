import { Button, Grid, colors } from "@mui/material";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>ll</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>
  );
}

export default App;
