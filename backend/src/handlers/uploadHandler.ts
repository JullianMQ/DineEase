import type { Context } from "hono";
import * as fs from "fs";
import * as path from "path";
import { v4 as uuidv4 } from "uuid";
import type { HandlerResult } from "../utils/success.js";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "menu");

// Ensure upload directory exists
if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

export const uploadImage = async (c: Context): Promise<HandlerResult> => {
  try {
    const body = await c.req.parseBody();
    const file = body["image"];

    if (!file || !(file instanceof File)) {
      return {
        status: 400,
        error: { message: "No image file provided" },
      };
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      return {
        status: 400,
        error: {
          message: "Invalid file type. Only JPEG, PNG, and WebP are allowed",
        },
      };
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return {
        status: 400,
        error: { message: "File size too large. Maximum size is 5MB" },
      };
    }

    // Generate unique filename
    const ext = path.extname(file.name);
    const filename = `${uuidv4()}${ext}`;
    const filepath = path.join(UPLOAD_DIR, filename);

    // Save file
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(filepath, buffer);

    // Return path relative to public directory
    const relativePath = `/uploads/menu/${filename}`;

    return {
      status: 201,
      success: { urlImage: relativePath },
    };
  } catch (e) {
    console.error("Error uploading image:", e);
    return {
      status: 500,
      error: { message: "Failed to upload image" },
    };
  }
};
