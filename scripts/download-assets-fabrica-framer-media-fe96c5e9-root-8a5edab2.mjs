// Downloads the fabrica.framer.media (/) assets that are actually used by
// the clone into public/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2/{images,videos}/
// Favicons are handled separately via src/app/icon.png + src/app/apple-icon.png
// (Next.js App Router file convention), not downloaded by this script.
// Run: node scripts/download-assets-fabrica-framer-media-fe96c5e9-root-8a5edab2.mjs

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = "public/sites/fabrica-framer-media-fe96c5e9/root-8a5edab2";
const IMAGES_DIR = path.join(ROOT, "images");
const VIDEOS_DIR = path.join(ROOT, "videos");

const IMAGES = [
  "https://framerusercontent.com/images/XBirhPxPnqDiGkAtvDrRCiK4pS8.jpg",
  "https://framerusercontent.com/images/2e9rGrOkACVfd78cX0SzqLLw.svg",
  "https://framerusercontent.com/images/uwiCTWkuPCOpiACYPmBnkQDV8KA.svg",
  "https://framerusercontent.com/images/qMtwqqlLyy1I0xtlJx1nQvCqsE.svg",
  "https://framerusercontent.com/images/IjvOxnf94qc0W01TH1Jt44VZRr4.svg",
  "https://framerusercontent.com/images/4HSt1fdOhF6F3PFBgxeUkOsTJiw.svg",
  "https://framerusercontent.com/images/AUrg765bxdJvG09Nkwtoo0n8A.svg",
  "https://framerusercontent.com/images/uesNBJIRG5fZ2tDJzkhxXbuauQw.svg",
  "https://framerusercontent.com/images/TQUaM9GTresksymLH16ncQaPo.jpg",
  "https://framerusercontent.com/images/PyQzA1IF3BF1gkVO1xuZHClY0c.svg",
  "https://framerusercontent.com/images/r3DvXiPExOamPrqqTNfWM1K9o4.jpg",
  "https://framerusercontent.com/images/UPqJOHQLdYtNuK2jee5437Lno.jpg",
  "https://framerusercontent.com/images/HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg",
  "https://framerusercontent.com/images/JLzkuHlsyLa7VHaiV3ZJ16kiHhg.svg",
  "https://framerusercontent.com/images/0KGHRsvK3go8kOWricmADe0VWs.jpg",
  "https://framerusercontent.com/images/zCY9SAfJ5gqVMOvrM5dzywwbU.svg",
  "https://framerusercontent.com/images/qiCYd5j7XEmvyt9BpMldI3mNm8.jpg",
  "https://framerusercontent.com/images/KL17tuoYHz5TzXCqskqaMY5Iw0.jpg",
  "https://framerusercontent.com/images/wk98ext8C9l414fS0PK6BvjTA.svg",
  "https://framerusercontent.com/images/m9cv2Bx2sImOjy4Q3x1Fk5d5WGM.svg",
  "https://framerusercontent.com/images/CtaV2dn3ujpK8zv0Py3i9IJArPQ.svg",
  "https://framerusercontent.com/images/vGSJoy0fkCYvuK5CETUzS64NNo.jpg",
  "https://framerusercontent.com/images/6xxZ3D6rnu26P86nUVvj2eanCY.jpg",
  "https://framerusercontent.com/images/6girwIRKdg1doDEWAHr4oDIbroU.jpg",
  "https://framerusercontent.com/images/DsMKi7qE5JNWO5UQxmeqZGDSOI.jpg",
  "https://framerusercontent.com/images/vrhxHFTuxnCduP4nljUulqZcuQ.jpg",
  "https://framerusercontent.com/images/8qCqC2OsD0HTVtpCDKLzJGcjwUo.jpg",
  "https://framerusercontent.com/images/je5LkQxtlpMk3QwDVyGCYFiOugM.jpg",
  "https://framerusercontent.com/images/lEZwltTi9mwoiWVW7KioGvSAOLk.jpg",
  "https://framerusercontent.com/images/xcjrZRfVBa6b3ruwbNh8aIRdak.jpg",
  "https://framerusercontent.com/images/cWKPopujkJqclchyOL1bYOiZDs.jpg",
  "https://framerusercontent.com/images/mARXSQIQaDhUf6ZRpDnRzU235g.jpg",
  "https://framerusercontent.com/images/aPl6cE0jS1YZHwAFXXw61N1JkQI.jpg",
  "https://framerusercontent.com/images/9EtXT1aFvual1dmNauTJSO1YmE.jpg",
  "https://framerusercontent.com/images/2tiQFkd5S2BAWIEShaSCdLTiY.jpg",
  "https://framerusercontent.com/images/33ZiQHiNM5s1AOYU8Ejc9IMhc84.jpg",
];

const VIDEOS = [
  // Hero / dark-section looped background video (grainy smoke texture)
  "https://framerusercontent.com/assets/G0NwzP4bivPvK55b3ubxNslUs.mp4",
];

async function downloadOne(url, destDir) {
  const filename = decodeURIComponent(url.split("/").pop());
  const dest = path.join(destDir, filename);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${res.status} ${url}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK ${dest} (${buf.length} bytes)`);
}

async function batched(items, worker, concurrency = 4) {
  const queue = [...items];
  async function next() {
    const item = queue.shift();
    if (!item) return;
    await worker(item);
    await next();
  }
  await Promise.all(Array.from({ length: concurrency }, next));
}

async function main() {
  await mkdir(IMAGES_DIR, { recursive: true });
  await mkdir(VIDEOS_DIR, { recursive: true });

  await batched(IMAGES, (url) => downloadOne(url, IMAGES_DIR));
  await batched(VIDEOS, (url) => downloadOne(url, VIDEOS_DIR));

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
