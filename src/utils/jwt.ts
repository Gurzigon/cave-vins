import { sign } from "hono/jwt";


export function generateAccessToken(data: { id: string, }) {
  // Soit on utilise les cookies... mais nous on va plutôt utiliser un token JWT
  return sign(
    {
      // sub => subject => l'utilisateur
      sub: data.id,      
      // iss => issuer => l'émetteur du token
      // J'indique que c'est le service user qui a émis le token
      iss: 'user',
      // exp => expiration => le token expire dans 2 heures
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 2, // 2 heures
    },
    // Les données vont être signées avec la clé secrète
    process.env.JWT_SECRET || 'default_secret'
  )
}