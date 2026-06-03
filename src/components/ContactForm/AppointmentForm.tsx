import React, { useState } from 'react'
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  Alert,
  FormControl,
  InputLabel,
} from '@mui/material'

const serviceTypes = [
  { value: 'Onderhoud', label: 'Grote / Kleine Beurt' },
  { value: 'Reparatie', label: 'Reparatie' },
  { value: 'DSG', label: 'DSG Service' },
  { value: 'Airco', label: 'Airco Service' },
  { value: 'Diagnose', label: 'Storing / Diagnose' },
  { value: 'Anders', label: 'Anders (In overleg)' },
]

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    licensePlate: '',
    serviceType: 'Onderhoud',
    preferredDate: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      licensePlate: '',
      serviceType: 'Onderhoud',
      preferredDate: '',
      message: '',
    })
  }

  return (
    <Box component="div">
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
        Afspraak Maken
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Bedankt! We hebben uw aanvraag ontvangen en nemen zo snel mogelijk
          contact op.
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Naam"
              name="name"
              required
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Telefoonnummer"
              name="phone"
              type="tel"
              required
              fullWidth
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="E-mailadres"
              name="email"
              type="email"
              required
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Kenteken (Optioneel)"
              name="licensePlate"
              fullWidth
              value={formData.licensePlate}
              onChange={handleChange}
              placeholder="bijv. AB-123-C"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Type Service</InputLabel>
              <Select
                name="serviceType"
                value={formData.serviceType}
                label="Type Service"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    serviceType: e.target.value,
                  }))
                }
              >
                {serviceTypes.map((service) => (
                  <MenuItem key={service.value} value={service.value}>
                    {service.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Voorkeursdatum"
              name="preferredDate"
              type="date"
              required
              fullWidth
              value={formData.preferredDate}
              onChange={handleChange}
              slotProps={{ inputLabel: { shrink: true } }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="Aanvullende opmerkingen of omschrijving van de klacht"
              name="message"
              multiline
              rows={4}
              fullWidth
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 1 }}
            >
              Verzend Aanvraag
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default AppointmentForm
