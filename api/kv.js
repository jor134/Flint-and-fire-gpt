// Optional multiplayer adapter.
// Configure KV_REST_API_URL + KV_REST_API_TOKEN in the deployment environment.
// The browser prototype runs fully offline; this endpoint is intentionally kept
// separate so multiplayer transport can be added without changing the simulation.
export default async function handler(req,res){
  if(req.method==="GET") return res.status(200).json({ok:true,service:"flint-fire-kv",message:"KV adapter ready"});
  return res.status(501).json({ok:false,message:"Wire the host-authoritative mailbox/snapshot protocol from §13 of the build specification."});
}