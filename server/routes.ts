import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body against the contact schema
      const validatedData = contactSchema.parse(req.body);
      
      // Here we would normally save the contact message
      // or send an email with the contact information
      // For this example, we'll just return a success response
      
      res.status(200).json({ 
        success: true, 
        message: 'Message received! Thank you for contacting us.' 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Return validation errors
        res.status(400).json({ 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        });
      } else {
        // Return generic error
        res.status(500).json({ 
          success: false, 
          message: 'Failed to process your message. Please try again later.' 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
