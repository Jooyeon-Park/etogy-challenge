import { Container } from "@mui/material";
import { Typography } from "@mui/material";
export default function ContactUs() {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Contact Us
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        component="p"
      >
        Jooyeon Park
        <br />
        Email: jooyeonpark0131@gmail.com
        <br />
        github: https://github.com/Jooyeon-Park/etogy-challenge
      </Typography>
    </Container>
  );
}
