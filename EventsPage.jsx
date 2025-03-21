import { useState } from "react";
import {
  Container,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const EventsPage = () => {
  // Sample Events
  const initialEvents = [
    { id: 1, title: "Charity Fundraiser", date: "2025-03-15", location: "NYC", category: "Charity", description: "Helping underprivileged children." },
    { id: 2, title: "Community Prayer", date: "2025-03-18", location: "Chicago", category: "Religious", description: "Gathering for interfaith prayer." },
    { id: 3, title: "Social Meetup", date: "2025-03-20", location: "LA", category: "Social", description: "Networking and socializing event." },
  ];

  const [events, setEvents] = useState(initialEvents);
  const [filter, setFilter] = useState("");
  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "", category: "", description: "" });

  // Filter Events
  const filteredEvents = filter ? events.filter(event => event.category === filter) : events;

  // Handle Input Change
  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Add New Event
  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date && newEvent.location && newEvent.category && newEvent.description) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setNewEvent({ title: "", date: "", location: "", category: "", description: "" }); // Reset form
    }
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 3, textAlign: "center" }}>
        Event Listings
      </Typography>

      {/* Filter Dropdown */}
      <Select value={filter} onChange={(e) => setFilter(e.target.value)} displayEmpty fullWidth sx={{ my: 2 }}>
        <MenuItem value="">All Categories</MenuItem>
        <MenuItem value="Religious">Religious</MenuItem>
        <MenuItem value="Social">Social</MenuItem>
        <MenuItem value="Charity">Charity</MenuItem>
      </Select>

      {/* Event List */}
      <Grid container spacing={2}>
        {filteredEvents.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Typography variant="body2">📅 {event.date} | 📍 {event.location}</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>{event.description}</Typography>
                <Typography variant="caption" color="primary">{event.category}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add New Event Form */}
      <Typography variant="h5" sx={{ mt: 4 }}>Add New Event</Typography>
      <TextField label="Title" name="title" value={newEvent.title} onChange={handleInputChange} fullWidth sx={{ mt: 2 }} />
      <TextField type="date" name="date" value={newEvent.date} onChange={handleInputChange} fullWidth sx={{ mt: 2 }} />
      <TextField label="Location" name="location" value={newEvent.location} onChange={handleInputChange} fullWidth sx={{ mt: 2 }} />
      <Select name="category" value={newEvent.category} onChange={handleInputChange} displayEmpty fullWidth sx={{ mt: 2 }}>
        <MenuItem value="">Select Category</MenuItem>
        <MenuItem value="Religious">Religious</MenuItem>
        <MenuItem value="Social">Social</MenuItem>
        <MenuItem value="Charity">Charity</MenuItem>
      </Select>
      <TextField label="Description" name="description" value={newEvent.description} onChange={handleInputChange} multiline rows={3} fullWidth sx={{ mt: 2 }} />
      <Button variant="contained" color="primary" onClick={handleAddEvent} sx={{ mt: 2 }}>
        Add Event
      </Button>
    </Container>
  );
};

export default EventsPage;
