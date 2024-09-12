import { VolumeDown, VolumeUp } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  ButtonGroup,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function App() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Container>
      <Box
        sx={{
          display: "grid",
          // auto fit items with min size of 300
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gridTemplateRows: "repeat(auto-fit, minmax(300px, 1fr))",
          border: (theme) => `0.5px dotted ${theme.palette.divider}`,
        }}
      >
        <GridItem>
          <Button>Button</Button>
          <Button variant="contained">Button</Button>
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel>Movie Autocomplete</FormLabel>
            <Autocomplete
              disablePortal
              options={[
                {
                  label: "The Godfather",
                  value: "the-godfather",
                  id: "the-godfather",
                },
                {
                  label: "The Godfather: Part II",
                  value: "the-godfather-part-ii",
                  id: "the-godfather-part-ii",
                },
                {
                  label: "The Godfather: Part III",
                  value: "the-godfather-part-iii",
                  id: "the-godfather-part-iii",
                },
              ]}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} variant="filled" />
              )}
            />
          </FormControl>
        </GridItem>
        <GridItem>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </GridItem>
        <GridItem>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} />
          <Checkbox {...label} disabled />
          <Checkbox {...label} disabled checked />
        </GridItem>
        <GridItem>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </GridItem>
        <GridItem>
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <FormControl>
              <FormLabel>Filled</FormLabel>
              <FilledInput id="filled-basic" />
            </FormControl>
          </Box>
        </GridItem>
        <GridItem>
          <FormControl
            sx={{
              minWidth: 200,
            }}
          >
            <FormLabel id="demo-simple-select-label">Age</FormLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem>
          <Box sx={{ width: 200 }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ alignItems: "center", mb: 1 }}
            >
              <VolumeDown />
              <Slider aria-label="Volume" />
              <VolumeUp />
            </Stack>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
          </Box>
        </GridItem>
        <GridItem>
          <Switch {...label} defaultChecked />
          <Switch {...label} />
          <Switch {...label} disabled defaultChecked />
          <Switch {...label} disabled />
        </GridItem>
        <GridItem>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Typography component="legend">Basic</Typography>
            <Rating name="simple-controlled" />
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" defaultValue={2} readOnly />
            <Typography component="legend">Disabled</Typography>
            <Rating name="disabled" disabled />
          </Box>
        </GridItem>
      </Box>
    </Container>
  );
}

export function GridItem({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        border: (theme) => `0.5px dotted ${theme.palette.divider}`,
      }}
    >
      {children}
    </Box>
  );
}
