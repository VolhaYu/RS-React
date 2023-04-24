import express from 'express';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

const html = fs
  .readFileSync(path.resolve(__dirname, './dist/client/index.html'), 'utf8')
  .toString();

const parts = html.split('<!--app-html-->');

const app = express();

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
app.use(async (req, res) => {
  res.write(parts[0]);
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
  const stream = render(req.url, {
    onShellReady() {
      stream.pipe(res);
    },
    onShellError() {
      // do error handling
    },
    onAllReady() {
      // last thing to write
      res.write(parts[1]);
      res.end(process.pid.toString());
    },
    onError(err) {
      console.error(err);
    },
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
