import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navigation Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CommunionHub
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
          <Button color="inherit" onClick={() => navigate("/events")}>Events</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h3" gutterBottom>
          Connecting People Across Faiths & Interests
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Connecting people of all faiths through events and community support.
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={() => navigate("/events")}>
          Explore Events
        </Button>
      </Container>
    </>
  );
};

export default HomePage;
