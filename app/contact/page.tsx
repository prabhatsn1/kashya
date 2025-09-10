"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Paper,
  Card,
  CardContent,
} from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
  Send,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import Button from "../../components/ui/Button";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Email Us",
      description: "hello@kashya.com",
      subtitle: "We reply within 24 hours",
    },
    {
      icon: <Phone sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Call Us",
      description: "+1 (555) 123-4567",
      subtitle: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: <LocationOn sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Visit Us",
      description: "123 Fashion Street",
      subtitle: "New York, NY 10001",
    },
    {
      icon: <AccessTime sx={{ fontSize: 40, color: "primary.main" }} />,
      title: "Business Hours",
      description: "Mon-Fri: 9AM-6PM",
      subtitle: "Sat-Sun: 10AM-4PM",
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h1"
              sx={{ mb: 3, fontSize: { xs: "2rem", md: "3rem" } }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Have a question, suggestion, or just want to say hello? We&#39;d
              love to hear from you!
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Info Cards */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{ mb: 8 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ flex: 1 }}
            >
              <Card sx={{ height: "100%", textAlign: "center", p: 3 }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>{info.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {info.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                    {info.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {info.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Stack>

        {/* Contact Form and FAQ */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
          {/* Contact Form */}
          <Box flex={2}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Paper sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
                  Send us a Message
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Stack>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      variant="outlined"
                    />
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      loading={isSubmitting}
                      startIcon={<Send />}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Stack>
                </Box>
              </Paper>
            </motion.div>
          </Box>

          {/* FAQ Section */}
          <Box flex={1}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Paper sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                  Frequently Asked
                </Typography>

                <Stack spacing={3}>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      How long does shipping take?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Standard shipping takes 3-5 business days. Express
                      shipping is 1-2 days.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      What&#39;s your return policy?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We offer 30-day free returns and exchanges on all items.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      Do you offer international shipping?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Currently we ship within the US and Canada. International
                      shipping coming soon!
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      How do I track my order?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      You&#39;ll receive a tracking email once your order ships.
                      You can also check your account.
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </motion.div>
          </Box>
        </Stack>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, mb: 4, textAlign: "center" }}
            >
              Find Us
            </Typography>
            <Box
              sx={{
                height: 300,
                backgroundColor: "primary.light",
                borderRadius: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" color="text.secondary">
                Interactive Map Placeholder
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactPage;
