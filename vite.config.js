// doesn't work with async
// additionally should we receive { command,mode } in function as per vite docs?
export default async () => {
	return {
		server: {
			port:3001,
			host: '0.0.0.0'
		}
	}
}
