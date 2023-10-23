import satori from "satori";
import sharp from "sharp";
import { Buffer } from "buffer";
import * as fs from "fs";
import type { APIRoute } from "astro";

const imageBase64 = (
  await fs.readFileSync("./public/assets/featuredImage.png")
).toString("base64");

export const get: APIRoute = async function get({ params, request }) {
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          backgroundImage: `url('data:image/png;base64,${imageBase64}')`,
        },
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
