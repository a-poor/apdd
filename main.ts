// Create a key/value store...
const kv = Deno.openKv();

function getPath(url: URL) {
  const parts = url.pathname.split("/");
  
}

const config = {
  host: "localhost",
  port: 8080,
};
Deno.serve(config, (req: Request) => {
  console.log(req);
  const url = new URL(req.url);
  console.log(url);
  return new Response("Hello World\n");
});
