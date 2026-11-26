// news-image-20261126: copy the day's front-page image to the output dir.
// Node 22, standard library only. No network, no dependencies.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// The copy must be byte-complete and a whole PNG: check the signature,
// the IHDR dimensions (at most 1024 by 1024), the IEND trailer, and
// that the copied file is exactly the same size as the source.
const srcBytes = readFileSync(source);
const dstBytes = readFileSync(target);
if (!dstBytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png is not a PNG: bad signature');
}
const width = dstBytes.readUInt32BE(16);
const height = dstBytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}
const IEND = Buffer.from('IEND');
if (!dstBytes.subarray(dstBytes.length - 12).includes(IEND)) {
  throw new Error('entry.png is truncated: no IEND chunk');
}
if (dstBytes.length !== srcBytes.length || !dstBytes.equals(srcBytes)) {
  throw new Error('entry.png copy is not byte-complete');
}
if (statSync(target).size > 1048576) {
  throw new Error('entry.png is over the 1 MiB limit');
}

console.log(`wrote ${target} (${dstBytes.length} bytes)`);
